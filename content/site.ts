// All site copy lives here. Edit text in this file; components only handle layout.
// Dates use "YYYY-MM" so they can go into <time dateTime>. Leave a field out to hide it.

export type StageId = "study" | "fullstack" | "training" | "codex";

export type Stage = { id: StageId; label: string; period: string };

export type Entry = {
  stage: StageId;
  org: string;
  place?: string;
  role: string;
  start: string;
  end?: string; // omit for current roles
  summary?: string;
};

export type CaseFile = {
  slug: string;
  title: string;
  context: string;
  status?: string; // shown as a live badge, e.g. "In progress"
  summary: string;
  stack: string[];
  fields: { label: string; value: string; href?: string }[];
  problem: string;
  built: string[];
  decisions: string[];
  result: string;
};

// usedIn lists case-file slugs or side-project titles where the skill shows up, so the stack reads as evidence.
export type SkillGroup = { code: string; label: string; items: string[]; usedIn: string[] };

export type SideProject = { title: string; context: string; text: string; stack: string[] };

export const site = {
  photo: { src: "/jasi-khalid.webp", alt: "Illustrated portrait of Jasi Khalid in a maroon blazer, holding a laptop" } as { src: string; alt: string } | undefined,
  url: "https://jasikhalid.in",
  name: "Jasi Khalid",
  // Full name. Used in About and in the Person schema so the résumé and LinkedIn (which use it) match the site.
  alternateName: "Muhammed Jasi",
  role: "Odoo Developer",
  employer: { name: "Codex Business Solutions", place: "Tirur, Kerala" },
  location: { city: "Manjeri", region: "Kerala", country: "IN", label: "Manjeri, Kerala, India" },
  description:
    "Odoo Developer at Codex Business Solutions. I build custom Odoo modules (ORM models, OWL interfaces, QWeb reports, security rules, wizards) and ERPNext/Frappe apps. Open to roles in Kerala, the Gulf or remote, and to freelance ERP work.",
};

export const contact = {
  email: "jasikhalid46@gmail.com",
  phone: "+91 77362 19598",
  whatsapp: "https://wa.me/917736219598",
  linkedin: "https://www.linkedin.com/in/muhammed-jasi-396975305",
  github: "https://github.com/jasikhalid",
  resume: "/muhammed-jasi-resume.pdf",
  formspree: "https://formspree.io/f/xppzljze",
  // Google Apps Script web app that adds each message to a Google Sheet. Set up with scripts/contact-sheet.gs.
  // Leave empty to skip the sheet; Formspree keeps working either way.
  sheet: "",
};

// Ledger account codes double as section numbers. Hrefs start with "/" so they work from case-file pages too.
export const nav = [
  { code: "100", label: "Work", href: "/#work" },
  { code: "200", label: "Stack", href: "/#stack" },
  { code: "300", label: "Experience", href: "/#experience" },
  { code: "400", label: "About", href: "/#about" },
  { code: "500", label: "Contact", href: "/#contact" },
];

export const hero = {
  headline: "Odoo & ERPNext apps that run the business.",
  // The same headline, broken where it should break on large screens.
  headlineLines: ["Odoo & ERPNext", "apps that run", "the business."],
  intro:
    "I'm Jasi Khalid, an Odoo Developer at Codex Business Solutions. I build custom Odoo modules and ERPNext/Frappe apps: data models, dashboards, reports, workflows and access rules.",
  availability: "Open to ERP roles and freelance work",
};

// Oldest first, like an Odoo statusbar. The last stage is the current one.
export const stages: Stage[] = [
  { id: "study", label: "B.Sc. Computer Science", period: "2022–25" },
  { id: "fullstack", label: "Full-stack work", period: "2024–25" },
  { id: "training", label: "Odoo training", period: "Jan–Jul 2026" },
  { id: "codex", label: "Odoo developer", period: "2026 – now" },
];

