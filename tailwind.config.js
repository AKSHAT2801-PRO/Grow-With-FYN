/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        fyn: {
          yellow: "#FFD21A",
          gold: "#F5B800",
          deep: "#B88400",
          ink: "#111111",
          steel: "#3A424A",
          chrome: "#C9D1D9",
          ice: "#F4F7FA",
        },
      },
      fontFamily: {
        display: ["Archivo Black", "Impact", "sans-serif"],
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        wide: ["Archivo", "system-ui", "sans-serif"],
      },
      boxShadow: {
        chrome: "0 18px 40px -12px rgba(17,17,17,.45), inset 0 1px 0 rgba(255,255,255,.7)",
        pop: "8px 8px 0 0 #111111",
      },
      keyframes: {
        sweep: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        sweep: "sweep 5s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
