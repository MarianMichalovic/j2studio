"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const result = useInView()
  const [heroRef, heroInView] = Array.isArray(result) ? result : [null, result]

  return (
    <section ref={heroRef} className="min-h-screen">
      <div className="grid lg:grid-cols-2 h-screen">
      <div
        className={`px-6 lg:px-28 pt-6 lg:mt-6 flex flex-col justify-center transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h1 className="text-3xl lg:text-7xl font-bold text-neutral-900 mb-1 lg:mb-4">
        Nábytkové
        <br/><div className="mt-4">Štúdio</div>
        </h1>
        <div className="w-32 lg:w-64 h-1 bg-orange-300 ml-4 lg:ml-28 mb-6" />
        <p className="text-md text-neutral-600 mb-12 leading-relaxed max-w-sm lg:max-w-md">
        Redefinujeme luxusné bývanie prostredníctvom bezkonkurenčného remeselného umenia a moderného dizajnu.
        </p>
        <Button className="bg-black hover:bg-neutral-800 text-white px-8 py-3 rounded-none group w-fit">
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
        <ChevronDown className="w-6 h-6 text-neutral-500" />
        </motion.div>
      </div>

      <div
        className={`relative h-full transition-all duration-1000 delay-300 overflow-hidden ${heroInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/v1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
      </div>
    </section>
  )
}
