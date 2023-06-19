/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#EF3D32"
      },
      fontFamily:{
        'primary':['Poppins']
      }
    },
  },
  plugins: [],
}