import { experience, stages } from "@/content/site";
import Section from "./Section";
import { DateRange } from "./text";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {[...stages].reverse().map((stage) => (
          <div key={stage.id} id={`stage-${stage.id}`} className="grid scroll-mt-20 gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
            <h3 className="font-semibold">
              {stage.label}
              <span className="block font-mono text-[13px] font-normal text-slate">{stage.period}</span>
            </h3>
            <ol className="space-y-6 border-l border-rule pl-5">
              {experience.filter((entry) => entry.stage === stage.id).map((entry) => (
                <li key={`${entry.org}-${entry.start}`}>
                  <p className="font-semibold">{entry.role}</p>
                  <p className="text-sm text-slate">
                    {entry.org}{entry.place && `, ${entry.place}`} · <DateRange start={entry.start} end={entry.end} />
                  </p>
                  {entry.summary && <p className="mt-2 max-w-prose">{entry.summary}</p>}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
