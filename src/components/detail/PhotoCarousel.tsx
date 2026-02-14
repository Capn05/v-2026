"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { MemoryPhoto } from "@/types";

interface PhotoCarouselProps {
  photos: MemoryPhoto[];
  isSpecial?: boolean;
}

export default function PhotoCarousel({
  photos,
  isSpecial,
}: PhotoCarouselProps) {
  if (photos.length === 0) return null;

  const showArrows = photos.length > 1;

  return (
    <div className="relative group">
      <Swiper
        modules={[EffectCreative, Pagination, Navigation]}
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: ["-20%", 0, -1] },
          next: { translate: ["100%", 0, 0] },
        }}
        pagination={{ clickable: true }}
        navigation={
          showArrows
            ? {
                nextEl: ".swiper-btn-next",
                prevEl: ".swiper-btn-prev",
              }
            : false
        }
        className={`w-full aspect-[3/4] rounded-xl overflow-hidden ${
          isSpecial ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" : ""
        }`}
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full bg-rose-light/20">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showArrows && (
        <>
          <button
            className="swiper-btn-prev hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            aria-label="Previous photo"
          >
            <ChevronLeft size={20} className="text-warm-brown" />
          </button>
          <button
            className="swiper-btn-next hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow-md items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            aria-label="Next photo"
          >
            <ChevronRight size={20} className="text-warm-brown" />
          </button>
        </>
      )}
    </div>
  );
}
