<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      structuredData: {
        '@context': 'http://www.schema.org',
        '@type': 'LocalBusiness',
        name: 'Mélaine Nieuwjaer',
        image: 'https://melaine-etio-web.herokuapp.com/images/melaine.jpg',
        telephone: '+33636924394',
        url: 'https://melaine-etio-web.herokuapp.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '874 rue Sainte Catherine',
          addressLocality: 'LEFFRINCKOUCKE',
          postalCode: '59495',
          addressCountry: 'France'
        },
        openingHours: 'Mo, Tu, We, Th, Fr 08:00-19:00',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+33636924394'
        }
      }
    }
  },

  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }]
    }
  }
}
</script>
