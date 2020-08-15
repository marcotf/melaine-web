<template>
  <div class="bg-etio hidden lg:block">
    <div class="container mx-auto flex text-sm py-2">
      <div class="mr-6 text-white">
        <font-awesome-icon class="mr-1" icon="phone-alt" />
        <a :href="`tel:+33${formatedPhone(phoneNumber)}`">{{ phoneNumber }}</a>
      </div>
      <div class="mr-6 text-white"><font-awesome-icon class="mr-1" icon="map-marker-alt" /> {{ localisation }}</div>
      <div class="mr-6 text-white">
        <font-awesome-icon class="mr-1" icon="at" />
        <a :href="`mailto:${email}`">{{ email }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data({ $config: { phoneNumber, localisation, email } }: any) {
    return {
      phoneNumber,
      localisation,
      email
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
