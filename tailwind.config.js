/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{html,js,jsx,ts,tsx}', './components/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'gradient-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      maxWidth: {
        '1680': '1680px',
      },
      fontSize: {
        'responsive': 'clamp(24px, 5vw, 64px)',
      },
      animation: {
        'gradient-animation': 'gradient-animation ease-in-out infinite',
      },
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
