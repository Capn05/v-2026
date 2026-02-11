"use client";

import { motion } from "motion/react";

const hearts = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 300 - 150,
  y: -(Math.random() * 200 + 100),
  rotation: Math.random() * 360,
  scale: 0.5 + Math.random() * 1,
  delay: Math.random() * 0.5,
  duration: 1.5 + Math.random() * 1,
}));

export default function HeartBurst() {
  return (
    <div className="relative w-full h-32 overflow-hidden flex items-center justify-center pointer-events-none">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, h.scale, h.scale, 0],
            x: h.x,
            y: h.y,
            rotate: h.rotation,
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            ease: "easeOut",
          }}
          className="absolute text-rose text-xl"
        >
          💕
        </motion.span>
      ))}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="font-serif text-2xl font-bold bg-gradient-to-r from-gold via-rose to-gold bg-clip-text text-transparent animate-shimmer"
      >
        I love you endlessly
      </motion.p>
    </div>
  );
}
