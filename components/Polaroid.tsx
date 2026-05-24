"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/**
 * Polaroid Component
 * Creates a polaroid-style photo card with tape effect and hover animations
 * Props:
 * - src: Image source path
 * - alt: Image alt text
 * - caption: Text below the image (handwritten style)
 * - rotation: Slight rotation angle for natural scattered look
 * - onClick: Function to call when clicked (opens modal)
 */

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

export default function Polaroid({
  src,
  alt,
  caption,
  rotation = 0,
  onClick,
  size = "medium",
}: PolaroidProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Size variants
  const sizeClasses = {
    small: "w-48 h-56",
    medium: "w-64 h-72",
    large: "w-80 h-96",
  };

  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ rotate: rotation }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 10,
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Tape effect on top */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-amber-100/60 tape rotate-1 z-10" />
      
      {/* Polaroid frame */}
      <div className={`${sizeClasses[size]} bg-white p-3 pb-12 polaroid-shadow rounded-sm`}>
        {/* Image container */}
        <div className="relative w-full h-[70%] bg-gray-200 overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        
        {/* Caption */}
        {caption && (
          <div className="absolute bottom-3 left-3 right-3 text-center">
            <p className="handwritten text-gray-700 text-sm">
              {caption}
            </p>
          </div>
        )}
      </div>

      {/* Hover glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-sm dreamy-glow -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
}
