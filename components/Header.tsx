import Link from "next/link";
import type { ReactNode } from "react";
import { nav, site } from "@/content/site";

// Server component. The command palette (passed as children) is the only client part, and doubles as the mobile menu.
export default function Header({ children }: { children: ReactNode }) {
  return (
    <header className="sticky top-0 z-40 border-b border-rule backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--paper) 82%, transparent)" }}>
      <div className="page flex h-14 items-center justify-between gap-6">
        <Link href="/" className="group flex min-h-11 items-center gap-3 font-medium tracking-tight">
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-sm bg-ink font-mono text-[11px] font-medium text-paper transition-colors duration-fast group-hover:bg-signal group-hover:text-on-signal">
            JK
          </span>
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="group flex min-h-11 items-center gap-1.5 px-3 text-sm text-muted transition-colors duration-fast hover:text-ink">
                  <span className="font-mono text-[11px] transition-colors duration-fast group-hover:text-signal">{item.code}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </div>
    </header>
  );
}
