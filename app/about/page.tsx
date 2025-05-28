"use client"

import Image from "next/image"
import { Building2, Users, Award, Target } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

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
                <div className="absolute -bottom-2 -right-8 w-full h-0.5 bg-black"></div>
              </span>
            </h1>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Sme tím vášnivých architektov a vývojárov, ktorí sa venujú vytváraniu výnimočných priestorov, ktoré
              redefinujú moderné bývanie.
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
              Založená v roku 2010, Skyline sa rozrástla z malej architektonickej firmy na vedúcu silu v luxusnom
              rozvoji nehnuteľností. Naša cesta začala jednoduchou víziou: vytvárať priestory, ktoré inšpirujú a
              povznášajú ľudskú skúsenosť.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dnes pokračujeme v posúvaní hraníc dizajnu a inovácií, dodávame projekty, ktoré stoja ako svedectvo nášho
              záväzku k dokonalosti a udržateľnosti.
            </p>
          </div>
          <div
            className={`relative min-h-[60vh] lg:min-h-[80vh] transition-all duration-1000 delay-300 ${
              storyInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Image
              src="/placeholder.svg?height=800&width=800&query=modern office building architecture team working"
              alt="Náš príbeh"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

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
                desc: "Úzka spolupráca s klientmi pri oživovaní ich vízií.",
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
                className={`text-center transition-all duration-1000 ${
                  valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24" ref={leadershipRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl lg:text-5xl font-light text-gray-900 mb-4 transition-all duration-1000 ${
                leadershipInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Vedenie
            </h2>
            <p
              className={`text-gray-600 transition-all duration-1000 delay-200 ${
                leadershipInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Spoznajte vizionárov za Skyline
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Mária Svobodová",
                role: "Zakladateľka a CEO",
                bio: "S viac ako 20 rokmi v architektúre založila Mária Skyline s víziou revolúcie luxusných obytných priestorov.",
              },
              {
                name: "Tomáš Novák",
                role: "Hlavný architekt",
                bio: "Tomáš prináša inovatívne dizajnové myslenie a udržateľné praktiky do každého projektu Skyline.",
              },
            ].map((leader, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  leadershipInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&query=professional portrait ${leader.name} CEO architect`}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
