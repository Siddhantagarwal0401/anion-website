"use client";

import HeroSection from "@/sections/HeroSection";
import GallerySection from "@/sections/GallerySection";
import ReasonsSection from "@/sections/ReasonsSection";
import LoveMeSection from "@/sections/LoveMeSection";
import MusicSection from "@/sections/MusicSection";
import EndingSection from "@/sections/EndingSection";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
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
    </main>
  );
}
