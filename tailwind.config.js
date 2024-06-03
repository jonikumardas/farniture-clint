/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'error': "url('/src/assets/errorpage.jpg')",
      },
      colors: {
         // coustom 
        'green': '#66a96b',
        'green-btn': '#66a96b',
        'purple': '#7e5bef',
        'coustom-color': 'rgb(51, 148, 65)',
        'orange': '#ff7849',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

