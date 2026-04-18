'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Slide {
  title: string
  content: string
  image?: string
}

interface SlideViewerProps {
  slides: Slide[]
}

export default function SlideViewer({ slides }: SlideViewerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-96"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
            {slide.image && <img src={slide.image} alt={slide.title} className="mb-4 max-w-full h-auto" />}
            <p className="text-center">{slide.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}