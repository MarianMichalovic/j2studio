"use client"

import React from "react"

const processSteps = [
  {
    number: "1. krok",
    title: "Stretnutie",
    description: "Na základe vášho dopytu si dohodneme stretnutie u nás v štúdiu, na ktorom sa bližšie oboznámime s vašimi predstavami o nábytku. Oceníme ak si na naše stretnutie prinesiete niekoľko obrázkov, ktoré vystihujú vaše predstavy a štýl. Prineste si aj so sebou výpis merní formátu, ktorý vám zašleme na email. Takto celý proces urýchlime.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 30C25 25 29 21 34 21H66C71 21 75 25 75 30V50C75 55 71 59 66 59H45L35 69V59H34C29 59 25 55 25 50V30Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="45" cy="40" r="2" fill="currentColor"/>
        <circle cx="55" cy="40" r="2" fill="currentColor"/>
        <circle cx="50" cy="48" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    number: "2. krok",
    title: "Návrh",
    description: "Následne budeme intenzívne pracovať na návrhu a projektovej dokumentácii vášho nábytku. Obvykle vytvárame návrh už do 2 týždňov.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="20" width="50" height="35" rx="3" stroke="currentColor" strokeWidth="3"/>
        <path d="M35 30L45 40L65 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 65L50 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 75L60 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    number: "3. krok",
    title: "Príprava výroby",
    description: "Na ďalšom stretnutí vám predstavíme hotový návrh a vizualizácie vášho nábytku, použité materiály a cenovú ponuku. V tomto kole korekcií budete mať priestor na pripomienky, môžete meniť farbenú a materiálovú riešenie. Nové doplnené zmeny zapracujeme do návrhu, ide o jeden variant, ktorý doplnime k vašej úplnej spokojnosti.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="60" height="40" rx="5" stroke="currentColor" strokeWidth="3"/>
        <path d="M30 40L70 40" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 50L70 50" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 60L50 60" stroke="currentColor" strokeWidth="2"/>
        <circle cx="35" cy="45" r="2" fill="currentColor"/>
        <circle cx="45" cy="55" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    number: "4. krok",
    title: "Dohoda",
    description: "Po finálnom schválení vizuálneho návrhu a cenovej ponuky podpisujeme zmluvu o dielo. Zaplatíte zálohu 50% z načítame pracovať na výrobe vášho vysnívaného nábytku. Termín dodania závisle od zložitosti diela, obvykle do 8 týždňov od podpísania zmluvy, v tejto etape si tiež dohodneme presný termín montáže.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 45L45 55L65 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="3"/>
      </svg>
    )
  },
  {
    number: "5. krok",
    title: "Montáž",
    description: "Týždeň pred montážou sa uhrádzá zvyšných 45% z ceny nábytku. Po montáži a podpísaní preberacieho protokolu vám vystavíme faktúru na posledných 5% z celkovej ceny.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 45L35 35L45 45L35 55Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M55 25L75 45L65 55L45 35Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 65L40 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 65L30 75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="70" cy="70" r="8" stroke="currentColor" strokeWidth="3"/>
      </svg>
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
