"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Heart, ImagePlus } from "lucide-react";
import { useIsDesktop } from "@/hooks/useMediaQuery";
import { slideInRight, slideInBottom } from "@/lib/animations";
import type { Memory } from "@/types";
import PhotoCarousel from "./PhotoCarousel";
import MemoryText from "./MemoryText";
import HeartBurst from "../shared/HeartBurst";
import ComingSoonModal from "../shared/ComingSoonModal";

interface PinDetailDrawerProps {
  memory: Memory | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function PinDetailDrawer({
  memory,
  isOpen,
  onClose,
  onNavigate,
  isFirst,
  isLast,
}: PinDetailDrawerProps) {
  const isDesktop = useIsDesktop();
  const [showComingSoon, setShowComingSoon] = useState(false);

  if (!memory) return null;

  const isSpecial = memory.isSpecial;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop (mobile) */}
          {!isDesktop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={onClose}
            />
          )}

          {/* Drawer */}
          <motion.div
            key={memory.id}
            variants={isDesktop ? slideInRight : slideInBottom}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`fixed z-50 bg-cream overflow-y-auto ${
              isDesktop
                ? "right-0 top-0 h-full w-[420px] shadow-2xl"
                : "bottom-0 left-0 right-0 max-h-[75vh] rounded-t-3xl shadow-2xl safe-bottom"
            }`}
          >
            {/* Drag handle (mobile) */}
            {!isDesktop && (
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 bg-warm-brown/20 rounded-full" />
              </div>
            )}

            {/* Header */}
            <div className="sticky top-0 z-10 bg-cream/95 backdrop-blur-sm px-5 py-4 flex items-center justify-between border-b border-rose-light/20">
              <div className="flex items-center gap-2">
                <span className="text-xl">{memory.emoji}</span>
                <div>
                  <h2
                    className={`font-serif text-lg font-bold ${
                      isSpecial
                        ? "bg-gradient-to-r from-gold to-rose bg-clip-text text-transparent"
                        : "text-warm-brown"
                    }`}
                  >
                    {memory.title}
                  </h2>
                  <p className="text-xs font-body text-warm-brown-light">
                    {memory.date} &middot; {memory.location}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-rose-light/20 transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-warm-brown" />
              </button>
            </div>

            {/* Content */}
            <div className="px-5 py-5 space-y-5">
              <PhotoCarousel
                photos={memory.photos}
                isSpecial={isSpecial}
              />
              {/* Upload photos button */}
              <button
                onClick={() => setShowComingSoon(true)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-dashed border-rose-light/50 text-sm font-body text-warm-brown-light hover:border-rose hover:text-rose transition-colors"
              >
                <ImagePlus size={16} />
                Add Photos
              </button>

              <ComingSoonModal
                isOpen={showComingSoon}
                onClose={() => setShowComingSoon(false)}
              />

              <MemoryText
                description={memory.description}
                isSpecial={isSpecial}
              />

              {/* Special Valentine's pin heart burst */}
              {isSpecial && <HeartBurst />}
            </div>

            {/* Navigation */}
            <div className="sticky bottom-0 bg-cream/95 backdrop-blur-sm px-5 pt-4 pb-8 md:pb-4 border-t border-rose-light/20 flex items-center justify-between safe-bottom">
              <button
                onClick={() => onNavigate("prev")}
                disabled={isFirst}
                className="flex items-center gap-1 text-sm font-body text-warm-brown disabled:opacity-30 hover:text-rose transition-colors"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <Heart
                size={16}
                className={isSpecial ? "text-gold fill-gold" : "text-rose-light fill-rose-light"}
              />

              <button
                onClick={() => onNavigate("next")}
                disabled={isLast}
                className="flex items-center gap-1 text-sm font-body text-warm-brown disabled:opacity-30 hover:text-rose transition-colors"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
