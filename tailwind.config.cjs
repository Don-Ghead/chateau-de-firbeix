const defaultTheme = require('tailwindcss/defaultTheme') // Import default theme

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Define fontFamily directly under theme to override defaults
    fontFamily: {
      // Set Montserrat as the default sans-serif font
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: { 
        // Keep specific named fonts here if needed, e.g., for titles
        // primary: 'Montserrat', // Can remove this if 'sans' is default
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
