const sourceUrl = "https://raw.githubusercontent.com/StellaTC/fishingidlesim/04521fa0f4061fad3cb0f9c6ca0cd1484f7a9b12/app.js.gz.b64";
const patchFiles = [
  "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak",
].map((name) => `./patches/v36-current-${name}.txt`);
const decodeGzipText = async (base64) => {
  const bytes = Uint8Array.from(atob(base64.replace(/\s+/g, "")), (char) => char.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
};
const fetchText = async (url) => {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load ${url}: ${response.status}`);
  return response.text();
};
let source = await decodeGzipText(await fetchText(sourceUrl));
const patchBase64 = (await Promise.all(patchFiles.map(fetchText))).join("");
const patch = JSON.parse(await decodeGzipText(patchBase64));
let rebuilt = "";
let cursor = 0;
for (const [start, end, insert] of patch) {
  rebuilt += source.slice(cursor, start) + insert;
  cursor = end;
}
source = rebuilt + source.slice(cursor);
const moduleUrl = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
await import(moduleUrl);
URL.revokeObjectURL(moduleUrl);
