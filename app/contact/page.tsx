"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
              Kontaktujte nás
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
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
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Pošlite nám správu
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Meno</label>
                    <Input className="rounded-none border-neutral-300 focus:border-black" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Priezvisko</label>
                    <Input className="rounded-none border-neutral-300 focus:border-black" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">E-mail</label>
                  <Input type="email" className="rounded-none border-neutral-300 focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Telefón</label>
                  <Input type="tel" className="rounded-none border-neutral-300 focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Správa</label>
                  <Textarea
                    rows={6}
                    className="rounded-none border-neutral-300 focus:border-black resize-none"
                    placeholder="Povedzte nám o vašom projekte..."
                  />
                </div>
                <Button className="bg-black hover:bg-neutral-800 text-white px-8 py-3 rounded-none w-full">
                  Odoslať správu
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                Spojte sa s nami
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-neutral-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Umiestnenie kancelárie</h3>
                    <p className="text-neutral-600">
                      Artézskych prameňov 1
                      <br />
                      984 01 Lučenec
                      <br />
                      Slovenská republika
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-neutral-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Telefón</h3>
                    <p className="text-neutral-600">+421 903 140 332</p>
                    <p className="text-neutral-600">+421 948 890 885</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-neutral-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">E-mail</h3>
                    <p className="text-neutral-600">info@j2studio.eu</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-neutral-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Pracovné hodiny</h3>
                    <p className="text-neutral-600">
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
