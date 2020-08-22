export default {
  mode: 'spa',
  publicRuntimeConfig: {
    phoneNumber: process.env.PHONE_NUMBER,
    localisation: process.env.LOCALISATION,
    email: process.env.EMAIL,
    price: process.env.PRICE || 50,
    homePrice: process.env.HOME_PRICE || 60
  },
  privateRuntimeConfig: {},
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'fr'
    },
    title: 'Melaine Nieuwjaer - Etiopathe - Dunkerque',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc). Pour l’étiopathie, "seule la suppression de la cause empêchera l’effet de se reproduire".`
      },
      { hid: 'og:locale', name: 'og:locale', content: 'fr_FR' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Mélaine Nieuwjaer - Etiopathe - Dunkerque'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Mélaine Nieuwjaer'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: `L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc). Pour l’étiopathie, "seule la suppression de la cause empêchera l’effet de se reproduire".`
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://etiopathedunkerque.fr/'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://etiopathedunkerque.fr/images/melaine.jpg'
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
        content: `L’étiopathie s’attache en priorité à déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc). Pour l’étiopathie, "seule la suppression de la cause empêchera l’effet de se reproduire".`
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://etiopathedunkerque.fr/images/melaine.jpg'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: 'https://etiopathedunkerque.fr/'
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
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/dotenv', '@nuxt/typescript-build', '@nuxtjs/fontawesome', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [],
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
   ** Build configuration
   */
  build: {}
};
