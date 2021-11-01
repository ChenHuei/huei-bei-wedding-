module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    darkSelector: '.dark-mode',
    fontFamily: {
      custom: 'Dancing Script',
    },
    extend: {
      inset: {
        0: 0,
        32: '8rem',
        full: '100%',
      },
      spacing: {
        68: '17rem',
        96: '24rem',
        128: '32rem',
        'calc((100%-2rem)/2)': 'calc((100% - 2rem) / 2)',
        'calc((100%-4rem)/3)': 'calc((100% - 4rem) / 3)',
      },
      colors: {
        primary: '#94763d',
        secondary: '#fcf6e6',
        tertiary: '#faa7bc',
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '70': '0.7',
        '95': '0.95',
      },
      textOpacity: {
        '95': '0.95',
      },
      rotate: {
        '-90': '-90deg',
      },
      translate: {
        '3/2': '150%',
      },
      zIndex: {
        50: 50,
      },
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive',
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
