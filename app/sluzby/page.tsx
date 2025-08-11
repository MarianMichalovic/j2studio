"use client"

import React from "react"
import Image from "next/image"
import Gallery from "@/components/ui/gallery"
import type { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Naše služby - J2Studio",
//   description: "Ponúkame komplexné služby v oblasti návrhu a výroby nábytku na mieru. Od prvotného návrhu až po finálnu montáž.",
// }

const services = [
  {
    title: "Návrh nábytku",
    description: "Profesionálny návrh nábytku na mieru podľa vašich potrieb a priestoru. Vytvoríme 3D vizualizácie a technické výkresy.",
    icon: (
      <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
    )
  },
  {
    title: "Výroba nábytku",
    description: "Kvalitná výroba nábytku z vysokokvalitných materiálov. Používame moderné technológie a tradičné remeselné postupy.",
    icon: (
      <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"/><path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"/><path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"/><path d="M18 6h4"/><path d="m5 10-2 8"/><path d="m7 18 2-8"/></svg>
    )
  },
  {
    title: "Montáž a inštalácia",
    description: "Profesionálna montáž a inštalácia nábytku priamo u vás doma. Zabezpečíme správne osadenie a finálne úpravy.",
    icon: (
      <svg className="w-20 h-20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg>
    )
  }
]

// Galérie obrázkov
const kuchyneImages = [
  "/img/kuchyna/1000002089.webp",
  "/img/kuchyna/1000002090.webp", 
  "/img/kuchyna/1000002091.webp",
  "/img/kuchyna/1000002092.webp",
  "/img/kuchyna/1000002094.webp",
  "/img/kuchyna/1000002095.webp",
  "/img/kuchyna/1000002556.webp",
  "/img/kuchyna/1000002557.webp",
  "/img/kuchyna/1000002968.webp",
  "/img/kuchyna/1000002969.webp",
  "/img/kuchyna/1000002970.webp",
  "/img/kuchyna/1000002971.webp",
  "/img/kuchyna/1000002972.webp",
  "/img/kuchyna/1000003941.webp",
  "/img/kuchyna/1000003942.webp",
  "/img/kuchyna/1000003944.webp",
  "/img/kuchyna/1000003945.webp",
  "/img/kuchyna/1000003947.webp",
  "/img/kuchyna/1000004944.webp",
  "/img/kuchyna/IMG_3477.webp",
  "/img/kuchyna/IMG_3478.webp",
  "/img/kuchyna/IMG_3479.webp",
  "/img/kuchyna/IMG_3480.webp",
  "/img/kuchyna/IMG_4039.webp",
  "/img/kuchyna/IMG_4040.webp",
  "/img/kuchyna/IMG_4041.webp",
  "/img/kuchyna/IMG_4178.webp",
  "/img/kuchyna/IMG_4181.webp",
  "/img/kuchyna/IMG_4199.webp"
]

const montazeImages = [
  "/img/montaze/1000003773.webp",
  "/img/montaze/1000003775.webp",
  "/img/montaze/1000007119.webp",
  "/img/montaze/1000007246.webp",
  "/img/montaze/1000008316.webp",
  "/img/montaze/20250509_070848.webp",
  "/img/montaze/20250509_143519.webp",
  "/img/montaze/20250509_143533.webp",
  "/img/montaze/20250610_074218.webp",
  "/img/montaze/IMG_2537.webp",
  "/img/montaze/IMG_2625.webp",
  "/img/montaze/IMG_2732.webp",
  "/img/montaze/IMG_2736.webp",
  "/img/montaze/IMG_2768.webp",
  "/img/montaze/IMG_2769.webp",
  "/img/montaze/IMG_2770.webp",
  "/img/montaze/IMG_2771.webp",
  "/img/montaze/IMG_2777.webp",
  "/img/montaze/IMG_2796.webp",
  "/img/montaze/IMG_2811.webp",
  "/img/montaze/IMG_3340.webp",
  "/img/montaze/IMG_3835.webp",
  "/img/montaze/IMG_3936.webp",
  "/img/montaze/IMG_3978.webp",
  "/img/montaze/IMG_4070.webp",
  "/img/montaze/IMG_4071.webp",
  "/img/montaze/IMG_4073.webp",
  "/img/montaze/IMG_4169.webp"
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero sekcia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Naše služby
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ponúkame komplexné služby v oblasti návrhu a výroby nábytku na mieru. 
            Od prvotného návrhu až po finálnu montáž u vás doma.
          </p>
        </div>
      </section>

      {/* Služby grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group text-center">
                <div className="flex justify-center mb-6 text-neutral-700 group-hover:text-orange-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces práce */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Ako pracujeme
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Náš proces je navrhnutý tak, aby sme dosiahli najlepšie výsledky pre každého klienta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konzultácia", desc: "Bezplatná konzultácia a zmeranie priestoru" },
              { step: "02", title: "Návrh", desc: "Vytvorenie 3D návrhu a výber materiálov" },
              { step: "03", title: "Výroba", desc: "Precízna výroba nábytku v našej dielni" },
              { step: "04", title: "Montáž", desc: "Profesionálna montáž a finálne úpravy" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-neutral-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Galérie */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Naše práce
            </h2>
            <p className="text-lg text-neutral-600">
              Pozrite si ukážky našich realizácií
            </p>
          </div>

          {/* Galéria kuchýň */}
          <Gallery 
            title="Kuchyne na mieru"
            images={kuchyneImages}
            alt="Kuchyňa na mieru"
          />

          {/* Galéria montáží */}
          <Gallery 
            title="Montáže nábytku"
            images={montazeImages}
            alt="Montáž nábytku"
          />
        </div>
      </section>

      {/* CTA sekcia */}
      {/* <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Máte záujem o našu spoluprácu?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Kontaktujte nás a dohodneme si bezplatnú konzultáciu
          </p>
          <button className="bg-orange-300 hover:bg-orange-400 text-neutral-900 font-semibold px-8 py-4 rounded-none transition-colors duration-300">
            Kontaktovať nás
          </button>
        </div>
      </section> */}
    </div>
  )
}
