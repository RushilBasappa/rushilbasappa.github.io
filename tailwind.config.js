/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
    },
    fontFamily: {
      allura: ["allura"],
    },
  },
  plugins: [],
};
