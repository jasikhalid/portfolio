import { Fragment } from "react";

// Odoo technical names (account.move, ir.rule) are real identifiers, so they get the mono face.
const IDENTIFIER = /\b((?:ir|account|res|stock|sale)\.[a-z_]+(?:\.[a-z_]+)*)\b/g;

export function WithCode({ text }: { text: string }) {
  return text.split(IDENTIFIER).map((part, i) =>
    i % 2 ? <code key={i} className="font-mono text-[0.92em]">{part}</code> : <Fragment key={i}>{part}</Fragment>,
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(value: string) {
  const [year, month] = value.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
}

export function DateRange({ start, end }: { start: string; end?: string }) {
  const from = <time dateTime={start}>{formatDate(start)}</time>;
  if (end === start) return from;
  return <>{from} – {end ? <time dateTime={end}>{formatDate(end)}</time> : "now"}</>;
}
