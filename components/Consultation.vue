<template>
  <div class="container mx-auto py-16">
    <h3>La consultation</h3>
    <div class="flex flex-wrap text-center -mx-2">
      <!-- Acte 1 -->
      <div class="w-1/4">
        <div class="m-2 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Anamnèse</h4>
          <p>
            C’est l’écoute et le recueil des symptômes présentés par le patient
            (trajet douloureux, fourmillement, gène à la mobilisation…)
          </p>
          <div
            class="absolute bottom-0 inset-x-0 -mb-8 font-extrabold text-etio text-4xl"
          >
            1
          </div>
        </div>
      </div>
      <!-- Acte 2 -->
      <div class="w-1/4">
        <div class="m-2 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Anamnèse</h4>
          <p>
            C’est l’écoute et le recueil des symptômes présentés par le patient
            (trajet douloureux, fourmillement, gène à la mobilisation…)
          </p>
          <div
            class="absolute bottom-0 inset-x-0 -mb-8 font-extrabold text-etio text-4xl"
          >
            2
          </div>
        </div>
      </div>
      <!-- Acte 3 -->
      <div class="w-1/4">
        <div class="m-2 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Anamnèse</h4>
          <p>
            C’est l’écoute et le recueil des symptômes présentés par le patient
            (trajet douloureux, fourmillement, gène à la mobilisation…)
          </p>
          <div
            class="absolute bottom-0 inset-x-0 -mb-8 font-extrabold text-etio text-4xl"
          >
            3
          </div>
        </div>
      </div>
      <!-- Acte 4 -->
      <div class="w-1/4">
        <div class="m-2 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Anamnèse</h4>
          <p>
            C’est l’écoute et le recueil des symptômes présentés par le patient
            (trajet douloureux, fourmillement, gène à la mobilisation…)
          </p>
          <div
            class="absolute bottom-0 inset-x-0 -mb-8 font-extrabold text-etio text-4xl"
          >
            4
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
.acte:hover {
  box-shadow: 0 1px 3px 0 rgba(174, 12, 49, 0.4),
    0 1px 2px 0 rgba(174, 12, 49, 0.24);
}
</style>
