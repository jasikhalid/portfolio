import { ArrowUpRight } from "lucide-react";
import { contact, forBusinesses } from "@/content/site";
import ContactForm from "./ContactForm";
import Section from "./Section";

const links = [
  { label: "LinkedIn", href: contact.linkedin, note: "Profile" },
  { label: "GitHub", href: contact.github, note: "@jasikhalid" },
  { label: "WhatsApp", href: contact.whatsapp, note: contact.phone },
  { label: "Résumé", href: contact.resume, note: "PDF" },
];

export default function Contact() {
  return (
    <Section id="contact" code="500" label="Contact" title="Have an Odoo project or a role?" intro={forBusinesses}>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="reveal lg:col-span-5">
          <p className="label">Email, the fastest way</p>
          <a href={`mailto:${contact.email}`} className="link mt-3 inline-block break-all text-[clamp(1.5rem,1rem+2.2vw,2.4rem)] font-medium leading-tight tracking-tight">
            {contact.email}
          </a>
          <ul className="mt-10 border-t border-ink">
            {links.map((link) => (
              <li key={link.label} className="border-b border-rule">
                <a href={link.href} className="row-hover group flex min-h-14 items-center justify-between gap-4 py-3 hover:text-signal">
                  <span className="font-medium">{link.label}</span>
                  <span className="flex items-center gap-3 font-mono text-[13px] text-muted">
                    {link.note}
                    <ArrowUpRight size={16} aria-hidden="true" className="row-arrow text-ink group-hover:text-signal" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
