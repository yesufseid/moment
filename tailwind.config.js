/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
       colors:{
        'Richblack':'#2193b0',
        "bray":"#6dd5ed",
        "semiwhite":"#d0f4de",
        "nav":"#494a4d"

       },
       spacing: {
        '128': '29rem',
        "129":'32rem',
        '130':'32rem'
      }
    },
  },
  plugins: [],
}