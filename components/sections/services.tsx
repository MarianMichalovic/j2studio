"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

export default function Services() {
  const [servicesRef, servicesInView] = useInView()

  return (
    <section className="py-24" ref={servicesRef}>
      <div className="grid lg:grid-cols-2">
        <div
          className={`relative min-h-[60vh] lg:min-h-[80vh] transition-all duration-1000 delay-300 ${servicesInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
        >
          <Image
            src="/slider/1.jpg"
            alt="Architektúra"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div
          className={`px-6 lg:px-12 flex flex-col justify-center transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-3">Čo ponúkame</h2>
          <div className="w-64 h-1 bg-orange-300 ml-40 mb-6" />

          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0 delay-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Architektúra</h3>
                <p className="text-gray-600">Moderné dizajnové riešenia pre súčasné bývanie.</p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"}`}
            >
              <div className="border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Výstavba</h3>
                <p className="text-gray-600">Komplexný rozvoj nehnuteľností a výstavba.</p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"}`}
            >
              <div className="border-b border-gray-200 pb-8 hover:border-gray-400 transition-colors">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Konzultácie</h3>
                <p className="text-gray-600">Odborné poradenstvo počas celej vašej cesty s nehnuteľnosťou.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
