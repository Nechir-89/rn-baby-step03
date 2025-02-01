/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pLight: ["Poppins-Light", "sans-serif"],
        pRegular: ["Poppins-Regular", "sans-serif"],
        pBold: ["Poppins-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
}

