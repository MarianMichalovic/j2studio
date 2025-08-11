"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

interface GalleryProps {
  title: string
  images: string[]
  alt: string
}

export default function Gallery({ title, images, alt }: GalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Klávesová navigácia
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return

      switch (event.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  // Zobrazíme len prvé 3 obrázky
  const displayImages = images.slice(0, 3)

  return (
    <div className="mb-16">
      <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 text-center">
        {title}
      </h3>
      
      {/* Grid s 3 obrázkami */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {displayImages.map((image, index) => (
          <div 
            key={index} 
            className="relative h-[200px] md:h-[250px] overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Tlačidlo pre zobrazenie všetkých */}
      {images.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => openModal(0)}
            className="hover:underline text-neutral-900 font-semibold px-6 py-3 rounded-none transition-colors duration-300"
          >
            Zobraziť všetky ({images.length})
          </button>
        </div>
      )}

      {/* Modal pre galériu */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-full flex flex-col">
            {/* Zatvaracie tlačidlo */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-orange-300 z-10 text-3xl font-bold"
            >
              ×
            </button>

            {/* Hlavný obrázok */}
            <div className="flex-1 relative min-h-0">
              <Image
                src={images[currentImageIndex]}
                alt={`${alt} ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigačné tlačidlá */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-300 text-4xl font-bold bg-black/50 w-12 h-12 rounded-full flex items-center justify-center"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-300 text-4xl font-bold bg-black/50 w-12 h-12 rounded-full flex items-center justify-center"
                >
                  ›
                </button>
              </>
            )}

            {/* Spodný panel s indikátorom a náhľadmi */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
              {/* Indikátor pozície */}
              <div className="text-center text-white mb-4">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Náhľady */}
              <div className="flex justify-center space-x-2 overflow-x-auto max-w-full">
                {images.slice(Math.max(0, currentImageIndex - 4), currentImageIndex + 5).map((image, index) => {
                  const actualIndex = Math.max(0, currentImageIndex - 4) + index;
                  return (
                    <div
                      key={actualIndex}
                      className={`relative w-16 h-16 cursor-pointer rounded border-2 flex-shrink-0 ${
                        actualIndex === currentImageIndex ? 'border-orange-300' : 'border-transparent'
                      }`}
                      onClick={() => setCurrentImageIndex(actualIndex)}
                    >
                      <Image
                        src={image}
                        alt={`Náhľad ${actualIndex + 1}`}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
