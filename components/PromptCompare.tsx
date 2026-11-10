"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { prompting } from "@/content/site";

const TABS = [
  { id: "briefed", label: "Briefed" },
  { id: "vague", label: "One-liner" },
] as const;
type Tab = (typeof TABS)[number]["id"];

// Two versions of the same request. Accessible tabs: arrow keys move between them.
export default function PromptCompare() {
  const [tab, setTab] = useState<Tab>("briefed");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setTab(TABS[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className="overflow-hidden rounded border border-ink bg-raised">
      <div className="flex items-center justify-between gap-4 border-b border-rule pl-4">
        <p className="label truncate">Task · {prompting.task}</p>
        <div role="tablist" aria-label="Prompt version" className="flex shrink-0">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => { refs.current[i] = el; }}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={(e) => onKey(e, i)}
              className={`min-h-11 border-l border-rule px-4 font-mono text-xs transition-colors duration-fast ${tab === t.id ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div id="panel-briefed" role="tabpanel" aria-labelledby="tab-briefed" hidden={tab !== "briefed"} className="p-5 sm:p-7">
        <dl className="space-y-4 font-mono text-[13px] leading-relaxed">
          {prompting.briefed.map((line, i) => (
            <div key={line.key} className="prompt-line grid gap-1 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4" style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
              <dt className="uppercase tracking-wide text-signal">{line.key}</dt>
              <dd>{line.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div id="panel-vague" role="tabpanel" aria-labelledby="tab-vague" hidden={tab !== "vague"} className="p-5 sm:p-7">
        <p className="prompt-line font-mono text-[13px]">
          <span aria-hidden="true" className="text-signal">&gt; </span>
          {prompting.vague}
          <span aria-hidden="true" className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-ink" />
        </p>
        <p className="prompt-line mt-6 max-w-prose text-[15px] leading-relaxed text-muted" style={{ "--d": "120ms" } as React.CSSProperties}>
          The model has to guess the Odoo version, the models, the roles and what &ldquo;done&rdquo; means. It will guess confidently, and some guesses will be wrong.
        </p>
      </div>
    </div>
  );
}
