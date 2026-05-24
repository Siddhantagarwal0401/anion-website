"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart } from "lucide-react";

/**
 * ReasonCard Component
 * Flip card showing reasons why you love them
 * Props:
 * - reason: The text to display
 * - icon: Optional emoji or icon
 * - delay: Animation delay for stagger effect
 */

interface ReasonCardProps {
  reason: string;
  icon?: string;
  delay?: number;
}

export default function ReasonCard({ reason, icon = "💕", delay = 0 }: ReasonCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-48 cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg p-6 flex flex-col items-center justify-center polaroid-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-5xl mb-3">{icon}</span>
          <p className="text-center text-sm text-gray-600 font-medium">
            Tap to reveal
          </p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-cream-100 to-rose-50 rounded-lg p-6 flex items-center justify-center polaroid-shadow"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <Heart className="mx-auto mb-3 text-rose-400" size={24} />
            <p className="handwritten text-lg text-gray-800">
              {reason}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating animation when not flipped */}
      {!isFlipped && (
        <motion.div
          className="absolute -top-2 -right-2"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={20} className="text-rose-400 fill-rose-400" />
        </motion.div>
      )}
    </motion.div>
  );
}
