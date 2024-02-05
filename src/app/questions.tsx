"use client";

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

const questions = [
  {
    id: 1,
    message: "Durée et nombres de séances ?",
    answer:
      "<p>Une séance dure en moyenne 30 min, en fonction de chaque patient. Le nombre de séances dépend de la pathologie et de son ancienneté. Il peut varier entre 2 à 6 séances.</p>",
  },
  {
    id: 2,
    message: "Quand puis-je consulter un étiopathe ?",
    answer:
      "<p>Vous pouvez consulter un étiopathe lorsqu’une douleur apparaît et devient une gêne importante et récurrente dans votre quotidien. L’étiopathe raisonne uniquement à partir des symptômes du patient. Il appliquera son raisonnement afin d’établir un traitement étiopathique et/ou conduira le patient vers d’autres thérapies si la pathologie ne rentre pas dans son champ d’application.</p>",
  },
  {
    id: 3,
    message: "Quelles sont les limites de l’étiopathie ?",
    answer:
      "<p>Les limites de la profession concernent les pathologies dites d’atteinte « irréversible», comme les cancers, les maladies dégénératives et génétiques ou les pathologies graves qui relèvent des urgences (maladie infectieuse grave, urgence vitale médicale ou chirurgicale).</p>",
  },
  {
    id: 4,
    message: "Champ d’application de l’étiopathie ?",
    answer:
      "<p>L'Étiopathie traite les pathologies réversibles manuellement. Elle ne fait pas de prescriptions médicales. Les traitements étiopathiques ne remplacent ni les médicaments lorsqu'ils sont nécessaires, ni la chirurgie lorsqu'elle est indispensable.</p><p>Dans le cas où la pathologie dépasse le champ d’application de l’étiopathie, le praticien adresse son patient vers des soins adaptés (médecin, nutritionniste, psychologue...). L’Étiopathie ne se substitue pas à la médecine traditionnelle, mais se présente comme une solution rapide et efficace. À ce titre, elle reste évidemment complémentaire de la médecine traditionnelle.</p>",
  },
  {
    id: 6,
    message: "Quels sont les bénéfices de l’étiopathie ?",
    answer: `
          <ul class="list-disc">
            <li>Le patient trouvera une solution à ses douleurs, un soulagement, un bien être le plus souvent immédiat même pour des pathologies parfois anciennes.</li>
            <li>C’est une opportunité pour les entreprises, en réduisant la durée des arrêts de travail, les coûts économiques directs ou indirects (remplacements, indemnité de retard, perte de fabrication...). Les pathologies les plus concernées sont les troubles musculo-squelettiques, les lombalgies par exemple.</li>
            <li>Elle évite certaines chirurgies ou hospitalisations de dernier recours (hernie discale, canal carpien...), avec souvent un raccourcissement des traitements déjà entrepris (économie de temps et d’argent)</li>
            <li>En connaissant ses limites, l’étiopathe conseillera au patient des soins pour une prise en charge la plus adaptée à sa pathologie.</li>
          </ul>
        `,
  },
  {
    id: 8,
    message: "Tarif et moyen de paiement ?",
    answer: `<p>Le tarif de la consultation est de 50€ (60€ à domicile) , dont TVA 20 %</p>`,
  },
  {
    id: 9,
    message: "Reconnaissance et remboursement ?",
    answer:
      '<p>Les étiopathes reconnues sont recensés dans le <strong>Registre national des étiopathes (RNE)</strong>. L’étiopathie est une thérapie non conventionnée. Comme toute autres alternatives de soins, elle n’est pas remboursée par la sécurité sociale. Aujourd’hui, voyant l’efficacité de l’étiopathie de nombreuses mutuelles remboursent totalement ou en partie les consultations.</p><p class="text-center uppercase"><a href="https://www.etiopathie.com/etiopathie/mutuelles-prises-charge-old" target="_blank">Liste des mutuelles prises en charge</a></p>',
  },
  {
    id: 10,
    message: "Pour qui s'adresse l'etiopathie ?",
    answer:
      "<p>L'étiopathie s'adresse à toute personne, du nourrisson au sénior, de la femme enceinte au sportif amateur ou professionnel.</p>",
  },
  {
    id: 5,
    message:
      "Quelles sont les différences avec d’autres professions de santé et thérapies manuelles ?",
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
        `,
  },
];

export const Questions = () => {
  return (
    <section id="questions" className="bg-gray-50">
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <h3>Vos questions</h3>

        <div className="flex flex-wrap">
          {questions.map((question) => (
            <Disclosure
              as="div"
              className="w-full lg:w-1/2 p-2"
              key={question.id}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full bg-white items-center font-medium space-x-2 cursor-pointer p-4">
                    {open ? (
                      <MinusIcon className="flex-none h-5 w-5 text-primary" />
                    ) : (
                      <PlusIcon className="flex-none h-5 w-5 text-primary" />
                    )}
                    <div className="text-left">{question.message}</div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className="bg-white px-4 pb-4"
                    dangerouslySetInnerHTML={{ __html: question.answer }}
                  />
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};
