const chunkFiles = ["./chunks/app.000.txt","./chunks/app.001.txt","./chunks/app.002.txt","./chunks/app.003.txt","./chunks/app.004.txt","./chunks/app.005.txt","./chunks/app.006.txt","./chunks/app.007.txt","./chunks/app.008.txt","./chunks/app.009.txt","./chunks/app.010.txt","./chunks/app.011.txt","./chunks/app.012.txt"];
const source = (await Promise.all(chunkFiles.map(async (file) => {
  const response = await fetch(file);
  if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
  return response.text();
}))).join("");
const moduleUrl = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
await import(moduleUrl);
URL.revokeObjectURL(moduleUrl);
