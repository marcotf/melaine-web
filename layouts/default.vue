<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     structuredData: {
  //       '@context': 'http://www.schema.org',
  //       '@type': 'LocalBusiness',
  //       name: 'Mélaine Nieuwjaer',
  //       image: 'https://etiopathedunkerque.fr/images/melaine.jpg',
  //       telephone: '+33636924394',
  //       url: 'https://etiopathedunkerque.fr/',
  //       address: {
  //         '@type': 'PostalAddress',
  //         streetAddress: '874 rue Sainte Catherine',
  //         addressLocality: 'LEFFRINCKOUCKE',
  //         postalCode: '59495',
  //         addressCountry: 'France'
  //       },
  //       openingHours: 'Mo, Tu, We, Th, Fr 08:00-19:30 Sa 08:00-12:30',
  //       contactPoint: {
  //         '@type': 'ContactPoint',
  //         telephone: '+33636924394'
  //       }
  //     }
  //   };
  // },
  // head() {
  //   return {
  //     script: [{ type: 'application/ld+json', json: this.structuredData }]
  //   };
  // }
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://etiopathedunkerque.fr' + this.$route.path
        }
      ]
    };
  }
};
</script>
