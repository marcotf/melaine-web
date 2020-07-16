<template>
  <div class="header-img">
    <header class="container px-2 mx-auto relative py-8">
      <!-- Menu -->
      <div
        class="flex justify-between items-center py-2 px-8 rounded-full bg-white"
      >
        <!-- Logo Name -->
        <div class="flex-1 flex items-center text-etio text-lg font-semibold ">
          <img src="/images/etio-logo.png" class="h-10 mr-2" />
          Mélaine Nieuwjaer
        </div>
        <!-- Menu -->
        <div class="hidden lg:flex">
          <ul class="flex font-medium text-dark-blue">
            <li><a href="#etio">L'étiopathie</a></li>
            <li class="ml-4"><a href="#melaine">Votre étiopathe</a></li>
            <li class="ml-4"><a href="#consultation">La consultation</a></li>
            <li class="ml-4"><a href="#questions">Questions</a></li>
            <li class="ml-4"><a href="#contact">Contact</a></li>
            <li class="ml-4 text-etio">
              <a href="mailto:mnieuwjaer.etiopathe@outlook.fr">Rendez-vous</a>
            </li>
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
  background-image: url('/images/header-bg.jpg');
  background-position: 50% 35%;
  background-size: cover;
}
header {
  min-height: 530px;
}
</style>
