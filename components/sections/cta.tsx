"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef)

  return (
    <section className="py-32 bg-white" ref={ctaRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className={`transition-all duration-1000 max-w-[400px] ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Máte záujem
              <span className="relative block mt-2">
                o spoluprácu?
                <span className="absolute -bottom-2 -right-8 w-full h-1 bg-orange-300"></span>
              </span>
            </h2>
          </div>
          <div
            className={`transition-all duration-1000 delay-100 text-left ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-neutral-600 max-w-md">
              Kontaktujte nás a dohodneme sa na osobnej konzultácii, kde vám predstavíme naše služby a možnosti spolupráce.
            </p>
          </div>
          <div
            className={`transition-all duration-1000 delay-200 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              asChild
              className="group relative bg-black text-white px-8 py-6 rounded-none text-lg overflow-hidden"
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