const sourceUrl = "https://raw.githubusercontent.com/StellaTC/fishingidlesim/04521fa0f4061fad3cb0f9c6ca0cd1484f7a9b12/app.js.gz.b64";
const patchBase64 = "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";
const decodeGzipText = async (base64) => {
  const bytes = Uint8Array.from(atob(base64.replace(/\s+/g, "")), (char) => char.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
};
const response = await fetch(sourceUrl, { cache: "no-store" });
if (!response.ok) throw new Error(`Failed to load simulator bundle: ${response.status}`);
let source = await decodeGzipText(await response.text());
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
