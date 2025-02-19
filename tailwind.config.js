/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#08081A",
        "yellow-base": "#FCD13A",
        "yellow-dark": "#F6CC33",
        "yellow-darker": "#DFB932",
        "yellow-darker2": "#C99E03",
        salmon: "#F08B7A",
        violet: "#535BF5",
        "violet-light": "#9C9DE7",
        "violet-dark": "#4249c4",
        "violet-darker": "#323793",
        pink: "#ED4B9E",
        gray: "#3D404E",
      },
      dropShadow: {
        bottom: "0px 0.3rem 0px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
