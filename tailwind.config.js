/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: '#f1f1f1',
        'light-grey': '#fafafa',
        'dark-grey': '#fcfcfc',
      }
    },
  },
  plugins: [],
}

