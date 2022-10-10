export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  head: {
    title: 'Rick and Morty API fetch with Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Rick and Morty API fetch with Nuxt',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Nuxt project - Rick and Morty API',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Rick and Morty API fetch with Nuxt',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Rick and Morty API fetch with Nuxt',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxt-rick-and-morty-api.vercel.app/share.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxt-rick-and-morty-api.vercel.app',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    linkExactActiveClass: 'text-white',
  },
}
