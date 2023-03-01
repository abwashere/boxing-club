import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-white': '#FFFFFF',
  '--my-black': '#000000',
  '--my-gray-light': '#eeeeee',
  '--my-gray': '#7F7F7F',
  '--my-gray-dark': '#3B3B3B',
  '--my-green': '#08693A',
  '--my-yellow': '#F0D212',
  '--my-orange': '#F08812',
  '--my-red': '#DB4437',
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': props['--my-gray'],
  '--gray-base': props['--my-gray'],

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-gray-dark'],

  /* Brand */
  '--brand-primary': props['--my-gray'],

  // Default button
  '--default-button-color': props['--my-gray'],
  '--default-button-primary-color': props['--my-gray'],
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
