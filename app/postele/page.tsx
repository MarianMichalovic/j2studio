"use client"

import React from "react"
import Image from "next/image"

// Galéria obrázkov postelí
const posteleImages: string[] = [
  "/postele/altobox.webp",
  "/postele/convexo.webp", 
  "/postele/krásny sn.webp",
  "/postele/mobox.webp",
  "/postele/pekný sen.webp",
  "/postele/plano.webp",
  "/postele/retreat.webp",
  "/postele/sienna.webp"
]

export default function PostelePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero sekcia */}
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
              Postele na mieru
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Vytvárame kvalitne a pohodlné postele na mieru podľa vašich potrieb a priestoru. 
              Každá posteľ je navrhnutá s dôrazom na komfort, kvalitu a estetiku.
            </p>
          </div>
        </div>
      </section>

      {/* Výhody našich postelí */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Prečo si vybrať naše postele
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Kvalitné materiály</h3>
              <p className="text-neutral-600 leading-relaxed">
                Používame len najkvalitnejšie drevo a materiály pre dlhú životnosť a komfort.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Presné rozmery</h3>
              <p className="text-neutral-600 leading-relaxed">
                Každá posteľ je vyrobená presne podľa vašich rozmerov a požiadaviek.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Individuálny dizajn</h3>
              <p className="text-neutral-600 leading-relaxed">
                Navrhujeme postele podľa vášho štýlu a interiéru vašej spálne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proces objednávky */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Ako prebieha objednávka
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Konzultácia", desc: "Bezplatná konzultácia a zmeranie priestoru" },
              { step: "02", title: "Návrh", desc: "Vytvorenie 3D návrhu a výber materiálov" },
              { step: "03", title: "Výroba", desc: "Precízna výroba postele v našej dielni" },
              { step: "04", title: "Dodanie", desc: "Profesionálne dodanie a montáž u vás doma" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
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
      </section>

      {/* Grid postelí */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Naše postele
            </h2>
            <p className="text-lg text-neutral-600">
              Pozrite si naše modely postelí na mieru
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posteleImages.map((image, index) => {
              // Extrahujeme názov z cesty k obrázku
              const fileName = image.split('/').pop()?.replace('.webp', '') || '';
              const modelName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
              
              return (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <Image
                      src={image}
                      alt={`Posteľ ${modelName}`}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300 p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {modelName}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA sekcia */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Máte záujem o posteľ na mieru?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Kontaktujte nás a dohodneme si bezplatnú konzultáciu
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-8 py-4 rounded-none transition-colors duration-300"
          >
            Kontaktovať nás
          </a>
        </div>
      </section>
    </div>
  )
}
