<template>
  <div id="melaine" class="bg-light-gray">
    <div class="container mx-auto px-2 py-16">
      <h3>Votre étiopathe</h3>
      <div class="flex flex-wrap lg:flex-row-reverse items-center">
        <div class="w-full lg:w-1/2 p-4">
          <div>
            <h4 class="mb-2 font-medium text-red-fluo">Qui suis je ?</h4>
            <p>Mélaine Nieuwjaer, je suis originaire de Dunkerque.</p>
            <p>
              J’ai choisi la profession d’étiopathe pour plusieurs raisons: sa méthode de raisonnement rigoureuse et
              avant-gardiste de la pathologie ; le contact et le relationnel que je retrouve au cours de chaque
              consultation; enfin, l’envie et le plaisir de pouvoir soulager les douleurs de mes patients. L’étiopathie
              est pour moi plus qu’un métier, une véritable passion !
            </p>
            <p>
              En tant que praticienne je suis à l’écoute et disponible. Je lie dans ma pratique technique, précision,
              douceur et dynamisme ! Je m’adapte à chaque patient suivant leur morphologie et leur pathologie.
            </p>
          </div>

          <div>
            <h4 class="mb-2 font-medium text-red-fluo">Ma formation ?</h4>
            <p>
              J’ai obtenu mon diplôme à la
              <strong>faculté libre d’étiopathie de Paris</strong>.
            </p>
            <p>
              L’enseignement repose sur la
              <strong>compréhension de la méthode d’analyse étiopathique</strong>. Elle
              comprend également
              <strong>l’étude rigoureuse</strong> de l’
              <strong>anatomie</strong> (en particulier
              durant les cours de dissection) , de la
              <strong>physiologie</strong>, de la
              <strong>clinique</strong> , et
              de la
              <strong>technique manipulative mécaniste</strong>.
            </p>
            <p>
              Le cursus comprend
              <strong>6 années d’études</strong>. Nous effectuons de
              <strong>nombreux stages d’observations et de pratiques</strong>
              dans les cabinets et à la clinique d’étiopathie de Paris.
            </p>
            <p>
              L’enseignement est transmis par des étiopathes reconnus du registre national des étiopathes (RNE), de
              médecins, chirurgiens, biologistes, physiologistes…
            </p>
            <p>
              Enfin, j’ai pu bénéficié de stages en milieu hospitalier afin d’élargir mes connaissances des autres
              professions de santé.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-4 relative">
          <div class="relative p-4 z-10">
            <img src="/images/melaine.jpg" alt="Mélaine Nieuwjaer" class="shadow" />
          </div>
          <div class="absolute left-0 top-0 red-dot red-dot-small z-0"></div>
          <div class="absolute bottom-0 right-0 red-dot red-dot-large z-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped>
.red-dot {
  background-image: url('/icons/red-dot.svg');
  background-repeat: space;
}

.red-dot-small {
  width: 20%;
  height: 20%;
}

.red-dot-large {
  width: 60%;
  height: 60%;
}
</style>
