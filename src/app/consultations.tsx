const consultations = [
  {
    name: "Anamnèse",
    description:
      "C’est l’écoute et le recueil des symptômes présentés par le patient (trajet douloureux, fourmillement, gène à la mobilisation…).",
  },
  {
    name: "Analyse étiopathique",
    description:
      "C’est l’application de la méthode de raisonnement étiopathique.. A partir de vos symptômes, je remonte à la cause de votre pathologie.",
  },
  {
    name: "Evaluation de l’urgence",
    description:
      "Dans le cas où la cause ne rentre pas dans le champ d’application de l’étiopathie, Je vous réoriente vers d’autres soins adaptés à vos besoins.",
  },
  {
    name: "Intervention",
    description:
      "Mon geste thérapeutique constitue en une manipulation précise et ciblée de la cause de la pathologie qui induit la réduction des symptômes.",
  },
];

export const Consultations = () => {
  return (
    <section
      id="consultation"
      className="container mx-auto py-16 px-8 lg:px-16"
    >
      <h3>La consultation</h3>
      <div className="flex items-center">
        <div className="w-full lg:w-1/2 flex flex-col text-center space-y-8">
          {consultations.map((consultation, index) => (
            <div
              key={index}
              className="w-full mt-8 py-4 px-8 bg-gray-50 hover:shadow-primary shadow rounded relative acte"
            >
              <h4 className="mb-4">{consultation.name}</h4>
              <p>{consultation.description}</p>
              <div className="absolute top-0 inset-x-0 -mt-5 font-extrabold text-primary text-4xl">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block w-1/2 p-8">
          <img src="/images/bureau.jpg" alt="consultation" className="shadow" />
        </div>
      </div>
    </section>
  );
};
