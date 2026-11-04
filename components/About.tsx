import { about } from "@/content/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-prose space-y-4">
        {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  );
}
