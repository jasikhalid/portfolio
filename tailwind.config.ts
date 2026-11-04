import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        sheet: "var(--sheet)",
        well: "var(--well)",
        ink: "var(--ink)",
        slate: "var(--slate)",
        green: "var(--green)",
        "on-green": "var(--on-green)",
        brass: "var(--brass)",
        "on-brass": "var(--on-brass)",
        rule: "var(--rule)",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1.0625rem", { lineHeight: "1.6" }],
        lg: ["1.1875rem", { lineHeight: "1.55" }],
        h3: ["clamp(1.125rem, 1rem + 0.4vw, 1.25rem)", { lineHeight: "1.35", fontWeight: "600" }],
        h2: ["clamp(1.5rem, 1.2rem + 1vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        h1: ["clamp(2.125rem, 1.4rem + 2.6vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
      },
      maxWidth: { prose: "68ch", page: "1120px" },
    },
  },
  plugins: [],
} satisfies Config;
