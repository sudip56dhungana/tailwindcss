/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {

      colors:{
        "color-primary":"#232f3e",
        "color-dark":"#020276",
        "color-silver":"#797D7F"
      },
      width:{
        '23':'23%'
      }

    },
  },
  plugins: [],
}

