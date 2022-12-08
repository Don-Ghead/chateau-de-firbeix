/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { primary: 'cenzel', title: 'Gwendolyn' },
      backgroundImage: {
        'chateau-home': "url('~/public/images/chateau-homepage.jpeg')",
      },
    },
  },
  plugins: [],
}
