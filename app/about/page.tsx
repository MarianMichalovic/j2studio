"use client"

import Image from "next/image"
import { Building2, Users, Award, Target } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import CTA from "@/components/sections/cta"

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const leadershipRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef)
  const storyInView = useInView(storyRef)
  const valuesInView = useInView(valuesRef)
  const leadershipInView = useInView(leadershipRef)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24" ref={heroRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1
              className={`text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight transition-all duration-1000 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              O{" "}
              <span className="relative">
                nás
                <div className="absolute -bottom-2 -right-8 w-full h-1 bg-orange-300"></div>
              </span>
            </h1>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Sme slovenská firma zameraná na výrobu dizajnového nábytku na mieru, ktorý spája precízne remeselné spracovanie, inovatívny dizajn a funkčnosť bez kompromisov.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24" ref={storyRef}>
        <div className="grid lg:grid-cols-2">
          <div
            className={`px-6 lg:px-12 flex flex-col justify-center transition-all duration-1000 ${
              storyInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8">Náš príbeh</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Už niekoľko rokov pomáhame klientom premeniť ich predstavy o ideálnom bývaní na skutočnosť – od prvotného návrhu až po montáž hotového nábytku priamo u vás doma.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed pb-12 lg:pb-0">
            Naše projekty realizujeme po celom Slovensku, bez ohľadu na lokalitu. Či už ide o moderný byt v meste, útulný rodinný dom na vidieku alebo firemné priestory, vždy prinášame riešenia šité na mieru priestoru aj životnému štýlu.
            </p>
          </div>
          <div
            className={`relative min-h-[60vh] lg:min-h-[80vh] transition-all duration-1000 delay-300 ${
              storyInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/anywebp/kuch5.webp"
              alt="Náš príbeh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Values Section */}
      <section className="px-6 py-24 bg-gray-50" ref={valuesRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl lg:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 ${
                valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Naše hodnoty
            </h2>
            <p
              className={`text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
                valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Princípy, ktoré riadia všetko, čo robíme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Inovácia",
                desc: "Posúvanie hraníc architektonického dizajnu a stavebných technológií.",
              },
              {
                icon: Users,
                title: "Spolupráca",
                desc: "Úzka spolupráca s našimi klientmi pri oživovaní všetkých ich vízií a predstáv.",
              },
              {
                icon: Award,
                title: "Dokonalosť",
                desc: "Udržiavanie najvyšších štandardov v každom projekte, ktorý podnikáme.",
              },
              {
                icon: Target,
                title: "Udržateľnosť",
                desc: "Vytváranie environmentálne zodpovedných a energeticky efektívnych budov.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 group ${
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300 group-hover:bg-orange-300">
                  <value.icon className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
