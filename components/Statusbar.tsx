import { stages } from "@/content/site";

export default function Statusbar() {
  const current = stages.at(-1)?.id;
  return (
    <nav aria-label="Career stages" className="mt-10 sm:mt-14 lg:mt-20">
      <ol className="flex flex-col sm:flex-row">
        {stages.map((stage) => {
          const isCurrent = stage.id === current;
          return (
            <li key={stage.id} data-current={isCurrent || undefined} className="stage sm:flex-1">
              <a href={`#stage-${stage.id}`} aria-current={isCurrent ? "step" : undefined} className="flex items-baseline justify-between gap-3 sm:block">
                <span className="block text-sm font-semibold">{stage.label}</span>
                <span className={`block font-mono text-[13px] ${isCurrent ? "" : "text-slate"}`}>{stage.period}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
