"use client"

import { useInView } from "@/hooks/use-in-view"
import { useState, useEffect } from "react"

export default function Statistics() {
  const [statsRef, statsInView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { number: 8021, label: "Nehnuteľnosti" },
    { number: 56, label: "Lokality" },
    { number: 1025, label: "Predaje" },
    { number: 215, label: "Agenti" },
  ]

  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0))

  useEffect(() => {
    if (statsInView && !hasAnimated) {
      setHasAnimated(true)

      stats.forEach((stat, index) => {
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = stat.number / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }

          setAnimatedNumbers((prev) => {
            const newNumbers = [...prev]
            newNumbers[index] = Math.floor(current)
            return newNumbers
          })
        }, duration / steps)
      })
    }
  }, [statsInView, hasAnimated])

  return (
    <section className="px-6 py-24 bg-gray-50" ref={statsRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 group ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block text-3xl font-light text-gray-900 mb-2">
                <span className="relative z-10">
                  {animatedNumbers[index].toLocaleString()}
                  {stat.number > 999 && animatedNumbers[index] === stat.number && "+"}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange-400 transition-all duration-500 group-hover:w-full z-0"></span>
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
