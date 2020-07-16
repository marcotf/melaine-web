<template>
  <div id="contact" class="contact">
    <div class="container mx-auto py-16">
      <h3 class="text-white">Contact & RDV</h3>
      <div class="flex text-white">
        <div class="w-1/2">
          <h4 class="font-medium text-lg mb-2">Contact</h4>
          <ul>
            <li>06.36.92.43.94</li>
            <li>874 rue Sainte Catherine, 59495 LEFFRINCKOUCKE</li>
            <li>mnieuwjaer.etiopathe@outlook.fr</li>
            <li>Facebook</li>
            <li>Linked’in</li>
          </ul>
        </div>
        <div class="w-1/2">
          <h4 class="font-medium text-lg mb-2">Rendez-vous</h4>
          <ul>
            <li>Horaires:</li>
            <li>Lundi à Vendredi - 8h30 à 19h30</li>
            <li>Samedi - 8h30 à 12h30</li>
            <li>Tarif de la consultation:</li>
            <li>50€ sur place</li>
            <li>55€ à domicile</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.contact {
  background-image: url('/images/contact-bg.png');
  background-size: cover;
  background-position-y: 30%;
}

li {
  @apply mb-1;
}
</style>
