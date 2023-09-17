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
    keyframes: {
      open: {
        '0%, 25%': { transformOrigin: 'top left', transform: 'scaleY(0)' },
        '50%, 75%': { transformOrigin: 'top left', transform: 'scaleY(0.5)' },
        '75%, 100%': { transformOrigin: 'top left', transform: 'scaleY(1)' }
      }
    }
  },
  plugins: [],
}