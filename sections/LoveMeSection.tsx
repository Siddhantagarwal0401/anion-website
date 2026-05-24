"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Heart } from "lucide-react";

/**
 * LoveMeSection Component
 * Cute interactive "Do you love me?" with a runaway No button
 */
export default function LoveMeSection() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [yesSize, setYesSize] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const maxX = container.width / 2 - 60;
      const maxY = container.height / 2 - 30;
      
      const newX = (Math.random() - 0.5) * maxX * 2;
      const newY = (Math.random() - 0.5) * maxY * 2;
      
      setNoPosition({ x: newX, y: newY });
      setYesSize(prev => Math.min(prev + 0.15, 2.5));
    }
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-pink-100/60 via-rose-50/70 to-pink-100/50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl" />
      
      {/* Some hearts */}
      <div className="absolute top-[10%] left-[8%] text-pink-400/50 text-2xl">♥</div>
      <div className="absolute top-[15%] right-[10%] text-purple-300/45 text-xl">♥</div>
      <div className="absolute bottom-[15%] left-[12%] text-pink-300/50 text-xl">♥</div>
      <div className="absolute bottom-[10%] right-[8%] text-purple-400/45 text-2xl">♥</div>

      <div 
        ref={containerRef}
        className="max-w-2xl mx-auto relative z-10 min-h-[400px] flex flex-col items-center justify-center"
      >
        {!yesClicked ? (
          <>
            {/* Question */}
            <motion.h2
              className="elegant-heading text-4xl md:text-5xl text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              do you love me?
            </motion.h2>

            {/* Buttons container */}
            <motion.div
              className="relative flex items-center justify-center gap-8 w-full h-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Yes button - grows each time No is hovered */}
              <motion.button
                onClick={handleYesClick}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow handwritten text-xl"
                style={{ scale: yesSize }}
                whileHover={{ scale: yesSize * 1.05 }}
                whileTap={{ scale: yesSize * 0.95 }}
              >
                Yes!
              </motion.button>

              {/* No button - runs away on hover */}
              <motion.button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="px-8 py-3 bg-gray-200 text-gray-500 rounded-full font-medium shadow-md handwritten text-xl"
                animate={{ x: noPosition.x, y: noPosition.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                No
              </motion.button>
            </motion.div>

            {/* Hint text */}
            {yesSize > 1.3 && (
              <motion.p
                className="mt-8 handwritten text-lg text-pink-400/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                just click yes already~
              </motion.p>
            )}
          </>
        ) : (
          /* After clicking Yes */
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hearts explosion */}
            <div className="relative">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: (Math.random() - 0.5) * 300,
                    y: (Math.random() - 0.5) * 300,
                    opacity: [1, 1, 0],
                    scale: [0, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Heart
                    size={20 + Math.random() * 20}
                    className="text-pink-400 fill-pink-400"
                  />
                </motion.div>
              ))}
            </div>

            {/* Response message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart size={80} className="mx-auto text-pink-400 fill-pink-400 mb-6" />
              </motion.div>
              
              <h2 className="elegant-heading text-4xl md:text-5xl mb-4">
                i knew it!
              </h2>
              
              <p className="handwritten text-2xl text-pink-500/80">
                i love you too ♥
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
