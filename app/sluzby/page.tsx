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
  "/img/kuchyna/1000003946.webp",
  "/img/kuchyna/1000003943.webp",
  "/img/kuchyna/1000003941.webp",
  "/img/kuchyna/1000003942.webp",
  "/img/kuchyna/1000003944.webp",
  "/img/kuchyna/1000003945.webp",
  "/img/kuchyna/1000003947.webp",
  "/img/kuchyna/1000004944.webp",
  "/img/kuchyna/1000002089.webp",
  "/img/kuchyna/1000002090.webp", 
  "/img/kuchyna/1000002091.webp",
  "/img/kuchyna/1000002092.webp",
  "/img/kuchyna/1000002093.webp",
  "/img/kuchyna/1000002556.webp",
  "/img/kuchyna/1000002557.webp",
  "/img/kuchyna/1000002968.webp",
  "/img/kuchyna/1000002969.webp",
  "/img/kuchyna/1000002971.webp",
  "/img/kuchyna/1000002972.webp",
  "/img/kuchyna/20240202_121253.webp",
  "/img/kuchyna/20240202_121713.webp",
  "/img/kuchyna/20240202_121731.webp",
  "/img/kuchyna/20240327_182347.webp",
  "/img/kuchyna/20240327_182354.webp",
  "/img/kuchyna/20240718_073452.webp",
  "/img/kuchyna/IMG_3477.webp",
  "/img/kuchyna/IMG_3478.webp",
  "/img/kuchyna/IMG_3479.webp",
  "/img/kuchyna/IMG_3480.webp",
  "/img/kuchyna/IMG_4178.webp",
  "/img/kuchyna/IMG_4181.webp",
  "/img/kuchyna/IMG_4199.webp",
  "/img/kuchyna/IMG_4631.webp",
  "/img/kuchyna/IMG_4632.webp"
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
  "/img/montaze/IMG_3936.webp",
  "/img/montaze/IMG_3978.webp",
  "/img/montaze/IMG_4070.webp",
  "/img/montaze/IMG_4071.webp",
  "/img/montaze/IMG_4073.webp",
  "/img/montaze/IMG_4169.webp"
]

const vizualizacieImages = [
  "/img/vizualizacie/17.webp",
  "/img/vizualizacie/18.webp", 
  "/img/vizualizacie/19.webp",
  "/img/vizualizacie/20.webp",
  "/img/vizualizacie/21.webp",
  "/img/vizualizacie/22.webp",
  "/img/vizualizacie/23.webp",
  "/img/vizualizacie/Kuchyna V1_1.webp",
  "/img/vizualizacie/Kuchyna V1_1_1.webp",
  "/img/vizualizacie/Kuchyna V1_1_2.webp",
  "/img/vizualizacie/Kuchyna V2_1.webp",
  "/img/vizualizacie/Kuchyna V2_1_1.webp",
  "/img/vizualizacie/Kuchyna V2_1_2.webp",
  "/img/vizualizacie/b2 k+o V1_1.webp",
  "/img/vizualizacie/b2 k+o V1_2.webp",
  "/img/vizualizacie/b2 k+o V1_3.webp",
  "/img/vizualizacie/b2 k+o V1_4.webp",
  "/img/vizualizacie/popadakova kuchyna vizual++++.webp",
  "/img/vizualizacie/nagy zamestnanecka kuchynka vizual.webp",
  "/img/vizualizacie/Enscape_2025-01-17-12-31-55.webp",
  "/img/vizualizacie/Enscape_2025-01-17-12-34-01.webp",
  "/img/vizualizacie/Enscape_2025-01-17-12-35-48.webp"
]

const spalnaImages = [
  "/img/spalna/1000000894.webp",
  "/img/spalna/1000000895.webp",
  "/img/spalna/IMG_20210730_224303.webp",
  "/img/spalna/IMG_20210730_224310.webp",
  "/img/spalna/IMG_20210730_224341.webp",
  "/img/spalna/IMG_20210730_224352.webp",
  "/img/spalna/IMG_20211117_074757.webp",
  "/img/spalna/IMG_20211117_074846.webp",
  "/img/spalna/IMG_20211222_175235.webp",
  "/img/spalna/IMG_20211222_175252.webp",
  "/img/spalna/IMG_3192.webp",
  "/img/spalna/IMG_3193.webp",
  "/img/spalna/IMG_4137.webp",
  "/img/spalna/IMG_4273.webp",
  "/img/spalna/IMG_4276.webp"
]

const obyvackaImages = [
  "/img/obyvacka/IMG_20211117_074622.webp",
  "/img/obyvacka/IMG_2236.webp",
  "/img/obyvacka/IMG_2398.webp",
  "/img/obyvacka/IMG_3105.webp",
  "/img/obyvacka/IMG_3106.webp",
  "/img/obyvacka/IMG_3108.webp",
  "/img/obyvacka/IMG_3111.webp",
  "/img/obyvacka/IMG_4196.webp",
  "/img/obyvacka/IMG_4197.webp",
  "/img/obyvacka/IMG_4633.webp",
  "/img/obyvacka/IMG_4907.webp"
]

