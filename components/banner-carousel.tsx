"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Selamat Datang di SIAMIK 2025",
      subtitle: "Sistem Informasi Akademik UPN Veteran Jawa Timur",
      bg: "bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600",
      
    },
    {
      title: "Pendaftaran KRS Semester Genap",
      subtitle: "Segera lakukan pengisian KRS untuk semester genap 2025/2026",
      bg: "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600",
      
    },
    {
      title: "Portal Akademik Terintegrasi",
      subtitle: "Akses semua layanan akademik dalam satu platform",
      bg: "bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600",
      
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative rounded-2xl overflow-hidden group">
      <div className="relative h-[400px] lg:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            <div className={`absolute inset-0 ${slide.bg}`} />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="relative h-full flex flex-col items-center justify-center text-center px-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 text-balance">{slide.title}</h1>
              <p className="text-lg lg:text-2xl text-white/90 max-w-3xl text-balance">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all hover:scale-125 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
