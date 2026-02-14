"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Heart, MapPin } from "lucide-react";
import { getDaysTogether, stats } from "@/data/stats";

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      delay: 1,
      ease: "easeOut",
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, target, duration]);

  return <span>{display.toLocaleString()}</span>;
}

export default function OurStats() {
  const [isOpen, setIsOpen] = useState(false);
  const days = getDaysTogether();

  return (
    <div className="fixed top-4 left-4 z-30 md:left-auto md:right-16">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, type: "spring" }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm shadow-md flex items-center justify-center border border-rose-light/30 hover:bg-rose-light/20 transition-colors"
        aria-label="View our stats"
      >
        <Heart size={18} className="text-gold fill-gold" />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-12 left-0 md:right-0 md:left-auto bg-cream/95 backdrop-blur-md rounded-xl shadow-xl p-4 min-w-[200px] border border-rose-light/20"
        >
          <h3 className="font-serif text-sm font-bold text-rose mb-3">
            Our Story in Numbers
          </h3>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <Heart size={14} className="text-rose flex-shrink-0" />
              <span className="font-body text-sm text-warm-brown">
                <span className="font-semibold text-rose">
                  <AnimatedCounter target={days} />
                </span>{" "}
                days together
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-gold flex-shrink-0" />
              <span className="font-body text-sm text-warm-brown">
                <span className="font-semibold text-gold">
                  <AnimatedCounter target={stats.placesVisited} duration={1.5} />
                </span>{" "}
                places explored
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
