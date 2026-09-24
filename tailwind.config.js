/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        upc: {
          red: '#E4002B',
          'red-dark': '#C30022',
          'red-light': '#FFF0F2',
          navy: '#1A2340',
          blue: '#2563EB',
          'purple-pill': '#DBD9FF',
          'purple-text': '#4C3BCF',
          'bg-gray': '#F5F7FB',
          'card-border': '#EAEAEA',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        solano: ['"Solano Gothic MVB"', '"Oswald"', 'sans-serif'],
        applied: ['"AppliedSans Pro"', '"Inter"', 'sans-serif'],
        condensed: ['"Solano Gothic MVB"', '"Oswald"', '"Barlow Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
