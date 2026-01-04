/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Define custom font families linked to CSS variables
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
      },
    },
  },
  plugins: [],
};