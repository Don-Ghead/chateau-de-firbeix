/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { 
        primary: 'Montserrat', 
        title: 'Gwendolyn'
      },
      backgroundImage: {
        'chateau-home': "url('~/public/images/chateau-homepage.jpeg')",
      },
      colors: {
        'chateau': {
          'primary': '#F5ECE5',    // Warm off-white
          'secondary': '#45523E',  // Muted green
          'accent': '#7F8C8D',     // Subtle gray
          'light': '#ECF0F1',      // Very light gray
          'dark': '#1A252F',       // Very dark slate
          'gold': '#BD9B60',       // Warm gold accent
          'cream': '#F5F1E6',      // Warm cream
        }
      },
    },
  },
  plugins: [],
}
