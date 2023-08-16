/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ps_test: "#ec4899",
      },
      fontFamily: {
        krub: ["Krub", "sans-serif"],
      },
    },
  },
  plugins: [],
};
