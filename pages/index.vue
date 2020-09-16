<template>
  <div>
    <contact-header />
    <header-menu />
    <etiopathie />
    <!-- <hr-quote / -->
    <cures />
    <!-- TODO -->
    <div class="divider divider-left h-4 -mt-4"></div>
    <melaine />
    <div class="divider divider-right h-4"></div>
    <consultation />
    <!-- TODO -->
    <questions />
    <galery />
    <contact />
    <credit-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ContactHeader from '~/components/ContactHeader.vue';
import HeaderMenu from '~/components/HeaderMenu.vue';
import Etiopathie from '~/components/Etiopathie.vue';
import HrQuote from '~/components/HrQuote.vue';
import Cures from '~/components/Cures.vue';
import Consultation from '~/components/Consultation.vue';
import Melaine from '~/components/Melaine.vue';
import Questions from '~/components/Questions.vue';
import Galery from '~/components/Galery.vue';
import Contact from '~/components/Contact.vue';
import CreditFooter from '~/components/CreditFooter.vue';

export default Vue.extend({
  components: {
    ContactHeader,
    HeaderMenu,
    Etiopathie,
    HrQuote,
    Cures,
    Melaine,
    Consultation,
    // TODO: In between
    Questions,
    Galery,
    Contact,
    CreditFooter
  }
});
</script>

<style scoped>
.divider {
  background-color: #f8f8f8;
}
.divider-left {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
.divider-right {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}
</style>
