/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#94a3b8",
        tertiary: "#182133",
        "black-100": "#0b1220",
        "black-200": "#1f293d",
        "white-100": "#e2e8f0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #061018",
        glow: "0 0 20px rgba(38, 213, 243, 0.35), 0 0 60px rgba(38, 213, 243, 0.15)",
        "glow-lg": "0 0 30px rgba(38, 213, 243, 0.6), 0 0 90px rgba(38, 213, 243, 0.3)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-recolored.png')",
      },
    },
  },
  plugins: [],
};
