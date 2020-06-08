<template>
  <div class="header-img">
    <header class="container mx-auto relative py-8">
      <!-- Menu -->
      <div
        class="flex py-2 px-8 rounded-full bg-white justify-between items-center"
      >
        <!-- Logo Name -->
        <div class="text-etio text-lg font-semibold flex items-center">
          <img src="/images/etio-logo.png" class="h-10 mr-2" />
          Mélaine Nieuwjaer
        </div>
        <!-- Menu -->
        <div>
          <ul class="flex font-medium text-dark-blue">
            <li>L'étiopathie</li>
            <li class="ml-4">La consultation</li>
            <li class="ml-4">Votre étiopathe</li>
            <li class="ml-4">Questions</li>
            <li class="ml-4">Contact</li>
            <li class="ml-4 text-etio">Rendez-vous</li>
          </ul>
        </div>
      </div>
      <!-- Action -->
      <div class="absolute bottom-0 mb-8 px-2 left-0 text-white b-0">
        <h1 class="font-extrabold text-5xl">Mélaine Nieuwjaer</h1>
        <h2 class="font-medium text-5xl">Etiopathe</h2>
        <button class="bg-etio px-8 py-2 rounded-full">Découvrir</button>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.header-img {
  background-image: url('/images/header-bg.png');
  background-position: top;
}
header {
  min-height: 530px;
}
</style>
