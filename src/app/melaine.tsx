import Image from "next/image";

export const Melaine = () => {
  return (
    <section id="melaine" className="bg-gray-50">
      <div className="container mx-auto px-8 lg:px-16 py-16">
        <h3>Votre étiopathe</h3>
        <div className="flex flex-col flex-wrap gap-8 lg:flex-row-reverse items-center">
          <div className="flex-1">
            <div>
              <h4 className="mb-2 font-medium text-primary">Qui suis je ?</h4>
              <p>
                Mélaine Nieuwjaer, étiopathe. Soucieuse du bien être des autres,
                j’ai l’envie et le plaisir de pouvoir vous aider.
              </p>
              <p>
                Du nourrisson au sénior, de la femme enceinte au sportif, je
                m’adapte à vous, suivant votre pathologie. Je suis à l’écoute et
                disponible. J’aime le contact relationnel, que je retrouve au
                cours de chacune de mes consultations. Je lie dans ma pratique
                technique, précision, douceur et dynamisme !
              </p>
              <p>
                L’étiopathie est pour moi une évidence. Elle nourrit à la fois
                mon intérêt pour la recherche des liens de cause à effet afin de
                soulager l’origine mécanique de vos douleurs, tout en me
                permettant de soigner de façon naturelle. L’étiopathie est plus
                qu’un métier, c’est une véritable passion !
              </p>
              <p>
                Je vous accueil avec le sourire et la bonne humeur dans mon
                cabinet aux Arcades à Dunkerque !
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-medium text-primary">Ma formation ?</h4>
              <p>
                Je suis étiopathe, diplômée de la faculté Libre d’étiopathie de
                Paris sous le n°<strong>20-1016</strong>, après 6 années
                d’études.
              </p>
              <p>
                J’ai été formée par des médecins urgentistes, chirurgien,
                anatomiste et physiologiste, et étiopathes membre du registre
                national des étiopathes (RNE).
              </p>
              <p>
                J’ai bénéficié de stages en milieu hospitalier et des cours de
                dissection à la faculté de médecine Paris Descartes.
              </p>
              <p>
                J’ai exercé à la clinique d’étiopathie de Paris et effectué
                plusieurs remplacements en cabinet libéral ou j'effectue encore
                de nombreux remplacements.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative p-4 z-10">
              <Image
                src="/images/melaine.jpg"
                alt="Mélaine Nieuwjaer"
                className="shadow"
                width={500}
                height={500}
              />
            </div>
            <div className="absolute left-0 top-0 red-dot red-dot-small z-0"></div>
            <div className="absolute bottom-0 right-0 red-dot red-dot-large z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
