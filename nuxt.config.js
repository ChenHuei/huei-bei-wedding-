require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Server
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0', // default: localhost
  // },
  router: {
    base: '/huei-bei-wedding/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'huei-bei-wedding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'huei & bei wedding information',
      },
      // meta
      { property: 'og:title', content: 'huei & bei weeding' },
      { property: 'og:description', content: 'huei & bei 的婚禮資訊' },
      {
        property: 'og:image',
        content: '/static/icons/android-icon-192x192.png',
      },
      { property: 'og:site_name', content: 'huei & bei weeding' },
      {
        property: 'og:url',
        content: 'https://chenhuei.github.io/huei-bei-wedding/',
      },
      { property: 'og:locale', content: 'zh_TW' },
      // pwa
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/static/icons/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/static/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/static/icons/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/static/icons/favicon-16x16.png',
      },
      // ie
      {
        name: 'msapplication-TileImage',
        content: '/static/icons/apple-icon-114x114.png',
      },
      {
        name: 'msapplication-TileColor',
        content: '#fcf6e6',
      },
      {
        name: 'theme-color',
        content: '#94763d',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      // for safari icons
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/static/icons/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/static/icons/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/static/icons/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/static/icons/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/static/icons/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/static/icons/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/static/icons/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/static/icons/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/static/icons/apple-icon-180x180.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/scrollmagic', ssr: false },
    { src: '@/plugins/detect-webp' },
    { src: '@/plugins/vue-youtube' },
  ],

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
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60,
      },
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID,
        },
        services: {
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
      name: 'huei & bei weeding',
      short_name: '婚禮資訊',
      description: 'huei & bei 的婚禮資訊',
      display: 'standalone',
      orientation: 'portrait-primary',
      background_color: '#fcf6e6',
      theme_color: '#94763d',
      dir: 'ltr',
      lang: 'en',
    },
    meta: {
      mobileAppIOS: 'yes',
      appleStatusBarStyle: 'black',
    },
    workbox: {
      preCaching: [],
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: 'https://cdn.snipcart.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
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
    viewer: false,
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
