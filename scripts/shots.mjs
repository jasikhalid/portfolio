// Full-page screenshots at 4 widths x 2 colour schemes, plus a console-error check.
// Usage: node scripts/shots.mjs [baseUrl] [outDir]   (server must already be running)
import { chromium } from "@playwright/test";

const base = process.argv[2] ?? "http://localhost:3123";
const out = process.argv[3] ?? "docs/screenshots";
const widths = [375, 768, 1280, 1440];
const schemes = ["light", "dark"];
const paths = (process.env.PATHS ?? "/").split(",");

const browser = await chromium.launch();
const errors = [];
for (const path of paths) {
  for (const scheme of schemes) {
    for (const width of widths) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme, reducedMotion: process.env.REDUCED ? "reduce" : "no-preference" });
      page.on("console", (m) => m.type() === "error" && errors.push(`${path} ${scheme} ${width}: ${m.text()}`));
      page.on("pageerror", (e) => errors.push(`${path} ${scheme} ${width}: ${e.message}`));
      await page.goto(base + path, { waitUntil: "networkidle" });
      // Scroll through so scroll-driven reveals and lazy content settle.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(1500);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (overflow) errors.push(`${path} ${scheme} ${width}: horizontal overflow`);
      const name = `${out}/${path === "/" ? "home" : path.replace(/\W+/g, "")}-${width}-${scheme}.png`;
      await page.screenshot({ path: name, fullPage: true });
      await page.close();
    }
  }
}
await browser.close();
console.log(errors.length ? `ISSUES:\n${errors.join("\n")}` : "No console errors, no horizontal overflow.");
