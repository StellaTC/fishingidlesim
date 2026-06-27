const bundleUrl = "./app.js.gz.b64";

const fetchText = async (url) => {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`);
  }
  return response.text();
};

const decodeGzipText = async (base64) => {
  if (!("DecompressionStream" in globalThis)) {
    throw new Error("This browser does not support DecompressionStream.");
  }
  const bytes = Uint8Array.from(atob(base64.replace(/\s+/g, "")), (char) => char.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
};

const source = await decodeGzipText(await fetchText(bundleUrl));
const moduleUrl = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
try {
  await import(moduleUrl);
} finally {
  URL.revokeObjectURL(moduleUrl);
}
