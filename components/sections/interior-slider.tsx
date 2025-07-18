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
    <div className="relative w-full h-[80vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
      <Carousel
        className="w-full h-full"
        opts={isMobile ? {} : { watchDrag: false }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, idx) => (
            <CarouselItem key={idx} className="relative w-full h-[80vh] lg:h-[50vh] flex items-center justify-center">
              <Image
                src={slide.image}
                alt={slide.label}
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-black/40 z-10 flex items-center flex flex-col justify-center">
                <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">{slide.label}</h2>
                <p className="text-white text-lg md:text-2xl font-light drop-shadow-lg mt-4 text-center max-w-xl mx-auto">{slide.subtitle}</p>
                {isMobile && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                    <span className="text-white text-base md:text-lg opacity-80">Potiahnite prstom</span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M20 12L24 16L20 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 12L8 16L12 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
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
  )
} 