"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"

export default function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section className="relative h-96 lg:h-[60vh]" ref={ref}>
      <Image
        src="/slider/2.jpg"
        alt="Architektonická krajina"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div
          className={`text-center text-white transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-light mb-4">Vytvárame zajtrajšie priestory</h2>
          <p className="text-lg opacity-90">Kde sa inovácia stretáva s nadčasovým dizajnom</p>
        </div>
      </div>
    </section>
  )
}
