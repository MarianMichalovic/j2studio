"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export default function Locations() {
  const [locationRef, locationInView] = useInView()

  return (
    <section className="pt-24" ref={locationRef}>
      <div className="grid lg:grid-cols-2">
        <div
          className={`px-6 lg:px-12 flex flex-col justify-center transition-all duration-1000 ${locationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">Globálna prítomnosť</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Dizajnový nábytok a vybavenie tvoríme a odovzdávame po celom slovensku a okolitých krajinách.
          </p>

          <div className="space-y-4 mb-10 lg:mb-0">
            {["Slovensko", "Česko", "Rakúsko", "Maďarsko"].map((city, index) => (
              <div key={city} className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700">{city}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative min-h-[60vh] lg:min-h-[80vh] transition-all duration-1000 delay-300 ${locationInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <Image
            src="/global.jpg"
            alt="Globálne lokality"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  )
}
