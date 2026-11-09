import { Car, Check, FileText, MessageCircle, Package, ReceiptText, ShieldCheck, Wrench } from "lucide-react";

// Decorative sketches of the two modules. They show layout only: no real records or figures.

const STAGES = ["Draft", "Diagnosis", "Repair", "Done"];

export function RepairMock() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-line bg-tile text-[13px]">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <span className="truncate text-muted">Repairs / <span className="font-semibold text-ink">New repair order</span></span>
        <span className="shrink-0 rounded-md bg-teal px-2.5 py-1 font-semibold text-on-teal">Create invoice</span>
      </div>
      <div className="flex gap-1 overflow-hidden px-4 pt-3">
        {STAGES.map((stage, i) => (
          <span
            key={stage}
            data-step={i}
            className={`mock-stage rounded-full px-2.5 py-1 font-medium ${
              i < 2 ? "bg-teal-soft text-teal" : i === 2 ? "bg-teal text-on-teal" : "bg-sunken text-muted"
            }`}
          >
            {stage}
          </span>
        ))}
      </div>
      <dl className="grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-2.5 px-4 py-4">
        <dt className="text-muted">Vehicle</dt>
        <dd className="font-medium">Fleet record</dd>
        <dt className="text-muted">Customer</dt>
        <dd className="font-medium">Linked contact</dd>
        <dt className="text-muted">Technician</dt>
        <dd className="flex items-center gap-2 font-medium">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-plum-soft text-[10px] font-bold text-plum">T</span>
          Assigned
        </dd>
        <dt className="text-muted">Parts</dt>
        <dd className="flex items-center gap-2">
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-sunken">
            <span className="mock-fill block h-full w-2/3 rounded-full bg-teal" />
          </span>
          <span className="text-muted">Stock</span>
        </dd>
      </dl>
      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
        <span className="chip gap-1.5"><MessageCircle size={13} /> WhatsApp update</span>
        <span className="chip gap-1.5"><FileText size={13} /> QWeb report</span>
        <span className="chip gap-1.5 text-teal"><Check size={13} /> Record rules</span>
      </div>
    </div>
  );
}

const BARS = [38, 52, 44, 68, 58, 76, 64, 88];

export function DashboardMock() {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-line bg-tile p-4 text-[13px]">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Accounting</span>
        <span className="chip">Date range</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Revenue", "Receivable", "Payable"].map((label, i) => (
          <div key={label} className="rounded-xl bg-sunken p-2.5">
            <span className="block truncate text-[11px] text-muted">{label}</span>
            <span className={`mt-1.5 block h-2.5 rounded-full ${["w-4/5 bg-teal", "w-3/5 bg-plum", "w-2/5 bg-line"][i]}`} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-28 items-end gap-1.5">
        {BARS.map((height, i) => (
          <span key={i} className={`mock-bar flex-1 rounded-t-md ${i === BARS.length - 1 ? "bg-teal" : "bg-teal-soft"}`} style={{ height: `${height}%` }} />
        ))}
      </div>
      <p className="mt-2 text-[11px] text-muted">account.move · live</p>
    </div>
  );
}

const FLOW = [
  { icon: Car, step: "Intake", app: "Fleet · Website" },
  { icon: Wrench, step: "Technician", app: "Wizard" },
  { icon: Package, step: "Parts", app: "Stock" },
  { icon: ReceiptText, step: "Invoice", app: "Sales · QWeb" },
];

// How one repair order travels through Odoo apps in the module.
export function RepairFlow() {
  return (
    <div aria-hidden="true" className="text-[13px]">
      <ol className="grid grid-cols-2 gap-3">
        {FLOW.map(({ icon: Icon, step, app }, i) => (
          <li key={step} className="flex">
            <div className="flex w-full flex-col rounded-2xl border border-line bg-tile p-3.5">
              <span className={`grid h-9 w-9 place-items-center rounded-xl ${i === FLOW.length - 1 ? "bg-teal text-on-teal" : "bg-teal-soft text-teal"}`}>
                <Icon size={18} />
              </span>
              <span className="mt-3 font-semibold"><span className="mr-1.5 text-muted">{i + 1}</span>{step}</span>
              <span className="text-muted">{app}</span>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="chip gap-1.5 bg-tile"><MessageCircle size={13} /> WhatsApp / SMS updates</span>
        <span className="chip gap-1.5 bg-tile"><ShieldCheck size={13} /> Record rules per role</span>
        <span className="chip gap-1.5 bg-tile"><Check size={13} /> Payment gateway</span>
      </div>
    </div>
  );
}
