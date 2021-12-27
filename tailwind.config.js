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
        },
        '.color-gradient': {
          background: `linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);`
        },
        '.blue-gradient': {
          background: `radial-gradient(circle at 3% 7%, rgba(5, 45, 86, 1) 0%, rgba(5, 45, 86, 1) 100%)`
        },
        '.footer-gradient': {
          background: `radial-gradient(circle at 5% 7%, rgba(3, 25, 56, 1) 0%, rgba(5, 45, 86, 1) 100%);`
        },
        '.grid-blog': {
          gridTemplateColumns: `repeat(auto-fit, minmax(360px, 1fr))`
        },
        '.grid-footer': {
          gridTemplateColumns: `repeat(auto-fit, minmax(340px, 1fr))`
        },
        '.grid-row-blog': {
          gridRow : `1/3`
        },
        '.container-image': {
          width: `100%`,
          'div' : {
            position: `unset !important`
          } 
        },
        '.inside-img' : {
          objectFit: `contain`,
          width: `100%`,
          position: `relative !important`,
          height: `unset !important`
        }
        
      }
      addUtilities(utilities)
    })
  ],
}
