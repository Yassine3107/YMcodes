/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scale: {
        '200': '2',
        '300': '3',
        '400': '4',
      },
      boxShadow: {
        'bottom-sh': '0 15px 17px -7px rgba(0, 0, 0, 0.3)',
      },
      
    },
    screens: {
      'xs': {'max': '639px'},

      'sm': {'min': '640px', 'max': '767px'},

      'md': {'min': '768px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1575px'},

      'sm-2xl': {'max': '1575px'},


      'smt': {'max': '768px'},
      'lgt': {'min': '768px'},
      'lgt-1400': {'min': '1400px'},
      'smt-1400': {'max': '1400px'},
      'smt-1100': {'max': '1100px'},
      'smt-1130': {'max': '1129px'},
      'lgt-1130': {'min': '1129px'}




    },
  },
  plugins: [
  ],
}
