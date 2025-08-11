"use client"

import React from "react"

const processes = [
  {
    icon: (
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>
    ),
    title: "Bezplatné",
    subtitle: "konzultácie"
  },
  {
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
    ),
    title: "Návrh a",
    subtitle: "vizualizácie"
  },
  {
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"/><path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"/><path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"/><path d="M18 6h4"/><path d="m5 10-2 8"/><path d="m7 18 2-8"/></svg>
    ),
    title: "Kompletná",
    subtitle: "realizácia"
  },
  {
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    ),
    title: "Atypické",
    subtitle: "riešenia"
  },
  {
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg>
    ),
    title: "Montáž",
    subtitle: "a servis"
  }
]

export default function HowWeWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hlavný nadpis */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Vieme ako na to
          </h2>
          <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Dlhoročné remeselné skúsenosti a kreativita našich dizajnérov nám umožňuje realizovať vaše predstavy o 
            bývaní. Vytvoríme vám profesionálny návrh a vyrobíme takmer akýkoľvek nábytok podľa vašich prianí. Pre 
            každý priestor nájdeme najlepšie riešenie.
          </p>
        </div>

        {/* Ikony procesov */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {processes.map((process, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 text-neutral-700 group-hover:text-orange-500 transition-colors duration-300">
                {process.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1 leading-[0.95em]">
                {process.title}
              </h3>
              <p className="text-lg font-semibold text-neutral-900">
                {process.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Proces sekcia */}
        <div className="flex justify-center">
          <div className="bg-gray-100 px-8 py-4 rounded-lg">
            <h3 className="text-xl font-semibold text-neutral-900">
              Proces
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
