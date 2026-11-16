# Redesign report: jasikhalid.in v2

Branch `redesign-v2`, local commits only. Nothing was pushed or deployed.

## Concept: "System of Record"
The old site was a pleasant bento grid in plum and pastel. It read as a template. The new site treats the portfolio as a ledger, because Jasi's work is the system of record that businesses run on.

- **Ledger art direction.** Warm paper, ink, hairline rules and one vermillion "stamp" colour. Each section is an account with a code: 100 Work, 200 Stack, 300 Experience, 400 Prompting, 500 About, 600 Contact. Records use the label/value layout of an Odoo form.
- **Type.** Geist for words and Geist Mono for codes, dates and field labels, both self-hosted. Big, tight display headline.
- **Signature moment.** "Fig. 1" in the hero shows the modules he builds on (Fleet, Sales, Stock, Manufacturing, Accounting) as an exploded isometric stack:
  - Every visitor first sees a zero-JS SVG. The slabs drop into place on load.
  - On capable desktops, a three.js scene replaces it after the page is idle. The slabs assemble and tilt with the pointer.
- **⌘K command palette.** It jumps to sections and case files, copies the email address, opens links and switches the theme. It is also the mobile menu, so there is one accessible nav component.
- **Case-file pages** at `/work/[slug]` for all three projects: problem, what was built, technical decisions, result, stack, and links to the next case and to contact.
- **Stack as a chart of accounts.** Each capability links to the case file where it was used, instead of a logo wall.
- **Experience as journal entries,** grouped by career stage. The Odoo-style statusbar from the old site is kept as the career rail.
- **Prompting section.** An interactive comparison of a one-liner and a structured brief for an Odoo task (see the TODOs).
- **Also new:** a custom 404 ("No record matches this reference"), a new favicon, a ledger-style Open Graph image set in Geist, case pages in the sitemap, the JSON-LD `Person` schema, and light/dark themes that follow the system with an override.

The reasoning is in `DESIGN.md` (three concepts, choice, tokens) and `RESEARCH.md` (13 reference sites and 7 principles).

## Before vs after

| | Before (a498406) | After |
|---|---|---|
| Home First Load JS (Next) | 110 kB | 118 kB |
| Home JS actually loaded, gzip (`scripts/js-size.mjs`) | 109.3 kB | 121.9 kB |
| Lazy 3D chunks, gzip (desktop only, after idle) | — | ~132 kB |
| CSS, gzip | 6.2 kB | 6.6 kB |
| Home HTML, gzip | 27.6 kB | 25.0 kB |
| Routes | 1 page | home + 3 case files + 404 |
| Lighthouse (mobile) | not measured | not measured, see below |

The budget is ≤ ~170 kB initial JS excluding 3D. The result is 121.9 kB. The only new client JS is the command palette, the prompt tabs, the magnetic buttons and the 3D loader. No animation library is shipped; all motion is CSS (scroll-driven where supported) and uses only transform and opacity.

### Why there is no Lighthouse score or page screenshot
Chromium can't start inside this session's macOS sandbox (`bootstrap_check_in … Permission denied`). The brief says not to work around the sandbox, so I didn't. I measured with `next build` output and gzip sizes instead, and checked every route's status code against the production server.

The scripts are ready to run on your machine:
```bash
npm run build && npx next start -p 3123 &
node scripts/shots.mjs http://localhost:3123 docs/screenshots     # 4 widths × light/dark + console/overflow check
scripts/lighthouse.sh http://localhost:3123/ logs/lighthouse.json   # mobile Lighthouse with Playwright's Chromium
```

### Images in `docs/screenshots/`
- `og-image.png`: the generated Open Graph card.
- `hero-figure-svg-light.png`, `hero-figure-svg-dark.png`: the hero figure, rasterised outside a browser. The labels are missing only because that renderer had no fonts.

## TODO(jasi): things only you can fill in
1. **Odoo version** for Vehicle Repair. The brief says 17 and the site says 19 (`content/site.ts`, `vehicle-repair`).
2. **Codex role:** your start month and a one-line summary (`content/site.ts`, first `experience` entry).
3. **Photo.** Add one to `/public` and set `site.photo`. It appears in the About section.
4. **Prompting section.** The brief shown is an example I wrote from the Vehicle Repair description, and the title, intro and three takeaways are in your voice but are my wording. Replace them with a prompt you have really used (`content/site.ts`, `prompting`).
5. **Case-file text.** "Problem", "decisions" and "result" were drafted from résumé bullets before this redesign (existing DRAFT note). Rewrite them in your own words, and add a GitHub link field if any code is public.
6. **About text.** Also marked DRAFT in the existing content.
7. **Next.js** was added to "Build the screens" because the brief lists it. Remove it if you don't want to claim it.
8. **Mockup identifiers** (RO/0042, GD-0117, the date range) are decorative and labelled "Not real data". Swap in anything you prefer.

## Known issues and next steps
- **Visual QA hasn't happened.** It's the most important next step: run `scripts/shots.mjs`, look at 375/768/1280/1440 in both themes, and fix spacing. I reviewed the layout in code only. One real bug was caught that way (the hero headline wrapping at 1024px) and fixed.
- **Run Lighthouse** and check LCP. The LCP element is the h1 text, which animates by transform only so it paints on the first frame.
- **Security advisories.** `npm audit --omit=dev` flags `next` (critical), `postcss`, `sharp` and `source-map-js`. The fix moves Next to a new major, which isn't low-risk, so I didn't apply it. Do it as its own change and test.
- **Firefox** doesn't support scroll-driven animations yet. Content there is simply shown without reveals, which is by design.
- **Session time.** The brief allowed ~6.5 hours. This session took about 40 minutes of wall-clock time. Without a browser there was no screenshot → critique → fix loop to spend the extra time on, and more blind changes would add risk instead of quality. A polish session after viewing real screenshots will do more good.
- **Two stray servers.** `next start` processes from this session are still on ports 3123 and 3124, because the sandbox blocked `kill`. Stop them with `lsof -ti:3123,3124 | xargs kill`.
- `.npm-cache/`, `logs/` and Playwright output are git-ignored. The Chromium headless shell lives in `node_modules/playwright-core/.local-browsers`.

## Review it locally
```bash
git checkout redesign-v2
npm install
npm run dev          # http://localhost:3000
# production check
npm run build && npm start
```
`npm run build` passes on the final commit with zero type errors and zero lint errors.
