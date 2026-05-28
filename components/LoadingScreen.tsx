"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const statusMessages = [
    "restoring memories…",
    "loading favorite moments…",
    "preparing something special…",
  ];

  useEffect(() => {
    // Show progress bar after initial text appears
    const progressTimer = setTimeout(() => {
      setShowProgress(true);
    }, 2000);

    return () => clearTimeout(progressTimer);
  }, []);

  useEffect(() => {
    if (!showProgress) return;

    // Animate progress bar over ~3.5 seconds
    const duration = 3500;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [showProgress]);

  useEffect(() => {
    if (!showProgress) return;

    // Cycle through status messages
    const statusInterval = setInterval(() => {
      setCurrentStatus((prev) => {
        if (prev < statusMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(statusInterval);
  }, [showProgress, statusMessages.length]);

  useEffect(() => {
    if (progress >= 100) {
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 800);

      // Complete and unmount
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 2000);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 75%, #fdf2f8 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Soft gradient blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-300/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl" />
          
          {/* Floating hearts */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400/40"
              style={{
                left: `${10 + (i * 12) % 80}%`,
                top: `${15 + (i * 11) % 70}%`,
                fontSize: `${16 + (i % 3) * 8}px`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              ♥
            </motion.div>
          ))}

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Main text */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            >
              <p className="handwritten text-rose-700/90 text-2xl md:text-3xl tracking-wide leading-relaxed">
                for the last three months…
              </p>
              <motion.p
                className="handwritten text-rose-700/90 text-2xl md:text-3xl tracking-wide mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                thank you. ♥
              </motion.p>
            </motion.div>

            {/* Progress bar */}
            <AnimatePresence>
              {showProgress && (
                <motion.div
                  className="w-48 md:w-64"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="h-[3px] bg-rose-300/40 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status messages */}
          <div className="absolute bottom-16 md:bottom-20 left-0 right-0 flex justify-center px-6">
            <AnimatePresence mode="wait">
              {showProgress && (
                <motion.p
                  key={currentStatus}
                  className="text-rose-500/60 text-xs md:text-sm font-light tracking-wider"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {statusMessages[currentStatus]}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="fixed inset-0 z-[100]"
          style={{
            background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fdf2f8 100%)",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
