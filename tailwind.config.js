/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["Josefin Sans", "sans-serif"],
      primary: ["Poppins", "sans-serif"],
      secondary: ["Vast Shadow", "serif"],
    },
    colors: {
      transparent: "transparent",
      black: "#040D12",
      gray: "#1C2B2D",
      cyan: "#00FFAB",
      green: "#A2FF86",
      red: "#ED2B2A",
      silver: "#D2E9E9",
    },
  },
  plugins: [],
};
