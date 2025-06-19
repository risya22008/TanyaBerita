/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tanya-yellow': '#FDC554',
        'tanya-grey': '#F3F3F3',
      }
    },
  },
  plugins: [],
}