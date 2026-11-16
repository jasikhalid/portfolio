# Overnight Mission: Redesign jasikhalid.in into a world-class developer portfolio

You are running **unattended for ~6.5 hours**. Nobody will answer questions tonight. Make decisions yourself, write down why, and keep going. The owner will review your work in the morning.

---

## 0. Hard rules (read first, never break)

1. **Stay inside this project folder.** Read and write only files inside the current working directory. Never read, list, or modify anything outside it (no home directory, no other projects, no dotfiles).
2. **Never deploy, never push.** No `git push`, no Vercel/Netlify/GoDaddy commands, no publishing anywhere. Local commits only.
3. **Work on the branch `redesign/v2`.** If you are not on it, create it from the current branch. Commit after every phase with a clear message (`phase-2: design system + tokens`).
4. **Never ask questions or wait for input.** If something is ambiguous, pick the option that best serves the goals below, log it under "Decisions" in `PROGRESS.md`, and continue.
5. **Don't invent facts about Jasi.** Use only content from the existing site and the facts in section 2. No fake metrics, clients, testimonials, awards, or years of experience. Where content is missing, write a tasteful placeholder marked `TODO(jasi):` and list it in the final report.
6. **Don't clone anyone's site.** Reference sites are for studying patterns, pacing, and craft. The final design must be original.
7. **Keep caches inside the project.** npm cache and Playwright browsers must live in the project (env vars are preset; also add `.npm-cache/` and Playwright folders to `.gitignore`).
8. **Use the clock.** Run `date` at the start and record the start time in `PROGRESS.md`. Check `date` at the start of every phase. Do not end the session early while there are polish items left and time remains (target total: 6–6.5 hours). If everything is done early, go back to section 8 and keep raising quality.

---

## 1. Use your skills

Before writing any code, list the skills and plugins available to you and **load every one relevant to this work**, especially any frontend/design skill (for example `frontend-design`), plus anything for testing, performance, accessibility, or code review. Follow their guidance throughout. Note in `PROGRESS.md` which skills you loaded and how they shaped decisions.

Use subagents where it helps (for example: one researches reference sites while another audits the current codebase), but keep one coherent design direction.

---

## 2. Who this site is for

- **Owner:** Muhammed Jasi (goes by **Jasi Khalid**)
- **Role:** Odoo & ERPNext developer (Python). Junior Odoo Developer at Codex Business Solutions, Kerala, India. Takes freelance work. Loves prompt engineering and building with AI.
- **Background (from his CV, use only if not contradicted by the existing site):** CS degree; Odoo Python Development Training at Cybrosys Technologies; internships doing Django/React full-stack work.
- **Strongest projects to feature:** Vehicle Repair Management System (Odoo 17: Fleet/Stock/Website, custom wizards, QWeb reports, security rules, payment gateway, WhatsApp/SMS API) and a Real-time Accounting Dashboard (OWL + Chart.js, live `account.move` data, KPI cards, date filters). Other projects: use whatever the existing site already lists.
- **Links:** GitHub `jasikhalid`; reuse email, LinkedIn, and any other contact details exactly as they appear on the existing site.
- **Audience:** (1) companies hiring Odoo/ERPNext developers, (2) businesses looking for a freelance ERP developer, (3) other developers.
- **The one feeling to leave:** "This person builds serious business software *and* has real taste and craft." Not a generic "vibe-coded" template. The current site looks generic; that's the problem to solve.

---

## 3. Goals, ranked

1. **Fast.** Feels instant on a mid-range phone on 4G.
2. **Stunning UI.** Distinctive art direction, excellent typography, strong hierarchy, generous spacing. Award-site quality.
3. **Great motion.** Purposeful, smooth (60fps), never blocking content.
4. **3D (nice to have).** One memorable 3D moment, never at the cost of goal 1.
5. **Mobile-first and accessible.**

When goals conflict, the higher one wins.

---

## 4. Tech constraints

