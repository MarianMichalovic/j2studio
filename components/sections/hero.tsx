"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useState, useEffect } from "react"

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Hero() {
  const [heroRef, heroInView] = useInView()

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={heroRef}>
      <div className="grid lg:grid-cols-2 min-h-screen">
        <div
          className={`px-6 lg:px-12 pt-12 lg:mt-20 flex flex-col justify-center transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-3xl lg:text-7xl font-light text-gray-900 mb-1 lg:mb-4 leading-tight">
            Návrh<span className="font-thin text-4xl lg:text-8xl text-orange-300">&</span>realizácie
            <br />
            Dizajnových interiérov na mieru
          </h1>
          <div className="w-32 lg:w-64 h-1 bg-orange-300 ml-4 lg:ml-40 mb-6" />
          <p className="text-md text-gray-600 mb-12 leading-relaxed max-w-sm lg:max-w-md">
            Redefinujeme luxusné bývanie prostredníctvom bezkonkurenčného remeselného umenia a moderného dizajnu.
          </p>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none group w-fit">
            Zobraziť referencie
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          {/* Levitujúca šípka – iba na mobile */}
          <motion.div
            className="block lg:hidden mt-12 mx-auto"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-gray-500" />
          </motion.div>
        </div>

        <div
          className={`relative  h-screen sm:-mt-[95px] mt-8 transition-all duration-1000 delay-300 overflow-hidden ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          {/* Slideshow Images */}
          {[
            "/slider/1.jpg",
            "/slider/2.jpg",
            "/slider/3.jpg",
          ].map((src, index) => (
            <Image
              key={index}
              src={src || "/placeholder.svg"}
              alt={`Moderná architektúra ${index + 1}`}
              fill
              className={`object-cover transition-all duration-1000 ${currentSlide === index
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                } hover:scale-105`}
            />
          ))}

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-gray-800 w-8" : "bg-gray-700/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
