/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haikrom: {
          'dark-blue': '#0e375d',
          'brown': '#834f31',
          'red': '#ee3e23',
          'gray': '#b9b9b9',
          'gold': '#edb038',
          'cream': '#f9f6f4',
          'light': '#fffcfb',
        }
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
