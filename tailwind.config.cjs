const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'primary-dark': '#0F172A',
        'background-dark': '#0F172A',
        'container-dark': '#202535',
        'container-hover': '#2D447C',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
