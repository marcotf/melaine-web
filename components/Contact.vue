<template>
  <div id="contact" class="contact">
    <div class="container mx-auto py-16 px-2">
      <h3 class="text-white">Contact & RDV</h3>
      <div class="flex flex-wrap text-white">
        <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
          <h4 class="font-medium text-lg mb-2">Contact</h4>
          <ul>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fas', 'phone-alt']" /> <a href="tel:+33636924394">06.36.92.43.94</a>
            </li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fas', 'map-marker-alt']" /> 874 rue
              Sainte Catherine, 59495 LEFFRINCKOUCKE
            </li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fas', 'at']" /> 
              <a href="mailto:mnieuwjaer.etiopathe@outlook.fr">mnieuwjaer.etiopathe@outlook.fr</a>
            </li>
            <li>
              <font-awesome-icon
                class="mr-1"
                :icon="['fab', 'facebook-square']"
              />
              Facebook
            </li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fab', 'linkedin']" />
              Linked’in
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2">
          <h4 class="font-medium text-lg mb-2">Rendez-vous</h4>
          <p>
            <font-awesome-icon class="mr-1" :icon="['far', 'clock']" /> Horaires:
            <ul class="ml-4 list-disc">
              <li>Lundi à Vendredi - 8h30 à 19h30</li>
              <li>Samedi - 8h30 à 12h30</li>
            </ul>
          </p>
          <p>
            <font-awesome-icon class="mr-1" :icon="['fas', 'euro-sign']" /> Tarif de la consultation:
            <ul class="ml-4 list-disc">
              <li>50€ sur place</li>
              <li>55€ à domicile</li>
            </ul>
          </p>  
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
