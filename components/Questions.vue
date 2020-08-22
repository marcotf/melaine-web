<template>
  <div id="questions" class="bg-light-gray">
    <div class="container mx-auto px-2 py-16">
      <h3>Vos questions</h3>
      <div class="flex flex-wrap -mx-2">
        <div class="w-full lg:w-1/2 px-2">
          <div v-for="question in first_questions" :key="question.id" class="mb-2">
            <div class="flex bg-white cursor-pointer p-4" @click="activate(question.id)">
              <div class="activate" v-if="!show_answer(question.id)">+</div>
              <div class="activate" v-else>-</div>
              <div class="ml-2 font-medium">{{ question.message }}</div>
            </div>
            <transition name="fade">
              <div
                v-if="show_answer(question.id)"
                class="bg-white px-4 pb-4"
                v-html="question.answer"
              />
            </transition>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2">
          <div v-for="question in last_questions" :key="question.id" class="mb-2">
            <div class="flex bg-white p-4" @click="activate(question.id)">
              <div class="activate" v-if="!show_answer(question.id)">+</div>
              <div class="activate" v-else>-</div>
              <div class="ml-2 font-medium">{{ question.message }}</div>
            </div>
            <transition name="fade">
              <div
                v-if="show_answer(question.id)"
                class="bg-white px-4 pb-4"
                v-html="question.answer"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
// import Vue from 'vue'
module.exports = {
  data({ $config: { price, homePrice } }) {
    return {
      show_id: 0,
      first_questions: [
        {
          id: 1,
          message: 'Durée et nombres de séances ?',
          answer:
            '<p>Une séance dure en moyenne 30 min, en fonction de chaque patient. Le nombre de séances dépend de la pathologie et de son ancienneté. Il peut varier entre 2 à 6 séances.</p>'
        },
        {
          id: 2,
          message: 'Quand puis-je consulter un étiopathe ?',
          answer:
            '<p>Vous pouvez consulter un étiopathe lorsqu’une douleur apparaît et devient une gêne importante et récurrente dans votre quotidien. L’étiopathe raisonne uniquement à partir des symptômes du patient. Il appliquera son raisonnement afin d’établir un traitement étiopathique et/ou conduira le patient vers d’autres thérapies si la pathologie ne rentre pas dans son champ d’application.</p>'
        },
        {
          id: 3,
          message: 'Quelles sont les limites de l’étiopathie ?',
          answer:
            '<p>Les limites de la profession concernent les pathologies dites d’atteinte « irréversible», comme les cancers, les maladies dégénératives et génétiques ou les pathologies graves qui relèvent des urgences (maladie infectieuse grave, urgence vitale médicale ou chirurgicale).</p>'
        },
        {
          id: 4,
          message: 'Champ d’application de l’étiopathie ?',
          answer:
            "<p>L'Étiopathie traite les pathologies réversibles manuellement. Elle ne fait pas de prescriptions médicales. Les traitements étiopathiques ne remplacent ni les médicaments lorsqu'ils sont nécessaires, ni la chirurgie lorsqu'elle est indispensable.</p><p>Dans le cas où la pathologie dépasse le champ d’application de l’étiopathie, le praticien adresse son patient vers des soins adaptés (médecin, nutritionniste, psychologue...). L’Étiopathie ne se substitue pas à la médecine traditionnelle, mais se présente comme une solution rapide et efficace. À ce titre, elle reste évidemment complémentaire de la médecine traditionnelle.</p>"
        },
        {
          id: 5,
          message: 'Quelles sont les différences avec d’autres professions de santé et thérapies manuelles ?',
          answer: `
              <ul class="list-disc">
                <li>Le fondement de la pratique étiopathique réside dans sa méthode d’analyse.</li>
                <li>Chaque étiopathe raisonne à partir de la même méthode analytique et mécaniste et ce dans n’importe quel cabinet en France ou ailleurs. Ainsi, le traitement étiopathique sera le même, peu importe le praticien qui délivre le soin.</li>
                <li>L’étiopathie considère l’ensemble du corps humain. Elle analyse et met en relation les systèmes de l’organisme. L’étiopathie n’est pas une spécialité médicale.</li>
                <li>Concernant le traitement étiopathique, il ne s’agit pas de manipuler l’ensemble du corps humain dans sa globalité. Ce n’est pas l’objectif de l’étiopathie. Il s’agit d’être efficace et donc de cibler et traiter uniquement la cause dont découlent les symptômes spécifiques du patient.</li>
                <li>En étiopathie, la détermination de la cause ne repose pas sur un diagnostic palpatoire. La palpation du praticien est avant tout : subjective. Elle peut néanmoins et parfois conforter une hypothèse pré-établie. Dans tous les cas seul le raisonnement causal fait foi et aboutit à un traitement ciblé et précis.</li>
                <li>Les techniques manipulatives sont de type mécanique, sans outils, sans médicaments ou autres « pratiques » (énergie, point de pression, lotion, pierre, ...).</li>
                <li>L’étiopathie s’inscrit dans la promotion de la santé comme alternative de soin naturelle.</li>
              </ul>
            `
        }
      ],
      last_questions: [
        {
          id: 6,
          message: 'Quels sont les bénéfices de l’étiopathie ?',
          answer: `
              <ul class="list-disc">
                <li>Le patient trouvera une solution à ses douleurs, un soulagement, un bien être le plus souvent immédiat même pour des pathologies parfois anciennes.</li>
                <li>C’est une opportunité pour les entreprises, en réduisant la durée des arrêts de travail, les coûts économiques directs ou indirects (remplacements, indemnité de retard, perte de fabrication...). Les pathologies les plus concernées sont les troubles musculo-squelettiques, les lombalgies par exemple.</li>
                <li>Elle évite certaines chirurgies ou hospitalisations de dernier recours (hernie discale, canal carpien...), avec souvent un raccourcissement des traitements déjà entrepris (économie de temps et d’argent)</li>
                <li>En connaissant ses limites, l’étiopathe conseillera au patient des soins pour une prise en charge la plus adaptée à sa pathologie.</li>
              </ul>
            `
        },
        {
          id: 7,
          message: 'Faut il consulter son médecin avant de se rendre chez son étiopathe ?',
          answer:
            '<p>Une prescription médicale n’est pas nécessaire pour se rendre chez son étiopathe. Le patient peut donc s’y rendre à sa propre initiative.</p>'
        },
        {
          id: 8,
          message: 'Tarif et moyen de paiement ?',
          answer: `<p>Le tarif de la consultation est de ${price}€ (${homePrice}€ à domicile) , dont TVA 20 %</p>`
        },
        {
          id: 9,
          message: 'Reconnaissance et remboursement ?',
          answer:
            '<p>Les étiopathes reconnues sont recensés dans le <strong>Registre national des étiopathes (RNE)</strong>. L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.</p><p class="text-center uppercase"><a href="https://www.etiopathie.com/etiopathie/mutuelles-prises-charge-old" target="_blank">Liste des mutuelles prises en charge</a></p>'
        },
        {
          id: 10,
          message: "Pour qui s'adresse l'etiopathie ?",
          answer:
            "<p>L'étiopathie s'adresse à toute personne, du nourrisson au sénior, de la femme enceinte au sportif amateur ou professionnel.</p>"
        }
      ]
    };
  },

  methods: {
    show_answer(id) {
      return this.show_id == id;
    },

    activate(id) {
      if (this.show_id == id) this.show_id = 0;
      else this.show_id = id;
    }
  }
};
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
