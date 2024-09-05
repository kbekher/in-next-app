/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}', './components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      translate: {
        '-1/2': '-50%',
      },
    },
  },
  plugins: [],
};
