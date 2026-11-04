import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { contact, hero, site } from "@/content/site";
import { RepairMock } from "./Mockups";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto grid max-w-page gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-7">
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-tile px-3 py-1.5 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-teal" />
          {hero.availability}
        </p>
        <h1 id="hero-title" className="rise mt-6 font-display text-display" style={{ "--d": "0.05s" } as React.CSSProperties}>
          {hero.headline}
        </h1>
        <p className="rise mt-6 max-w-[52ch] text-lg leading-relaxed text-muted" style={{ "--d": "0.1s" } as React.CSSProperties}>
          {hero.intro}
        </p>
        <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--d": "0.15s" } as React.CSSProperties}>
          <a href="#contact" className="inline-flex min-h-12 items-center rounded-full bg-teal px-6 font-semibold text-on-teal transition-opacity hover:opacity-90">
            Contact me
          </a>
          <a href={contact.github} className="inline-flex min-h-12 items-center gap-1.5 rounded-full border border-line bg-tile px-6 font-semibold transition-colors hover:border-ink">
            GitHub <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
        <div className="tile rise col-span-2 bg-sunken p-3 sm:p-4" style={{ "--d": "0.2s" } as React.CSSProperties}>
          <RepairMock />
        </div>
        <div className="tile rise p-5" style={{ "--d": "0.28s" } as React.CSSProperties}>
          <Briefcase size={20} className="text-teal" aria-hidden="true" />
          <p className="mt-4 text-sm text-muted">Now</p>
          <p className="font-semibold leading-snug">{site.employer.name}</p>
        </div>
        <div className="tile rise p-5" style={{ "--d": "0.34s" } as React.CSSProperties}>
          <MapPin size={20} className="text-plum" aria-hidden="true" />
          <p className="mt-4 text-sm text-muted">Based in</p>
          <p className="font-semibold leading-snug">Manjeri, Kerala</p>
          <p className="text-sm text-muted">Open to Gulf and remote</p>
        </div>
      </div>
    </section>
  );
}
