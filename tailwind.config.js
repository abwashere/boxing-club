/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const myBreakpoints = {
  tablet: '768px',
  laptop: '1024px',
  'laptop-lg': '1280px',
  desktop: '1440px',
};

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Same colors used in the Sanity Studio
      colors: {
        black: colors.black,
        white: colors.white,
        'gray-light': colors.neutral['50'],
        gray: colors.neutral['400'],
        'gray-dark': colors.neutral['800'],
        yellow: colors.yellow['400'],
        green: colors.emerald['700'],
        orange: colors.orange['400'],
        red: colors.red['500'],
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['"Roboto Serif"', 'serif'],
      },
      screens: myBreakpoints,
      maxWidth: {
        'laptop-lg': myBreakpoints['laptop-lg'],
      },
    },
  },
  plugins: [],
};
