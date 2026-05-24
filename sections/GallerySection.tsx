"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

/**
 * GallerySection Component
 * Scrapbook-style collage gallery with torn paper effects
 * Customize: Replace image paths, captions, dates, and locations
 */

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
  date?: string;
  location?: string;
  rotation: number;
  offsetX: number;
  offsetY: number;
  zIndex: number;
  tapePosition?: "top-left" | "top-right" | "both" | "center";
}

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  // CUSTOMIZE: Replace with your actual photos
  // Add more photos by duplicating entries - they'll scatter naturally
  const photos: Photo[] = [
    {
      id: 1,
      src: "/images/6E291272-DE5B-41DD-A9B3-A578DF2B7D37.JPG",
      alt: "Memory",
      caption: "",
      rotation: -8,
      offsetX: 25,
      offsetY: -15,
      zIndex: 12,
      tapePosition: "both",
    },
    {
      id: 2,
      src: "/images/39190AA2-D70C-471B-9203-5A5FDFA9AD07.JPG",
      alt: "Memory",
      caption: "",
      rotation: 10,
      offsetX: -18,
      offsetY: 12,
      zIndex: 11,
      tapePosition: "top-right",
    },
    {
      id: 3,
      src: "/images/IMG_0404.PNG",
      alt: "Memory",
      caption: "",
      rotation: -7,
      offsetX: 20,
      offsetY: -10,
      zIndex: 10,
      tapePosition: "center",
    },
    {
      id: 4,
      src: "/images/704931723_1743934640300942_5740227327122012891_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: 7,
      offsetX: -25,
      offsetY: 8,
      zIndex: 9,
      tapePosition: "top-left",
    },
    {
      id: 5,
      src: "/images/691598792_2382202385638224_9161646026640442362_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: -6,
      offsetX: 18,
      offsetY: -12,
      zIndex: 8,
      tapePosition: "both",
    },
    {
      id: 6,
      src: "/images/691726266_1541453410745701_2485974658511859479_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: 4,
      offsetX: -15,
      offsetY: 18,
      zIndex: 7,
      tapePosition: "top-right",
    },
    {
      id: 7,
      src: "/images/693246680_2410062909515142_9037852735062399784_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: -9,
      offsetX: 22,
      offsetY: -8,
      zIndex: 6,
      tapePosition: "center",
    },
    {
      id: 8,
      src: "/images/694385137_1535048854895560_8891796322311909966_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: 6,
      offsetX: -18,
      offsetY: -15,
      zIndex: 5,
      tapePosition: "both",
    },
    {
      id: 9,
      src: "/images/701557002_819201941010945_1502624332485984013_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: -4,
      offsetX: 12,
      offsetY: 20,
      zIndex: 4,
      tapePosition: "top-left",
    },
    {
      id: 10,
      src: "/images/703178461_3118281875227714_6470297576270963945_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: 8,
      offsetX: -22,
      offsetY: -10,
      zIndex: 3,
      tapePosition: "top-right",
    },
    {
      id: 11,
      src: "/images/678937942_1368758698637055_7396278778164225656_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: -7,
      offsetX: 20,
      offsetY: 15,
      zIndex: 2,
      tapePosition: "center",
    },
    {
      id: 12,
      src: "/images/705086506_2296356684224709_6403460856068310334_n.jpg",
      alt: "Memory",
      caption: "",
      rotation: 5,
      offsetX: -15,
      offsetY: -18,
      zIndex: 1,
      tapePosition: "both",
    },
  ];

  // Tape component for scrapbook effect
  const Tape = ({ position }: { position: string }) => {
    const baseClasses = "absolute h-6 w-14 tape opacity-90";
    
    switch (position) {
      case "top-left":
        return <div className={`${baseClasses} -top-2 -left-2 -rotate-12`} />;
      case "top-right":
        return <div className={`${baseClasses} -top-2 -right-2 rotate-12`} />;
      case "center":
        return <div className={`${baseClasses} -top-3 left-1/2 -translate-x-1/2 rotate-1`} />;
      case "both":
        return (
          <>
            <div className={`${baseClasses} -top-2 -left-2 -rotate-12`} />
            <div className={`${baseClasses} -top-2 -right-2 rotate-12`} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-24 px-4 bg-gradient-to-b from-pink-100/70 via-rose-100/50 to-pink-50/60 overflow-hidden"
    >
      {/* Decorative blobs - more of them */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300/25 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/25 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      
      {/* LOTS of scattered hearts */}
      <div className="absolute top-[5%] left-[5%] text-pink-400/50 text-3xl">♥</div>
      <div className="absolute top-[8%] left-[20%] text-purple-300/45 text-xl">♥</div>
      <div className="absolute top-[12%] left-[40%] text-pink-300/40 text-2xl">♥</div>
      <div className="absolute top-[6%] right-[35%] text-purple-400/35 text-lg">♥</div>
      <div className="absolute top-[10%] right-[15%] text-pink-400/50 text-2xl">♥</div>
      <div className="absolute top-[15%] right-[5%] text-purple-300/45 text-3xl">♥</div>
      
      <div className="absolute top-[25%] left-[3%] text-purple-400/45 text-2xl">♥</div>
      <div className="absolute top-[30%] left-[8%] text-pink-300/40 text-lg">♥</div>
      <div className="absolute top-[28%] right-[6%] text-pink-400/50 text-xl">♥</div>
      <div className="absolute top-[35%] right-[3%] text-purple-300/45 text-2xl">♥</div>
      
      <div className="absolute top-[45%] left-[2%] text-pink-400/45 text-xl">♥</div>
      <div className="absolute top-[50%] left-[6%] text-purple-400/40 text-2xl">♥</div>
      <div className="absolute top-[48%] right-[4%] text-purple-300/50 text-lg">♥</div>
      <div className="absolute top-[55%] right-[2%] text-pink-300/45 text-2xl">♥</div>
      
      <div className="absolute top-[65%] left-[4%] text-purple-300/45 text-2xl">♥</div>
      <div className="absolute top-[70%] left-[10%] text-pink-400/40 text-lg">♥</div>
      <div className="absolute top-[68%] right-[8%] text-pink-300/50 text-xl">♥</div>
      <div className="absolute top-[75%] right-[4%] text-purple-400/45 text-2xl">♥</div>
      
      <div className="absolute bottom-[15%] left-[6%] text-pink-400/50 text-3xl">♥</div>
      <div className="absolute bottom-[10%] left-[18%] text-purple-300/40 text-xl">♥</div>
      <div className="absolute bottom-[8%] left-[35%] text-pink-300/45 text-lg">♥</div>
      <div className="absolute bottom-[12%] right-[30%] text-purple-400/40 text-2xl">♥</div>
      <div className="absolute bottom-[6%] right-[15%] text-pink-400/50 text-xl">♥</div>
      <div className="absolute bottom-[10%] right-[5%] text-purple-300/45 text-3xl">♥</div>
      
      {/* Animated floating hearts */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`gallery-heart-${i}`}
          className="absolute"
          style={{
            left: `${5 + (i * 8) % 90}%`,
            top: `${10 + (i * 7) % 80}%`,
            fontSize: `${14 + (i % 4) * 4}px`,
            color: i % 2 === 0 ? 'rgba(244, 114, 182, 0.5)' : 'rgba(192, 132, 252, 0.45)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
      
      {/* Decorative circles */}
      <div className="absolute top-[10%] left-[2%] w-32 h-32 border-2 border-pink-300/30 rounded-full" />
      <div className="absolute top-[20%] right-[3%] w-28 h-28 border border-purple-200/25 rounded-full" />
      <div className="absolute top-[50%] left-[1%] w-24 h-24 border border-pink-200/30 rounded-full" />
      <div className="absolute top-[60%] right-[2%] w-36 h-36 border-2 border-purple-300/25 rounded-full" />
      <div className="absolute bottom-[20%] left-[5%] w-28 h-28 border border-pink-300/25 rounded-full" />
      <div className="absolute bottom-[15%] right-[4%] w-32 h-32 border-2 border-purple-200/30 rounded-full" />
      
      {/* Sparkle dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`gallery-sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${8 + (i * 6) % 84}%`,
            top: `${12 + (i * 5) % 76}%`,
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            backgroundColor: i % 2 === 0 ? 'rgba(244, 114, 182, 0.6)' : 'rgba(192, 132, 252, 0.5)',
          }}
          animate={{ 
            opacity: [0.2, 1, 0.2], 
            scale: [1, 1.8, 1],
          }}
          transition={{ 
            duration: 1.5 + (i % 3), 
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Scrapbook collage - overlapping photos - messy intimate layout */}
        <div className="relative">
          {/* First row - 4 photos, scattered */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 mb-8 md:mb-0">
            {photos.slice(0, 4).map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative cursor-pointer"
                style={{
                  zIndex: photo.zIndex,
                  marginLeft: index > 0 ? -[30, 25, 40, 20][index] + "px" : "0",
                }}
                initial={{ opacity: 0, y: 40, rotate: photo.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Photo frame - clean polaroid style */}
                <div 
                  className="relative bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow"
                  style={{ transform: `translateX(${photo.offsetX}px) translateY(${photo.offsetY}px)` }}
                >
                  {/* Tape */}
                  {photo.tapePosition && <Tape position={photo.tapePosition} />}
                  
                  {/* Photo */}
                  <div className="relative w-52 h-52 md:w-60 md:h-60 overflow-hidden bg-stone-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 208px, 240px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - offset, 3 photos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:-mt-20 md:ml-12">
            {photos.slice(4, 7).map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative cursor-pointer"
                style={{
                  zIndex: photo.zIndex,
                  marginLeft: index > 0 ? -[35, 28][index - 1] + "px" : "0",
                }}
                initial={{ opacity: 0, y: 40, rotate: photo.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.12, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div 
                  className="relative bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow"
                  style={{ transform: `translateX(${photo.offsetX}px) translateY(${photo.offsetY}px)` }}
                >
                  {photo.tapePosition && <Tape position={photo.tapePosition} />}
                  
                  <div className="relative w-52 h-52 md:w-60 md:h-60 overflow-hidden bg-stone-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 208px, 240px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third row - offset other way, 3 photos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:-mt-16 md:-mr-8">
            {photos.slice(7, 10).map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative cursor-pointer"
                style={{
                  zIndex: photo.zIndex,
                  marginLeft: index > 0 ? -[32, 25][index - 1] + "px" : "0",
                }}
                initial={{ opacity: 0, y: 40, rotate: photo.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.12, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div 
                  className="relative bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow"
                  style={{ transform: `translateX(${photo.offsetX}px) translateY(${photo.offsetY}px)` }}
                >
                  {photo.tapePosition && <Tape position={photo.tapePosition} />}
                  
                  <div className="relative w-52 h-52 md:w-60 md:h-60 overflow-hidden bg-stone-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 208px, 240px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fourth row - centered, 2 photos */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:-mt-14">
            {photos.slice(10).map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative cursor-pointer"
                style={{
                  zIndex: photo.zIndex,
                  marginLeft: index > 0 ? "-45px" : "0",
                }}
                initial={{ opacity: 0, y: 40, rotate: photo.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.12, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div 
                  className="relative bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow"
                  style={{ transform: `translateX(${photo.offsetX}px) translateY(${photo.offsetY}px)` }}
                >
                  {photo.tapePosition && <Tape position={photo.tapePosition} />}
                  
                  <div className="relative w-52 h-52 md:w-60 md:h-60 overflow-hidden bg-stone-100">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 208px, 240px"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for enlarged photos */}
      {selectedPhoto && (
        <Modal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          imageSrc={selectedPhoto.src}
          caption={selectedPhoto.caption}
          date={selectedPhoto.date}
          location={selectedPhoto.location}
        />
      )}
    </section>
  );
}
