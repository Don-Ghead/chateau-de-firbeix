/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#22223B',
        tan: '#F2E9E4',
        light: '#9A8C98',
        beige: '#C9ADA7',
      },
      fontFamily: { primary: 'cenzel', title: 'Gwendolyn' },
      backgroundImage: {
        'chateau-home': "url('~/public/images/countryside.jpg')",
      },
    },
    borderColor: { primary: '#9A8C98' },
    textColor: { primary: '#4A4E69', secondary: '#9A8C98' },
  },
  plugins: [],
}
