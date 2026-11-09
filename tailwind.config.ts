import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        tile: "var(--tile)",
        sunken: "var(--sunken)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        teal: "var(--teal)",
        "on-teal": "var(--on-teal)",
        "teal-soft": "var(--teal-soft)",
        plum: "var(--plum)",
        "plum-soft": "var(--plum-soft)",
        danger: "var(--danger)",
        brand: "var(--brand)",
        "on-brand": "var(--on-brand)",
        "on-brand-muted": "var(--on-brand-muted)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 1.2rem + 6.4vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em", fontWeight: "700" }],
        h2: ["clamp(2rem, 1.3rem + 3vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        h3: ["clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "700" }],
      },
      borderRadius: { tile: "1.5rem" },
      maxWidth: { page: "1240px", prose: "65ch" },
    },
  },
  plugins: [],
} satisfies Config;
