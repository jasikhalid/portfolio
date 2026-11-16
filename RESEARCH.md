# Portfolio Redesign Research

Research date: November 2026. 13 sites, all found through web search. Many Codrops pages returned HTTP 403 when fetched, so some notes rely on search excerpts and say so. I did not run Lighthouse or screen readers on any site. Every "weak spot" is marked **(inference)** unless a source states it.

---

## 3D and WebGL-heavy

### 1. Bruno Simon (2025/26 folio)
- **URL:** https://bruno-simon.com (listed on siteinspire; Awwwards case study: https://www.awwwards.com/brunos-portfolio-case-study.html; code: github.com/brunosimon/folio-2025)
- **Great:** You drive a car around a physics island that has weather, a day-night cycle and seasons. Projects appear as 3D objects in the world. Per the case study, it uses instancing, frustum culling, DRACO meshes, KTX-style compressed textures, a shared palette texture, WebGPU when the browser supports it, and an automatic low-quality preset on mobile.
- **Weak:** The case study says the UI is built in 3D to avoid HTML UI, and it says nothing about screen readers. A hiring manager in a hurry has to play before they can read anything **(inference)**.
- **Adapt:** Use one shared palette texture plus instancing as the default for any 3D, and detect mobile so it gets a lighter preset automatically.

### 2. Stas Bondar '25
- **URL:** https://stabondar.com (Awwwards SOTD, Feb 2025)
- **Great:** The bio text is physics-driven with Matter.js, and the letters respond to scroll momentum. Thumbnails stretch with scroll speed and then settle. Awards sit in a cube built with CSS 3D (not WebGL) that opens into a list. Built with Astro, GSAP, Three.js, Barba and Lenis.
- **Weak:** A fluid simulation runs under the entire site and costs GPU time on every page **(inference)**. The author calls cross-device smoothness a "key challenge" but publishes no numbers.
- **Adapt:** Do the "3D" element in CSS 3D transforms rather than WebGL. You get depth for almost no bundle cost.

### 3. Phantom.land
- **URL:** https://phantom.land (Awwwards Portfolio SOTD, June 18, 2025; Codrops making-of, June 30, 2025)
- **Great:** The homepage is an interactive grid with shader distortion whose strength rises and falls during transitions, so moving between states feels physical. There is also a 3D face particle system. Built with React Three Fiber, GLSL and GSAP.
- **Weak:** R3F plus particles on the first screen means a heavy first load on mid-range Android **(inference)**.
- **Adapt:** Tie distortion strength to the transition's progress, not to a constant. Effects then show only while something is moving.

### 4. Corentin Bernadou (2026 rebuild)
- **URL:** https://corentinbernadou.com (Codrops, Mar 5, 2026)
- **Great:** A Swiss editorial grid, a strict orange, white and black palette, Three.js and GLSL geometry, and Figma-style interactive rulers. Vanilla JS with GSAP and Lenis.
- **Weak:** Lenis smooth scroll can feel wrong to keyboard and assistive-tech users if it is not handled carefully **(inference)**.
- **Adapt:** Borrow a three-colour limit and a visible "construction" layer (rulers and grid lines). That suits someone who builds structured business systems.

### 5. "Sketching the Impossible" (Tomasz Szmajda)
- **URL:** https://tympanus.net/codrops/2026/06/11/sketching-the-impossible-a-3d-portfolio-built-without-a-single-3d-model/
- **Great:** A walk-through "infinite corridor" with no 3D models. The camera glances at each door automatically as you get close.
- **Weak:** The author reports bugs in the door, camera-flight and exit sequences. I could not see the live URL or measure it.
- **Adapt:** Build 3D from primitives and code instead of downloaded models. Nothing large to fetch.

## Motion and craft-led

### 6. Stefan Vitasović '25
- **URL:** Codrops case study https://tympanus.net/codrops/2025/03/05/case-study-stefan-vitasovic-portfolio-2025/ (live URL not verified)
- **Great:** A minimal layout with shader hero effects and intro animations. Every project is shown "through one consistent visual lens".
- **Weak:** A shader on every hero means WebGL work on every page **(inference)**.
- **Adapt:** Give all case studies one shared treatment so the work reads as a system, not as screenshots.

### 7. Gianluca Gradogna Portfolio '25
- **URL:** https://tympanus.net/codrops/2025/01/30/case-study-gianluca-gradogna-portfolio-25/ (Awwwards Portfolio SOTD, Jan 23, 2025)
- **Great:** Typography and visual balance come first. The homepage scrolls infinitely, with a hover image effect that Awwwards highlighted.
- **Weak:** Infinite scroll has no clear end and is hard to reach the footer and contact link on **(inference)**.
- **Adapt:** Let type set the hierarchy and keep images subordinate to it.

