/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-dark": "#111"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}