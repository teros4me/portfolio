/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mygreen': {
          99: '#009900',
          88: '#008800',
          77: '#007700',
          66: '#006600',
          55: '#005500',
          44: '#004400',
          33: '#003300',
          22: '#002200',
          11: '#001100',
        },
      },
      fontFamily: {
        burtons: "burtons"
      }},
  },
  plugins: [],
}
