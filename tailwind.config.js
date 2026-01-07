/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        staff: {
          dark: "#0C0F1A",
          light: "#EAF6FF",
          blue: "#0B68C0",
          cyan: "#1EB1F5",
        },
      },
    },
  },
  plugins: [],
};





