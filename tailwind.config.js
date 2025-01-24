/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Inkludera HTML-filer
    "./src/**/*.{js,ts,jsx,tsx}" // Inkludera alla JS, TS, JSX och TSX-filer i `src`-mappen
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#105298',
      },
    },
  },
  plugins: []
};

