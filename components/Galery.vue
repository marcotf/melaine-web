<template>
  <div class="container mx-auto py-16">
    <h3>Gallerie</h3>
    <carousel
      :perPage="5"
      :paginationEnabled="false"
      :navigationEnabled="true"
      :scrollPerPage="false"
      class="-mx-2"
    >
      <slide class="px-2" v-for="i in 15" :key="i">
        <expandable-image src="/images/header-bg.png" />
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
