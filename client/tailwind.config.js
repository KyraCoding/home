/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-1': '#00BFFF',
        'azure': '#007FFF',
        'blue-1': '#0040FF',
        'blue-2': '#0000FF',
        'blue-3': '#4000FF',
        'purple-1': '#7F00FF',
        'purple-2': '#BF00FF',
        'pink-1': '#FF00FF',
      },
      fontFamily: {
        roboto: ['"Roboto Mono"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

