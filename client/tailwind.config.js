/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    extend: {},
  },
  plugins: [require('tailwindcss-filters')],
};
