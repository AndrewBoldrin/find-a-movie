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
      },
      colors: {
        orange: {
          primary: '#FF4017',
          secondary: '#FF623C',
        },
        red: {
          primary: '#C51E00',
          secondary: '#E52500',
        },
        dark: {
          primary: '#27282F',
          secondary: '#303139',
          contrast: {
            dark: '#3E3F48',
            light: '#51535C',
          }
        }
      }
    },
  },
  plugins: [],
}