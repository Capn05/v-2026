"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Heart } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
}: ComingSoonModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed z-[70] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cream rounded-2xl shadow-2xl p-8 w-[320px] text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-rose-light/20 transition-colors"
            >
              <X size={16} className="text-warm-brown-light" />
            </button>
            <Heart size={32} className="text-rose fill-rose mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-warm-brown mb-2">
              Coming Soon
            </h3>
            <p className="font-body text-sm text-warm-brown-light leading-relaxed">
              We&apos;re still building this part! Soon you&apos;ll be able to add your own photos and memories to our map.
            </p>
            <button
              onClick={onClose}
              className="mt-5 px-6 py-2 bg-rose text-white font-body text-sm rounded-full hover:bg-rose-dark transition-colors"
            >
              Got it
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
