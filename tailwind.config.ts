import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0A0A0A",
        gold: {
          DEFAULT: "#B8860B",
          light: "#D4A843",
        },
        cream: "#FAF6F0",
        muted: "#6B6B6B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
