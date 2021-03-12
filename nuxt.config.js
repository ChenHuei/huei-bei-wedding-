export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'huei-bei-wedding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/color.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
  build: {},

  stylelint: {
    fix: true,
  },
}
