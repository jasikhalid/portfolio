#!/usr/bin/env bash
# Lighthouse mobile run against a running production server, using Playwright's headless Chromium.
# Usage: scripts/lighthouse.sh [url] [out.json]
set -euo pipefail
URL="${1:-http://localhost:3123/}"
OUT="${2:-logs/lighthouse.json}"
mkdir -p "$(dirname "$OUT")"
export CHROME_PATH="$(ls -d "$PWD"/node_modules/playwright-core/.local-browsers/chromium_headless_shell-*/chrome-headless-shell-*/chrome-headless-shell | head -1)"
npx lighthouse "$URL" --quiet --output=json --output-path="$OUT" --form-factor=mobile \
  --chrome-flags="--headless=new --no-sandbox --user-data-dir=$TMPDIR/lh-profile" >/dev/null 2>&1 || true
node -e '
const r = require(process.argv[1]);
const c = r.categories, a = r.audits;
const s = (k) => Math.round(c[k].score * 100);
console.log(`Perf ${s("performance")} | A11y ${s("accessibility")} | BP ${s("best-practices")} | SEO ${s("seo")}`);
console.log(`LCP ${a["largest-contentful-paint"].displayValue} | CLS ${a["cumulative-layout-shift"].displayValue} | TBT ${a["total-blocking-time"].displayValue} | FCP ${a["first-contentful-paint"].displayValue}`);
for (const [k, v] of Object.entries(a)) if (v.score !== null && v.score < 0.9 && v.scoreDisplayMode !== "informative" && v.scoreDisplayMode !== "manual") console.log(`  - ${k}: ${v.title} (${v.displayValue ?? v.score})`);
' "$PWD/$OUT"
