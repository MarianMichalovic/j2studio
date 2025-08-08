"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export default function Team() {
  const [teamRef, teamInView] = useInView()

  return (
    <section className="py-24" ref={teamRef}>
      <div
        className={`text-center mb-16 px-6 transition-all duration-1000 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-4">Náš tím</h2>
        <p className="text-neutral-600">Spoznajte expertov za každým projektom</p>
      </div>

      <div className="grid md:grid-cols-3">
        {[
          { name: "Eva Novotná", role: "Hlavná architektka" },
          { name: "Tomáš Dvořák", role: "Projektový manažér" },
          { name: "Lucia Černá", role: "Interiérová dizajnérka" },
        ].map((member, index) => (
          <div
            key={index}
            className={`group transition-all duration-1000 ${teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src={`/placeholder.svg?height=600&width=500&query=professional portrait ${member.name}`}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-sm opacity-90">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
