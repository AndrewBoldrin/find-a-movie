/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        heading: {
          1: '36px',
          2: '28px',
        },
        subheading: '18px',
      }
    },
  },
  plugins: [],
}