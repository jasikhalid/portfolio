import Link from "next/link";
import { skills, work } from "@/content/site";
import Section from "./Section";
import { WithCode } from "./text";

const titles = Object.fromEntries(work.map((w) => [w.slug, w.title]));

// The stack as a chart of accounts: each capability has a code, the tools, and where it was used.
export default function Skills() {
  return (
    <Section
      id="stack"
      code="200"
      label="Stack"
      title="A chart of accounts for what I can do."
      intro="Grouped by the job each tool does, with the work where you can see it used."
    >
      <div aria-hidden="true" className="label hidden grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(0,1fr)] gap-6 border-b border-ink pb-3 lg:grid">
        <span>Code</span><span>Capability</span><span>Tools</span><span>Used in</span>
      </div>
      <ul className="border-t border-ink lg:border-t-0">
        {skills.map((group) => (
          <li key={group.code} className="reveal grid grid-cols-[minmax(0,1fr)] gap-x-6 gap-y-3 border-b border-rule py-6 sm:grid-cols-[4rem_minmax(0,1fr)] lg:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.6fr)_minmax(0,1fr)] lg:py-7">
            <span className="tnum font-mono text-sm text-signal">{group.code}</span>
            <h3 className="text-lg font-medium leading-snug">{group.label}</h3>
            <p className="break-words font-mono text-[13px] leading-relaxed sm:col-start-2 lg:col-start-auto">
              {group.items.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span aria-hidden="true" className="px-1.5 text-muted">/</span>}
                  <WithCode text={item} />
                </span>
              ))}
            </p>
            <p className="text-sm text-muted sm:col-start-2 lg:col-start-auto">
              {group.usedIn.length ? (
                <>
                  <span className="sr-only">Used in: </span>
                  {group.usedIn.map((ref, i) => (
                    <span key={ref}>
                      {i > 0 && ", "}
                      {titles[ref] ? <Link href={`/work/${ref}`} className="link text-ink">{titles[ref]}</Link> : ref}
                    </span>
                  ))}
                </>
              ) : (
                <a href="#prompting" className="link text-ink">See 400 · Prompting</a>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
