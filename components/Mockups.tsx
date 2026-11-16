import { Check, MessageCircle, ShieldCheck } from "lucide-react";

// Decorative sketches of each module's screens. They show layout only: no real records or figures.
// All are aria-hidden; the case file text carries the information.

const frame = "overflow-hidden rounded border border-ink bg-raised text-[13px] leading-snug";
const bar = "flex items-center justify-between gap-3 border-b border-rule px-4 py-2.5";

const REPAIR = ["Draft", "Diagnosis", "Repair", "Invoiced"];
const FLOW = [
  { step: "Intake", app: "Fleet · Website" },
  { step: "Technician", app: "Wizard" },
  { step: "Parts", app: "Stock" },
  { step: "Invoice", app: "Sales · QWeb" },
];

export function RepairMock() {
  return (
    <div aria-hidden="true" className={frame}>
      <div className={bar}>
        <span className="truncate text-muted">Repairs / <span className="text-ink">RO/0042</span></span>
        <span className="rounded-sm bg-ink px-2 py-0.5 font-mono text-[11px] text-paper">Create invoice</span>
      </div>
      <div className="flex gap-1 px-4 pt-3">
        {REPAIR.map((stage, i) => (
          <span key={stage} className={`mock-step flex-1 truncate rounded-sm px-2 py-1 text-center font-mono text-[11px] ${i === 2 ? "bg-signal text-on-signal" : i < 2 ? "bg-sunken text-ink" : "border border-rule text-muted"}`} style={{ "--d": `${i * 180}ms` } as React.CSSProperties}>
            {stage}
          </span>
        ))}
      </div>
      <ol className="grid grid-cols-2 gap-px bg-rule p-px m-4 sm:grid-cols-4">
        {FLOW.map(({ step, app }, i) => (
          <li key={step} className="bg-raised p-3">
            <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
            <span className="mt-1 block font-medium">{step}</span>
            <span className="block truncate text-muted">{app}</span>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2 border-t border-rule px-4 py-3">
        <span className="tag"><MessageCircle size={12} /> WhatsApp / SMS</span>
        <span className="tag"><ShieldCheck size={12} /> Record rules</span>
        <span className="tag"><Check size={12} /> Payment gateway</span>
      </div>
    </div>
  );
}

const BARS = [38, 52, 44, 68, 58, 76, 64, 88, 72, 94];

export function DashboardMock() {
  return (
    <div aria-hidden="true" className={frame}>
      <div className={bar}>
        <span className="font-medium">Accounting overview</span>
        <span className="tag">01 Apr → 30 Jun</span>
      </div>
      <div className="grid grid-cols-3 gap-px border-b border-rule bg-rule">
        {["Revenue", "Receivable", "Payable"].map((label, i) => (
          <div key={label} className="bg-raised p-3">
            <span className="block truncate font-mono text-[11px] uppercase tracking-wide text-muted">{label}</span>
            <span className={`mock-fill mt-2 block h-2 rounded-sm ${["w-4/5 bg-ink", "w-3/5 bg-signal", "w-2/5 bg-muted"][i]}`} />
          </div>
        ))}
      </div>
      <div className="flex h-32 items-end gap-1.5 px-4 pt-4">
        {BARS.map((height, i) => (
          <span key={i} className={`mock-bar flex-1 ${i === BARS.length - 1 ? "bg-signal" : "bg-muted"}`} style={{ height: `${height}%`, "--d": `${i * 50}ms` } as React.CSSProperties} />
        ))}
      </div>
      <p className="flex justify-between border-t border-rule px-4 py-2.5 font-mono text-[11px] text-muted">
        <span>account.move.line</span>
        <span className="text-posted">● live</span>
      </p>
    </div>
  );
}

const DESIGN_STATES = ["Design", "Approved", "Sample", "Production"];
const SIZES = ["S", "M", "L", "XL"];
const COLOURS = ["var(--ink)", "var(--signal)", "var(--posted)"];

export function StitchFlowMock() {
  return (
    <div aria-hidden="true" className={frame}>
      <div className={bar}>
        <span className="truncate font-medium">Garment Design / <span className="text-muted">GD-0117</span></span>
        <span className="rounded-sm border border-signal px-2 py-0.5 font-mono text-[11px] text-signal">Sample</span>
      </div>
      <div className="grid sm:grid-cols-[1.1fr_1fr]">
        <div className="p-4">
          <div className="flex gap-1">
            {DESIGN_STATES.map((state, i) => (
              <span key={state} className={`mock-fill h-1.5 flex-1 ${i < 3 ? "bg-ink" : "bg-sunken"}`} style={{ "--d": `${i * 120}ms` } as React.CSSProperties} />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between font-mono text-[10px] text-muted">
            {DESIGN_STATES.map((state) => <span key={state}>{state}</span>)}
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-wide text-muted">Variants · size × colour</p>
          <div className="mt-2 grid grid-cols-4 gap-1">
            {COLOURS.flatMap((colour) =>
              SIZES.map((size) => (
                <span key={colour + size} className="flex items-center gap-1.5 border border-rule px-1.5 py-1 font-mono text-[11px]">
                  <span className="h-2 w-2" style={{ background: colour }} />
                  {size}
                </span>
              )),
            )}
          </div>
        </div>
        <div className="border-t border-rule p-4 sm:border-l sm:border-t-0">
          <p className="font-medium">Job card timing</p>
          {["Cutting", "Stitching", "Finishing"].map((stage, i) => (
            <div key={stage} className="mt-3">
              <div className="flex justify-between font-mono text-[10px] text-muted"><span>{stage}</span><span>est. / actual</span></div>
              <div className="mt-1 space-y-0.5">
                <span className="mock-fill block h-1.5 bg-rule" style={{ width: `${[70, 85, 55][i]}%` }} />
                <span className="mock-fill block h-1.5 bg-ink" style={{ width: `${[62, 92, 50][i]}%`, "--d": "150ms" } as React.CSSProperties} />
              </div>
            </div>
          ))}
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="tag"><ShieldCheck size={12} /> No self-approval</span>
            <span className="tag"><Check size={12} /> CI tests</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MOCKS: Record<string, () => React.JSX.Element> = {
  "garment-erp": StitchFlowMock,
  "vehicle-repair": RepairMock,
  "accounting-dashboard": DashboardMock,
};
