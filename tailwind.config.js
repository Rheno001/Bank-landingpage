/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{

      },
      colors:{
        'darkBlue': 'hsl(233, 26%, 24%)',
        'limeGreen':'hsl(136, 65%, 51%)',
        'brightCyan': 'hsl(192, 70%, 51%)',
        'greyishBlue': 'hsl(233, 8%, 62%)',
        'lightgreyishBlue': 'hsl(220, 16%, 96%)',
        'white': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
