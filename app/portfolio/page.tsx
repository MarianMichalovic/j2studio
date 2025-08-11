"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Meridian Towers",
      location: "New York, NY",
      year: "2023",
      category: "Rezidenčné",
      description:
        "40-poschodový luxusný rezidenčný komplex s udržateľným dizajnom a panoramatickým výhľadom na mesto.",
      image: "/anywebp/telka0.webp"
    },
    {
      id: 2,
      title: "Azure Business Center",
      location: "Los Angeles, CA",
      year: "2023",
      category: "Komerčné",
      description:
        "Moderný kancelársky komplex s inovatívnym dizajnom pracovných priestorov a certifikáciou zelenej budovy.",
      image: "/anywebp/skrina3.webp"
    },
    {
      id: 3,
      title: "Harmony Villas",
      location: "Miami, FL",
      year: "2022",
      category: "Rezidenčné",
      description: "Exkluzívne vily na nábreží kombinujúce luxusné bývanie s environmentálnym vedomím.",
      image: "/anywebp/kuch3.webp"
    },
    {
      id: 4,
      title: "Innovation Hub",
      location: "San Francisco, CA",
      year: "2022",
      category: "Komerčné",
      description: "Technologický kampus navrhnutý na podporu kreativity a spolupráce v udržateľnom prostredí.",
      image: "/anywebp/kuch2.webp"
    },
    {
      id: 5,
      title: "Serenity Gardens",
      location: "Seattle, WA",
      year: "2021",
      category: "Rezidenčné",
      description: "Zmiešaný vývojový projekt integrujúci rezidenčné, maloobchodné a zelené priestory.",
      image: "/anywebp/kup1.webp"
    },
    {
      id: 6,
      title: "Metropolitan Plaza",
      location: "Chicago, IL",
      year: "2021",
      category: "Komerčné",
      description: "Ikonický mrakodrap redefinujúci panorámu mesta s najmodernejšou architektúrou.",
      image: "/anywebp/telka2.webp"
    },
  ]

  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef)
  const projectsInView = useInView(projectsRef)
  const ctaInView = useInView(ctaRef)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24" ref={heroRef}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1
              className={`text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight transition-all duration-1000 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Naše{" "}
              <span className="relative">
                portfólio
                <div className="absolute -bottom-3 -left-12 w-3/4 h-1 bg-orange-300"></div>
              </span>
            </h1>
            <p
              className={`text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Preskúmajte našu kolekciu ocenených projektov, ktoré predstavujú náš záväzok k inovatívnemu dizajnu a
              výnimočnému remeselníctvu.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-1000 ${
                projectsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider opacity-80">{project.category}</span>
                  </div>
                  <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                  <div className="flex items-center space-x-4 text-sm opacity-90 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`px-6 py-24 bg-neutral-50 transition-all duration-1000 ${
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8">Pripravení začať váš projekt?</h2>
          <p className="text-xl text-neutral-600 mb-12">
            Poďme prediskutovať, ako môžeme oživiť vašu víziu s našimi odbornými znalosťami a inováciami.
          </p>
          <Link href={"/contact"}>
          <Button className="bg-black hover:bg-neutral-800 text-white px-8 py-3 rounded-none">
            Kontaktujte nás
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