- Keep the existing stack: **Next.js (App Router) + TypeScript + Tailwind CSS.** Upgrade versions only if low-risk; record it.
- **Keep the existing Formspree contact form endpoint working** (find it in the current code; don't change the endpoint). Add client-side validation, loading, success, and error states.
- Recommended libraries (choose what's justified, record why): `motion` (Framer Motion) for UI transitions; GSAP + ScrollTrigger for scroll choreography if needed; Lenis for smooth scrolling (must respect reduced motion); React Three Fiber + drei for 3D.
- Fonts via `next/font` (self-hosted, `display: swap`, subset). Max 2 families.
- Images via `next/image`, AVIF/WebP, explicit sizes.
- Prefer Server Components; ship client JS only where interaction requires it.

---

## 5. Performance budgets (must meet, measure, and report)

- Lighthouse **mobile**: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO 100.
- LCP < 2.0s, CLS < 0.05, INP/TBT minimal.
- Home route initial JS ≤ ~170 KB gzipped, **excluding** the lazily loaded 3D chunk.
- 3D rules: load with `next/dynamic` (`ssr: false`) only after the page is interactive and the canvas is near the viewport; cap device pixel ratio (max 1.5–2); pause rendering when off-screen or the tab is hidden; on low-power/mobile or `prefers-reduced-motion`, show a lightweight static/CSS fallback instead.
- No layout shift from fonts, images, or animations.

---

## 6. Phases and time budget

Log each phase in `PROGRESS.md` with start/end time, what you did, and decisions. Commit at the end of each phase.

### Phase 1 — Audit & baseline (~20 min)
- Read the whole codebase. Inventory all content (text, projects, links, images) into `CONTENT.md` so nothing is lost.
- Install deps, run the build, fix anything broken.
- Record baseline: build output sizes and a Lighthouse mobile run if possible (see section 7).

### Phase 2 — Research (~40 min) → `RESEARCH.md`
- Use web search to study **12–15 highly rated sites**: Awwwards (Site of the Day / Developer award winners, portfolio category), godly.website, siteinspire, Codrops demos, and well-known developer portfolios (including 3D ones). Prefer recent work.
- For each: URL, what makes it great (layout, type, motion, interaction, 3D use), what it does badly (speed, accessibility), and one idea worth adapting *in spirit*.
- Finish with a synthesis: 5–8 principles you will apply.

### Phase 3 — Concept & design system (~40 min) → `DESIGN.md`
- Propose **3 distinct art-direction concepts** in writing (name, mood, palette, type pairing, layout idea, signature motion, signature 3D moment). Pick one and explain why it fits an ERP/business-software developer who loves prompting. Ideas you may use or beat: modular "ERP modules" that assemble into a system; a data/ledger aesthetic; a terminal/prompt motif that shows his prompting craft; a ⌘K command palette for navigation.
- Define tokens in Tailwind/CSS variables: color (light and dark, both WCAG AA), type scale, spacing, radii, shadows, motion durations and easings.

### Phase 4 — Build the site (~2 h)
Suggested structure (adjust if research says otherwise):
- **Hero:** name, role, one sharp line of value, primary CTA (hire / contact) and secondary (projects). LCP element must be text or an optimized image, never the 3D canvas.
- **About:** short, human, specific.
- **Skills/Stack:** Odoo (ORM, OWL, QWeb, security, wizards), ERPNext/Frappe, Python, PostgreSQL, Django, React/Next.js, AI/prompting. Visual, not a logo soup.
- **Featured projects:** case-study cards (problem → what he built → tech → outcome without invented numbers). Detail pages or expandable panels for the top 2.
- **Experience timeline.**
- **"Prompting" section** (something memorable that shows he thinks clearly with AI).
- **Contact:** Formspree form + direct links.
- **Footer.**
- Also: custom 404, favicon set, metadata, Open Graph image, `sitemap.xml`, `robots.txt`, JSON-LD `Person` schema.

### Phase 5 — Motion & 3D (~1.5 h)
- Page-load sequence (short, under ~1.2s total, content readable immediately), scroll-reveal choreography, hover/magnetic micro-interactions, smooth section transitions.
- Animate only `transform` and `opacity`. No animation may delay reading the content.
- Build the single signature 3D moment per section 5's rules.
- Full `prefers-reduced-motion` support: disable smooth scroll, parallax, and 3D motion; keep simple fades.

### Phase 6 — QA, performance, accessibility (~1 h)
- Run section 7 checks. Fix until budgets in section 5 pass.
- Keyboard-only walkthrough (visible focus states, skip link, logical order), semantic headings, alt text, form labels, color contrast.
- Visual review at 375px, 768px, 1280px, 1440px in light and dark. Look at your screenshots critically and fix spacing, alignment, overflow, and anything that looks templated.

### Phase 7 — Polish loop (all remaining time)
Repeat until about 15 minutes remain: screenshot → critique like an Awwwards juror → pick the 3 weakest things → fix → re-measure → commit. Then do Phase 8.

### Phase 8 — Final report (~15 min) → `REPORT.md`
- What changed and why (concept summary).
- Before vs after: Lighthouse scores and bundle sizes.
- Screenshot file paths (save to `docs/screenshots/`).
- Every `TODO(jasi):` item he needs to fill in.
- Known issues and suggested next steps.
- Exact commands to run and review it locally (`npm install`, `npm run dev`).
- Make sure `npm run build` passes on the final commit.

---

## 7. How to verify (inside this folder only)

- `npm run build` must pass with zero type errors and zero lint errors.
- Install `@playwright/test` as a devDependency and its Chromium browser (it will install into the project because `PLAYWRIGHT_BROWSERS_PATH=0`). Write a small script that starts the production server (`npm run build && npm start` on a local port), takes full-page screenshots at the 4 widths in both color schemes, and checks for console errors.
- Run Lighthouse via `npx lighthouse` against the local production server using Playwright's Chromium (`CHROME_PATH`) with mobile emulation. If Lighthouse can't run, measure with Playwright's performance APIs and `next build` output instead, and say so in the report.
- If a tool is blocked by the sandbox, don't try to work around it. Use another approach and note it.

---

## 8. Quality bar checklist (use in the polish loop)

- [ ] Would this stand out on Awwwards' developer category? Is there one moment people remember?
- [ ] Typography: clear scale, good line lengths (60–75ch), no orphaned headings.
- [ ] Every section has a purpose; nothing feels like filler.
- [ ] Motion feels intentional and consistent (same easing family, consistent durations).
- [ ] 3D loads late, runs smoothly, has a graceful fallback.
- [ ] Mobile looks designed, not squeezed.
- [ ] All budgets in section 5 met and measured.
- [ ] Contact form works end to end (states handled).
- [ ] No placeholder lorem ipsum; only marked `TODO(jasi):` items.
- [ ] Code is clean: components organized, no dead code, no console logs, types strict.

Start now: run `date`, create `PROGRESS.md`, load your skills, then begin Phase 1.
