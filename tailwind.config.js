/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        overpass: ['"Overpass"', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        orange: {
          main: 'hsl(25, 97%, 53%)'
        },
        blue:{
          dark: 'hsl(213, 19%, 18%)',
          veryDark: 'hsl(216, 12%, 8%)'
        },
        grey:{
          light: 'hsl(217, 12%, 63%)'
        }
      }
    },
  },
  plugins: [],
}

