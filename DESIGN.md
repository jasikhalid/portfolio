# Design direction

## The problem with the current site
The current site is a tidy bento grid with a plum brand colour, rounded tiles and pastel chips. That's the default look of 2024 templates. It says "a developer made a portfolio", not "this person builds systems that businesses run on". Its strongest original idea is the Odoo-style career statusbar, and it's buried.

## Three concepts

### A. System of Record
- **Mood:** an accounting ledger and a well-made ERP form, printed with care. Calm and exact, with one red stamp.
- **Palette:** warm ledger paper `#F3F0E8`, ink `#15140F`, ruled lines `#D8D2C2`, one signal vermillion `#B3361D` (the "posted" stamp), one quiet green `#1C6447` for "live / done". In dark mode the lights go out: near-black paper `#100F0C`, bone ink `#EEEADF`, vermillion `#FF6B4A`.
- **Type:** Geist (variable, tight tracking at display sizes) for words, Geist Mono for codes, dates, figures and field labels. Tabular numbers everywhere.
- **Layout idea:** the page is one long ledger. Each section is an account with a code (`100 · Work`, `200 · Stack`…), a hairline-ruled 12-column grid, and records laid out like Odoo form fields: label in mono on the left, value on the right. Case studies are "records" with a status bar.
- **Signature motion:** rules draw in from left to right as a section enters, and figures tick into place like a journal entry being posted. The hero headline sets line by line.
- **Signature 3D moment:** a set of module slabs (Fleet, Stock, Sales, Accounting, Manufacturing…) floating apart, then snapping into one stacked system as the page loads. They tilt gently with the pointer.

### B. Command Line Prompt
- **Mood:** a terminal at night. Green-on-black, monospaced, blinking caret.
- **Palette:** `#0B0D0C` / phosphor `#9BF59B` / amber `#FFB000`.
- **Type:** JetBrains Mono throughout, a grotesk for headings.
- **Layout:** the whole site is a ⌘K palette and a scrolling transcript of commands.
- **Signature motion:** typed output, caret blink, glitch transitions.
- **3D:** a wireframe terminal floating in space.
- **Why not:** hackers already own this look, and it reads as "front-end hobbyist", not "ERP for real businesses". It also hurts readability for hiring managers skimming on phones.

### C. Assembled Modules (dark isometric)
- **Mood:** a dark product launch page. Isometric glass blocks, glowing edges.
- **Palette:** deep indigo `#0E1024`, cyan and magenta glows.
- **Type:** a wide display face plus Inter.
- **Layout:** each project is a 3D block you rotate; the page is driven by scroll-pinned 3D scenes.
- **Signature motion:** GSAP-pinned scroll scenes.
- **Why not:** it's heavy (scroll-pinned WebGL fights goal 1), every SaaS launch page looks like this, and glow-on-indigo rarely passes AA for body text.

## Chosen: A, System of Record, with two ideas taken from B and C
- From **B:** a ⌘K command palette for navigation and quick actions (copy email, open GitHub, download résumé, switch theme). It shows prompting-minded fluency without turning the site into a terminal.
- From **C:** the single 3D moment, modules assembling into one system, kept small, lazy and optional.

**Why it fits Jasi:** his work is the system of record for real businesses: journal entries, stock moves, work orders, approvals. A ledger aesthetic says "I respect your data" before a word is read. It's also rare in developer portfolios, where dark neon and bento grids dominate. The Odoo statusbar from the old site survives as the career rail. The ⌘K palette and the prompting section show the other half of him: clear thinking with AI.

## Tokens
Defined as CSS variables in `app/globals.css` and mapped in `tailwind.config.ts`. Theme follows the system by default; `data-theme="light|dark"` on `<html>` overrides it (set from the ⌘K palette, remembered in `localStorage`).

### Colour (all pairs checked, WCAG AA)
| Token | Light | Dark | Use | Contrast on paper (L / D) |
|---|---|---|---|---|
| `--paper` | `#F3F0E8` | `#100F0C` | page | — |
| `--raised` | `#FBFAF6` | `#1A1915` | cards, form fields | — |
| `--sunken` | `#E9E5D9` | `#0B0A08` | wells, code | — |
| `--ink` | `#15140F` | `#EEEADF` | text | 16.2 / 15.9 |
| `--muted` | `#5C574B` | `#A39D8E` | secondary text | 6.3 / 7.1 |
| `--rule` | `#D8D2C2` | `#2C2A23` | hairlines (decorative) | — |
| `--signal` | `#B3361D` | `#FF6B4A` | stamp, links, focus, CTA | 5.3 / 6.8 |
| `--on-signal` | `#FFFFFF` | `#100F0C` | text on signal | 6.1 / 6.8 |
| `--posted` | `#1C6447` | `#5CC497` | live / done states | 6.2 / 8.9 |

### Type scale (fluid, Geist; mono for `.label`)
| Token | Size | Line height | Tracking |
|---|---|---|---|
| `display` | `clamp(2.9rem, 1.4rem + 6.6vw, 7.25rem)` | 0.94 | -0.045em |
| `h2` | `clamp(2.1rem, 1.3rem + 3.2vw, 4rem)` | 1.0 | -0.035em |
| `h3` | `clamp(1.35rem, 1.15rem + 0.8vw, 1.85rem)` | 1.15 | -0.02em |
| `lead` | `clamp(1.125rem, 1.05rem + 0.35vw, 1.3rem)` | 1.55 | -0.005em |
| body | `1rem` / `1.0625rem` | 1.6 | 0 |
| `label` (mono) | `0.75rem` | 1.4 | 0.04em, uppercase |

### Spacing, radii, shadows
- Spacing: Tailwind's 4px scale. Section rhythm `py-24 → py-36` (mobile → desktop). Page gutter 20px mobile, 32px tablet, 48px desktop. Max width 1360px.
- Radii: `--radius-sm 4px` (fields, chips), `--radius 8px` (cards). Ledger aesthetic: mostly square, never pill-shaped except status dots.
- Shadows: none for cards (hairline rules do the work). One `--lift` shadow for the ⌘K palette and the hovered record.

### Motion
- Easing family: `--ease-out: cubic-bezier(0.22, 1, 0.36, 1)` (entrances), `--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)` (state changes).
- Durations: `--t-fast 160ms` (hover, press), `--t-base 320ms` (UI state), `--t-slow 700ms` (reveals), `--t-draw 1100ms` (rules drawing).
- Only `transform` and `opacity` animate. Rule draws use `scaleX`.
- `prefers-reduced-motion: reduce` → no 3D motion, no draws or slides, reveals become a 200ms fade.

## Library decisions
- **No Framer Motion, GSAP or Lenis.** Everything planned (line reveals, rule draws, staggered entrances, magnetic buttons) is achievable with CSS, scroll-driven animations where supported, and one small IntersectionObserver. Saves roughly 40–70 kB of client JS against the 170 kB budget. Lenis is skipped on purpose: native scrolling is faster on phones and respects user settings.
- **three.js directly, not React Three Fiber + drei.** One scene doesn't need a reconciler. Loaded with `next/dynamic` (`ssr: false`) only after idle, on capable devices.
- **Fonts:** Geist and Geist Mono via `next/font/google`, latin subset, `display: swap`. Bricolage Grotesque and Inter are dropped.
- **Icons:** lucide-react stays (tree-shaken), used sparingly.
