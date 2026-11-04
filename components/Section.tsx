import type { ReactNode } from "react";

export default function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-sm font-semibold text-teal">{label}</p>
      <h2 id={`${id}-title`} className="mt-2 max-w-[20ch] font-display text-h2">{title}</h2>
      <div className="mt-10 lg:mt-14">{children}</div>
    </section>
  );
}
