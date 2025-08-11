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
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Video Background na celú šírku */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/v2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay pre lepšiu čitateľnosť textu */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Text content prekrývajúci video */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-28 w-full">
          <div
            className={`max-w-2xl transition-all duration-1000 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4 lg:mb-6">
              Nábytkové
              <br/>
              <span className="block mt-2 lg:mt-4">štúdio</span>
            </h1>
            <div className="w-32 lg:w-64 h-1 bg-orange-300 ml-4 lg:ml-28 mb-6 lg:mb-8" />
            <p className="text-lg lg:text-xl text-white/90 mb-8 lg:mb-12 leading-relaxed max-w-lg">
              Redefinujeme luxusné bývanie prostredníctvom bezkonkurenčného remeselného umenia a moderného dizajnu.
            </p>
            <Button className="bg-orange-300 hover:bg-white text-neutral-900 hover:text-neutral-900 px-8 py-6 rounded-none group w-fit font-semibold">
              Zobraziť referencie
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Levitujúca šípka – iba na mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 block lg:hidden"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </div>
    </section>
  )
}