const detskaiIzbaImages = [
  "/img/detska-izba/IMG_20220209_105057.webp",
  "/img/detska-izba/IMG_20220209_105100.webp",
  "/img/detska-izba/IMG_20220209_105106.webp",
  "/img/detska-izba/IMG_20220209_105109.webp",
  "/img/detska-izba/IMG_20220209_105123.webp",
  "/img/detska-izba/IMG_3224.webp",
  "/img/detska-izba/IMG_3225.webp",
  "/img/detska-izba/IMG_4629.webp",
  "/img/detska-izba/IMG_4762.webp",
  "/img/detska-izba/IMG_4763.webp"
]

const chodbaImages = [
  "/img/chodba/20240423_131145.webp",
  "/img/chodba/20240423_131154.webp",
  "/img/chodba/20240423_131219.webp",
  "/img/chodba/20240423_131424.webp",
  "/img/chodba/20240807_130019.webp",
  "/img/chodba/20240807_130035.webp",
  "/img/chodba/20240807_130046.webp",
  "/img/chodba/IMG_2540.webp",
  "/img/chodba/IMG_2545.webp",
  "/img/chodba/IMG_2548.webp",
  "/img/chodba/IMG_2979.webp",
  "/img/chodba/IMG_4380.webp",
  "/img/chodba/IMG_4387.webp",
  "/img/chodba/IMG_4634.webp",
  "/img/chodba/IMG_4635.webp"
]

const kupelnaWcImages = [
  "/img/kupena-wc/20240402_084415.webp",
  "/img/kupena-wc/20240402_084437.webp",
  "/img/kupena-wc/20240402_084444.webp",
  "/img/kupena-wc/20240402_084451.webp",
  "/img/kupena-wc/IMG_2235.webp",
  "/img/kupena-wc/IMG_2399.webp",
  "/img/kupena-wc/IMG_2542.webp",
  "/img/kupena-wc/IMG_4347.webp",
  "/img/kupena-wc/IMG_4348.webp",
  "/img/kupena-wc/IMG_4349.webp",
  "/img/kupena-wc/IMG_4625.webp",
  "/img/kupena-wc/IMG_4626.webp",
  "/img/kupena-wc/IMG_4898.webp",
  "/img/kupena-wc/IMG_4899.webp"
]

const vstavaneSkrineImages = [
  "/img/vstavane-skrine-satnik/20241031_144059.webp",
  "/img/vstavane-skrine-satnik/20241031_144138.webp",
  "/img/vstavane-skrine-satnik/20241115_154419.webp",
  "/img/vstavane-skrine-satnik/20241115_154547.webp",
  "/img/vstavane-skrine-satnik/20241115_154549.webp",
  "/img/vstavane-skrine-satnik/20241115_154552.webp",
  "/img/vstavane-skrine-satnik/20241115_154554.webp",
  "/img/vstavane-skrine-satnik/IMG_20210528_153445.webp",
  "/img/vstavane-skrine-satnik/IMG_20220309_153904.webp",
  "/img/vstavane-skrine-satnik/IMG_20220309_153919.webp",
  "/img/vstavane-skrine-satnik/IMG_20220309_153944.webp",
  "/img/vstavane-skrine-satnik/IMG_20220309_153955.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102151.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102202.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102212.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102220.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102250.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102300.webp",
  "/img/vstavane-skrine-satnik/IMG_20250515_102315.webp"
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

          {/* Galéria obývačiek */}
          <Gallery 
            title="Obývačky"
            images={obyvackaImages}
            alt="Obývačka na mieru"
          />

          {/* Galéria spální */}
          <Gallery 
            title="Spálne"
            images={spalnaImages}
            alt="Spálňa na mieru"
          />

          {/* Galéria vstavných skríň */}
          <Gallery 
            title="Vstavané skrine a šatníky"
            images={vstavaneSkrineImages}
            alt="Vstavané skrine na mieru"
          />

          {/* Galéria detských izieb */}
          <Gallery 
            title="Detské izby"
            images={detskaiIzbaImages}
            alt="Detská izba na mieru"
          />

          {/* Galéria chodieb */}
          <Gallery 
            title="Chodby a predsiene"
            images={chodbaImages}
            alt="Chodba na mieru"
          />

          {/* Galéria kúpeľní a WC */}
          <Gallery 
            title="Kúpeľne a WC"
            images={kupelnaWcImages}
            alt="Kúpeľňa na mieru"
          />

          {/* Galéria montáží */}
          <Gallery 
            title="Montáže nábytku"
            images={montazeImages}
            alt="Montáž nábytku"
          />

          {/* Galéria vizualizácií */}
          <Gallery 
            title="Vizualizácie"
            images={vizualizacieImages}
            alt="Vizualizácia nábytku"
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
