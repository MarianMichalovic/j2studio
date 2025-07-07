"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef)
  const formInView = useInView(formRef)
  const infoInView = useInView(infoRef)
  const mapInView = useInView(mapRef)

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
              Kontaktujte nás
            </h1>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Pripravení začať váš ďalší projekt? Spojte sa s naším tímom a prediskutujte vašu víziu a ako ju môžeme
              oživiť.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div ref={formRef}>
              <h2
                className={`text-3xl font-light text-gray-900 mb-8 transition-all duration-1000 ${
                  formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Pošlite nám správu
              </h2>
              <form className="space-y-6">
                <div
                  className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-100 ${
                    formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meno</label>
                    <Input className="rounded-none border-gray-300 focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Priezvisko</label>
                    <Input className="rounded-none border-gray-300 focus:border-black" />
                  </div>
                </div>
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <Input type="email" className="rounded-none border-gray-300 focus:border-black" />
                </div>
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefón</label>
                  <Input type="tel" className="rounded-none border-gray-300 focus:border-black" />
                </div>
                <div
                  className={`transition-all duration-1000 delay-500 ${
                    formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">Správa</label>
                  <Textarea
                    rows={6}
                    className="rounded-none border-gray-300 focus:border-black resize-none"
                    placeholder="Povedzte nám o vašom projekte..."
                  />
                </div>
                <Button
                  className={`bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-none w-full transition-all duration-1000 delay-600 ${
                    formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  Odoslať správu
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef}>
              <h2
                className={`text-3xl font-light text-gray-900 mb-8 transition-all duration-1000 ${
                  infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Spojte sa s nami
              </h2>

              <div className="space-y-8">
                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 delay-100 ${
                    infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Umiestnenie kancelárie</h3>
                    <p className="text-gray-600">
                      Artézskych prameňov 1
                      <br />
                      984 01 Lučenec
                      <br />
                      Slovenská republika
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 delay-200 ${
                    infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <Phone className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Telefón</h3>
                    <p className="text-gray-600">+421 903 140 332</p>
                    <p className="text-gray-600">+421 948 890 885</p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 delay-300 ${
                    infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <Mail className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600">info@j2studio.eu</p>
                  </div>
                </div>

                <div
                  className={`flex items-start space-x-4 transition-all duration-1000 delay-400 ${
                    infoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <Clock className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Pracovné hodiny</h3>
                    <p className="text-gray-600">
                      Pondelok - Piatok: 9:00 - 18:00
                      <br />
                      Sobota: Zatvorené
                      <br />
                      Nedeľa: Zatvorené
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
