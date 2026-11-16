import type { ReactNode } from "react";

type Props = { id: string; code: string; label: string; title: ReactNode; intro?: ReactNode; children: ReactNode };

// Every section is a ledger account: a ruled heading row with its code, then the records.
export default function Section({ id, code, label, title, intro, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="page relative py-20 sm:py-28 lg:py-36">
      <div aria-hidden="true" className="reveal-rule h-px bg-ink" />
      <div className="mt-4 grid gap-y-6 lg:grid-cols-12 lg:gap-x-8">
        <p className="label tnum lg:col-span-3">
          <span className="text-signal">{code}</span> · {label}
        </p>
        <div className="lg:col-span-9">
          <h2 id={`${id}-title`} className="reveal max-w-[22ch] text-h2">{title}</h2>
          {intro && <div className="reveal mt-6 max-w-prose text-lead text-muted">{intro}</div>}
        </div>
      </div>
      <div className="mt-14 sm:mt-20">{children}</div>
    </section>
  );
}
