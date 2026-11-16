import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sideProjects, work } from "@/content/site";
import { MOCKS } from "./Mockups";
import Section from "./Section";

export default function Work() {
  return (
    <Section
      id="work"
      code="100"
      label="Selected work"
      title="ERP work on Odoo and ERPNext, built end to end."
      intro="Three case files. Each one starts with the business problem and ends with what was built."
    >
      <ol className="stack border-t border-rule">
        {work.map((file, i) => {
          const Mock = MOCKS[file.slug];
          return (
            <li key={file.slug} className="reveal border-b border-rule" style={{ "--i": i } as React.CSSProperties}>
              <article aria-labelledby={`${file.slug}-title`} className="group relative grid grid-cols-[minmax(0,1fr)] gap-8 py-10 sm:py-14 lg:grid-cols-12 lg:gap-8">
                <div className="flex flex-col lg:col-span-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="label tnum"><span className="text-signal">{101 + i}</span> · Case file</span>
                    {file.status && (
                      <span className="stamp text-signal">
                        <span aria-hidden="true" className="dot pulse" />
                        {file.status}
                      </span>
                    )}
                  </div>
                  <h3 id={`${file.slug}-title`} className="mt-5 text-h3">
                    <Link href={`/work/${file.slug}`} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                      {file.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{file.context}</p>
                  <p className="mt-5 max-w-prose leading-relaxed">{file.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
                    {file.stack.map((item) => <li key={item} className="tag">{item}</li>)}
                  </ul>
                  <p className="mt-8 inline-flex items-center gap-2 font-medium lg:mt-auto lg:pt-8">
                    <span className="link group-hover:text-signal">Open the case file</span>
                    <ArrowUpRight size={18} aria-hidden="true" className="row-arrow text-signal" />
                  </p>
                </div>
                <div className="rounded bg-sunken p-4 transition-transform duration-slow ease-out sm:p-8 lg:col-span-7 lg:group-hover:-translate-y-1 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-4 group-has-[:focus-visible]:outline-signal">
                  {Mock && <Mock />}
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      <div className="mt-20 grid gap-y-6 lg:grid-cols-12 lg:gap-x-8">
        <h3 className="label lg:col-span-3"><span className="text-signal">110</span> · Also built</h3>
        <div className="lg:col-span-9">
          <p aria-hidden="true" className="label hidden grid-cols-[14rem_minmax(0,1fr)_10rem] gap-6 border-b border-ink pb-3 sm:grid">
            <span>Project</span><span>What it does</span><span>Stack</span>
          </p>
          <ul className="border-t border-ink sm:border-t-0">
            {sideProjects.map((project) => (
              <li key={project.title} className="tint reveal grid gap-1 border-b border-rule py-4 sm:grid-cols-[14rem_minmax(0,1fr)_10rem] sm:gap-6">
                <p className="font-medium">
                  {project.title}
                  <span className="mt-0.5 block text-sm font-normal text-muted">{project.context}</span>
                </p>
                <p className="leading-relaxed text-muted">{project.text}</p>
                <p className="tint-key mt-1 font-mono text-xs leading-relaxed sm:mt-1"><span className="sr-only">Stack: </span>{project.stack.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
