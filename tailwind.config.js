/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      xs: ["0.0.563rem", { lineHeight: "1.75" }],
      sm: ["0.75rem", { lineHeight: "1.75" }],
      base: ["1rem", { lineHeight: "1.75" }],
      lg: ["1.333rem", { lineHeight: "1.3" }],
      xl: ["1.777rem", { lineHeight: "1.3" }],
      "2xl": ["2.369rem", { lineHeight: "1.3" }],
      "3xl": ["3.157rem", { lineHeight: "1.3" }],
      "4xl": ["4.209rem", { lineHeight: "1.3" }],
      "5xl": ["5.61rem", { lineHeight: "1.3" }],
      "6xl": ["7.478rem", { lineHeight: "1.3" }],
    },
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        dark: "#08081A",
        yellow: {
          base: "#FCD13A",
          dark: "#F6CC33",
          darker: "#DFB932",
        },
        salmon: "#F08B7A",
        violet: "#535BF5",
        "violet-light": "#9C9DE7",
        pink: "#ED4B9E",
      },
    },
  },
  plugins: [],
};
