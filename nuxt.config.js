export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Melaine Nieuwjaer - Etiopathe - Dunkerque',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-swiper.js', mode: 'client' },
    { src: '~/plugins/vue-expandable.js', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** FontAwesome icon loading
   */
  fontawesome: {
    icons: {
      solid: ['faPhoneAlt', 'faAt', 'faMapMarkerAlt', 'faEuroSign'],
      regular: ['faClock'],
      brands: ['faFacebookSquare', 'faLinkedin']
    }
  },
  /*
   ** Build configuration
   */
  build: {}
}
