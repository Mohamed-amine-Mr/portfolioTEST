/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable class-based dark mode

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Replace the default sans with Poppins
      },
    },
  },
  plugins: [],
};
