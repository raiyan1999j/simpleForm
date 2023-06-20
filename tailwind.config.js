/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Sigmar, cursive"],
      customHead:["Bruno Ace,cursive"]
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

