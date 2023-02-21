/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightgrey':{
          '100': '#f6f6f6',
          '200': '#545454',
          '300': '#a0a0e2'
        } 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}