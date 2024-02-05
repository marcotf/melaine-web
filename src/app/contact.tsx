import {
  AtSymbolIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  EuroIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container mx-auto py-16 px-8 lg:px-16">
        <h3 className="text-white">Contact & RDV</h3>
        <div className="flex flex-wrap text-white">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <h4 className="font-medium text-lg mb-2">Contact</h4>
            <ul>
              <li>
                <PhoneIcon className="mr-1 h-5 w-5 inline-flex" />
                {/* <font-awesome-icon className="mr-1" :icon="['fas', 'phone-alt']" /> */}
                <a href="`tel:+330777149098">07.77.14.90.98</a>
              </li>
              <li>
                <MapPinIcon className="mr-1 h-5 w-5 inline-flex" />
                {/* <font-awesome-icon className="mr-1" :icon="['fas', 'map-marker-alt']" /> */}
                574 avenue du stade, 59240, Dunkerque
              </li>
              <li>
                <AtSymbolIcon className="mr-1 h-5 w-5 inline-flex" />
                {/* <font-awesome-icon className="mr-1" :icon="['fas', 'at']" /> */}
                <a href="mailto:mnieuwjaer.etiopathe@gmail.com">
                  mnieuwjaer.etiopathe@gmail.com
                </a>
              </li>
              <li>
                <LinkedinIcon className="mr-1 h-5 w-5 inline-flex" />
                {/* <font-awesome-icon className="mr-1" :icon="['fab', 'linkedin']" /> */}
                <a
                  href="https://www.linkedin.com/in/mélaine-nieuwjaer-7694921a9/"
                  target="_blank"
                >
                  Linked’in
                </a>
              </li>
              <li>
                <FacebookIcon className="mr-1 h-5 w-5 inline-flex" />
                {/* <font-awesome-icon className="mr-1" :icon="['fab', 'facebook-square']" /> */}
                <a
                  href="https://www.facebook.com/etiopathe.Arcades.Dunkerque"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <InstagramIcon className="mr-1 h-5 w-5 inline-flex" />
                {/* <font-awesome-icon className="mr-1" :icon="['fab', 'instagram']" /> */}
                <a
                  href="https://www.instagram.com/etiopathe_dunkerque_arcades/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 space-y-4">
            <h4 className="font-medium text-lg mb-2">Rendez-vous</h4>
            <div className="text-sm">
              <div className="inline-flex">
                <ClockIcon className="mr-1 h-5 w-5" /> Horaires:
              </div>
              <ul className="ml-4 list-disc">
                <li>Lundi à Vendredi - 8h00 à 19h30</li>
                <li>Samedi - 8h00 à 12h30</li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="inline-flex">
                <EuroIcon className="mr-1 h-5 w-5" /> Tarif de la consultation:
              </div>
              <ul className="ml-4 list-disc">
                <li>50€ sur place</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
