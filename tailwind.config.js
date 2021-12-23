const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'Manrope': ['Manrope', 'sans-serif']
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-gradient': {
          background: `radial-gradient(circle at 20% 22%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 0.96) 100%);`
        },
        '.text-gradient': {
          background: `linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)`,
          backgroundClip: `text`,
          textFillColor: `transparent`
        }
      }
      addUtilities(utilities)
    })
  ],
}
