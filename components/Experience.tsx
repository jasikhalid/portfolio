import { experience } from "@/content/site";
import Section from "./Section";
import { DateRange } from "./text";

export default function Experience() {
  const [current, ...past] = experience;
  return (
    <Section id="experience" label="Experience" title="From full-stack apps to Odoo.">
      <div className="grid gap-4 lg:grid-cols-3">
        {current && (
          <div className="tile flex flex-col justify-between bg-ink p-6 text-canvas sm:p-8 lg:sticky lg:top-24 lg:self-start">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-teal" /> Current role
              </p>
              <p className="mt-6 font-display text-h3">{current.role}</p>
              <p className="mt-1 opacity-80">{current.org}{current.place && `, ${current.place}`}</p>
            </div>
            <p className="mt-10 text-sm opacity-80"><DateRange start={current.start} end={current.end} /></p>
          </div>
        )}
        <ol className="tile p-6 sm:p-8 lg:col-span-2">
          {past.map((entry, i) => (
            <li key={`${entry.org}-${entry.start}`} className={`relative grid gap-1 pl-7 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6 ${i ? "mt-8" : ""}`}>
              <span aria-hidden="true" className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${i === 0 ? "border-teal bg-teal" : "border-line bg-tile"}`} />
              {i < past.length - 1 && <span aria-hidden="true" className="absolute -bottom-7 left-[5px] top-6 w-0.5 bg-line" />}
              <p className="text-sm text-muted"><DateRange start={entry.start} end={entry.end} /></p>
              <div>
                <p className="font-semibold">{entry.role}</p>
                <p className="text-sm text-muted">{entry.org}{entry.place && `, ${entry.place}`}</p>
                {entry.summary && <p className="mt-2 max-w-prose text-[15px] leading-relaxed">{entry.summary}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
