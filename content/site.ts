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
  fields: { label: string; value: string; href?: string }[];
  problem: string;
  built: string[];
  decisions: string[];
  result: string;
};

export type SkillGroup = { label: string; items: string[] };

export const site = {
  url: "https://jasikhalid.in",
  name: "Muhammed Jasi",
  alternateName: "Jasi Khalid",
  role: "Junior Odoo Developer",
  employer: { name: "Codex Business Solutions", place: "Tirur, Kerala" },
  location: { city: "Manjeri", region: "Kerala", country: "IN", label: "Manjeri, Kerala, India" },
  description:
    "Junior Odoo Developer at Codex Business Solutions. I build custom Odoo modules: ORM models, OWL interfaces, QWeb reports, security rules and wizards. Open to roles in Kerala, the Gulf or remote, and to freelance Odoo work.",
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

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "I build Odoo modules: the wizards, reports and access rules a business runs on every day.",
  availability: "Open to Odoo roles in Kerala, the Gulf or remote, and to freelance Odoo work.",
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
    role: "Junior Odoo Developer",
    start: "2026",
    // TODO: add your start month ("2026-08") and a one-line summary of public work.
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
    slug: "vehicle-repair",
    title: "Vehicle Repair Management System",
    context: "Custom module, built during training at Cybrosys",
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

export const skills: SkillGroup[] = [
  { label: "Model data and business logic", items: ["Python", "Odoo ORM", "Wizards", "PostgreSQL", "Django", "MySQL"] },
  { label: "Control who sees what", items: ["Security groups", "ir.model.access", "ir.rule", "Role-based access in Django"] },
  { label: "Build the screens", items: ["OWL", "QWeb views and reports", "Odoo Website and portal", "React", "JavaScript"] },
  { label: "Extend Odoo apps", items: ["Inventory", "Sales", "Purchase", "CRM", "Fleet", "Accounting", "POS"] },
  { label: "Connect other systems", items: ["REST APIs", "Payment gateways", "WhatsApp and SMS APIs"] },
  { label: "Ship it", items: ["Git", "Linux deployment"] },
  { label: "Learning now", items: ["ERPNext", "Frappe"] },
];

// DRAFT: keep it short and in your own voice.
export const about = [
  "I'm Jasi, based in Manjeri, Kerala. I studied computer science at the University of Calicut and started out building web apps with Django and React, in internships and for freelance clients in Canada and Saudi Arabia.",
  "Six months of Odoo training at Cybrosys moved me into ERP work, and I now do it full-time at Codex Business Solutions in Tirur. I'm learning ERPNext and Frappe alongside it.",
  "I'm open to relocating to the Gulf and to remote roles.",
];

export const forBusinesses =
  "Running a business on Odoo, or about to? I take on freelance work: custom modules, reports, access rules, and integrations such as payments and WhatsApp/SMS.";
