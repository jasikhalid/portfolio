import { ArrowUpRight } from "lucide-react";
import { contact, forBusinesses } from "@/content/site";
import ContactForm from "./ContactForm";

const links = [
  { label: "LinkedIn", href: contact.linkedin },
  { label: "GitHub", href: contact.github },
  { label: "WhatsApp", href: contact.whatsapp },
  { label: "Résumé (PDF)", href: contact.resume },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="tile flex flex-col justify-between bg-ink p-6 text-canvas sm:p-10">
          <div>
            <p className="text-sm font-semibold opacity-80">Contact</p>
            <h2 id="contact-title" className="mt-2 font-display text-h2">Have an Odoo project or a role?</h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed opacity-80">{forBusinesses}</p>
          </div>
          <div className="mt-10">
            <a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center break-all font-display text-xl font-bold underline decoration-2 underline-offset-4 sm:text-2xl">
              {contact.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="inline-flex min-h-11 items-center gap-1 rounded-full border px-4 text-sm font-semibold hover:bg-canvas hover:text-ink" style={{ borderColor: "color-mix(in srgb, currentColor 30%, transparent)" }}>
                    {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
