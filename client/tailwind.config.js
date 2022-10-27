/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    daisyui: {
      themes: [
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
      ],
    },
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
  ],
};
