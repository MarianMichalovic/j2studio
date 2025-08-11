"use client"

import React from "react"

const processSteps = [
  {
    number: "1. krok",
    title: "Stretnutie",
    description: "Na základe vášho dopytu si dohodneme stretnutie u nás v štúdiu, na ktorom sa bližšie oboznámime s vašimi predstavami o nábytku. Oceníme ak si na naše stretnutie prinesiete niekoľko obrázkov, ktoré vystihujú vaše predstavy a štýl. Prineste si aj so sebou výpis merní formátu, ktorý vám zašleme na email. Takto celý proces urýchlime.",
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>
    )
  },
  {
    number: "2. krok",
    title: "Návrh",
    description: "Následne budeme intenzívne pracovať na návrhu a projektovej dokumentácii vášho nábytku. Obvykle vytvárame návrh už do 2 týždňov.",
    icon: (
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 10 2 2 4-4"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
    )
  },
  {
    number: "3. krok",
    title: "Príprava výroby",
    description: "Na ďalšom stretnutí vám predstavíme hotový návrh a vizualizácie vášho nábytku, použité materiály a cenovú ponuku. V tomto kole korekcií budete mať priestor na pripomienky, môžete meniť farbenú a materiálovú riešenie. Nové doplnené zmeny zapracujeme do návrhu, ide o jeden variant, ktorý doplnime k vašej úplnej spokojnosti.",
    icon: (
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15v-3.014"/><path d="M16 15v-3.014"/><path d="M20 6H4"/><path d="M20 8V4"/><path d="M4 8V4"/><path d="M8 15v-3.014"/><rect x="3" y="12" width="18" height="7" rx="1"/></svg>
    )
  },
  {
    number: "4. krok",
    title: "Dohoda",
    description: "Po finálnom schválení vizuálneho návrhu a cenovej ponuky podpisujeme zmluvu o dielo. Zaplatíte zálohu 50% z načítame pracovať na výrobe vášho vysnívaného nábytku. Termín dodania závisle od zložitosti diela, obvykle do 8 týždňov od podpísania zmluvy, v tejto etape si tiež dohodneme presný termín montáže.",
    icon: (
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
    )
  },
  {
    number: "5. krok",
    title: "Montáž",
    description: "Týždeň pred montážou sa uhrádzá zvyšných 45% z ceny nábytku. Po montáži a podpísaní preberacieho protokolu vám vystavíme faktúru na posledných 5% z celkovej ceny.",
    icon: (
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"/><path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"/><path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"/><path d="M18 6h4"/><path d="m5 10-2 8"/><path d="m7 18 2-8"/></svg>
    )
  }
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero sekcia */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-8">
            Proces
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Ako bude prebiehať naša spolupráca? Objavte náš osvedčený proces – od vášho prvotného dopytu, cez 
            individuálne plánovanie, až po profesionálnu montáž.
          </p>
        </div>
      </section>

      {/* Proces kroky */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`${index === 4 ? 'md:col-span-2 max-w-2xl mx-auto' : ''}`}>
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4 text-neutral-700">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {step.number}
                  </h3>
                  {step.title && (
                    <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                      {step.title}
                    </h4>
                  )}
                </div>
                <p className="text-neutral-600 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sekcia */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Kontaktujte nás
          </h2>
          <div className="mb-8">
            <a href="tel:+421902458785" className="text-lg lg:text-xl hover:text-orange-300 transition-colors">
              +421 903 140 332, +421 948 890 885
            </a>
            <br />
            <a href="mailto:info@j2studio.eu" className="text-lg opacity-90 hover:text-orange-300 transition-colors">
              info@j2studio.eu
            </a>
          </div>
          
        </div>
      </section>
    </div>
  )
}
