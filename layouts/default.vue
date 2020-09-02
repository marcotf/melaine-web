<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data({ $config: { baseURL, phoneNumber, localisation, email, googleSiteVerification } }) {
    let meta = [
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseURL + '/images/melaine.jpg'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseURL + '/'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: baseURL + '/images/melaine.jpg'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: baseURL + '/'
      }
    ];

    if (googleSiteVerification)
      meta.push({ hid: 'google-site-verification', name: 'google-site-verification', content: googleSiteVerification });

    return {
      structuredData: {
        '@context': 'http://www.schema.org',
        '@type': 'LocalBusiness',
        name: 'Mélaine Nieuwjaer',
        image: baseURL + '/images/melaine.jpg',
        telephone: this.formatedPhone(phoneNumber),
        url: baseURL + '/',
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
      },
      meta
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
      ],
      meta: this.meta
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