// Newest first within each stage.
export const experience: Entry[] = [
  {
    stage: "codex",
    org: "Codex Business Solutions",
    place: "Tirur",
    role: "Odoo Developer",
    start: "2026-09",
  },
  {
    stage: "codex",
    org: "Freelance, garment manufacturer in Kerala",
    role: "ERPNext v16 implementation + Stitch Flow app",
    start: "2026-11",
    summary:
      "Leading discovery, requirements, gap analysis and phased delivery of ERPNext for a women's clothing manufacturer, plus a custom Frappe app for design-to-production. In progress.",
  },
  {
    stage: "training",
    org: "Cybrosys Technologies",
    place: "Calicut",
    role: "Odoo Python Development Training",
    start: "2026-01",
    end: "2026-07",
    summary:
      "Six-month programme covering Odoo architecture, the ORM, PostgreSQL, security models, QWeb and OWL. I built both modules shown under Selected work during it.",
  },
  {
    stage: "fullstack",
    org: "Soften Technologies",
    place: "Kochi",
    role: "Intern, Python full-stack development with React & AI",
    start: "2025-06",
    end: "2025-12",
    summary:
      "Built e-commerce features for ClanCulture in Django, React and REST APIs: product categories, filtering and a secure purchase flow.",
  },
  {
    stage: "fullstack",
    org: "Freelance, client in Canada",
    role: "Inventory management system",
    start: "2025-02",
    end: "2025-06",
    summary: "Item entry, stock updates and reporting for a waste-management platform.",
  },
  {
    stage: "fullstack",
    org: "Freelance, client in Saudi Arabia",
    role: "Business website",
    start: "2025-03",
    end: "2025-05",
    summary: "Designed, deployed and maintained a responsive business website, including hosting on Linux.",
  },
  {
    stage: "fullstack",
    org: "Regional Technologies",
    place: "Calicut",
    role: "Full-stack development intern",
    start: "2024-10",
    end: "2025-03",
    summary: "Worked on EventEase, an event management platform: role-based booking and access logic in Django and React.",
  },
  {
    stage: "fullstack",
    org: "RedTeam Hacker Academy",
    place: "Perinthalmanna",
    role: "Digital forensics intern",
    start: "2024-09",
    end: "2024-09",
    summary: "Short internship in cybersecurity and digital forensics.",
  },
  {
    stage: "study",
    org: "University of Calicut",
    place: "Gems Arts & Science College",
    role: "B.Sc. Computer Science",
    start: "2022-06",
    end: "2025-03",
  },
];

// Add a "Code" field with a GitHub URL to a case file if its source is public.
export const work: CaseFile[] = [
  {
    slug: "garment-erp",
    title: "Garment Manufacturing ERP + Stitch Flow",
    context: "Freelance, women's clothing manufacturer in Kerala",
    status: "In progress",
    summary:
      "ERPNext v16 across buying, subcontracted fabric dyeing, stock, manufacturing, quality and selling, plus Stitch Flow: a custom app that takes a design from sketch to production work orders.",
    stack: ["ERPNext v16", "Frappe", "Python", "Vue 3", "frappe-ui", "GitHub Actions"],
    fields: [
      { label: "Platform", value: "ERPNext v16 + custom Frappe app" },
      { label: "Modules", value: "Buying, Subcontracting, Stock, Manufacturing, Quality, Selling" },
      { label: "Built with", value: "Python, Vue 3, frappe-ui" },
      { label: "Status", value: "Started Nov 2026, in progress" },
    ],
    problem:
      "The client makes women's clothing. A new design starts as a sketch, gets an estimate and an approval, goes through a timed sample, and only then becomes production work. Fabric goes out to subcontractors for dyeing along the way. ERPNext already handles buying, stock and manufacturing well, but nothing in it follows a design from sketch to production, so I'm building that part as its own app.",
    built: [
      "Stitch Flow, a custom Frappe app with a Python backend and a Vue 3 / frappe-ui frontend",
      "Design-to-production state machine: design approval, sample tracking, sample approval, production",
      "Automatic ERPNext item templates with size × colour variants, BOMs with operations, work orders, job cards and stock entries",
      "Stage-wise time tracking on job cards, comparing estimate with actual and showing efficiency",
      "A configuration app with fixtures for roles, permissions and workflows, plus import templates to migrate masters and opening balances from Tally",
      "Project delivery: discovery workshop, business requirements document, gap analysis, decisions log and a phased plan",
    ],
    decisions: [
      "I didn't want a second set of records living next to ERPNext. Stitch Flow creates normal ERPNext items, variants, BOMs and work orders, so stock and manufacturing keep working the way ERPNext expects.",
      "Nobody can approve their own work, and designers never see costs. Roles and field-level permissions enforce both.",
      "Roles, permissions and workflows ship as fixtures, so a fresh site gets exactly the same setup without anyone clicking through settings.",
      "Around 150 integration tests run on GitHub Actions, so I can change the approval flow without quietly breaking it.",
    ],
    result: "Stitch Flow v1 is built and its tests pass. I'm now setting up ERPNext with the client, one phase at a time.",
  },
  {
    slug: "vehicle-repair",
    title: "Vehicle Repair Management System",
    context: "Custom module, built during training at Cybrosys",
    summary: "One repair order that moves from intake to technician, parts and invoice without leaving Odoo.",
    stack: ["Odoo 19", "Python", "OWL", "QWeb", "PostgreSQL", "WhatsApp/SMS API"],
    fields: [
      { label: "Platform", value: "Odoo 19" },
      { label: "Apps", value: "Fleet, Stock, Sales, Website" },
      { label: "Built with", value: "Python, OWL, QWeb, PostgreSQL" },
      { label: "Period", value: "Mar – May 2026" },
    ],
    problem:
      "In a repair shop, one job passes through four hands: whoever takes the vehicle in, the technician, the parts store and billing. This module gives all four the same repair order to work on, inside Odoo.",
    built: [
      "Repair intake and technician job assignment, with wizards for the multi-step parts",
      "Parts tracked through Stock and billed through Sales",
      "Vehicle records from Fleet and customer-facing pages on Website",
      "QWeb reports with direct invoicing",
      "Payment gateway and WhatsApp/SMS integrations",
    ],
    decisions: [
      "I built on Odoo's own Stock and Sales flows instead of writing my own, so parts and invoices behave exactly like the rest of Odoo.",
      "Each role sees and changes only what it should, using security groups, ir.model.access and ir.rule record rules.",
      "I automated job assignment with custom OWL components and wizards.",
    ],
    result: "It works end to end, from the vehicle coming in to the invoice going out. I built it on my own during my Odoo training.",
  },
  {
    slug: "accounting-dashboard",
    title: "Real-time Accounting Dashboard",
    context: "Custom module, built during training at Cybrosys",
    summary: "Live KPI cards and charts on journal entries, with click-through to the records behind each number.",
    stack: ["Odoo", "OWL", "Chart.js", "Python"],
    fields: [
      { label: "Platform", value: "Odoo, custom module" },
      { label: "Data", value: "account.move, account.move.line" },
      { label: "Built with", value: "OWL, Chart.js, Python" },
      { label: "Period", value: "2026" },
    ],
    problem:
      "I wanted the key accounting numbers on one screen, live from journal entries, with a way to open the records behind any number.",
    built: [
      "KPI cards and Chart.js charts inside OWL components",
      "Date-range filter applied across every figure",
      "Click-through from each KPI card to a filtered list view",
    ],
    decisions: [
      "The numbers come straight from account.move and account.move.line, so they're always current, not last night's snapshot.",
      "Clicking a card opens Odoo's normal list view with the same filter, so people land on a screen they already know.",
    ],
    result: "A working dashboard module, built during my Odoo training.",
  },
];

