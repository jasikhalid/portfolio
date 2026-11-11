import { prompting } from "@/content/site";
import PromptCompare from "./PromptCompare";
import Section from "./Section";

export default function Prompting() {
  return (
    <Section id="prompting" code="400" label="Prompting" title={prompting.title} intro={prompting.intro}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <ol className="reveal border-t border-ink lg:col-span-4">
          {prompting.takeaways.map((item, i) => (
            <li key={item} className="flex items-baseline gap-5 border-b border-rule py-5">
              <span className="tnum font-mono text-sm text-signal">{401 + i}</span>
              <span className="text-lg font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ol>
        <div className="reveal min-w-0 lg:col-span-8">
          <PromptCompare />
          <p className="label mt-3">Example brief. Switch tabs to compare it with the one-liner most people type.</p>
        </div>
      </div>
    </Section>
  );
}
