import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7efe6",
        sand: "#efe2d0",
        navy: "#1f3a5f",
        orange: "#e0603a",
        ember: "#b5421f",
        peach: "#f3c9a8",
        sage: "#9fbfae",
        moss: "#3f6b55",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
