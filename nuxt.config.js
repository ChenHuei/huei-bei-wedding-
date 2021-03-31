export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Server
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0', // default: localhost
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'huei-bei-wedding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/scrollmagic', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/svg-module#readme
    '@nuxtjs/svg',
    // https://github.com/ivodolenc/nuxt-gsap-module
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCvYugu3OInby9aby4-EvHTvmjPmErFnb4',
          authDomain: 'huei-bei-wedding.firebaseapp.com',
          databaseURL: 'https://huei-bei-wedding-default-rtdb.firebaseio.com',
          projectId: 'huei-bei-wedding',
          storageBucket: 'huei-bei-wedding.appspot.com',
          messagingSenderId: '5978109325',
          appId: '1:5978109325:web:de481dfc689b4a9e7779c4',
          measurementId: 'G-D5CK7VCDJM',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          storage: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['scrollmagic'],
  },

  stylelint: {
    fix: true,
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    cssPath: '~/assets/styles/tailwind.css',
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  gsap: {
    extraPlugins: {
      motionPath: true,
    },
  },
}