### 8. Arnaud Rocca
- **URL:** https://tympanus.net/codrops/2026/03/31/arnaud-roccas-portfolio-from-a-gsap-powered-motion-system-to-fluid-webgl/
- **Great:** Motion is built as a reusable system of registered GSAP effects, SplitText transitions and a ScrollTrigger layer. The WebGL fluid is explicitly optional. Built with Nuxt, OGL and Prismic.
- **Weak:** GSAP, SplitText, Lenis and OGL together are a large JS payload for a portfolio **(inference)**.
- **Adapt:** Define 4–6 named motion primitives (reveal, wipe, stagger, counter) and use only those.

### 9. Troa 25' Folio
- **URL:** https://tympanus.net/codrops/2025/03/28/case-study-troa-25-folio/
- **Great:** The team designed for performance and low carbon from the start. Critical CSS is inlined in the HTML to prevent layout shift, and they argue that eco choices need not cost UI quality.
- **Weak:** I could not see the live site, so there is nothing to criticise with evidence.
- **Adapt:** Inline critical CSS and set a performance budget before visual work starts. Next.js handles part of this, but the budget has to be decided.

## Developer and interaction-design portfolios

### 10. Rauno Freiberg
- **URL:** https://rauno.me (essay: https://rauno.me/craft/interaction-design)
- **Great:** A design engineer at Vercel. Secondary sources describe the site as OS-like and built with Next.js. The "craft" section shows small, finished interaction details rather than big visuals.
- **Weak:** An OS metaphor can hide content behind clicks **(inference; I did not fetch the site directly)**.
- **Adapt:** Show craft at small scale: tiny demos of real UI details, such as a form validating or a table sorting.

### 11. Josh W. Comeau
- **URL:** https://www.joshwcomeau.com
- **Great:** Known for "whimsy", meaning springy, organic, thoughtful micro-interactions. He has also written about accessible animation in React.
- **Weak:** I could not confirm from search how his site handles reduced motion. Dense interactive embeds may be heavy on low-end phones **(inference)**.
- **Adapt:** Physics-based springs for small feedback, such as buttons and toggles, with a reduced-motion path for each one.

### 12. Brittany Chiang
- **URL:** https://brittanychiang.com (older v4 was Gatsby, 6k+ GitHub stars)
- **Great:** Clean layout, bold type that carries the personality, and a fast way to reach experience and projects. It is one of the most-copied developer portfolios.
- **Weak:** Because so many people have copied it, the look now reads as a template **(inference)**.
- **Adapt:** Keep its clarity (role, work, contact within one scroll) but not its look.

### 13. Lynn Fisher
- **URL:** https://lynnandtonic.com
- **Great:** She redesigns the site every year to try out a new CSS technique. One version had a different layout at each breakpoint, made for people who resize sites to test them. Her 2021 refresh used responsive animation with Typetura.
- **Weak:** About 20 layouts is a lot to maintain, by her own account. No speed data.
- **Adapt:** Make the mobile layout its own composition, not the desktop layout stacked into one column.

---

## Synthesis

1. **Make it readable first, then add spectacle.** The name, "Odoo & ERPNext developer, Kerala", real projects and a contact link must render as server HTML with no JS. Bruno Simon and Phantom show what happens when the experience comes before the content. Budget: LCP under 2.5s on a throttled mid-range Android, and under about 150KB of JS on the home route.

2. **One 3D moment, lazy, cheap and optional.** Put it in a single section below the fold, loaded on visibility with `next/dynamic`, using primitives or one small compressed asset with a shared palette texture (Bruno, Szmajda). Show a static poster image on low-end devices, on `prefers-reduced-motion`, or without WebGL. Consider CSS 3D first, as Stas Bondar did.

3. **The ERP theme gives you the art direction.** Corentin's rulers and grid suggest a "ledger and blueprint" look: visible grid lines, tabular numerals, document-style metadata (doctype, module, version) on case studies. That says "serious business software" without stock dashboards.

4. **Two typefaces and three colours, strictly.** A distinctive display face plus a monospace or tabular sans for data. Keep to Corentin's three-colour discipline. Self-host fonts with `next/font` and subset them.

5. **A small named motion vocabulary.** Define 4–6 primitives as Rocca did (reveal, row-insert, number-count, wipe, spring-press) and use only `transform` and `opacity` so they hold 60fps. Each one has a reduced-motion version. Skip smooth-scroll hijacking.

6. **Show craft through real software details.** Instead of a fluid simulation, include small live demos as Rauno does: a mock Odoo form validating, a kanban card moving between stages, a report table sorting. They prove taste and domain knowledge at once.

7. **One case-study template.** All projects (garment manufacturing, Stitch Flow and the rest) get the same structure and visual treatment, as Vitasović does: problem, modules touched, what was built, outcome.

8. **Compose the mobile layout on its own.** Following Lynn Fisher, design phone layouts first and as their own compositions, with 44px tap targets, visible focus states and no hover-only content.
