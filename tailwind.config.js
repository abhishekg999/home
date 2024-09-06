/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "theme-main-1": "#242424", // eerie black
                "theme-main-2": "#1F2B28", // gunmetal
                "theme-main-3": "#43815B", // sea green
                "theme-main-4": "#55AC75", // jade
                "theme-main-5": "#67D78E", // emerald
                "theme-main-6": "#65B596", // mint
                "theme-main-7": "#64A49A", // verdigris
                "theme-main-8": "#62929E", // blue (munsell)
                "theme-main-9": "#A7C2CC", // light blue
                "theme-main-10": "#EBF2FA", // alice blue
            },
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)"
                ]
            }
        },
    },
    variants: {
        fill: ["hover", "focus"],
    },
    plugins: [],
};
