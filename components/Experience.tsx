import { experience, stages } from "@/content/site";
import Section from "./Section";
import { DateRange } from "./text";

// Experience as journal entries, grouped by career stage (newest first), like a ledger with subtotals.
export default function Experience() {
  const groups = [...stages].reverse().map((stage) => ({ stage, entries: experience.filter((e) => e.stage === stage.id) }));
  return (
    <Section id="experience" code="300" label="Experience" title="From full-stack apps to Odoo.">
      <div className="space-y-14">
        {groups.map(({ stage, entries }) => (
          <div key={stage.id} className="reveal">
            <h3 className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
              <span className="text-lg font-medium">{stage.label}</span>
              <span className="tnum font-mono text-sm text-muted">{stage.period}</span>
            </h3>
            <ol>
              {entries.map((entry) => (
                <li key={`${entry.org}-${entry.start}`} className="grid gap-x-8 gap-y-1 border-b border-rule py-5 sm:grid-cols-[10rem_minmax(0,1fr)] lg:grid-cols-[12rem_minmax(0,1fr)_minmax(0,1.3fr)]">
                  <p className="tnum font-mono text-[13px] text-muted sm:pt-0.5">
                    <DateRange start={entry.start} end={entry.end} />
                  </p>
                  <div>
                    <p className="font-medium leading-snug">
                      {entry.role}
                      {!entry.end && (
                        <span className="stamp ml-2 translate-y-[-1px] px-1.5 py-0 align-middle text-[10px] text-posted">Current</span>
                      )}
                    </p>
                    <p className="mt-0.5 text-sm text-muted">{entry.org}{entry.place && `, ${entry.place}`}</p>
                  </div>
                  {entry.summary && <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted sm:col-start-2 lg:col-start-auto lg:mt-0">{entry.summary}</p>}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
