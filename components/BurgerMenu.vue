<template>
  <div class="relative">
    <client-only>
      <slide-menu :isOpen="false" :closeOnNavigation="true" right>
        <a href="#etio">L'étiopathie</a>
        <a href="#melaine">Votre étiopathe</a>
        <a href="#consultation">La consultation</a>
        <a href="#questions">Questions</a>
        <a href="#contact">Contact</a>

        <a href="mailto:mnieuwjaer.etiopathe@outlook.fr" class="text-etio">
          Rendez-vous
        </a>
      </slide-menu>
      <!-- <button @click="toogleMenu">Toogle Menu</button> -->
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return { open: false }
  },

  methods: {
    toogleMenu(e: any) {
      e.preventDefault()
      e.stopPropagation()
      this.open = !this.open
    }
  }
})
</script>

<style>
.bm-burger-button {
  width: 24px;
  height: 20px;
  top: 0px;
  margin-right: -36px;
  position: relative;
  cursor: pointer;
}
.bm-burger-bars {
  @apply bg-dark-blue;
}
.bm-burger-button:hover .bm-burger-bars {
  @apply bg-etio;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  @apply bg-etio;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 10000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.4);
}
.bm-item-list {
  @apply text-dark-blue;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
</style>
