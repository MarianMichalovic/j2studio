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
      title: "Moderná vila 1",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Táto úžasná 4-izbová vila má okná od podlahy po strop, solárne panely, systém zberania dažďovej vody a minimalistický dizajn, ktorý bezproblémovo spája vnútorné a vonkajšie obytné priestory. Nachádza sa v srdci mesta s panoramatickým výhľadom.",
      specs: "4 spálne • 3 kúpeľne • 3 200 m² • Dokončené 2023",
    },
    {
      id: 2,
      title: "Moderná vila 2",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Architektonické majstrovské dielo s technológiou inteligentnej domácnosti, geotermálnym vykurovaním, zelenými strechovými systémami a prémiovými povrchovými úpravami. Otvorený dizajn maximalizuje prirodzené svetlo pri zachovaní súkromia a pohodlia.",
      specs: "5 spální • 4 kúpeľne • 4 100 m² • Dokončené 2023",
    },
    {
      id: 3,
      title: "Moderná vila 3",
      subtitle: "Súčasný dizajn s udržateľnými prvkami",
      details:
        "Táto luxusná rezidencia predstavuje inovatívny dizajn s udržateľnými materiálmi, energeticky efektívnymi systémami a úchvatnými výhľadmi. Medzi funkcie patrí strešná záhrada, nekonečný bazén a najmodernejšia domáca automatizácia.",
      specs: "3 spálne • 2 kúpeľne • 2 800 m² • Dokončené 2024",
    },
  ]

  return (
    <section className="py-24" ref={portfolioRef}>
      <div
        className={`text-center mb-16 px-6 transition-all duration-1000 ${portfolioInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">Vybrané projekty</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
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
                src={`/slider/1.jpg`}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${selectedProject === project.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              />

              {/* Click indicator text */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
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
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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
