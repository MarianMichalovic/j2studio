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
import CTA from "@/components/sections/cta"
import PartnerBanner from "@/components/sections/partner-banner"
import VideoBanner from "@/components/sections/video-banner"
import LogoBanner from "@/components/sections/logo-banner"
import InteriorSlider from "@/components/sections/interior-slider"
import HowWeWork from "@/components/sections/how-we-work"
import OurServices from "@/components/sections/our-services"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Interior Slider */}
      <InteriorSlider />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Our Services Section */}
      <OurServices />

      {/* Partner Banner */}
      {/* <PartnerBanner /> */}
      
      {/* Video Banner */}
      {/* <VideoBanner /> */}

      {/* Logo Banner */}
      {/* <LogoBanner/> */}

      {/* Statistics */}
      {/* <Statistics /> */}

      {/* Portfolio */}
      {/* <Portfolio /> */}

      {/* Services */}
      {/* <Services /> */}

      {/* CTA Section */}
      {/* <CTA /> */}

      {/* Full Width Image Break */}
      {/* <ImageBreak /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Process */}
      {/* <Process /> */}

      {/* Locations */}
      {/* <Locations /> */}

      {/* Newsletter */}
      {/* <Newsletter /> */}
    </div>
  )
}
