import { Fragment } from "react";
import { skills } from "@/content/site";
import Section from "./Section";
import { WithCode } from "./text";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label}>
            <dt className="font-semibold">{group.label}</dt>
            <dd className="mt-1 text-slate">
              {group.items.map((item, i) => (
                <Fragment key={item}>{i > 0 && ", "}<WithCode text={item} /></Fragment>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
