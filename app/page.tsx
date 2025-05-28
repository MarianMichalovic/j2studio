"use client"

import Hero from "@/components/sections/hero"
import Services from "@/components/sections/services"
import Statistics from "@/components/sections/statistics"
import Portfolio from "@/components/sections/portfolio"
import ImageBreak from "@/components/sections/image-break"
import Testimonials from "@/components/sections/testimonials"
import Team from "@/components/sections/team"
import Process from "@/components/sections/process"
import Locations from "@/components/sections/locations"
import Newsletter from "@/components/sections/newsletter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Statistics */}
      <Statistics />

      {/* Portfolio */}
      <Portfolio />

      {/* Full Width Image Break */}
      <ImageBreak />

      {/* Testimonials */}
      <Testimonials />

      {/* Process */}
      <Process />

      {/* Locations */}
      <Locations />

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
