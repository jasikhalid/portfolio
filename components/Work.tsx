import { ChevronDown } from "lucide-react";
import { sideProjects, work, type CaseFile } from "@/content/site";
import { DashboardMock, RepairFlow, StitchFlowMock } from "./Mockups";
import Section from "./Section";
import { WithCode } from "./text";

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-teal">
      {items.map((item) => <li key={item}><WithCode text={item} /></li>)}
    </ul>
  );
}

function Case({ file, mock, flip }: { file: CaseFile; mock: React.ReactNode; flip?: boolean }) {
  const titleId = `${file.slug}-title`;
  return (
    <article aria-labelledby={titleId} className="reveal tile grid overflow-hidden lg:grid-cols-2">
      <div className={`flex items-center bg-sunken p-4 sm:p-10 [&>*]:w-full ${flip ? "lg:order-2" : ""}`}>
        {mock}
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          {file.context}
          {file.status && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-soft px-2.5 py-0.5 text-xs font-semibold text-teal">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal motion-reduce:animate-none" />
              {file.status}
            </span>
          )}
        </p>
        <h3 id={titleId} className="mt-1 font-display text-h3">{file.title}</h3>
        <p className="mt-3 max-w-prose leading-relaxed">{file.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
          {file.stack.map((item) => <li key={item} className="chip">{item}</li>)}
        </ul>
        <details className="group mt-6 border-t border-line pt-2">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-semibold text-teal [&::-webkit-details-marker]:hidden">
            Read the case file
            <ChevronDown size={18} aria-hidden="true" className="transition-transform group-open:rotate-180" />
          </summary>
          <div className="grid gap-6 pb-2 pt-4 text-[15px] leading-relaxed">
            <dl className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-4 gap-y-1.5 rounded-xl bg-sunken p-4 text-sm">
              {file.fields.map((field) => (
                <div key={field.label} className="contents">
                  <dt className="text-muted">{field.label}</dt>
                  <dd className="font-medium">{field.href ? <a href={field.href} className="underline">{field.value}</a> : <WithCode text={field.value} />}</dd>
                </div>
              ))}
            </dl>
            <div><h4 className="font-semibold">Problem</h4><p className="mt-2">{file.problem}</p></div>
            <div><h4 className="font-semibold">What I built</h4><List items={file.built} /></div>
            <div><h4 className="font-semibold">Technical decisions</h4><List items={file.decisions} /></div>
            <div><h4 className="font-semibold">Result</h4><p className="mt-2">{file.result}</p></div>
          </div>
        </details>
      </div>
    </article>
  );
}

const MOCKS: Record<string, React.ReactNode> = {
  "garment-erp": <StitchFlowMock />,
  "vehicle-repair": <RepairFlow />,
  "accounting-dashboard": <div className="mx-auto max-w-md"><DashboardMock /></div>,
};

export default function Work() {
  return (
    <Section id="work" label="Selected work" title="ERP work on Odoo and ERPNext, built end to end.">
      <div className="grid gap-4">
        {work.map((file, i) => <Case key={file.slug} file={file} mock={MOCKS[file.slug]} flip={i % 2 === 1} />)}
      </div>
      <h3 className="mt-14 font-display text-h3">Also built</h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sideProjects.map((project) => (
          <li key={project.title} className="reveal tile lift flex flex-col p-6">
            <p className="text-sm text-muted">{project.context}</p>
            <p className="mt-1 text-lg font-semibold">{project.title}</p>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{project.text}</p>
            <p className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((item) => <span key={item} className="chip">{item}</span>)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
