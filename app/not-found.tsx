import Link from "next/link";
import PaletteButton from "@/components/PaletteButton";

export const metadata = { title: "Record not found" };

export default function NotFound() {
  return (
    <section className="page flex min-h-[70vh] flex-col justify-center py-24">
      <p className="label tnum"><span className="text-signal">404</span> · Error</p>
      <div aria-hidden="true" className="draw mt-4 h-px bg-ink" />
      <h1 className="enter mt-10 max-w-[16ch] text-display">No record matches this reference.</h1>
      <p className="enter mt-6 max-w-prose text-lead text-muted" style={{ "--d": "120ms" } as React.CSSProperties}>
        The page may have moved, or the link has a typo. Go back to the start, or search for what you wanted.
      </p>
      <div className="enter mt-10 flex flex-wrap gap-3" style={{ "--d": "200ms" } as React.CSSProperties}>
        <Link href="/" className="btn btn-primary">Back to the start <span aria-hidden="true" className="arrow">→</span></Link>
        <PaletteButton className="btn btn-ghost">Search the site</PaletteButton>
      </div>
    </section>
  );
}
