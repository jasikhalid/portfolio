"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { contact, nav, work } from "@/content/site";

type Item = { id: string; group: string; label: string; hint: string; run: () => void | Promise<void>; keep?: boolean };

const OPEN_EVENT = "open-palette";

/** Lets any client button open the palette, e.g. on the 404 page. */
export function openPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function setTheme(theme: "light" | "dark" | "system") {
  const root = document.documentElement;
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {}
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
}

function go(href: string) {
  if (href.startsWith("http")) window.open(href, "_blank", "noopener,noreferrer");
  else window.location.href = href;
}

// A modal <dialog> gives the focus trap, Esc to close and an inert page for free.
// The same palette is the mobile menu, so there is one navigation component to keep accessible.
export default function CommandPalette() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [note, setNote] = useState("");
  const [mac, setMac] = useState(true);

  const items = useMemo<Item[]>(
    () => [
      ...nav.map((n) => ({ id: `nav-${n.code}`, group: "Go to", label: n.label, hint: n.code, run: () => go(n.href) })),
      ...work.map((w) => ({ id: `case-${w.slug}`, group: "Case files", label: w.title, hint: "Open", run: () => go(`/work/${w.slug}`) })),
      {
        id: "copy-email",
        group: "Contact",
        label: "Copy email address",
        hint: contact.email,
        keep: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(contact.email);
            setNote(`Copied ${contact.email}`);
          } catch {
            setNote(`Couldn't copy. The address is ${contact.email}`);
          }
        },
      },
      { id: "email", group: "Contact", label: "Write an email", hint: "mailto", run: () => go(`mailto:${contact.email}`) },
      { id: "whatsapp", group: "Contact", label: "Message on WhatsApp", hint: "↗", run: () => go(contact.whatsapp) },
      { id: "github", group: "Elsewhere", label: "GitHub", hint: "↗", run: () => go(contact.github) },
      { id: "linkedin", group: "Elsewhere", label: "LinkedIn", hint: "↗", run: () => go(contact.linkedin) },
      { id: "resume", group: "Elsewhere", label: "Download résumé (PDF)", hint: "PDF", run: () => go(contact.resume) },
      { id: "theme-light", group: "Theme", label: "Light theme", hint: "Paper", keep: true, run: () => { setTheme("light"); setNote("Light theme on"); } },
      { id: "theme-dark", group: "Theme", label: "Dark theme", hint: "Ink", keep: true, run: () => { setTheme("dark"); setNote("Dark theme on"); } },
      { id: "theme-system", group: "Theme", label: "Match my system", hint: "Auto", keep: true, run: () => { setTheme("system"); setNote("Theme follows your system"); } },
    ],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.group} ${item.label} ${item.hint}`.toLowerCase().includes(q));
  }, [items, query]);

  function open() {
    const el = dialog.current;
    if (!el || el.open) return;
    setQuery("");
    setActive(0);
    setNote("");
    el.showModal();
    input.current?.focus();
  }

  useEffect(() => {
    setMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
    function onKey(e: globalThis.KeyboardEvent) {
      const typing = e.target instanceof HTMLElement && (e.target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName));
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else open();
      } else if (e.key === "/" && !typing && !dialog.current?.open) {
        e.preventDefault();
        open();
      }
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, open);
    };
  }, []);

  async function run(item: Item | undefined) {
    if (!item) return;
    await item.run();
    if (!item.keep) dialog.current?.close();
  }

  function onInputKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const step = e.key === "ArrowDown" ? 1 : -1;
      setActive((i) => (results.length ? (i + step + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      void run(results[active]);
    }
  }

  useEffect(() => {
    document.getElementById(`cmd-${results[active]?.id}`)?.scrollIntoView({ block: "nearest" });
  }, [active, results]);

  const groups = [...new Set(results.map((item) => item.group))];

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-controls="command-palette"
        className="flex min-h-11 items-center gap-3 rounded-sm border border-rule px-3 text-sm transition-colors duration-fast hover:border-ink"
      >
        <span className="lg:hidden">Menu</span>
        <span className="hidden lg:inline">Jump to</span>
        <kbd className="hidden rounded-sm bg-sunken px-1.5 py-0.5 font-mono text-[11px] text-muted sm:inline" suppressHydrationWarning>
          {mac ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>

      <dialog
        id="command-palette"
        ref={dialog}
        aria-label="Command menu"
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-0 mx-auto mt-[8vh] w-[calc(100%-1.5rem)] max-w-xl overflow-hidden rounded border border-rule bg-raised p-0 text-ink shadow-[var(--lift)] max-sm:mt-3"
      >
        <div className="flex items-center gap-3 border-b border-rule px-4">
          <span aria-hidden="true" className="font-mono text-sm text-signal">&gt;</span>
          <input
            ref={input}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            role="combobox"
            aria-expanded="true"
            aria-controls="command-results"
            aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
            aria-label="Type a command or search"
            placeholder="Type a command or search…"
            autoComplete="off"
            spellCheck={false}
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
          />
          <button type="button" onClick={() => dialog.current?.close()} className="label flex min-h-11 items-center rounded-sm px-2 hover:text-ink">
            Esc
          </button>
        </div>

        <div id="command-results" role="listbox" aria-label="Commands" className="max-h-[min(60vh,26rem)] overflow-y-auto p-2">
          {groups.map((group) => (
            <div key={group} role="group" aria-labelledby={`cmd-group-${group.replace(/\W+/g, "-")}`}>
              <p id={`cmd-group-${group.replace(/\W+/g, "-")}`} className="label px-3 pb-1.5 pt-3">{group}</p>
              {results.map((item, i) =>
                item.group !== group ? null : (
                  <div
                    key={item.id}
                    id={`cmd-${item.id}`}
                    role="option"
                    aria-selected={i === active}
                    onMouseMove={() => setActive(i)}
                    onClick={() => void run(item)}
                    className={`flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-sm px-3 text-[15px] ${i === active ? "bg-ink text-paper" : ""}`}
                  >
                    <span className="truncate">{item.label}</span>
                    <span className={`shrink-0 truncate font-mono text-xs ${i === active ? "text-paper" : "text-muted"}`}>{item.hint}</span>
                  </div>
                ),
              )}
            </div>
          ))}
          {!results.length && <p className="px-3 py-6 text-center text-muted">No command matches “{query}”.</p>}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-rule px-4 py-2.5">
          <p role="status" aria-live="polite" className="truncate text-sm text-posted">{note}</p>
          <p className="label hidden shrink-0 sm:block">↑↓ to move · Enter to run</p>
        </div>
      </dialog>
    </>
  );
}
