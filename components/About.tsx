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
    <Section id="about" code="500" label="About" title="A little about me.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="reveal space-y-5 text-lead lg:col-span-7 lg:col-start-4">
          {about.map((paragraph) => <p key={paragraph} className="max-w-prose">{paragraph}</p>)}
        </div>
        <div className="reveal lg:col-span-2 lg:col-start-11">
          {/* TODO(jasi): add a photo to /public and set site.photo in content/site.ts; it appears here. */}
          {site.photo && (
            <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded border border-ink">
              <Image src={site.photo.src} alt={site.photo.alt} fill sizes="(min-width: 1024px) 200px, 100vw" className="object-cover" />
            </div>
          )}
        </div>
        <dl className="reveal grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:col-span-9 lg:col-start-4 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper py-5 sm:pr-5 sm:[&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-5">
              <dt className="label">{fact.label}</dt>
              <dd className="mt-2 font-medium leading-snug">{fact.value}</dd>
              <dd className="mt-1 text-sm text-muted">{fact.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
