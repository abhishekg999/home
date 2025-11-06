import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        "theme-main-1": "#242424",
        "theme-main-2": "#1F2B28",
        "theme-main-3": "#43815B",
        "theme-main-4": "#55AC75",
        "theme-main-5": "#67D78E",
        "theme-main-6": "#65B596",
        "theme-main-7": "#64A49A",
        "theme-main-8": "#62929E",
        "theme-main-9": "#A7C2CC",
        "theme-main-10": "#EBF2FA",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      animation: {
        "text-reveal": "text-reveal .5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 150%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [require("@tailwindcss/typography")],
};
