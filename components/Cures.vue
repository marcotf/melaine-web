<template>
  <div>
    <div class="container mx-auto py-16">
      <h3>Que soigne l'étiopathie ?</h3>
      <div class="flex flex-wrap justify-center">
        <div
          class="w-1/4 text-center text-dark-blue mb-16"
          v-for="cure in cures"
          :key="cure.id"
        >
          <img :src="cure.icon" class="h-12 mx-auto text-etio stroke-current" />
          <div class="font-medium">{{ cure.name }}</div>
          <div class="text-sm">{{ cure.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      cures: [
        {
          id: 1,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 2,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 3,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 4,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 5,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 6,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 7,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 8,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 9,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 10,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        },
        {
          id: 11,
          name: 'Trouble circulatoire',
          desc: 'Jambe lourde, maladie de Raynaud',
          icon: '/icons/circulatoire.svg'
        }
      ]
    }
  }
})
</script>
