import { nav, site } from "@/content/site";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex min-h-11 items-center font-semibold">{site.name}</a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="-mr-3 flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="flex min-h-11 items-center px-3 text-sm text-slate hover:text-ink">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
