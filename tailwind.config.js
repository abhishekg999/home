import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        gray: colors.zinc,
        accent: {
          DEFAULT: "#5eba7d",
          hover: "#6fca8e",
        },
        bg: "#0d1210",
        surface: "rgba(255, 255, 255, 0.02)",
        border: "rgba(255, 255, 255, 0.06)",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [require("@tailwindcss/typography")],
};
