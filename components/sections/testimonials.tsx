"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"

export default function Testimonials() {
  const [testimonialsRef, testimonialsInView] = useInView()
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Mária Novákova",
      role: "Majiteľka domu",
      text: "Skyline premenil našu víziu na realitu s výnimočnou pozornosťou k detailom.",
    },
    {
      name: "Peter Kováč",
      role: "Developer",
      text: "Ich architektonické odborné znalosti a projektový manažment predčili všetky očakávania.",
    },
    {
      name: "Anna Svobodová",
      role: "Majiteľka firmy",
      text: "Tím dodal úžasný komerčný priestor, ktorý dokonale odráža našu značku.",
    },
    {
      name: "Ján Horváth",
      role: "Investor",
      text: "Vynikajúca kvalita a včasné dodanie. Skyline je náš partner pre všetky projekty.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      className="px-2 lg:px-6 py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
      ref={testimonialsRef}
    >
      <div className="max-w-4xl mx-auto">
        {/* Nadpis + navigácia */}
        <div
          className={`flex items-center justify-between mb-2 transition-all duration-1000 ${
            testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900">
            Príbehy klientov
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 lg:w-16 w-12 h-12 lg:h-16 border-2 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-orange-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 lg:w-16 w-12 h-12 lg:h-16 border-2 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-orange-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="w-48 lg:w-64 h-1 bg-orange-300 ml-16 lg:ml-40 mb-16" />

        <div className="relative">
          {/* Obsah recenzií */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`bg-white border-l-8 border-orange-100 p-8 text-left transition-all duration-1000 ${
                      testimonialsInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="flex justify-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-neutral-900 text-neutral-900 mr-1" />
                      ))}
                    </div>
                    <p className="text-neutral-600 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                      <div className="text-sm text-neutral-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indikátory */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-neutral-900 w-8" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}