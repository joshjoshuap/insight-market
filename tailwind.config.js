/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#F5F5F5",
        black: "#040D12",
        gray: "#1C2B2D",
        cyan: "#00FFAB",
        green: "#A2FF86",
        red: "#ED2B2A",
        silver: "#D2E9E9",
      },
    },
    fontFamily: {
      josefinSans: ["Josefin Sans"],
      poppins: ["Poppins"],
      vastShadow: ["Vast Shadow"],
    },
  },
  plugins: [],
};
