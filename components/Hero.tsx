import { contact, hero, site } from "@/content/site";
import Statusbar from "./Statusbar";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-page px-4 pb-[72px] pt-12 sm:px-6 lg:pb-28 lg:pt-24">
      <p className="text-slate">
        {site.name} · {site.role} at {site.employer.name}, {site.employer.place}
      </p>
      <h1 id="hero-title" className="mt-4 max-w-[24ch] text-h1">{hero.headline}</h1>
      <p className="mt-5 max-w-prose text-lg text-slate">{hero.availability}</p>
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
        <a href="#contact" className="inline-flex min-h-12 items-center justify-center rounded bg-green px-6 font-semibold text-on-green hover:opacity-90">
          Contact me
        </a>
        <ul className="flex gap-6">
          <li><a href={contact.github} className="link flex min-h-11 items-center">GitHub</a></li>
          <li><a href={contact.linkedin} className="link flex min-h-11 items-center">LinkedIn</a></li>
        </ul>
      </div>
      <Statusbar />
    </section>
  );
}
