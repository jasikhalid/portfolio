import { ArrowDown, ArrowRight } from "lucide-react";
import { hero, site, stages } from "@/content/site";
import HeroFigure from "./HeroFigure";
import Magnetic from "./Magnetic";
import ModuleStack from "./ModuleStack";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const fields = [
  { label: "Role", value: site.role },
  { label: "At", value: site.employer.name },
  { label: "Based in", value: "Manjeri, Kerala" },
  { label: "Open to", value: "Kerala, the Gulf, remote" },
];

export default function Hero() {
  const last = stages.length - 1;
  return (
    <section aria-labelledby="hero-title" className="page pb-6 pt-8 sm:pt-12 lg:pt-14">
      {/* Record header, like the top of an ERP form. */}
      <div className="enter flex flex-wrap items-center justify-between gap-3" style={d(0)}>
        <p className="label tnum">
          <span className="text-signal">000</span> · Record / {site.name}
        </p>
        <p className="stamp text-posted">
          <span aria-hidden="true" className="dot pulse" />
          {hero.availability}
        </p>
      </div>
      <div aria-hidden="true" className="draw mt-4 h-px bg-ink" style={d(60)} />

      <h1 id="hero-title" className="mt-10 text-display sm:mt-14">
        {hero.headlineLines.map((line, i) => (
          <span key={line} className="enter-line block" style={d(i * 70)}>
            {i === hero.headlineLines.length - 1 ? <span className="text-signal">{line}</span> : line}
          </span>
        ))}
      </h1>

      <div className="mt-10 grid items-end gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <p className="enter max-w-[46ch] text-lead text-muted" style={d(260)}>{hero.intro}</p>
          <div className="enter mt-10 flex flex-wrap gap-3" style={d(340)}>
            <Magnetic>
              <a href="#contact" className="btn btn-primary">
                Hire me or start a project <ArrowRight size={18} aria-hidden="true" className="arrow" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#work" className="btn btn-ghost">
                See the work <ArrowDown size={18} aria-hidden="true" className="arrow" />
              </a>
            </Magnetic>
          </div>
        </div>

        <figure className="enter lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9" style={d(200)}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] lg:max-w-none">
            <HeroFigure>
              <ModuleStack className="h-full w-full" />
            </HeroFigure>
          </div>
          <figcaption className="label mt-3 flex justify-between gap-4 border-t border-rule pt-3">
            <span>Fig. 1</span>
            <span className="text-right">Modules I build on, as one system</span>
          </figcaption>
        </figure>
      </div>

      {/* Key fields, in the label/value layout of an Odoo form. */}
      <dl className="enter mt-16 grid grid-cols-2 gap-px border-y border-rule bg-rule sm:mt-20 lg:grid-cols-4" style={d(420)}>
        {fields.map((field) => (
          <div key={field.label} className="bg-paper py-4 pr-4 [&:nth-child(even)]:pl-4 lg:[&:not(:first-child)]:pl-4">
            <dt className="label">{field.label}</dt>
            <dd className="mt-1.5 font-medium leading-snug">{field.value}</dd>
          </div>
        ))}
      </dl>

      {/* Career as an Odoo statusbar: the last stage is the current one. */}
      <div className="enter mt-8" style={d(480)}>
        <p className="label">Career stage</p>
        <ol className="mt-3 grid grid-cols-2 gap-1 sm:flex">
          {stages.map((stage, i) => (
            <li
              key={stage.id}
              aria-current={i === last ? "step" : undefined}
              className={`chevron flex min-h-14 flex-1 flex-col justify-center px-4 py-2 ${i === last ? "bg-ink text-paper" : "bg-sunken"}`}
            >
              <span className="text-sm font-medium leading-tight">{stage.label}</span>
              <span className={`tnum font-mono text-xs ${i === last ? "text-paper" : "text-muted"}`}>{stage.period}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
