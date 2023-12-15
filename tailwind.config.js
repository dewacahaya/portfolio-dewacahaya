/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./script/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        quicksand: ["Quicksand"],
      },
      colors: {
        primary: ["#053B50"],
        navbar: ["#176B87"],
        hover: ["#64CCC5"],
        text: ["#EEEEEE"],
      },
      screens: {
        "2xl": "1328px",
      },
    },
  },
  plugins: [],
};
