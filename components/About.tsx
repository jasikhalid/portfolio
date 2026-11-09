import { BadgeCheck, GraduationCap } from "lucide-react";
import { about } from "@/content/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="About" title="A little about me.">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="reveal tile space-y-4 p-6 text-lg leading-relaxed sm:p-8 lg:col-span-2">
          {about.map((paragraph) => <p key={paragraph} className="max-w-prose">{paragraph}</p>)}
        </div>
        <div className="grid gap-4">
          <div className="reveal tile lift p-6">
            <GraduationCap size={20} className="text-teal" aria-hidden="true" />
            <p className="mt-4 font-semibold">B.Sc. Computer Science</p>
            <p className="text-sm text-muted">University of Calicut, 2022–2025</p>
          </div>
          <div className="reveal tile lift p-6">
            <BadgeCheck size={20} className="text-plum" aria-hidden="true" />
            <p className="mt-4 font-semibold">Odoo training</p>
            <p className="text-sm text-muted">Cybrosys Technologies, six months, 2026</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
