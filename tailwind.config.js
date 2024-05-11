/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors:{
        'pink-1' : '#A35B7F',
        'pink-2' : '#CB87A8',
        'sidebar' : '#403257',
        'background' : '#E3D8F1',
        'config-menu' : '#69548C',
        'branco' : '#F6F2FB',
        'purple' : '#3e1f47',
      },
  },
  plugins: [],
}

