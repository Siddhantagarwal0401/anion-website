"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";

/**
 * Modal Component
 * Beautiful lightbox for viewing enlarged photos with captions
 * Props:
 * - isOpen: Boolean to control visibility
 * - onClose: Function to close modal
 * - imageSrc: Image source
 * - caption: Photo caption/story
 * - date: Optional date
 * - location: Optional location
 */

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  caption?: string;
  date?: string;
  location?: string;
}

export default function Modal({
  isOpen,
  onClose,
  imageSrc,
  caption,
  date,
  location,
}: ModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden polaroid-shadow"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
            >
              <X size={24} className="text-gray-800" />
            </button>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] bg-gray-100">
              <Image
                src={imageSrc}
                alt={caption || "Memory"}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>

            {/* Caption area */}
            {(caption || date || location) && (
              <div className="p-6 bg-cream-50">
                {(date || location) && (
                  <div className="flex gap-4 mb-3 text-sm text-gray-600">
                    {date && <span>📅 {date}</span>}
                    {location && <span>📍 {location}</span>}
                  </div>
                )}
                {caption && (
                  <p className="handwritten text-lg text-gray-800">
                    {caption}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
