"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import type { MemoryPhoto } from "@/types";

interface PhotoCarouselProps {
  photos: MemoryPhoto[];
  isSpecial?: boolean;
}

export default function PhotoCarousel({
  photos,
  isSpecial,
}: PhotoCarouselProps) {
  return (
    <Swiper
      modules={[EffectCreative, Pagination]}
      effect="creative"
      creativeEffect={{
        prev: { shadow: true, translate: ["-20%", 0, -1] },
        next: { translate: ["100%", 0, 0] },
      }}
      pagination={{ clickable: true }}
      className={`w-full aspect-[4/3] rounded-xl overflow-hidden ${
        isSpecial ? "ring-2 ring-gold ring-offset-2 ring-offset-cream" : ""
      }`}
    >
      {photos.map((photo, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full bg-rose-light/20">
            {/* Using img for simplicity — swap to next/image if photos are local */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Placeholder overlay for missing photos */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-light/30 to-gold/20 text-warm-brown/50 text-sm font-body">
              {photo.alt}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
