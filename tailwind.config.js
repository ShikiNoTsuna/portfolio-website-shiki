/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'body': '#282828', 
        brightBlack: '#282828',
        brightRed: '#E84B60',
        brightBlue: '#8FD6E8'

      },
      fontFamily: {
        'rubik': ["'Rubik'", 'sans-serif'],
        'karla': ["'Karla'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

