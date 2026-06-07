import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#18181b",
        foreground: "#f5f5f4",
        muted: "#a1a1aa",
        border: "#27272a",
        accent: {
          DEFAULT: "#f97316",
          foreground: "#0a0a0a",
          muted: "rgba(249, 115, 22, 0.2)",
        },
      },
      fontFamily: {
        mono: [
          "var(--font-jetbrains-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, #27272a 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249, 115, 22, 0.4), 0 0 24px rgba(249, 115, 22, 0.25)",
        "glow-sm": "0 0 12px rgba(249, 115, 22, 0.35)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow-glow": {
          textShadow: "0 0 10px rgba(249, 115, 22, 0.55)",
        },
      });
    }),
  ],
};

export default config;
