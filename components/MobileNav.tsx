"use client";

import { useRef, useState } from "react";
import { nav, site } from "@/content/site";

// A modal <dialog> gives us the focus trap, Esc to close and an inert page for free.
export default function MobileNav() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  function show() {
    dialog.current?.showModal();
    setOpen(true);
  }

  return (
    <div className="md:hidden">
      <button
        ref={trigger}
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="-mr-3 flex min-h-11 min-w-11 items-center px-3 text-sm font-semibold"
      >
        Menu
      </button>
      <dialog
        id="mobile-nav"
        ref={dialog}
        aria-label="Site navigation"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-0 mt-0 w-full max-w-none border-b border-rule bg-sheet p-0 text-ink"
      >
        <div className="flex h-14 items-center justify-between border-b border-rule px-4">
          <span className="font-semibold">{site.name}</span>
          <button type="button" onClick={() => dialog.current?.close()} className="-mr-3 flex min-h-11 items-center px-3 text-sm font-semibold">
            Close
          </button>
        </div>
        <nav aria-label="Main">
          <ul className="px-4 pb-4">
            {nav.map((item) => (
              <li key={item.href} className="border-t border-rule first:border-0">
                <a href={item.href} onClick={() => dialog.current?.close()} className="flex min-h-12 items-center text-lg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </div>
  );
}
