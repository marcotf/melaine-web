"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="container mx-auto py-16 px-8 lg:px-16">
      <h3>Galerie</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 18 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/4"
            >
              <AspectRatio ratio={16 / 10}>
                <Image
                  src={`/images/galery/${index + 1}.jpeg`}
                  alt={`Photo de démonstration ${index + 1}`}
                  fill={true}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
