<template>
  <div id="melaine" class="bg-light-gray">
    <div class="container mx-auto px-2 py-16">
      <h3>Votre étiopathe</h3>
      <div class="flex flex-wrap lg:flex-row-reverse items-center">
        <div class="w-full lg:w-1/2 p-4">
          <div>
            <h4 class="mb-2 font-medium text-red-fluo">Qui suis je ?</h4>
            <p>
              Mélaine Nieuwjaer, étiopathe. Soucieuse du bien être des autres, j’ai l’envie et le plaisir de pouvoir
              vous aider.
            </p>
            <p>
              Du nourrisson au sénior, de la femme enceinte au sportif, je m’adapte à vous, suivant votre pathologie. Je
              suis à l’écoute et disponible. J’aime le contact relationnel, que je retrouve au cours de chacune de mes
              consultations. Je lie dans ma pratique technique, précision, douceur et dynamisme !
            </p>
            <p>
              L’étiopathie est pour moi une évidence. Elle nourrit à la fois, mon intérêt pour la recherche des liens de
              cause à effet, qui me permettent de cibler l’origine de vos douleurs, tout en me permettant de soigner de
              façon naturelle. L’étiopathie est plus qu’un métier, c’est une véritable passion !
            </p>
            <p>
              Je vous accueil avec le sourire et la bonne humeur dans mon cabinet aux Arcades à Dunkerque !
            </p>
          </div>

          <div>
            <h4 class="mb-2 font-medium text-red-fluo">Ma formation ?</h4>
            <p>
              Je suis étiopathe, diplômée de la faculté Libre d’étiopathie de Paris sous le n°<strong>20-1016</strong>,
              après 6 années d’études.
            </p>
            <p>
              J’ai été formée par des médecins urgentistes, chirurgien, anatomiste et physiologiste, et étiopathes
              membre du registre national des étiopathes (RNE).
            </p>
            <p>
              J’ai bénéficié de stages en milieu hospitalier et des cours de dissection à la faculté de médecine Paris
              Descartes.
            </p>
            <p>
              J’ai exercé à la clinique d’étiopathie de Paris et effectué plusieurs remplacements en cabinet libéral ou
              j'effectue encore de nombreux remplacements.
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
