/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.ltr': {
          direction: 'ltr',
          'text-align': 'left',
        },
        '.rtl': {
          direction: 'rtl',
          'text-align': 'right',
        },
      });
    }),
  ],
}

