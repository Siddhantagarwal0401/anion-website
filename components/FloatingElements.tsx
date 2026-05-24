"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * FloatingElements Component
 * Creates subtle ambient floating hearts throughout the page
 * Customize: Change colors, sizes, positions, or add more elements
 */
export default function FloatingElements() {
  // Floating hearts with warm pink tones
  const floatingItems = [
    { delay: 0, x: "5%", y: "20%", size: 16 },
    { delay: 1.5, x: "95%", y: "15%", size: 14 },
    { delay: 3, x: "10%", y: "55%", size: 18 },
    { delay: 0.5, x: "90%", y: "65%", size: 16 },
    { delay: 2, x: "8%", y: "85%", size: 14 },
    { delay: 4, x: "92%", y: "40%", size: 15 },
    { delay: 2.5, x: "15%", y: "35%", size: 12 },
    { delay: 3.5, x: "85%", y: "80%", size: 13 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + item.delay,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <Heart 
            size={item.size} 
            className="text-pink-300 fill-pink-200/60" 
          />
        </motion.div>
      ))}
    </div>
  );
}
