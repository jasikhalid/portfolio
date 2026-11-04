import { contact, forBusinesses } from "@/content/site";
import ContactForm from "./ContactForm";
import Section from "./Section";

const links = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: "muhammed-jasi", href: contact.linkedin },
  { label: "GitHub", value: "jasikhalid", href: contact.github },
  { label: "WhatsApp", value: contact.phone, href: contact.whatsapp },
  { label: "Résumé", value: "PDF, 290 KB", href: contact.resume },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-12">
        <div className="md:order-2">
          <p className="max-w-prose">{forBusinesses}</p>
          <dl className="mt-6 grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-x-4 text-sm">
            {links.map((link) => (
              <div key={link.label} className="contents">
                <dt className="font-semibold text-slate">{link.label}</dt>
                <dd className="min-w-0">
                  <a href={link.href} className="link flex min-h-11 items-center break-all">{link.value}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
