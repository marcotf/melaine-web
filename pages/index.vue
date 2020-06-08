<template>
  <div>
    <contact-header />
    <header-menu />
    <etiopathie />
    <hr-quote />
    <cures />
    <!-- TODO -->
    <consultation />
    <!-- TODO -->
    <contact />
    <credit-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ContactHeader from '~/components/ContactHeader.vue'
import HeaderMenu from '~/components/HeaderMenu.vue'
import Etiopathie from '~/components/Etiopathie.vue'
import HrQuote from '~/components/HrQuote.vue'
import Cures from '~/components/Cures.vue'
import Consultation from '~/components/Consultation.vue'
import Contact from '~/components/Contact.vue'
import CreditFooter from '~/components/CreditFooter.vue'

export default Vue.extend({
  components: {
    ContactHeader,
    HeaderMenu,
    Etiopathie,
    HrQuote,
    Cures,
    // TODO
    Consultation,
    // TODO: In between
    Contact,
    CreditFooter
  }
})
</script>
