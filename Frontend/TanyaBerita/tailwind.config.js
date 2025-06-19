/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.module.css",
  ],
  theme: {
    extend: {
      colors: {
        "tanya-yellow": "#FDC554",
        "gray-500": "#6B7280",
      },
    },
  },
  plugins: [],
};
