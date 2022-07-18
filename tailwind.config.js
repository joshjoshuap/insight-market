/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'black': '#040303',
      'white': '#F9F9F9',
      'grey': {
        'light': '#ECECEB',
        DEFAULT: '#373A40',
        'dark': '#1B1A17'
      },
      'red': {
        'light': '#EB4747',
        DEFAULT: '#F32424',
        'dark': '#B22727'
      },
      'blue': {
        'light': '#3AB4F2',
        DEFAULT: '#0078AA',
        'dark': '#187498'
      },
      'green': {
        'light': '#6BCB77',
        DEFAULT: '#3EC70B',
        'dark': '#357C3C'
      },
    }
  },
  plugins: [],
}
