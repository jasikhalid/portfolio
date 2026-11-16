# Content inventory (pre-redesign, commit a498406)

The source of truth for every word on the site is `content/site.ts`. This file lists what existed before the redesign so nothing gets lost. The redesign keeps `content/site.ts` as the content layer and only adds to it.

## Identity
- Name shown: **Jasi Khalid** (alternate name: Muhammed Jasi)
- Role: Odoo Developer at **Codex Business Solutions**, Tirur, Kerala
- Location: Manjeri, Kerala, India. Open to the Gulf, remote and freelance work
- Site URL: https://jasikhalid.in
- Meta description: "Odoo Developer at Codex Business Solutions. I build custom Odoo modules (ORM models, OWL interfaces, QWeb reports, security rules, wizards) and ERPNext/Frappe apps. Open to roles in Kerala, the Gulf or remote, and to freelance ERP work."

## Contact (reuse exactly)
- Email: jasikhalid46@gmail.com
- Phone: +91 77362 19598 · WhatsApp: https://wa.me/917736219598
- LinkedIn: https://www.linkedin.com/in/muhammed-jasi-396975305
- GitHub: https://github.com/jasikhalid
- Résumé: `/muhammed-jasi-resume.pdf` (in `public/`)
- Formspree endpoint: `https://formspree.io/f/xppzljze` (do not change)

## Hero
- Headline: "Odoo & ERPNext apps that run the business."
- Intro: "I'm Jasi Khalid, an Odoo Developer at Codex Business Solutions. I build custom Odoo modules and ERPNext/Frappe apps: data models, dashboards, reports, workflows and access rules."
- Availability: "Open to ERP roles and freelance work"
- Photo slot: `site.photo` (currently empty, a monogram is shown)

## Career stages (statusbar)
B.Sc. Computer Science (2022–25) → Full-stack work (2024–25) → Odoo training (Jan–Jul 2026) → Odoo developer (2026 – now)

## Experience (9 entries, newest first)
1. Codex Business Solutions, Tirur: Odoo Developer, 2026 – now (start month and summary are a TODO)
2. Freelance, garment manufacturer in Kerala: ERPNext v16 implementation + Stitch Flow app, Nov 2026 – now
3. Cybrosys Technologies, Calicut: Odoo Python Development Training, Jan–Jul 2026
4. Soften Technologies, Kochi: Intern, Python full-stack with React & AI, Jun–Dec 2025 (ClanCulture e-commerce)
5. Freelance, client in Canada: inventory management system, Feb–Jun 2025
6. Freelance, client in Saudi Arabia: business website, Mar–May 2025
7. Regional Technologies, Calicut: full-stack intern, Oct 2024 – Mar 2025 (EventEase)
8. RedTeam Hacker Academy, Perinthalmanna: digital forensics intern, Sep 2024
9. University of Calicut (Gems Arts & Science College): B.Sc. Computer Science, Jun 2022 – Mar 2025

## Case studies (3)
- **Garment Manufacturing ERP + Stitch Flow** (freelance, in progress): ERPNext v16 + custom Frappe app, Vue 3 / frappe-ui, ~150 integration tests in CI
- **Vehicle Repair Management System** (Cybrosys training): Odoo 19, Fleet/Stock/Sales/Website, wizards, QWeb reports, record rules, payment gateway, WhatsApp/SMS
- **Real-time Accounting Dashboard** (Cybrosys training): OWL + Chart.js, live `account.move` / `account.move.line`, KPI cards, date filter, click-through

Each has: context, summary, stack, fields, problem, built, decisions, result (full text in `content/site.ts`).

## Also built
ClanCulture, EventEase, Inventory system (Canada), Business website (Saudi Arabia)

## Skills (7 groups)
Model data and business logic · Control who sees what · Build the screens · Extend Odoo apps · Connect other systems · Ship it · Build on ERPNext (items in `content/site.ts`)

## About (3 paragraphs) and "For businesses" paragraph
In `content/site.ts` (`about`, `forBusinesses`).

## Assets and SEO
- `public/muhammed-jasi-resume.pdf`
- `app/icon.svg`, generated `opengraph-image` / `twitter-image`, `sitemap.ts`, `robots.ts`, JSON-LD `Person` in `app/page.tsx`
- No photos or other images in the repo

## Open content questions noted during the audit
- The redesign brief says the Vehicle Repair module is Odoo 17; the existing site says **Odoo 19**. The site is kept (it is the more recent source) and flagged as `TODO(jasi)`.
