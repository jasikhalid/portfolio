import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-geist)", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
      colors: { ink: "#08090d", panel: "#101218", line: "#252938" },
      boxShadow: { glow: "0 0 60px rgba(122, 92, 255, .22)" },
    },
  },
  plugins: [],
} satisfies Config;
