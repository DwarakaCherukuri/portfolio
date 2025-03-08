/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-green': '#D6E6BB', // Adding custom colors 
        'hover-green': '#B1CD81',
        'stack-1': '#EB8A44', // Custom orange
        'stack-2': '#8EBA43',  // Custom green
        'stack-3': '#F9DC24', // Custom yellow
        'stack-4': '#4B7447', // Custom dark green
      },
    },
  },
  plugins: [],
}

