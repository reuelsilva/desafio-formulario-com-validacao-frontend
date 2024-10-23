/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-01': '#032443',
        'color-02': '#0000007d',
      }
    },
  },
  plugins: [],
}