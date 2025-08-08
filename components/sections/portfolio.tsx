"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"
import { X } from "lucide-react"

export default function Portfolio() {
  const [portfolioRef, portfolioInView] = useInView()
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Kuchynská linka",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Pre klientov sme navrhli a zrealizovali kuchyňu, ktorá spája čisté línie, praktické úložné riešenia a jemné farebné kontrasty. Dominantou priestoru je ostrovček s pracovnou doskou z kompozitného materiálu, ktorý slúži aj ako jedálenský pult.",
      specs: "• Dokončené 2023",
      image: "/anywebp/kuch1.webp"
    },
    {
      id: 2,
      title: "Obloženie obývacej izby",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Dizajnový obklad za televíziou sme navrhli ako dominantný prvok interiéru, ktorý zároveň pôsobí harmonicky a zútulňuje celý priestor. Použité boli prírodné dekory s jemnou štruktúrou, LED podsvietenie a skryté vedenie kabeláže pre čistý vizuálny dojem.",
      specs: "• Dokončené 2023",
      image: "/anywebp/telka2.webp"
    },
    {
      id: 3,
      title: "Vstavaný šatník",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Projekt šatníka bol navrhnutý s dôrazom na ergonómiu, maximálne využitie priestoru a elegantný vzhľad. Klientovi sme dodali šatníkový systém s kombináciou otvorených políc, zásuviek a tyčí na zavesenie.",
      specs: "• Dokončené 2023",
      image: "/anywebp/skrina2.webp"
    },
    {
      id: 4,
      title: "Kuchyňa",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Pre klientov sme navrhli a zrealizovali kuchyňu, ktorá spája čisté línie, praktické úložné riešenia a jemné farebné kontrasty. Dominantou priestoru je ostrovček s pracovnou doskou z kompozitného materiálu, ktorý slúži aj ako jedálenský pult.",
      specs: "• Dokončené 2023",
      image: "/new/tretia.jpg"
    },
    {
      id: 5,
      title: "Vstavaná skrina",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Dizajnovú vstavanú skriňu sme navrhli ako dominantný prvok interiéru, ktorý zároveň pôsobí harmonicky a zútulňuje celý priestor. Použité boli prírodné dekory s jemnou štruktúrou.",
      specs: "• Dokončené 2023",
      image: "/new/prva.jpg"
    },
    {
      id: 6,
      title: "Kuchyňa",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Projekt šatníka bol navrhnutý s dôrazom na ergonómiu, maximálne využitie priestoru a elegantný vzhľad. Klientovi sme dodali šatníkový systém s kombináciou otvorených políc, zásuviek a tyčí na zavesenie.",
      specs: "• Dokončené 2023",
      image: "/new/stvrta.jpg"
    },
  ]

  return (
    <section className="pt-24" ref={portfolioRef}>
      <div
        className={`text-center mb-16 px-6 transition-all duration-1000 ${portfolioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Vybrané projekty</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Objavte naše najnovšie architektonické úspechy a dizajnové inovácie.
        </p>
      </div>

      <div className="grid md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group transition-all duration-1000 cursor-pointer ${portfolioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            <div className="relative h-80 lg:h-96 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${selectedProject === project.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              />

              {/* Click indicator text */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1 bg-orange-500 backdrop-blur-sm rounded-full">
                  <span className="text-white text-xs font-medium">kliknite</span>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 ${selectedProject === project.id ? "hidden" : "transform translate-y-full group-hover:translate-y-0"}`}
              >
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>

              {/* Click overlay with detailed info */}
              <div
                className={`absolute inset-0 bg-black/80 p-6 text-white transition-all duration-500 flex flex-col justify-center ${selectedProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"}`}
              >
                <button
                  className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(null)
                  }}
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                <p className="text-sm opacity-90 mb-4">{project.subtitle}</p>
                <p className="text-sm leading-relaxed mb-4">{project.details}</p>
                <p className="text-xs opacity-75 border-t border-white/20 pt-4">{project.specs}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
