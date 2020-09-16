<template>
  <!-- L'étiopathie -->
  <div id="etio" class="container mx-auto flex flex-wrap items-center py-16 px-2">
    <div class="w-full md:w-1/2 mb-8 md:mb-0">
      <h3 class>L'étiopathie</h3>
      <p>
        L’étiopathie est une nouvelle
        <strong
          >méthode d’analyse qui permet de réagir, rapidement et efficacement, devant de nombreuses pathologies du
          quotidien</strong
        >. Elle correspond au fondement de notre pratique.
      </p>
      <p>
        Du grec
        <strong>aïtia</strong> "cause" et <strong>pathos</strong> "souffrance", l’étiopathie s’attache en priorité à
        déterminer la cause plutôt que d’en supprimer directement les effets (douleurs, inflammation, blocage etc). Pour
        l’étiopathie, " <strong>seule la suppression de la cause empêchera l’effet de se reproduire</strong>".
      </p>
      <p>
        <strong
          >L’application de la méthode étiopathique permet de raisonner de façon logique et rationnel, à partir des
          symptômes que vous présentez.</strong
        >.
      </p>
      <!-- <p>Elle permet de réagir rapidement et de façon efficace devant la pathologie.</p> -->

      <p>
        <strong>Comme support de raisonnement</strong>, votre étiopathe s’appuie sur
        <strong>l’étude systémique appliquée au corps humain</strong> suivant les
        <strong>connaissances anatomiques, physiologiques et cliniques rigoureuses</strong>.
      </p>

      <p>
        Le corps humain est visualisé comme
        <strong>un ensemble de système</strong> ( gynécologie, ORL, gastro- entérologie, cardiologie, neurologie…) mis
        en relation les uns avec les autres. Ainsi, l’étiopathie recherche
        <strong>les liens de causes à effets</strong>&nbsp; qui déterminent le système à l’origine de vos symptômes.
      </p>

      <p>
        En tant que
        <strong>thérapie manuelle</strong> et purement <strong>mécaniste</strong>, votre étiopathe utilise des
        <strong>manipulations ciblées, douces, précises</strong>, sans avoir recours aux médicaments ou autres
        instruments.
      </p>
      <div class="text-center mt-4">
        <a href="http://www.etiopathie.com" target="_blank" class="bg-dark-blue text-white px-4 py-2 rounded-full"
          >SITE OFFICIEL DE L’ETIOPATHIE</a
        >
      </div>
    </div>
    <div class="w-full md:w-1/2">
      <svg v-html="graph" class="mx-auto w-full" height="428" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const graph = require('@/static/images/etio-graph.svg');

export default Vue.extend({
  data() {
    return {
      graph: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 428 428"><defs><filter id="Ellipse_1" x="0" y="250" width="178" height="178" filterUnits="userSpaceOnUse"> <feOffset dy="3" input="SourceAlpha"/> <feGaussianBlur stdDeviation="3" result="blur"/> <feFlood flood-opacity="0.161"/> <feComposite operator="in" in2="blur"/> <feComposite in="SourceGraphic"/> </filter> <filter id="Ellipse_2" x="250" y="250" width="178" height="178" filterUnits="userSpaceOnUse"> <feOffset dy="3" input="SourceAlpha"/> <feGaussianBlur stdDeviation="3" result="blur-2"/> <feFlood flood-opacity="0.161"/> <feComposite operator="in" in2="blur-2"/> <feComposite in="SourceGraphic"/> </filter> <filter id="Ellipse_3" x="125" y="0" width="178" height="178" filterUnits="userSpaceOnUse"> <feOffset dy="3" input="SourceAlpha"/> <feGaussianBlur stdDeviation="3" result="blur-3"/> <feFlood flood-opacity="0.161"/> <feComposite operator="in" in2="blur-3"/> <feComposite in="SourceGraphic"/> </filter> </defs> <g id="Graph" transform="translate(-1159 -621)"> <g id="COG" transform="matrix(0.966, 0.259, -0.259, 0.966, 1284.612, 708.907)" fill="none" stroke="#ec3f3b" stroke-width="5" stroke-dasharray="5 5"> <circle cx="125" cy="125" r="125" stroke="none"/> <circle cx="125" cy="125" r="122.5" fill="none"/> </g> <g transform="matrix(1, 0, 0, 1, 1159, 621)" filter="url(#Ellipse_1)"> <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="80" cy="80" r="80" transform="translate(9 256)" fill="#31456a"/> </g> <g transform="matrix(1, 0, 0, 1, 1159, 621)" filter="url(#Ellipse_2)"> <circle id="Ellipse_2-2" data-name="Ellipse 2" cx="80" cy="80" r="80" transform="translate(259 256)" fill="#31456a"/> </g> <g transform="matrix(1, 0, 0, 1, 1159, 621)" filter="url(#Ellipse_3)"> <circle id="Ellipse_3-2" data-name="Ellipse 3" cx="80" cy="80" r="80" transform="translate(134 6)" fill="#31456a"/> </g> <text id="GESTE_THÉRAPEUTIQUE_MANUEL" data-name="GESTE THÉRAPEUTIQUE MANUEL" transform="translate(1248 947)" fill="#fff" font-size="14" font-weight="500"><tspan x="-20.44" y="0">GESTE</tspan><tspan x="-52.997" y="15">THÉRAPEUTIQUE</tspan><tspan x="-27.251" y="30">MANUEL</tspan></text> <text id="MÉTHODE_DE_RAISONNEMENT_ÉTIOPATHIQUE" data-name="MÉTHODE DE RAISONNEMENT ÉTIOPATHIQUE" transform="translate(1373 697)" fill="#fff" font-size="14" font-weight="500"><tspan x="-42.826" y="0">MÉTHODE DE</tspan><tspan x="-52.255" y="15">RAISONNEMENT</tspan><tspan x="-47.803" y="30">ÉTIOPATHIQUE</tspan></text> <text id="CONNAISSANCE_SYSTÉMIQUE_RIGOUREUSE" data-name="CONNAISSANCE SYSTÉMIQUE RIGOUREUSE" transform="translate(1498 947)" fill="#fff" font-size="14" font-weight="500"><tspan x="-54.082" y="0">CONNAISSANCE</tspan><tspan x="-41.475" y="15">SYSTÉMIQUE</tspan><tspan x="-41.727" y="30">RIGOUREUSE</tspan></text> </g> </svg>`
    };
  }
});
</script>
