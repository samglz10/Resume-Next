/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


module.exports = {

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    // Standardize breakpoints here/
    screens: {
      'mobile': '640px',  // @media (min-width: 640px)
      'tablet': '768px',  // @media (min-width: 768px)
      'desktop': '1024px', // @media (min-width: 1024px)
      'wide': '1280px',   // @media (min-width: 1280px)
    },
    extend: {
      // Standardize your colors/theme here
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        background: 'var(--color-background)', // Use CSS variable for dynamic theming
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'html, body': { backgroundColor: theme('colors.background')},
      })
    })
  ],
}