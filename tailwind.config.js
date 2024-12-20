/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-1000': '#3b0a45', // Custom very dark purple
      },
    },
  },
  plugins: [],
}
