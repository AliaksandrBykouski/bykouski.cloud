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
    { id: 10, title: "More projects coming soon...", href: "#", src: "" },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[780px] mt-20 lg:mt-10 xl:mt-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselArray.map((item) => (
          <CarouselItem key={item.id} className="group cursor-pointer">
            <div className="p-1">
              <Card className="w-full border-2 border-[var(--ring)] p-0 transition-shadow duration-300 hover:shadow-2xl">
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
                        priority
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
                        Updating...
                      </span>
                    </>
                  )}
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
