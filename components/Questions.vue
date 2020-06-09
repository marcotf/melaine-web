<template>
  <div class="bg-light-gray">
    <div class="container mx-auto px-2 py-16">
      <h3>Vos questions</h3>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div
            v-for="question in first_questions"
            :key="question.id"
            class="mb-2"
          >
            <div
              class="flex bg-white cursor-pointer p-4"
              @click="activate(question.id)"
            >
              <div class="activate" v-if="!show_answer(question.id)">+</div>
              <div class="activate" v-else>-</div>
              <div class="ml-2 font-medium">{{ question.message }}</div>
            </div>
            <transition name="fade">
              <div v-if="show_answer(question.id)" class="bg-white px-4 pb-4">
                {{ question.answer }}
              </div>
            </transition>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div
            v-for="question in last_questions"
            :key="question.id"
            class="mb-2"
          >
            <div class="flex bg-white p-4" @click="activate(question.id)">
              <div class="activate" v-if="!show_answer(question.id)">+</div>
              <div class="activate" v-else>-</div>
              <div class="ml-2 font-medium">{{ question.message }}</div>
            </div>
            <transition name="fade">
              <div v-if="show_answer(question.id)" class="bg-white px-4 pb-4">
                {{ question.answer }}
              </div>
            </transition>
          </div>
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
      show_id: 0,
      first_questions: [
        {
          id: 1,
          message: 'Durée et nombres de séances ?',
          answer:
            'Les étiopathes reconnues sont recensés dans le Registre national des étiopathes (RNE). L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.'
        },
        {
          id: 2,
          message: 'Durée et nombres de séances ?',
          answer:
            'Les étiopathes reconnues sont recensés dans le Registre national des étiopathes (RNE). L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.'
        },
        {
          id: 3,
          message: 'Durée et nombres de séances ?',
          answer:
            'Les étiopathes reconnues sont recensés dans le Registre national des étiopathes (RNE). L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.'
        }
      ],
      last_questions: [
        {
          id: 4,
          message: 'Durée et nombres de séances ?',
          answer:
            'Les étiopathes reconnues sont recensés dans le Registre national des étiopathes (RNE). L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.'
        },
        {
          id: 5,
          message: 'Durée et nombres de séances ?',
          answer:
            'Les étiopathes reconnues sont recensés dans le Registre national des étiopathes (RNE). L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.'
        },
        {
          id: 6,
          message: 'Durée et nombres de séances ?',
          answer:
            'Les étiopathes reconnues sont recensés dans le Registre national des étiopathes (RNE). L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.'
        }
      ]
    }
  },

  methods: {
    show_answer(id: number) {
      return this.show_id == id
    },

    activate(id: number) {
      if (this.show_id == id) this.show_id = 0
      else this.show_id = id
    }
  }
})
</script>

<style scoped>
.activate {
  @apply font-semibold;
  @apply text-etio;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
