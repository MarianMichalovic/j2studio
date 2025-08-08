"use client"

import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  return (
    <section className="relative h-96 lg:h-[60vh] group" ref={ref}>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/slider/2.jpg"
          alt="Architektonická krajina"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div
            className={`text-center text-white transition-all duration-1000 p-8 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vytvárame zajtrajšie priestory</h2>
            <p className="text-lg opacity-90 mb-8">Kde sa inovácia stretáva s nadčasovým dizajnom</p>
            <Button
              asChild
              className="group relative bg-white hover:bg-neutral-100 text-black px-8 py-3 rounded-none text-lg transition-colors overflow-hidden"
            >
              <Link href="/contact">
                <span className="relative z-10">Kontaktujte nás</span>
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
