"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * HeroSection Component
 * Opening fullscreen landing with animated title and floating hearts
 * Customize: Change title, subtitle, colors, or animation timings
 */
export default function HeroSection() {
  const [daysTogether, setDaysTogether] = useState(92);

  // Calculate days together (customize the start date)
  useEffect(() => {
    const startDate = new Date("2026-02-23"); // CUSTOMIZE: Your anniversary start date
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  // Scroll to next section
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    gallerySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100/80 via-pink-50 to-orange-50/50">
      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-rose-100/40 to-transparent" />
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-[250px] h-[250px] bg-purple-200/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* TONS of scattered hearts - covering the whole screen */}
      {/* Row 1 - Top */}
      <div className="absolute top-[5%] left-[3%] text-pink-400/70 text-4xl">♥</div>
      <div className="absolute top-[8%] left-[12%] text-purple-300/60 text-2xl">♥</div>
      <div className="absolute top-[3%] left-[22%] text-pink-300/55 text-3xl">♥</div>
      <div className="absolute top-[10%] left-[35%] text-purple-400/50 text-xl">♥</div>
      <div className="absolute top-[6%] left-[48%] text-pink-400/65 text-2xl">♥</div>
      <div className="absolute top-[4%] right-[35%] text-purple-300/55 text-3xl">♥</div>
      <div className="absolute top-[9%] right-[22%] text-pink-300/60 text-xl">♥</div>
      <div className="absolute top-[5%] right-[10%] text-purple-400/70 text-4xl">♥</div>
      <div className="absolute top-[12%] right-[3%] text-pink-400/55 text-2xl">♥</div>
      
      {/* Row 2 */}
      <div className="absolute top-[18%] left-[2%] text-purple-300/65 text-3xl">♥</div>
      <div className="absolute top-[22%] left-[8%] text-pink-400/55 text-xl">♥</div>
      <div className="absolute top-[16%] left-[18%] text-pink-300/60 text-2xl">♥</div>
      <div className="absolute top-[20%] left-[28%] text-purple-400/50 text-lg">♥</div>
      <div className="absolute top-[24%] right-[28%] text-pink-400/55 text-xl">♥</div>
      <div className="absolute top-[18%] right-[15%] text-purple-300/65 text-2xl">♥</div>
      <div className="absolute top-[22%] right-[5%] text-pink-300/60 text-3xl">♥</div>
      
      {/* Row 3 */}
      <div className="absolute top-[32%] left-[1%] text-pink-400/60 text-2xl">♥</div>
      <div className="absolute top-[35%] left-[6%] text-purple-400/55 text-xl">♥</div>
      <div className="absolute top-[30%] left-[14%] text-pink-300/65 text-3xl">♥</div>
      <div className="absolute top-[38%] right-[12%] text-purple-300/60 text-2xl">♥</div>
      <div className="absolute top-[33%] right-[4%] text-pink-400/55 text-xl">♥</div>
      <div className="absolute top-[36%] right-[1%] text-purple-400/65 text-3xl">♥</div>
      
      {/* Row 4 - Middle */}
      <div className="absolute top-[45%] left-[0%] text-purple-300/70 text-4xl">♥</div>
      <div className="absolute top-[48%] left-[5%] text-pink-400/55 text-lg">♥</div>
      <div className="absolute top-[42%] left-[10%] text-pink-300/60 text-2xl">♥</div>
      <div className="absolute top-[50%] right-[8%] text-purple-400/55 text-xl">♥</div>
      <div className="absolute top-[46%] right-[2%] text-pink-400/70 text-3xl">♥</div>
      
      {/* Row 5 */}
      <div className="absolute top-[58%] left-[2%] text-pink-300/65 text-3xl">♥</div>
      <div className="absolute top-[62%] left-[8%] text-purple-400/55 text-xl">♥</div>
      <div className="absolute top-[55%] left-[15%] text-pink-400/50 text-lg">♥</div>
      <div className="absolute top-[60%] right-[14%] text-purple-300/60 text-2xl">♥</div>
      <div className="absolute top-[56%] right-[6%] text-pink-300/65 text-xl">♥</div>
      <div className="absolute top-[63%] right-[1%] text-purple-400/55 text-3xl">♥</div>
      
      {/* Row 6 */}
      <div className="absolute top-[72%] left-[1%] text-purple-400/70 text-4xl">♥</div>
      <div className="absolute top-[75%] left-[7%] text-pink-300/55 text-xl">♥</div>
      <div className="absolute top-[70%] left-[16%] text-pink-400/60 text-2xl">♥</div>
      <div className="absolute top-[78%] left-[25%] text-purple-300/50 text-lg">♥</div>
      <div className="absolute top-[73%] right-[22%] text-pink-400/55 text-xl">♥</div>
      <div className="absolute top-[76%] right-[12%] text-purple-400/65 text-2xl">♥</div>
      <div className="absolute top-[70%] right-[4%] text-pink-300/60 text-3xl">♥</div>
      
      {/* Row 7 - Bottom */}
      <div className="absolute bottom-[12%] left-[4%] text-pink-400/65 text-3xl">♥</div>
      <div className="absolute bottom-[8%] left-[15%] text-purple-300/55 text-xl">♥</div>
      <div className="absolute bottom-[15%] left-[26%] text-pink-300/60 text-2xl">♥</div>
      <div className="absolute bottom-[10%] left-[40%] text-purple-400/50 text-lg">♥</div>
      <div className="absolute bottom-[14%] right-[38%] text-pink-400/55 text-xl">♥</div>
      <div className="absolute bottom-[8%] right-[25%] text-purple-300/65 text-2xl">♥</div>
      <div className="absolute bottom-[12%] right-[12%] text-pink-300/55 text-3xl">♥</div>
      <div className="absolute bottom-[6%] right-[3%] text-purple-400/70 text-4xl">♥</div>
      
      {/* Animated floating hearts - lots of them */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${3 + (i * 5) % 94}%`,
            top: `${5 + (i * 4.5) % 85}%`,
            fontSize: `${12 + (i % 5) * 4}px`,
            color: i % 2 === 0 ? 'rgba(244, 114, 182, 0.55)' : 'rgba(192, 132, 252, 0.5)',
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.25, 1],
            rotate: [0, i % 2 === 0 ? 10 : -10, 0],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
      
      {/* Decorative circles - more of them */}
      <div className="absolute top-[10%] left-[2%] w-40 h-40 border-2 border-pink-300/40 rounded-full" />
      <div className="absolute top-[5%] left-[20%] w-24 h-24 border border-purple-200/35 rounded-full" />
      <div className="absolute top-[15%] right-[5%] w-36 h-36 border-2 border-purple-300/35 rounded-full" />
      <div className="absolute top-[25%] right-[18%] w-20 h-20 border border-pink-200/30 rounded-full" />
      <div className="absolute top-[40%] left-[3%] w-28 h-28 border border-pink-300/30 rounded-full" />
      <div className="absolute top-[50%] right-[2%] w-32 h-32 border-2 border-purple-200/35 rounded-full" />
      <div className="absolute bottom-[30%] left-[8%] w-36 h-36 border-2 border-purple-300/30 rounded-full" />
      <div className="absolute bottom-[20%] left-[25%] w-20 h-20 border border-pink-200/25 rounded-full" />
      <div className="absolute bottom-[15%] right-[8%] w-44 h-44 border-2 border-pink-300/35 rounded-full" />
      <div className="absolute bottom-[25%] right-[22%] w-24 h-24 border border-purple-200/30 rounded-full" />
      
      {/* Sparkle dots - many more */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${5 + (i * 4) % 90}%`,
            top: `${8 + (i * 3.5) % 84}%`,
            width: `${3 + (i % 4) * 2}px`,
            height: `${3 + (i % 4) * 2}px`,
            backgroundColor: i % 3 === 0 
              ? 'rgba(244, 114, 182, 0.7)' 
              : i % 3 === 1 
                ? 'rgba(192, 132, 252, 0.6)' 
                : 'rgba(251, 207, 232, 0.8)',
          }}
          animate={{ 
            opacity: [0.2, 1, 0.2], 
            scale: [1, 2, 1],
          }}
          transition={{ 
            duration: 1 + (i % 4) * 0.5, 
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
      
      {/* Extra decorative elements - small stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute text-pink-300/40"
          style={{
            left: `${8 + (i * 6) % 84}%`,
            top: `${12 + (i * 5) % 76}%`,
            fontSize: `${8 + (i % 3) * 4}px`,
          }}
          animate={{ 
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 4 + (i % 3), 
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated letter-by-letter title */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="elegant-heading text-5xl md:text-6xl lg:text-7xl">
            {"3 months".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <motion.div 
            className="elegant-heading text-5xl md:text-6xl lg:text-7xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {"with you".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + i * 0.05,
                  ease: "easeOut"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated counter */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.span 
            className="handwritten text-3xl md:text-4xl text-pink-500"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {daysTogether}
          </motion.span>
          <span className="handwritten text-xl md:text-2xl text-stone-600 ml-2">
            days of us
          </span>
        </motion.div>

        {/* CTA with hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.button
            onClick={scrollToGallery}
            className="group handwritten text-xl text-stone-600 hover:text-pink-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              scroll to begin
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative line */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-300/50" />
        <span className="text-pink-400/60 text-sm">♥</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-300/50" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-pink-400/60" size={24} />
      </motion.div>
    </section>
  );
}
