"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useIsMobile } from "@/components/ui/use-mobile"

const slides = [
  {
    label: "Skrine",
    subtitle: "Vstavaná a voľne stojaca skriňa na mieru",
    image: "/anywebp/skrina1.webp",
    url: "/sluzby/#vstavane-skrine"
  },
  {
    label: "Kuchyne",
    subtitle: "Moderné a klasické kuchynské riešenia",
    image: "/anywebp/kuch1.webp",
    url: "/sluzby/#kuchyne"
  },
  {
    label: "Detské izby",
    subtitle: "Kreatívne priestory pre deti",
    image: "/new/prva.jpg",
    url: "/sluzby/#detske-izby"
  },
  {
    label: "Vstavaný nábytok",
    subtitle: "Vstavaný nábytok na mieru",
    image: "/anywebp/telka.webp",
    url: "/sluzby/#vstavane-skrine"
  },
]

export default function InteriorSlider() {
  const isMobile = useIsMobile()
  return (
    <div className="relative w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Nadpis */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Vyrábame na mieru
          </h2>
        </div>
        
        <Carousel
          className="w-full"
          opts={isMobile ? {} : { watchDrag: false }}
        >
          <CarouselContent className="">
            {slides.map((slide, idx) => (
                <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/3">
                <a href={slide.url} className="block">
                  <div className="relative h-[350px] overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{slide.label}</h3>
                    <p className="text-lg opacity-90">{slide.subtitle}</p>
                    </div>
                  </div>
                  </div>
                </a>
                </CarouselItem>
            ))}
          </CarouselContent>
          {!isMobile && (
            <>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
                <CarouselPrevious className="!static" />
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                <CarouselNext className="!static" />
              </div>
            </>
          )}
        </Carousel>
      </div>
    </div>
  )
} 