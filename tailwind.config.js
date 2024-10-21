/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'persian-blue': {
          '50': 'hsl(222, 100%, 97%)',
          '100': 'hsl(225, 100%, 94%)',
          '200': 'hsl(225, 100%, 89%)',
          '300': 'hsl(228, 96%, 82%)',
          '400': 'hsl(232, 91%, 74%)',
          '500': 'hsl(236, 86%, 67%)',
          '600': 'hsl(241, 77%, 57%)',
          '700': 'hsl(242, 60%, 51%)',
          '800': 'hsl(241, 55%, 41%)',
          '900': 'hsl(240, 49%, 34%)',
          '950': 'hsl(241, 49%, 20%)',
      },
      },
      fontFamily:{
        'Inter': ['Inter', 'sans-serif'],
        'RaleWay': 'Raleway, sans-serif',
      }
    },
  },
  plugins: [],
}

