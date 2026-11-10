import { nav, site } from "@/content/site";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--canvas) 85%, transparent)" }}>
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-2.5 font-display text-lg font-bold">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm text-canvas">JK</span>
          {site.name}
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-muted transition-colors hover:text-ink">{item.label}</a>
              </li>
            ))}
            <li className="ml-2">
              <a href="#contact" className="flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-canvas">Contact</a>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
