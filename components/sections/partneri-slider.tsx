"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const partneriLogos = [
  {
    name: "Domana",
    logo: "/partneri/domana.png",
    alt: "Domana logo",
    url: "https://eshop.domana.sk/sk/?SubmitCurrency=1&id_currency=1"
  },
  {
    name: "Kramar",
    logo: "/partneri/kramar.svg", 
    alt: "Kramar logo",
    url: "https://kramar.studio/"
  },
  {
    name: "Lamelio",
    logo: "/partneri/lamelio_logo_white.svg",
    alt: "Lamelio logo",
    url: "https://lamelio.sk/"
  },
  {
    name: "Gereg",
    logo: "/partneri/logo-gereg.svg",
    alt: "Gereg logo",
    url: "https://geregstudio.sk/"
  },
  {
    name: "Modo Design",
    logo: "/partneri/mododesign.png",
    alt: "Modo Design logo",
    url: "https://www.mododesign.sk/"
  },
  {
    name: "Nesia",
    logo: "/partneri/nesia.png",
    alt: "Nesia logo",
    url: "https://nesia.sk/"
  },
  {
    name: "Postele",
    logo: "/partneri/postelelogo.svg",
    alt: "Postele logo",
    url: "https://postele-spalne.sk/"
  },
  {
    name: "Postele Royal",
    logo: "/partneri/posteleroyal.svg",
    alt: "Postele Royal logo",
    url: "https://posteleroyal.sk/"
  },
  {
    name: "Ulicky Design",
    logo: "/partneri/ulicky-design.png",
    alt: "Ulicky Design logo",
    url: "https://ulickydesign.sk/"
  }
]

export default function PartneriSlider() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Naši partneri
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Spolupracujeme s overenými dodávateľmi a značkami, aby sme vám garantovali 
            najvyššiu kvalitu materiálov a komponentov.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-neutral-400',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-neutral-900',
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            className="partneri-swiper"
          >
            {partneriLogos.map((partner, index) => (
              <SwiperSlide key={index}>
                <a 
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex opacity-40 hover:opacity-100 items-center justify-center h-40 bg-white duration-300 p-8 cursor-pointer">
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={200}
                      height={100}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .partneri-swiper .swiper-pagination {
          bottom: -50px !important;
        }
        
        .partneri-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  )
}