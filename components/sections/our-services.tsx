"use client"

import React from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: (
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
    ),
    title: "Návrh",
    subtitle: "nábytku"
  },
  {
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>
    ),
    title: "Výroba",
    subtitle: "nábytku"
  },
  {
    icon: (
      <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
    ),
    title: "Montáž",
    subtitle: "a servis"
  }
]

export default function OurServices() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('/bg-2.jpg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        {/* Hlavný nadpis */}
        <h2 className="text-4xl lg:text-6xl font-bold mb-16">
          Naše služby
        </h2>

        {/* Služby grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="border-2 border-white/30 p-8 lg:p-12 hover:border-white/60 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-center mb-6 text-white group-hover:text-orange-300 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold">
                {service.title}
              </h3>
              <p className="text-2xl lg:text-3xl font-semibold opacity-90">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Tlačidlo */}
        <div className="flex justify-center">
          <a href="/sluzby"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 font-semibold"
          >
            Zistiť viac
          </a>
        </div>
      </div>
    </section>
  )
}
