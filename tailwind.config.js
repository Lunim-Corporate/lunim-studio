/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Noto Sans Display Variable', 'sans-serif'],
        secondary: ['Inter Variable', 'sans-serif'],
      },
      fontSize: {
        min: '12pt',
        max: '96pt',
        body: '14pt',
        subheading: '18pt',
        heading: '22pt',
      },
      lineHeight: {
        min: '1',
        max: '1.5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), 
  ],
};