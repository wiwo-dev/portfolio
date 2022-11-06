/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        dark: "#08081A",
        yellow: "#FCD13A",
        salmon: "#F08B7A",
        violet: "#535BF5",
        "violet-light": "#9C9DE7",
        pink: "#ED4B9E",
      },
    },
  },
  plugins: [],
};
