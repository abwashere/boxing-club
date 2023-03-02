/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Same colos used in the Sanity Studio
      colors: {
        black: colors.black,
        white: colors.white,
        'gray-light': colors.slate['50'],
        gray: colors.slate['400'],
        'gray-dark': colors.slate['700'],
        yellow: colors.yellow['400'],
        green: colors.emerald['700'],
        orange: colors.orange['400'],
        red: colors.red['500'],
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Roboto Serif"', 'serif'],
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};
