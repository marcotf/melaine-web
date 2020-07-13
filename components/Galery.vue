<template>
  <div class="container mx-auto py-16 px-2">
    <h3>Gallerie</h3>
    <agile :options="agileOptions">
      <div v-for="i in 23" :key="i" class="px-2">
        <expandable-image :src="`/images/galery/${i}.jpg`" class="shadow" />
      </div>

      <!-- <template slot="prevButton">prev</template>
      <template slot="nextButton">next</template> -->
    </agile>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      agileOptions: {
        autoplay: true,
        speed: 100,
        navButtons: true,

        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2
            }
          },
          // {
          //   breakpoint: 768,
          //   settings: {
          //     slidesToShow: 2
          //   }
          // },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5
            }
          }
        ]
      }
    }
  }
})
</script>
