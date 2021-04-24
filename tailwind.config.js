module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        fontFamily: {
          Goudy: ['Goudy Bookletter 1911', 'serif'],
          Orlega: ['Orelega One', 'cursive']
        }

      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
