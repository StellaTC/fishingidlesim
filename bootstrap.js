const response = await fetch("./app.js.gz.b64");
if (!response.ok) throw new Error(`Failed to load simulator bundle: ${response.status}`);
const base64 = (await response.text()).replace(/\s+/g, "");
const compressed = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("gzip"));
const source = await new Response(stream).text();
const moduleUrl = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
await import(moduleUrl);
URL.revokeObjectURL(moduleUrl);
