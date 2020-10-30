<template>
  <div id="consultation" class="container mx-auto py-16 px-2">
    <h3>La consultation</h3>
    <div class="flex items-center">
      <div class="w-full lg:w-1/2 text-center">
        <!-- Acte 1 -->
        <div class="w-full mt-4 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Anamnèse</h4>
          <p>
            C’est l’écoute et le recueil des symptômes présentés par le patient (trajet douloureux, fourmillement, gène
            à la mobilisation…).
          </p>
          <div class="absolute top-0 inset-x-0 -mt-8 font-extrabold text-etio text-4xl">
            1
          </div>
        </div>
        <!-- Acte 2 -->
        <div class="w-full mt-8 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Analyse étiopathique</h4>
          <p>
            C’est l'application de la méthode de raisonnement étiopathique. A partir des symptômes recueillis,
            l'étiopathe remonte à la cause de la pathologie.
          </p>
          <div class="absolute top-0 inset-x-0 -mt-8 font-extrabold text-etio text-4xl">
            2
          </div>
        </div>
        <!-- Acte 3 -->
        <div class="w-full mt-8 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Evaluation de l'urgence</h4>
          <p>
            Dans le cas où la cause ne rentre pas dans le champ d'application de l'étiopathie, le patient est réorienté
            vers d'autres soins adaptés à ses besoins.
          </p>
          <div class="absolute top-0 inset-x-0 -mt-8 font-extrabold text-etio text-4xl">
            3
          </div>
        </div>
        <!-- Acte 4 -->
        <div class="w-full mt-8 py-4 px-8 bg-light-gray shadow rounded relative acte">
          <h4 class="mb-4">Intervention</h4>
          <p>
            Le geste thérapeutique constitue en une manipulation précise et ciblée de la cause de la pathologie qui
            induit la réduction des symptômes.
          </p>
          <div class="absolute top-0 inset-x-0 -mt-8 font-extrabold text-etio text-4xl">
            4
          </div>
        </div>
      </div>
      <div class="hidden lg:block w-1/2 p-8">
        <img src="/images/bureau.jpg" alt="consultation" class="shadow" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style scoped>
.acte:hover {
  box-shadow: 0 1px 3px 0 rgba(174, 12, 49, 0.4), 0 1px 2px 0 rgba(174, 12, 49, 0.24);
}
</style>
