import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/20/solid";

export const HeaderMenu = () => {
  return (
    <section className="header-img">
      <header className="container px-2 mx-auto relative py-8 min-h-[530px]">
        {/* <!-- Menu --> */}
        <div className="flex justify-between items-center py-2 px-8 rounded-full bg-white">
          {/* <!-- Logo Name --> */}
          <div className="flex-1 flex items-center text-primary text-lg font-semibold">
            <Image
              src="/images/etio-logo.png"
              alt="Logo Etiopathe"
              height={40}
              width={40}
              className="mr-2"
            />
            <h1>Mélaine Nieuwjaer</h1>
          </div>
          {/* <!-- Menu --> */}
          <div className="mt-2">
            <ul className="hidden lg:flex font-medium text-blue-950">
              <li>
                <Link href="#etio">L'étiopathie</Link>
              </li>
              <li className="ml-4">
                <Link href="#melaine">Votre étiopathe</Link>
              </li>
              <li className="ml-4">
                <Link href="#consultation">La consultation</Link>
              </li>
              <li className="ml-4">
                <Link href="#questions">Questions</Link>
              </li>
              <li className="ml-4">
                <Link href="#contact">Contact</Link>
              </li>
              <li className="ml-4 text-primary">
                <Link href="mailto:mnieuwjaer.etiopathe@gmail.com">
                  Rendez-vous
                </Link>
              </li>
            </ul>
            <div className="block lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <Bars3Icon className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription className="font-medium text-blue-950 flex flex-col space-y-4">
                      <SheetTrigger asChild>
                        <Link href="#etio">L'étiopathie</Link>
                      </SheetTrigger>

                      <SheetTrigger asChild>
                        <Link href="#melaine">Votre étiopathe</Link>
                      </SheetTrigger>

                      <SheetTrigger asChild>
                        <Link href="#consultation">La consultation</Link>
                      </SheetTrigger>

                      <SheetTrigger asChild>
                        <Link href="#questions">Questions</Link>
                      </SheetTrigger>

                      <SheetTrigger asChild>
                        <Link href="#contact">Contact</Link>
                      </SheetTrigger>

                      <SheetTrigger asChild>
                        <Link
                          className="text-primary"
                          href="mailto:mnieuwjaer.etiopathe@gmail.com"
                        >
                          Rendez-vous
                        </Link>
                      </SheetTrigger>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
        {/* <!-- Action --> */}
        <div className="absolute bottom-0 mb-8 px-2 left-0 text-white b-0 space-y-8">
          <h1 className="font-extrabold text-5xl">Mélaine Nieuwjaer</h1>
          <h2 className="font-medium text-5xl mb-2">Etiopathe</h2>
          <div>
            <Link href="#etio" className="bg-primary px-8 py-2 rounded-full">
              Découvrir
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};