// The modules drawn in the hero figure: the apps Jasi has built on, with a real model or doctype from each.
export const modules = [
  { name: "Fleet", model: "fleet.vehicle" },
  { name: "Sales", model: "sale.order" },
  { name: "Stock", model: "stock.move" },
  { name: "Manufacturing", model: "Work Order" },
  { name: "Accounting", model: "account.move" },
];

export const sideProjects: SideProject[] = [
  { title: "ClanCulture", context: "Internship, Soften Technologies", text: "E-commerce features: product categories, filtering and a secure purchase flow.", stack: ["Django", "React", "REST"] },
  { title: "EventEase", context: "Internship, Regional Technologies", text: "Event management platform with role-based booking and access logic.", stack: ["Django", "React", "RBAC"] },
  { title: "Inventory system", context: "Freelance, client in Canada", text: "Item entry, stock updates and reporting for a waste-management platform.", stack: ["Python"] },
  { title: "Business website", context: "Freelance, client in Saudi Arabia", text: "Designed, deployed and maintained a responsive site, hosted on Linux.", stack: ["Web", "Linux"] },
];

export const skills: SkillGroup[] = [
  { code: "210", label: "Model data and business logic", items: ["Python", "Odoo ORM", "Wizards", "PostgreSQL", "Django", "MySQL"], usedIn: ["vehicle-repair", "accounting-dashboard", "garment-erp"] },
  { code: "220", label: "Control who sees what", items: ["Security groups", "ir.model.access", "ir.rule", "Role-based access in Django"], usedIn: ["vehicle-repair", "garment-erp", "EventEase"] },
  { code: "230", label: "Build the screens", items: ["OWL", "QWeb views and reports", "Odoo Website and portal", "React", "JavaScript"], usedIn: ["vehicle-repair", "accounting-dashboard", "ClanCulture"] },
  { code: "240", label: "Extend Odoo apps", items: ["Inventory", "Sales", "Purchase", "CRM", "Fleet", "Accounting", "POS"], usedIn: ["vehicle-repair", "accounting-dashboard"] },
  { code: "250", label: "Build on ERPNext", items: ["ERPNext v16", "Frappe apps", "Vue 3 / frappe-ui", "Workflows and fixtures", "Tally migration", "Integration tests"], usedIn: ["garment-erp"] },
  { code: "260", label: "Connect other systems", items: ["REST APIs", "Payment gateways", "WhatsApp and SMS APIs"], usedIn: ["vehicle-repair", "ClanCulture"] },
  { code: "270", label: "Ship it", items: ["Git", "GitHub Actions", "Linux deployment"], usedIn: ["garment-erp", "Business website"] },
  { code: "280", label: "Think with AI", items: ["Prompt engineering", "Building with AI"], usedIn: [] },
];

export const about = [
  "I'm Muhammed Jasi, though most people know me as Jasi Khalid. I'm from Manjeri in Kerala. I studied computer science at the University of Calicut, and my first real projects were web apps in Django and React, built during internships and for freelance clients in Canada and Saudi Arabia.",
  "Six months of Odoo training at Cybrosys pulled me into ERP work: software a business actually runs on every day. Since September 2026 I've been an Odoo Developer at Codex Business Solutions in Tirur, and on the side I'm delivering an ERPNext implementation for a garment manufacturer.",
  "I also enjoy prompt engineering and building things with AI. I'm open to moving to the Gulf and to remote roles.",
];

export const forBusinesses =
  "Running a business on Odoo or ERPNext, or about to? I take on freelance work: implementation, custom modules and apps, reports, access rules, data migration, and integrations such as payments and WhatsApp/SMS.";
