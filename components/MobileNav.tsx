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
        className="flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-canvas"
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
        className="m-0 mt-0 w-full max-w-none rounded-b-tile border-b border-line bg-tile p-0 text-ink"
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-4">
          <span className="font-display text-lg font-bold">{site.name}</span>
          <button type="button" onClick={() => dialog.current?.close()} className="flex min-h-11 items-center rounded-full border border-line px-5 text-sm font-semibold">
            Close
          </button>
        </div>
        <nav aria-label="Main">
          <ul className="px-4 pb-4">
            {nav.map((item) => (
              <li key={item.href} className="border-t border-line first:border-0">
                <a href={item.href} onClick={() => dialog.current?.close()} className="flex min-h-12 items-center font-display text-xl font-bold">
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
