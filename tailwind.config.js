/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6c502e",
        secondary: "#bfa77f",
        tertiary: "#d3c7b3",
        'custom-white':"#e7e7e7",
        'custom-green':"#8bae5d"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
