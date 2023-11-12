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
        'Richblack':'#2c3e50',
        "semiwhite":"#d0f4de",
        "nav":"#494a4d",
        "ss":"#434343",
        "dd":"#000000",
        "bottem":"#323232",
        "xx":" #3F3F3F",
        "bb":"#1C1C1C"

        

       },
       spacing: {
        '128': '26rem',
        "129":'31.3rem',
        '130':'32rem'
      }
    },
  },
  plugins: [],
}