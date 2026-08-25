import type { Config } from "tailwindcss";

export default {
  content: ["./client/index.html", "./client/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "architectural-cream": "hsl(var(--architectural-cream) / <alpha-value>)",
        "rose-antique": "hsl(var(--rose-antique) / <alpha-value>)",
        terracotta: "hsl(var(--terracotta) / <alpha-value>)",
        "sage-green": "hsl(var(--sage-green) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        playfair: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
