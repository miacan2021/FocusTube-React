module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
      'primary': '#bae8e8',
      'secondary': '#ffd803',
      'navy': '#272343',
      'blue': '#e3f6f5',
    })
  ,
    textColor: {
      'primary': '#bae8e8',
      'secondary': '#ffd803',
      'navy': '#272343',
      'blue': '#e3f6f5',
         }       
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
