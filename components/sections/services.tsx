"use client"

import { useInView } from "@/hooks/use-in-view"
import { Ruler, Sofa, Building2 } from "lucide-react"
import type React from "react"

export default function Services() {
  // Explicitly type the result to avoid linter errors
  const [servicesRef, servicesInView] = useInView() as [React.RefObject<HTMLDivElement>, boolean]

  const services = [
    {
      title: "Architektonický návrh",
      desc: "Tvoríme inovatívne a funkčné návrhy pre vaše projekty.",
      icon: Ruler,
    },
    {
      title: "Interiérový dizajn",
      desc: "Navrhujeme estetické a praktické interiéry na mieru.",
      icon: Sofa,
    },
    {
      title: "Realizácia stavieb",
      desc: "Zabezpečujeme kompletnú výstavbu od A po Z.",
      icon: Building2,
    },
  ]

  return (
    <section className="px-6 py-24 bg-gray-50" ref={servicesRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Naše služby</h2>
          <p className="text-gray-600">Komplexné riešenia pre vaše potreby</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 relative group ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 border-2 border-gray-300 transition-all duration-300 group-hover:border-gray-400 opacity-0 group-hover:opacity-100" />
              <div className="relative p-6 flex flex-col items-center">
                <item.icon className="w-10 h-10 mb-4 text-orange-500 transition-colors duration-300 group-hover:text-gray-900" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}