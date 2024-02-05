const testimonials = [
  {
    text: "En tant que cycliste averti, j'ai développé des douleurs cervicales que seule Mélaine a pu soulager. Aujourd’hui, je suis pleinement dans la pratique de mon sport ! Pour tous les sportifs, je vous la recommande !",
    author: "Thomas",
    age: "54 ans",
  },
  {
    text: "Mélaine est une praticienne disponible et à l'écoute. Les manipulations sont efficaces, douces et précises. Mon problème de dos a vite été soulagé, un bonheur !! Je recommande à 100% !",
    author: "Joséphine",
    age: "26 ans",
  },
  {
    text: "J'ai eu la chance d'être reçu par Mélaine un jour ou je souffrais énormément... Mélaine est très attentive et à l'écoute lors de chaque séance. Elle est sure de ses gestes et explique clairement ses manipulations. Elle se veut très confiante et rassurante. C'est avec un grand plaisir que je poursuis mes séances avec elle.",
    author: "Fabienne",
    age: "47 ans",
  },
];

export const Testimonial = () => {
  const random = Math.floor(Math.random() * 3);

  return (
    <section className="py-16  overflow-hidden bg-red-100 text-white testimonial">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote className="mt-8">
          <div className="max-w-4xl mx-auto text-center leading-9">
            <p className="text-2xl">
              &ldquo;{testimonials[random].text}&rdquo;
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base leading-6 font-medium">
                  {testimonials[random].author}
                </div>

                <svg
                  className="hidden md:block mx-1 h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div className="text-base leading-6 font-medium text-gray-300">
                  {testimonials[random].age}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
