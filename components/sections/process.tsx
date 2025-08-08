"use client"

import { useInView } from "@/hooks/use-in-view"

export default function Process() {
  const [processRef, processInView] = useInView()

  return (
    <section className="px-6 py-24 bg-neutral-50" ref={processRef}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">Náš proces</h2>
          <p className="text-neutral-600">Jednoduché kroky k vašej vysnívanej nehnuteľnosti</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Konzultácia", desc: "Pochopenie vašej vízie a požiadaviek" },
            { step: "02", title: "Dizajn", desc: "Vytvorenie detailných architektonických plánov" },
            { step: "03", title: "Výstavba", desc: "Oživenie dizajnov s presnosťou" },
            { step: "04", title: "Odovzdanie", desc: "Predanie vášho dokončeného projektu" },
          ].map((item, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 relative group ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 border-2 border-neutral-300 transition-all duration-300 group-hover:border-neutral-400 opacity-0 group-hover:opacity-100" />
              <div className="relative p-6">
                <div className="text-4xl font-light text-orange-500 mb-4 transition-colors duration-300 group-hover:text-orange-400">{item.step}</div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
