// Gzipped size of the JS the home route loads on first paint (from the built HTML), since Lighthouse can't run here.
import { readFileSync, existsSync } from "node:fs";
import { gzipSync } from "node:zlib";
const html = readFileSync(".next/server/app/index.html", "utf8");
const srcs = [...new Set([...html.matchAll(/<script(?![^>]*noModule)[^>]*src="(\/_next\/static\/[^"]+\.js)"/g)].map((m) => m[1]))];
let total = 0;
for (const src of srcs) {
  const file = ".next" + src.replace("/_next", "");
  if (!existsSync(file)) continue;
  const gz = gzipSync(readFileSync(file)).length;
  total += gz;
  console.log(`${(gz / 1024).toFixed(1).padStart(7)} kB  ${src.split("/").pop()}`);
}
const css = [...html.matchAll(/href="(\/_next\/static\/[^"]+\.css)"/g)].map((m) => ".next" + m[1].replace("/_next", ""));
const cssGz = css.reduce((n, f) => n + gzipSync(readFileSync(f)).length, 0);
console.log(`JS total (gzip): ${(total / 1024).toFixed(1)} kB  |  CSS (gzip): ${(cssGz / 1024).toFixed(1)} kB  |  HTML (gzip): ${(gzipSync(html).length / 1024).toFixed(1)} kB`);
