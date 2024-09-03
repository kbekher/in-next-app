/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
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
