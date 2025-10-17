"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Crossfit from "@/assets/Crossfit.jpg";
import Estate from "@/assets/Estate.jpg";
import FutureTech from "@/assets/FutureTech.jpg";
import IdeaMarket from "@/assets/ideamarket.jpg";
import ReactCards from "@/assets/ReactCards.jpg";
import StreamVibe from "@/assets/StreamVibe.jpg";
import FitPro from "@/assets/FitPro.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Loader } from "./Loader";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const carouselArray = [
    {
      id: 1,
      title: "Bykouski FutureTech",
      href: "https://alexandrkral.ru/",
      src: FutureTech,
    },
    {
      id: 2,
      title: "IdeaMarket",
      href: "https://ideamarket.site/",
      src: IdeaMarket,
    },
    {
      id: 3,
      title: "Bykouski StreamVibe",
      href: "http://sub.alexandrkral.ru/",
      src: StreamVibe,
    },
    {
      id: 4,
      title: "Bykouski Agency",
      href: "https://real-estate-three-pearl.vercel.app/",
      src: Estate,
    },
    {
      id: 5,
      title: "Bykouski Fitness",
      href: "http://sub1.alexandrkral.ru/",
      src: Crossfit,
    },
    {
      id: 6,
      title: "React Cards",
      href: "https://reactcards-qor7.onrender.com/",
      src: ReactCards,
    },
    {
      id: 7,
      title: "Bykouski FitPro",
      href: "https://fit-pro-five.vercel.app/",
      src: FitPro,
    },
    { id: 10, title: "More projects coming soon...", href: "#", src: "" },
  ];

  return (
    <div className="w-full flex justify-center px-6 sm:px-7 lg:px-8">
      <Carousel
        className="w-full max-w-7xl flex items-center justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-3 sm:-ml-4 md:-ml-6">
          {carouselArray.map((item) => (
            <CarouselItem
              key={item.id}
              className="group cursor-pointer pl-2 sm:pl-3 md:pl-5 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2 sm:p-3 md:p-4">
                <Card className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] border-2 border-[var(--ring)] p-0 mx-auto">
                  <CardContent className="relative flex aspect-square items-center justify-center p-0">
                    {item.src ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full h-full"
                      >
                        <Image
                          src={item.src}
                          alt={item.title}
                          priority={item.id <= 3}
                          loading={item.id <= 3 ? "eager" : "lazy"}
                          className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <span className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm font-medium text-[var(--ring)]">
                          {item.title}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <Loader />
                        <span className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-sm font-medium text-[var(--ring)]">
                          {item.title}
                        </span>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer text-[var(--ring)] hover:text-[var(--foreground)] -left-10 sm:-left-12 border-[var(--ring)] hover:border-[var(--foreground)] hover:scale-110" />
        <CarouselNext className="cursor-pointer text-[var(--ring)] hover:text-[var(--foreground)] -right-10 sm:-right-12 border-[var(--ring)] hover:border-[var(--foreground)] hover:scale-110" />
      </Carousel>
    </div>
  );
}
