/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
        inter: ["Inter", "sans"]
      },
      animation: {
        'load-image': 'load_image 800ms 1'
      },
      keyframes: {
        load_image: {
          '0%': {
            opacity: 0
          },
          '1%': {
            transform: 'translateY(7%)',
          },
          '100%': { 
            transform: 'translateY(0%)',
            opacity: 100
          },
        }
      }
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
    },
  },
  plugins: [],
}
