
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          jungle: {
            50: '#e6f7f2',
            100: '#ccefe6',
            200: '#99dfcc',
            300: '#66cfb3',
            400: '#33bf99',
            500: '#00af80',
            600: '#008c66',
            700: '#00694d',
            800: '#004633',
            900: '#00231a'
          }
        },
        fontFamily: {
          sans: ['"Open Sans"', 'Arial', 'sans-serif']
        }
      }
    },
    plugins: [require('daisyui')]
  };
