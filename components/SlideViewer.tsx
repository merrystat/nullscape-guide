'use client'

import Link from 'next/link'
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
        {slides.map((slide, index) => {
          const slug = slide.title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-')

          return (
            <SwiperSlide key={index} className="relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
              <Link
                href="/"
                className="absolute right-4 top-4 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
              >
                메뉴로 돌아가기
              </Link>

              <h2 className="text-2xl font-bold mb-4">
                <Link href={`/enemies/${slug}`} className="text-inherit">
                  {slide.title}
                </Link>
              </h2>

              {slide.image && <img src={slide.image} alt={slide.title} className="mb-4 max-w-full h-auto" />}
              <p className="text-center">{slide.content}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}