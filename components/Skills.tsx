import { Boxes, Database, LayoutTemplate, Plug, Rocket, ShieldCheck, Sprout } from "lucide-react";
import { skills, type SkillGroup } from "@/content/site";
import Section from "./Section";
import { WithCode } from "./text";

const ICONS: Record<SkillGroup["icon"], typeof Boxes> = {
  database: Database,
  shield: ShieldCheck,
  layout: LayoutTemplate,
  boxes: Boxes,
  plug: Plug,
  rocket: Rocket,
  sprout: Sprout,
};

export default function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I do with the stack.">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => {
          const Icon = ICONS[group.icon];
          return (
            <li key={group.label} className={`reveal tile lift p-6 ${i === 0 ? "lg:col-span-2" : ""}`}>
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "bg-plum-soft text-plum" : "bg-teal-soft text-teal"}`}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <p className="mt-5 text-lg font-semibold">{group.label}</p>
              <p className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => <span key={item} className="chip"><WithCode text={item} /></span>)}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
