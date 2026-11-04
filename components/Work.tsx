import { work, type CaseFile } from "@/content/site";
import Section from "./Section";
import { WithCode } from "./text";

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-slate">
      {items.map((item) => <li key={item}><WithCode text={item} /></li>)}
    </ul>
  );
}

function Case({ file }: { file: CaseFile }) {
  const titleId = `${file.slug}-title`;
  return (
    <article aria-labelledby={titleId} className="rounded border border-rule bg-sheet">
      <header className="border-b border-rule px-5 py-4 sm:px-8 sm:py-5">
        <h3 id={titleId} className="text-h3">{file.title}</h3>
        <p className="mt-0.5 text-sm text-slate">{file.context}</p>
      </header>
      <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 md:grid-cols-[17rem_minmax(0,1fr)] md:gap-10">
        <dl className="grid h-fit grid-cols-[6rem_minmax(0,1fr)] gap-x-4 gap-y-2 text-sm">
          {file.fields.map((field) => (
            <div key={field.label} className="contents">
              <dt className="font-semibold text-slate">{field.label}</dt>
              <dd>{field.href ? <a href={field.href} className="link">{field.value}</a> : <WithCode text={field.value} />}</dd>
            </div>
          ))}
        </dl>
        <div className="max-w-prose space-y-6">
          <div>
            <h4 className="font-semibold">Problem</h4>
            <p className="mt-2">{file.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold">What I built</h4>
            <List items={file.built} />
          </div>
          <div>
            <h4 className="font-semibold">Technical decisions</h4>
            <List items={file.decisions} />
          </div>
          <div>
            <h4 className="font-semibold">Result</h4>
            <p className="mt-2">{file.result}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <Section id="work" title="Selected work">
      <div className="space-y-8">
        {work.map((file) => <Case key={file.slug} file={file} />)}
      </div>
    </Section>
  );
}
