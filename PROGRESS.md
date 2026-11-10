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
