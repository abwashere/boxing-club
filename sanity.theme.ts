import { buildLegacyTheme } from 'sanity';

const colors = require('tailwindcss/colors');

const props = {
  '--my-white': colors.white,
  '--my-black': colors.black,
  '--my-gray-light': colors.neutral['50'],
  '--my-gray': colors.neutral['400'],
  '--my-gray-dark': colors.neutral['800'],
  '--my-yellow': colors.yellow['400'],
  '--my-green': colors.emerald['700'],
  '--my-orange': colors.orange['400'],
  '--my-red': colors.red['500'],
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': props['--my-gray'],
  '--gray-base': props['--my-gray'],

  '--component-bg': props['--my-gray'],
  '--component-text-color': props['--my-gray-light'],

  /* Brand */
  '--brand-primary': props['--my-gray'],

  // Default button
  '--default-button-color': props['--my-gray'],
  '--default-button-primary-color': props['--my-yellow'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-orange'],
  '--default-button-danger-color': props['--my-red'],

  /* State */
  '--state-info-color': props['--my-gray'],
  '--state-success-color': props['--my-green'],
  '--state-warning-color': props['--my-yellow'],
  '--state-danger-color': props['--my-red'],

  /* Navbar */
  '--main-navigation-color': props['--my-gray-dark'],
  '--main-navigation-color--inverted': props['--my-gray-light'],

  '--focus-color': props['--my-yellow'],
});
