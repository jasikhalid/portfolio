import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MOCKS } from "@/components/Mockups";
import { WithCode } from "@/components/text";
import { site, work } from "@/content/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return work.map((file) => ({ slug: file.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const file = work.find((w) => w.slug === slug);
  if (!file) return {};
  return {
    title: file.title,
    description: file.summary,
    alternates: { canonical: `/work/${file.slug}` },
    openGraph: { type: "article", url: `/work/${file.slug}`, title: `${file.title} · ${site.name}`, description: file.summary },
  };
}

function Block({ code, title, children }: { code: string; title: string; children: React.ReactNode }) {
  return (
    <section className="reveal grid gap-y-4 border-t border-ink pt-4 lg:grid-cols-12 lg:gap-x-8">
      <h2 className="label lg:col-span-3"><span className="text-signal">{code}</span> · {title}</h2>
      <div className="max-w-prose text-[17px] leading-relaxed lg:col-span-7 lg:col-start-4">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="grid grid-cols-[2.25rem_minmax(0,1fr)] border-b border-rule pb-3 last:border-0">
          <span className="tnum pt-0.5 font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
          <span><WithCode text={item} /></span>
        </li>
      ))}
    </ol>
  );
}

export default async function CaseFilePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = work.findIndex((w) => w.slug === slug);
  if (index < 0) notFound();
  const file = work[index];
  const next = work[(index + 1) % work.length];
  const Mock = MOCKS[file.slug];

  return (
    <article className="page pb-24 pt-8 sm:pt-12">
      <nav aria-label="Breadcrumb" className="enter label flex flex-wrap items-center gap-2">
        <Link href="/#work" className="inline-flex min-h-11 items-center gap-1.5 hover:text-ink">
          <ArrowLeft size={14} aria-hidden="true" /> 100 · Work
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-ink">{101 + index} · {file.title}</span>
      </nav>
      <div aria-hidden="true" className="draw mt-2 h-px bg-ink" style={{ "--d": "60ms" } as React.CSSProperties} />

      <header className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="enter flex flex-wrap items-center gap-4">
            <p className="label">{file.context}</p>
            {file.status && (
              <span className="stamp text-signal">
                <span aria-hidden="true" className="dot pulse" />
                {file.status}
              </span>
            )}
          </div>
          <h1 className="enter mt-5 text-[clamp(2.4rem,1.3rem+4.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]" style={{ "--d": "60ms" } as React.CSSProperties}>
            {file.title}
          </h1>
          <p className="enter mt-6 max-w-[52ch] text-lead text-muted" style={{ "--d": "140ms" } as React.CSSProperties}>{file.summary}</p>
        </div>
        <dl className="enter self-end border-t border-ink lg:col-span-4" style={{ "--d": "200ms" } as React.CSSProperties}>
          {file.fields.map((field) => (
            <div key={field.label} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-4 border-b border-rule py-3 text-sm">
              <dt className="label pt-0.5">{field.label}</dt>
              <dd className="font-medium">{field.href ? <a href={field.href} className="link">{field.value}</a> : <WithCode text={field.value} />}</dd>
            </div>
          ))}
        </dl>
      </header>

      {Mock && (
        <figure className="enter mt-14 rounded bg-sunken p-4 sm:p-10 lg:p-16" style={{ "--d": "260ms" } as React.CSSProperties}>
          <div className="mx-auto max-w-3xl"><Mock /></div>
          <figcaption className="label mx-auto mt-4 max-w-3xl">Fig. · Layout sketch of the screens. Not real data.</figcaption>
        </figure>
      )}

      <div className="mt-20 space-y-16 sm:mt-28 sm:space-y-20">
        <Block code="01" title="Problem"><p>{file.problem}</p></Block>
        <Block code="02" title="What I built"><List items={file.built} /></Block>
        <Block code="03" title="Technical decisions"><List items={file.decisions} /></Block>
        <Block code="04" title="Result"><p className="text-lead">{file.result}</p></Block>
        <Block code="05" title="Stack">
          <ul className="flex flex-wrap gap-1.5">{file.stack.map((item) => <li key={item} className="tag">{item}</li>)}</ul>
        </Block>
      </div>

      <nav aria-label="More case files" className="mt-24 grid gap-px border-y border-ink bg-rule sm:grid-cols-2">
        <Link href="/#contact" className="row-hover group flex min-h-32 flex-col justify-between bg-paper py-6 sm:pr-8">
          <span className="label">Have a similar problem?</span>
          <span className="mt-4 flex items-center gap-2 text-h3">Start a conversation <ArrowRight aria-hidden="true" className="row-arrow text-signal" /></span>
        </Link>
        <Link href={`/work/${next.slug}`} className="row-hover group flex min-h-32 flex-col justify-between bg-paper py-6 sm:pl-8">
          <span className="label">Next case file · {101 + work.indexOf(next)}</span>
          <span className="mt-4 flex items-center gap-2 text-h3">{next.title} <ArrowRight aria-hidden="true" className="row-arrow shrink-0 text-signal" /></span>
        </Link>
      </nav>
    </article>
  );
}
