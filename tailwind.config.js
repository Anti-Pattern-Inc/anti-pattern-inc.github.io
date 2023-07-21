/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ap-green': '#4eacba',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
