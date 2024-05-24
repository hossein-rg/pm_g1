/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      inset: {
        '1px': '-100px',
      },
      spacing: {
        '1px': '-100px',
      }
    }
  },
  plugins: [],
}

