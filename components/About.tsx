import Image from "next/image";
import { about, site } from "@/content/site";
import Section from "./Section";

const facts = [
  { label: "Studied", value: "B.Sc. Computer Science, University of Calicut", note: "2022 – 2025" },
  { label: "Trained", value: "Odoo Python Development, Cybrosys Technologies", note: "Six months, 2026" },
  { label: "Works at", value: site.employer.name, note: site.employer.place },
  { label: "Open to", value: "Relocating to the Gulf, remote roles, freelance", note: site.location.label },
];

export default function About() {
  return (
    <Section id="about" code="400" label="About" title="A little about me.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="reveal space-y-5 text-lead lg:col-span-7 lg:col-start-4">
          {about.map((paragraph) => <p key={paragraph} className="max-w-prose">{paragraph}</p>)}
        </div>
        <div className="reveal lg:col-span-2 lg:col-start-11">
          {site.photo && (
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[220px]">
              <Image src={site.photo.src} alt={site.photo.alt} fill sizes="220px" className="object-contain" />
            </div>
          )}
        </div>
        <dl className="reveal grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:col-span-9 lg:col-start-4 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="tint-cell bg-paper py-5 sm:pr-5 sm:[&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-5">
              <dt className="tint-key label">{fact.label}</dt>
              <dd className="mt-2 font-medium leading-snug">{fact.value}</dd>
              <dd className="mt-1 text-sm text-muted">{fact.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
