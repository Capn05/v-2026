"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";
import HeartParticles from "./HeartParticles";
import LetterReveal from "./LetterReveal";

export default function LandingPage() {
  const router = useRouter();
  const [exiting, setExiting] = useState(false);

  const handleBegin = () => {
    setExiting(true);
    setTimeout(() => {
      router.push("/map");
    }, 800);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-dvh flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-blush via-cream to-rose-light/20 overflow-hidden"
        >
          <HeartParticles />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 w-full max-w-lg"
          >
            {/* Decorative heart */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
              className="flex justify-center mb-8"
            >
              <Heart
                size={48}
                className="text-rose fill-rose drop-shadow-lg"
              />
            </motion.div>

            <LetterReveal />

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 1 }}
              className="flex justify-center mt-10"
            >
              <button
                onClick={handleBegin}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-rose text-white font-serif text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-rose-dark transition-all duration-300"
              >
                <Heart
                  size={20}
                  className="fill-white group-hover:scale-110 transition-transform"
                />
                Begin Our Journey
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full"
                />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
