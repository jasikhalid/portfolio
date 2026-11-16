"use client";

import { openPalette } from "./CommandPalette";

export default function PaletteButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button type="button" onClick={openPalette} className={className}>
      {children}
    </button>
  );
}
