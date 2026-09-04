export const navItems = [
  ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Experience", "experience"], ["Contact", "contact"],
] as const;

export const roles = ["Odoo Developer", "Python Full-Stack Developer", "ERP & Business Automation Specialist"];

export const techStack = ["Python", "Odoo", "Django", "React", "PostgreSQL", "MySQL", "JavaScript", "Git", "Linux"];

export const skillGroups = [
  { label: "01 / Odoo Core", accent: "violet", skills: ["Odoo Framework", "ORM", "OWL", "QWeb Templates", "Module Customization"] },
  { label: "02 / Module Work", accent: "cyan", skills: ["Custom Wizards", "QWeb Reports", "Security Rules", "POS Customization", "Dashboards"] },
  { label: "03 / Business Apps", accent: "blue", skills: ["Inventory / Stock", "Sales", "CRM", "Purchase", "Fleet", "Website & E-commerce"] },
  { label: "04 / Integrations", accent: "pink", skills: ["REST APIs", "Payment Gateway Hooks", "WhatsApp / SMS APIs", "Authentication"] },
  { label: "05 / Full Stack", accent: "amber", skills: ["Python", "Django", "PostgreSQL", "MySQL", "React.js", "JavaScript"] },
  { label: "06 / Delivery", accent: "green", skills: ["Git", "Linux Deployment", "PyCharm", "RBAC", "Responsive UI"] },
];

export type Project = { title: string; type: string; period: string; featured?: boolean; description: string; bullets: string[]; tags: string[]; href?: string; placeholder?: string };
export const projects: Project[] = [
  { title: "Vehicle Repair Management System", type: "Custom Odoo 19 Module · Cybrosys Technologies", period: "03/2026 — 05/2026", featured: true, description: "A complete vehicle-service operations layer that turns repair intake into a controlled, billable workflow.", bullets: ["Repair intake, technician assignment, inventory tracking, and billing modeled around Stock + Sales logic.", "Connected Fleet, Stock, Website, payment gateway hooks, and WhatsApp/SMS integrations.", "Custom OWL components and guided wizards for multi-step operations.", "QWeb reports with direct invoicing plus role-specific security rules."], tags: ["Odoo 19", "OWL", "QWeb", "Python", "PostgreSQL", "REST API", "WhatsApp API"], placeholder: "PLACEHOLDER: Add demo GIF / public GitHub URL" },
  { title: "Accounting Dashboard", type: "Custom Odoo Module · Cybrosys Technologies", period: "2026", featured: true, description: "A live financial command center designed to make accounting data immediately actionable.", bullets: ["Real-time KPI views built with OWL components and Chart.js.", "Live aggregation from account.move and account.move.line.", "Date range filtering with click-through to contextual, filtered list views."], tags: ["Odoo", "OWL", "Chart.js", "Python", "PostgreSQL"], placeholder: "PLACEHOLDER: Add dashboard screenshot / public GitHub URL" },
  { title: "ClanCulture", type: "Full-stack E-commerce · Soften Technologies", period: "06/2025 — 12/2025", description: "An e-commerce platform with practical product discovery and checkout workflows.", bullets: ["Built product categorization, filtering, and a secure purchasing flow.", "Developed full-stack features and REST API integrations."], tags: ["Django", "React", "Python", "REST API"], placeholder: "PLACEHOLDER: Add project link / screenshot" },
  { title: "EventEase", type: "Event Management · Regional Technologies", period: "10/2024 — 03/2025", description: "A role-aware event booking platform with clearly modeled access flows.", bullets: ["Implemented booking and role-based access logic.", "Built with a modular full-stack architecture."], tags: ["Django", "React", "Role-Based Access Control"], placeholder: "PLACEHOLDER: Add project link / screenshot" },
  { title: "Inventory Management System", type: "Freelance · Canada", period: "02/2025 — 06/2025", description: "Inventory tracking for a waste-management platform, from entry through reporting.", bullets: ["Created item-entry and stock-update workflows.", "Delivered practical reporting for operations."], tags: ["Python", "Inventory Systems"], placeholder: "PLACEHOLDER: Add project link / screenshot" },
  { title: "Business Website", type: "Freelance · Saudi Arabia", period: "03/2025 — 05/2025", description: "A responsive business presence taken from design through production hosting.", bullets: ["Designed, deployed, and maintained the site end-to-end.", "Handled Linux-based deployment and ongoing maintenance."], tags: ["Web Development", "Linux Deployment"], placeholder: "PLACEHOLDER: Add project link / screenshot" },
];

export const timeline = [
  ["Python Odoo Developer", "Cybrosys Technologies · Calicut", "01/2026 — 07/2026", "Six-month intensive Odoo framework training and delivery of both flagship modules."],
  ["Python Full-Stack Development with React & AI", "Soften Technologies · Kochi", "06/2025 — 12/2025", "Built ClanCulture and strengthened end-to-end product delivery skills."],
  ["Full-Stack Development Intern", "Regional Technologies · Calicut", "10/2024 — 03/2025", "Built EventEase with role-based workflows and booking logic."],
  ["Freelance Developer", "Canada + Saudi Arabia", "02/2025 — 06/2025", "Delivered an inventory system and a responsive business website."],
  ["Digital Forensics Intern", "RedTeam Hacker Academy · Perinthalmanna", "09/2024", "Foundational experience in investigative security practices."],
  ["B.Sc. Computer Science", "University of Calicut · Gems Arts & Science College", "06/2022 — 03/2025", "Bachelor of Science in Computer Science."],
];

export const contacts = { email: "jasikhalid46@gmail.com", phone: "+91 77362 19598", location: "Manjeri, Kerala, India", linkedin: "https://linkedin.com/in/muhammed-jasi-396975305", github: "https://github.com/jasikhalid", resume: "/muhammed-jasi-resume.pdf" };
