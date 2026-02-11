"use client";

import { motion } from "motion/react";
import { Music, VolumeX } from "lucide-react";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";

export default function MusicToggle() {
  const { isPlaying, toggle } = useMusicPlayer();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      onClick={toggle}
      className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-cream/90 backdrop-blur-sm shadow-md flex items-center justify-center border border-rose-light/30 hover:bg-rose-light/20 transition-colors"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? (
        <Music size={18} className="text-rose" />
      ) : (
        <VolumeX size={18} className="text-warm-brown-light" />
      )}
    </motion.button>
  );
}
