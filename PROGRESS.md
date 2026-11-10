# Redesign progress log

**Session start:** Wed 11 Nov 2026, 00:31 IST
**Branch:** `redesign-v2` (see Decisions)

## Skills loaded
- `ui-ux-pro-max`: loaded. Its search script is unreadable inside the sandbox, so only its priority rules table was used (contrast 4.5:1, 44px targets, reserve space for CLS, transform/opacity-only motion, reduced-motion, visible labels with inline errors).
- `design:accessibility-review`: to be loaded in Phase 6 for the WCAG 2.1 AA pass.
- `karpathy-guidelines` / `ponytail` spirit: keep changes surgical, no dead code, smallest dependency set.
- Not loaded: `hallmark` (its own rules say not to use it on an existing design unless named), `frontend-design` (not installed in this environment).

## Phase 1: Audit and baseline (00:31 – 00:50)
- Read the whole codebase. Content is already centralised in `content/site.ts` (typed). Inventory written to `CONTENT.md`.
- `npm run build` passes. Baseline home route: **110 kB First Load JS** (Next's figure), **109.3 kB gzip** of module scripts actually loaded (`scripts/js-size.mjs`), CSS 6.2 kB gzip, HTML 27.6 kB gzip.
- Installed `@playwright/test` and `lighthouse` as devDependencies; Playwright's headless Chromium downloaded into `node_modules/playwright-core/.local-browsers` (the full Chrome build download was refused by the CDN; the headless shell worked).
- **Blocked:** Chromium cannot launch inside this session's macOS sandbox (`bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer: Permission denied`). Per the brief, no workaround was attempted. Consequence: no screenshots and no Lighthouse from inside the session. `scripts/shots.mjs` and `scripts/lighthouse.sh` are ready to run outside the sandbox. Performance is measured with `next build` output and `scripts/js-size.mjs` instead.
- The sandbox also blocks `kill`, so a `next start` on port 3123 started for the baseline attempt could not be stopped from inside the session.

## Decisions
- **Branch name `redesign-v2`, not `redesign/v2`.** Git cannot create `redesign/v2` while a branch called `redesign` exists. The owner chose `redesign-v2` before the run.
- **Odoo version for Vehicle Repair:** the brief says Odoo 17, the existing site says Odoo 19. Kept Odoo 19 (existing site wins per brief section 2) and added a `TODO(jasi)` to confirm.
- **Measurement without a browser:** see the Phase 1 blocker above.

## Phase 2: Research (00:39 – 00:41, background agent)
- A subagent studied 13 sites (Awwwards, Codrops, known developer portfolios) and wrote `RESEARCH.md`. Codrops blocked direct fetches, so some entries rely on search excerpts and are marked that way. Its synthesis (ledger/blueprint art direction, one lazy 3D moment, CSS-first motion, live ERP UI sketches) matched and confirmed the chosen concept.

## Phase 3: Concept and design system (00:36 – 00:40)
- Three concepts in `DESIGN.md`. Chose "System of Record" (ledger), taking the ⌘K palette from the terminal concept and the assembled-modules 3D idea from the isometric concept.
- Tokens: colour (all pairs checked for AA with a script), fluid type scale, spacing, radii, motion durations and easings.

## Phase 4: Build (00:41 – 01:04)
- Rewrote every section; content stays in `content/site.ts` (added skill codes and evidence, prompting copy, module list, headline line breaks, nav codes).
- New: `/work/[slug]` case pages, `CommandPalette` (also the mobile menu), `ModuleStack` SVG, `PromptCompare` tabs, 404, OG image, favicon, sitemap entries.
- **Blocker found and fixed:** `next/font/google` hung the build because Node can't reach Google Fonts through the sandbox proxy. Switched to the `geist` npm package (same fonts, `next/font/local`, no build-time network).

## Phase 5: Motion and 3D (01:04 – 01:06)
- Load sequence ≤ 1.2s, transform/opacity only; scroll-driven reveals and rule draws; magnetic CTAs; mockups animate on scroll.
- three.js scene: flat unlit faces matching the SVG, DPR ≤ 1.75, renders on demand, pauses off-screen and when the tab is hidden, rethemes live. Loaded with `next/dynamic` (`ssr: false`) only on desktop with a fine pointer, ≥ 4 cores, no Save-Data, WebGL2 and no reduced motion, after `load` + idle.

## Phase 6: QA (01:06 – 01:08)
- Loaded `design:accessibility-review` and audited the code. Fixed: 3:1 input borders (1.4.11), "all fields required" note (3.3.2), finite blink/pulse animations (2.2.2). Heading order, landmarks, labels, focus-visible, dialog focus handling and tab keyboard support checked.
- All routes return the right status codes on the production server. Sitemap, robots, OG and résumé all served.
- Removed two copy lines that overclaimed (a reply-time promise and "what's running now").

## Phase 7: Polish (01:08 – 01:15)
- The OG image now uses Geist. Deleted dead `MobileNav.tsx`. Tagged remaining TODOs as `TODO(jasi)`.
- Fixed the hero headline: it now spans the full width (it would have wrapped badly at 1024px in a 7-column box) and its minimum size fits 375px.

## Phase 8: Report
- `REPORT.md` written. Final build, lint and typecheck pass. The session ended at about 01:15, well short of the 6.5-hour target. The reason is in REPORT.md.

## More decisions
- No Framer Motion, GSAP or Lenis (see DESIGN.md): saves client JS, native scrolling.
- three.js directly instead of React Three Fiber + drei, for one scene.
- Case-file order kept as on the existing site (Garment ERP first: newest and largest scope), although the brief names Vehicle Repair and the Dashboard as strongest. All three get detail pages.
- Next.js not upgraded: the audit fix needs a new major, which isn't low-risk.
