import { AtSymbolIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const ContactHeader = () => {
  return (
    <section className="bg-primary hidden lg:block">
      <div className="container mx-auto flex text-sm py-2 text-white space-x-6">
        <div className="inline-flex items-center">
          <PhoneIcon className="h-5 w-5 mr-1" />
          <Link href="tel:+33777149098">07.77.14.90.98</Link>
        </div>
        <div className="inline-flex items-center">
          <MapPinIcon className="h-5 w-5 mr-1" /> 574 avenue du stade, 59240,
          Dunkerque
        </div>
        <div className="inline-flex items-center">
          <AtSymbolIcon className="h-5 w-5 mr-1" />
          <Link href="mailto:mnieuwjaer.etiopathe@gmail.com">
            mnieuwjaer.etiopathe@gmail.com
          </Link>
        </div>
      </div>
    </section>
  );
};
