<template>
  <div class="container mx-auto py-16 px-2">
    <h3>Gallerie</h3>
    <div>
      <client-only placeholder="Chargement des images...">
        <swiper :options="swiperOption">
          <swiper-slide v-for="i in 18" :key="i" class>
            <expandable-image :src="`/images/galery/${i}.jpeg`" class="shadow" />
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 1500,
          disableOnInteraction: true
        },
        speed: 1500,
        grabCursor: true,

        breakpoints: {
          640: {
            slidesPerView: 2
          },

          1024: {
            slidesPerView: 3
          },

          1280: {
            slidesPerView: 4
          }
        }
      }
    };
  }
});
</script>
