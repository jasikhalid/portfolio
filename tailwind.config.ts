import type { Config } from "tailwindcss";

// Every colour is a CSS variable from app/globals.css, so light/dark and the theme override are handled in one place.
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        raised: "var(--raised)",
        sunken: "var(--sunken)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        signal: "var(--signal)",
        "on-signal": "var(--on-signal)",
        posted: "var(--posted)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.9rem, 1.4rem + 6.6vw, 7.25rem)", { lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "600" }],
        h2: ["clamp(2.1rem, 1.3rem + 3.2vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "600" }],
        h3: ["clamp(1.35rem, 1.15rem + 0.8vw, 1.85rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        lead: ["clamp(1.125rem, 1.05rem + 0.35vw, 1.3rem)", { lineHeight: "1.55", letterSpacing: "-0.005em" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
      borderRadius: { sm: "4px", DEFAULT: "8px" },
      maxWidth: { page: "1360px", prose: "65ch" },
      transitionTimingFunction: { out: "cubic-bezier(0.22, 1, 0.36, 1)", "in-out": "cubic-bezier(0.65, 0, 0.35, 1)" },
      transitionDuration: { fast: "160ms", base: "320ms", slow: "700ms" },
    },
  },
  plugins: [],
} satisfies Config;
