<template>
  <!-- Citation -->
  <div class="bg-etio">
    <div class="container mx-auto text-center text-white">
      <blockquote class="py-4">
        Pour l’étiopathie, seule la suppression de la cause empêchera l’effet de
        se reproduire
      </blockquote>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
blockquote {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 100;
  font-size: 22px;
  position: relative;
}

blockquote:before,
blockquote:after {
  position: absolute;
  color: #f1efe6;
  font-size: 8rem;
  width: 4rem;
  height: 4rem;
}

blockquote:before {
  content: '“';
  left: -5rem;
  top: -2rem;
}

blockquote:after {
  content: '”';
  right: -5rem;
  bottom: 1rem;
}
</style>
