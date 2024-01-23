/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 8px 32px rgba(17, 17, 26, 0.05)',
      }
    },
  },
  plugins: [],
}

