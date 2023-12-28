/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        'custom-blue': '#0C356A',
      },
      height: {
        '130vh': '130vh',
        // '150vh': '150vh',
      },
    },
  },
  plugins: [],
}