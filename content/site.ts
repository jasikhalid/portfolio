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
  // Add your photo to /public and set it here, e.g. { src: "/jasi.jpg", alt: "Jasi Khalid" }.
  photo: undefined as { src: string; alt: string } | undefined,
  url: "https://jasikhalid.in",
  name: "Jasi Khalid",
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
};

// Ledger account codes double as section numbers. Hrefs start with "/" so they work from case-file pages too.
export const nav = [
  { code: "100", label: "Work", href: "/#work" },
  { code: "200", label: "Stack", href: "/#stack" },
  { code: "300", label: "Experience", href: "/#experience" },
  { code: "400", label: "Prompting", href: "/#prompting" },
  { code: "500", label: "About", href: "/#about" },
  { code: "600", label: "Contact", href: "/#contact" },
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
    start: "2026",
    // TODO: add your start month ("2026-08") and a one-line summary of public work.
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

// DRAFT: "problem", "decisions" and "result" are written only from the résumé bullets.
// Rewrite them in your own words; add a "Code" field with a GitHub URL if the source is public.
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
      "A garment design has to travel from the designer's sketch through an estimate, approval and a timed sample before it becomes production work orders, with fabric dyed by subcontractors along the way. ERPNext covers the operations; the design-to-production path needed its own app.",
    built: [
      "Stitch Flow, a custom Frappe app with a Python backend and a Vue 3 / frappe-ui frontend",
      "Design-to-production state machine: design approval, sample tracking, sample approval, production",
      "Automatic ERPNext item templates with size × colour variants, BOMs with operations, work orders, job cards and stock entries",
      "Stage-wise time tracking on job cards, comparing estimate with actual and showing efficiency",
      "A configuration app with fixtures for roles, permissions and workflows, plus import templates to migrate masters and opening balances from Tally",
      "Project delivery: discovery workshop, business requirements document, gap analysis, decisions log and a phased plan",
    ],
    decisions: [
      "Stitch Flow generates standard ERPNext documents (items, variants, BOMs, work orders) instead of parallel records, so manufacturing and stock stay native.",
      "Role-based approvals with a no-self-approval rule, and field-level permissions that hide costs from designers.",
      "Roles, permissions and workflows ship as fixtures, so every site is configured the same way.",
      "Around 150 automated integration tests run in CI on GitHub Actions.",
    ],
    result: "Stitch Flow v1 is built and tested. The ERPNext configuration phases are under way.",
  },
  {
    slug: "vehicle-repair",
    title: "Vehicle Repair Management System",
    context: "Custom module, built during training at Cybrosys",
    summary: "One repair order that moves from intake to technician, parts and invoice without leaving Odoo.",
    // TODO(jasi): the redesign brief says Odoo 17, this file says Odoo 19. Confirm which and fix both mentions.
    stack: ["Odoo 19", "Python", "OWL", "QWeb", "PostgreSQL", "WhatsApp/SMS API"],
    fields: [
      { label: "Platform", value: "Odoo 19" },
      { label: "Apps", value: "Fleet, Stock, Sales, Website" },
      { label: "Built with", value: "Python, OWL, QWeb, PostgreSQL" },
      { label: "Period", value: "Mar – May 2026" },
    ],
    problem:
      "A repair job passes through intake, a technician, the parts store and billing. The module keeps one repair order moving through all four inside Odoo.",
    built: [
      "Repair intake and technician job assignment, with wizards for the multi-step parts",
      "Parts tracked through Stock and billed through Sales",
      "Vehicle records from Fleet and customer-facing pages on Website",
      "QWeb reports with direct invoicing",
      "Payment gateway and WhatsApp/SMS integrations",
    ],
    decisions: [
      "Built on the existing Stock and Sales flows so inventory and invoicing behave like the rest of Odoo.",
      "Security groups, ir.model.access and ir.rule record rules control what each role can see and change.",
      "Custom OWL components and wizards automate job assignment.",
    ],
    result: "A working module covering the whole job, from intake to invoice, which I built on my own during the training.",
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
      "Show the key accounting figures on one screen, live from journal entries, and let people open the records behind each number.",
    built: [
      "KPI cards and Chart.js charts inside OWL components",
      "Date-range filter applied across every figure",
      "Click-through from each KPI card to a filtered list view",
    ],
    decisions: [
      "Figures are aggregated from account.move and account.move.line, so they are live rather than a nightly snapshot.",
      "Click-through opens Odoo's own list views with the same filter, so users stay in screens they know.",
    ],
    result: "A working dashboard module, built during the training.",
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
  { code: "230", label: "Build the screens", items: ["OWL", "QWeb views and reports", "Odoo Website and portal", "React", "Next.js", "JavaScript"], usedIn: ["vehicle-repair", "accounting-dashboard", "ClanCulture"] },
  { code: "240", label: "Extend Odoo apps", items: ["Inventory", "Sales", "Purchase", "CRM", "Fleet", "Accounting", "POS"], usedIn: ["vehicle-repair", "accounting-dashboard"] },
  { code: "250", label: "Build on ERPNext", items: ["ERPNext v16", "Frappe apps", "Vue 3 / frappe-ui", "Workflows and fixtures", "Tally migration", "Integration tests"], usedIn: ["garment-erp"] },
  { code: "260", label: "Connect other systems", items: ["REST APIs", "Payment gateways", "WhatsApp and SMS APIs"], usedIn: ["vehicle-repair", "ClanCulture"] },
  { code: "270", label: "Ship it", items: ["Git", "GitHub Actions", "Linux deployment"], usedIn: ["garment-erp", "Business website"] },
  { code: "280", label: "Think with AI", items: ["Prompt engineering", "Building with AI"], usedIn: [] },
];

// The "Prompting" section. TODO(jasi): this brief is an illustrative example written for the redesign,
// based only on the Vehicle Repair module's public description. Replace it with a real prompt you have used.
export const prompting = {
  title: "I brief an AI the way I'd brief a senior colleague.",
  intro:
    "Prompting is a spec, not a wish. The model gets the same things a good developer would ask for: the context, the exact task, the constraints and a way to check the answer.",
  task: "Record rules for the Vehicle Repair module",
  vague: "write odoo security for my repair module",
  briefed: [
    { key: "Context", value: "Odoo 19 custom module vehicle_repair. A repair.order links a fleet.vehicle, a res.partner and the stock moves for parts." },
    { key: "Task", value: "Write ir.rule record rules: technicians see only repair orders assigned to them; repair managers see all of them." },
    { key: "Constraints", value: "Use the groups already in security/groups.xml. No sudo(). Must stay correct in a multi-company database." },
    { key: "Output", value: "One XML file, then a short table of test cases to run while logged in as each role." },
    { key: "Check", value: "Before writing code, list every assumption you are making about field names, and stop if one is unclear." },
  ],
  takeaways: ["Name the real models", "State what must not happen", "Ask for its assumptions first"],
};

// DRAFT: keep it short and in your own voice.
export const about = [
  "I'm Jasi, based in Manjeri, Kerala. I studied computer science at the University of Calicut and started out building web apps with Django and React, in internships and for freelance clients in Canada and Saudi Arabia.",
  "Six months of Odoo training at Cybrosys moved me into ERP work, and I now do it full-time at Codex Business Solutions in Tirur. Alongside it, I'm delivering an ERPNext v16 implementation for a garment manufacturer as a freelance project.",
  "I'm open to relocating to the Gulf and to remote roles.",
];

export const forBusinesses =
  "Running a business on Odoo or ERPNext, or about to? I take on freelance work: implementation, custom modules and apps, reports, access rules, data migration, and integrations such as payments and WhatsApp/SMS.";
