/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'home-banner':
          "linear-gradient(to right bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/assets/banner2.webp')"
      }
    }
  },
  plugins: []
}
