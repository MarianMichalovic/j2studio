"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useIsMobile } from "@/components/ui/use-mobile"

const slides = [
  {
    label: "Skrine",
    subtitle: "Custom built-in and freestanding wardrobes",
    image: "/anywebp/skrina1.webp",
  },
  {
    label: "Kuchyne",
    subtitle: "Modern and classic kitchen solutions",
    image: "/anywebp/kuch1.webp",
  },
  {
    label: "Detské izby",
    subtitle: "Creative spaces for children",
    image: "/new/prva.jpg",
  },
  {
    label: "Vstavaný nábytok",
    subtitle: "Interior and entrance doors",
    image: "/anywebp/telka.webp",
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