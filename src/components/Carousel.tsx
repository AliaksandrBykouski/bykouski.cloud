"use client";

import * as React from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import FutureTech from "@/assets/FutureTech.png";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselArray = [
    {
      id: 1,
      title: "FutureTech",
      href: "https://alexandrkral.ru/",
      src: FutureTech,
    },
    { id: 2, title: "Item 2", href: "#", src: "" },
    { id: 3, title: "Item 3", href: "#", src: "" },
    { id: 4, title: "Item 4", href: "#", src: "" },
    { id: 5, title: "Item 5", href: "#", src: "" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[780px] mt-20 lg:mt-10 xl:mt-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselArray
          .filter((item) => item.src)
          .map((item) => (
            <CarouselItem key={item.id}>
              <div className="p-1">
                <Card className="w-full border-2 border-[var(--ring)] p-0 ">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full"
                    >
                      <Image
                        src={item.src as string}
                        alt={item.title}
                        priority
                        className="rounded-xl w-full h-full"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm font-medium text-[var(--ring)]">
                        {item.title}
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer text-[var(--ring)] hover:text-[var(--ring)]/80" />
      <CarouselNext className="cursor-pointer text-[var(--ring)] hover:text-[var(--ring)]/80" />
    </Carousel>
  );
}
