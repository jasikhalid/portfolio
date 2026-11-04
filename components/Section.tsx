import type { ReactNode } from "react";

// Every section reads like an Odoo form group: label column on the left, content on the right.
export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-rule">
      <div className="mx-auto grid max-w-page gap-6 px-4 py-[72px] sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <h2 id={`${id}-title`} className="text-h2 lg:col-span-3">{title}</h2>
        <div className="min-w-0 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
