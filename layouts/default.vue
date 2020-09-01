<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data({ $config: { phoneNumber, localisation, email } }) {
    return {
      structuredData: {
        '@context': 'http://www.schema.org',
        '@type': 'LocalBusiness',
        name: 'Mélaine Nieuwjaer',
        image: 'https://etiopathedunkerque.fr/images/melaine.jpg',
        telephone: this.formatedPhone(phoneNumber),
        url: 'https://etiopathedunkerque.fr/',
        address: {
          '@type': 'PostalAddress',
          streetAddress: this.formatedAddress(localisation)[0],
          postalCode: this.formatedAddress(localisation)[1],
          addressLocality: this.formatedAddress(localisation)[2],
          addressCountry: 'France'
        },
        openingHours: 'Mo, Tu, We, Th, Fr 08:00-19:30 Sa 08:00-12:30',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: this.formatedPhone(phoneNumber),
          email: email
        }
      }
    };
  },

  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }],
      link: [
        {
          rel: 'canonical',
          href: 'https://etiopathedunkerque.fr' + this.$route.path
        }
      ]
    };
  },

  methods: {
    formatedPhone: phone =>
      '+33' +
      phone
        .substr(1)
        .split('.')
        .join(''),

    formatedAddress: address => address.split(',').map(elem => elem.trim())
  }
};
</script>
