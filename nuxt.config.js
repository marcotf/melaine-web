export default {
  mode: 'spa',
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    phoneNumber: process.env.PHONE_NUMBER,
    localisation: process.env.LOCALISATION,
    email: process.env.EMAIL,
    price: process.env.PRICE || 50,
    homePrice: process.env.HOME_PRICE || 60,
    googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || null,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  privateRuntimeConfig: {},
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: { lang: 'fr' },
    title: 'Melaine Nieuwjaer - Etiopathe - Dunkerque',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc).`
      },
      { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Mélaine Nieuwjaer - Etiopathe - Dunkerque'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Mélaine Nieuwjaer'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc).`
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Mélaine Nieuwjaer - Etiopathe - Dunkerque'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: `L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc).`
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
    { src: '~/plugins/vue-expandable.js', ssr: false },
    { src: '~/plugins/vue-burger-menu.js', ssr: false }
  ],
  /*
   ** Server middleware
   */
  serverMiddleware: ['~/middleware/format_url'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  /*
   ** FontAwesome icon loading
   */
  fontawesome: {
    icons: {
      solid: ['faPhoneAlt', 'faAt', 'faMapMarkerAlt', 'faEuroSign', 'faBars'],
      regular: ['faClock'],
      brands: ['faFacebookSquare', 'faLinkedin']
    }
  },
  /*
   ** Robot.txt setup
   */
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://etiopathedunkerque.fr/sitemap.xml'
  },
  /*
   ** Sitemap.xml setup
   */
  sitemap: {
    hostname: 'https://etiopathedunkerque.fr'
  },
  /*
   ** Build configuration
   */
  build: {}
};
