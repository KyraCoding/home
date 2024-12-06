/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      height: {
        'header-height': '2.75rem',
        'main-content': 'calc(100vh - 2.75rem)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
}

