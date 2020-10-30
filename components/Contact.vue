<template>
  <div id="contact" class="contact">
    <div class="container mx-auto py-16 px-2">
      <h3 class="text-white">Contact & RDV</h3>
      <div class="flex flex-wrap text-white">
        <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
          <h4 class="font-medium text-lg mb-2">Contact</h4>
          <ul>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fas', 'phone-alt']" />
              <a :href="`tel:+33${formatedPhone(phoneNumber)}`">{{ phoneNumber }}</a>
            </li>
            <li><font-awesome-icon class="mr-1" :icon="['fas', 'map-marker-alt']" /> {{ localisation }}</li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fas', 'at']" />
              <a :href="`mailto:${email}`">{{ email }}</a>
            </li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fab', 'linkedin']" />
              <a href="https://www.linkedin.com/in/mélaine-nieuwjaer-7694921a9/" target="_blank">Linked’in</a>
            </li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fab', 'facebook-square']" />
              <a href="https://www.facebook.com/etiopathe.Arcades.Dunkerque" target="_blank">Facebook</a>
            </li>
            <li>
              <font-awesome-icon class="mr-1" :icon="['fab', 'instagram']" />
              <a href="https://www.instagram.com/etiopathe_dunkerque_arcades/" target="_blank">Instagram</a>
            </li>
          </ul>
        </div>
        <div class="w-full sm:w-1/2">
          <h4 class="font-medium text-lg mb-2">Rendez-vous</h4>
          <div class="text-sm">
            <font-awesome-icon class="mr-1" :icon="['far', 'clock']" /> Horaires:
            <ul class="ml-4 list-disc">
              <li>Lundi à Vendredi - 8h00 à 19h30</li>
              <li>Samedi - 8h00 à 12h30</li>
            </ul>
          </div>
          <div class="text-sm">
            <font-awesome-icon class="mr-1" :icon="['fas', 'euro-sign']" /> Tarif de la consultation:
            <ul class="ml-4 list-disc">
              <li>{{ price }}€ sur place</li>
              <li>{{ homePrice }}€ à domicile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface User {
  phoneNumber: string;
}

export default Vue.extend({
  data({ $config: { phoneNumber, localisation, email, price, homePrice } }: any) {
    return {
      phoneNumber,
      localisation,
      email,
      price,
      homePrice
    };
  },

  methods: {
    formatedPhone: (phone: string): string =>
      phone
        .substr(1)
        .split('.')
        .join('')
  }
});
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
