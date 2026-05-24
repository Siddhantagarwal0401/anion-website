"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/**
 * MusicSection Component
 * Floating vinyl player that stays visible while scrolling
 * Customize: Add your own audio file path and song details
 */
export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Set initial volume to 30%
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <>
      {/* Floating sticky music player - bottom right */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        >
          {/* Glow effect behind vinyl */}
          <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-xl" />
          
          {/* Vinyl record */}
          <motion.div
            className="relative cursor-pointer"
            onClick={togglePlay}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Outer ring glow when playing */}
            {isPlaying && (
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-br from-pink-400/40 to-purple-400/40 blur-md"
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            
            {/* Vinyl disc - spins clockwise */}
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl relative overflow-hidden"
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{
                duration: 1.5,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear",
              }}
              style={{
                boxShadow: isPlaying 
                  ? "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(219,112,147,0.3)" 
                  : "0 8px 32px rgba(0,0,0,0.3)"
              }}
            >
              {/* Vinyl grooves */}
              <div className="absolute inset-[6px] rounded-full border border-gray-600/40" />
              <div className="absolute inset-[10px] rounded-full border border-gray-700/30" />
              <div className="absolute inset-[14px] rounded-full border border-gray-600/20" />
              <div className="absolute inset-[18px] rounded-full border border-gray-700/30" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
              
              {/* Center label - gradient pink/purple */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 shadow-inner flex items-center justify-center">
                {/* Center hole */}
                <div className="w-2 h-2 rounded-full bg-gray-900 shadow-inner" />
              </div>
              
              {/* Label shine */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
            </motion.div>

            {/* Play/Pause icon overlay - only shows on hover when not playing */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                {isPlaying ? (
                  <Pause size={18} className="text-gray-800" />
                ) : (
                  <Play size={18} className="text-gray-800 ml-0.5" />
                )}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Song info tooltip on hover */}
          <motion.div
            className="absolute -top-12 right-0 bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-medium text-gray-700 whitespace-nowrap">our song ♪</p>
          </motion.div>
        </motion.div>

        {/* Audio element */}
        <audio
          ref={audioRef}
          loop
          src="/audio/our-song.mp3"
        />
      </div>
    </>
  );
}
