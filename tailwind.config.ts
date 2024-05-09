import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        bounceArrow: "bounceArrow 2s infinite",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
      },
      colors: {
        primary: "#1f2937", // Fond principal
        secondary: "#374151", // Carte de fond
        textMain: "#e5e7eb", // Texte principal
        textSecondary: "#9ca3af", // Texte secondaire
        accentGreen: "#f97316", // Accent vert clair
        accentPink: "#60a5fa", // Accent rose vif
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bounceArrow: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-15px)",
          },
          "60%": {
            transform: "translateY(-10px)",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
