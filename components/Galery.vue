<template>
  <div class="container mx-auto py-16 px-2">
    <h3>Gallerie</h3>
    <carousel
      :perPageCustom="[
        [1024, 3],
        [1280, 5]
      ]"
      :paginationEnabled="false"
      :navigationEnabled="false"
      :scrollPerPage="false"
      :loop="true"
      :autoplay="true"
      navigationNextLabel="→"
      navigationPrevLabel="←"
      class="-mx-1"
    >
      <slide class="px-1" v-for="i in 15" :key="i">
        <expandable-image src="/images/header-bg.png" />
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
