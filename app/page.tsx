"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "@/sections/HeroSection";
import GallerySection from "@/sections/GallerySection";
import ReasonsSection from "@/sections/ReasonsSection";
import LoveMeSection from "@/sections/LoveMeSection";
import MusicSection from "@/sections/MusicSection";
import EndingSection from "@/sections/EndingSection";
import FloatingElements from "@/components/FloatingElements";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
    // Start music after loading completes
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {
        // Autoplay may be blocked, that's okay
      });
    }
  };

  return (
    <>
      {/* Hidden audio element for autoplay after loading */}
      <audio ref={audioRef} src="/audio/our-song.mp3" loop />
      
      {/* Cinematic Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.main
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Ambient floating particles throughout the page */}
            <FloatingElements />
            
            {/* Hero Section - Opening experience */}
            <HeroSection />
            
            {/* Interactive Polaroid Gallery */}
            <GallerySection />
            
            {/* Reasons I Love You */}
            <ReasonsSection />
            
            {/* Cute "Do you love me?" section */}
            <LoveMeSection />
            
            {/* Music Player */}
            <MusicSection />
            
            {/* Emotional Ending */}
            <EndingSection />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
