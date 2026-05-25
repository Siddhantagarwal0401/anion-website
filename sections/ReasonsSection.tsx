"use client";

import { motion } from "framer-motion";

/**
 * ReasonsSection Component
 * Intimate handwritten-style reasons display
 * Customize: Add your own reasons
 */
export default function ReasonsSection() {
  // CUSTOMIZE: Add your own personal reasons
  const reasons = [
    "The way you get ragebaited by me so easily",
    "Your BEAUTIFUL handwriting",
    "Your OVERLY expressive hand gestures",
    "How happy u make me feel when I am around u",
    "You being ragebaited by me (I had to mention it twice)",
    "How ur always there for your friends and everyone around u whenver they need u",
    "How hardworking u are and how u never give up (ur most under appreciated quality)",
    "everything you are",
  ];

  return (
    <section className="relative py-28 px-4 bg-gradient-to-b from-rose-200/50 via-pink-100/70 to-rose-100/60 overflow-hidden">
      {/* Rich decorative blobs - more of them */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-pink-300/40 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-purple-200/35 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-300/35 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/25 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
      
      {/* LOTS of scattered hearts */}
      <div className="absolute top-[5%] left-[5%] text-pink-400/55 text-3xl">♥</div>
      <div className="absolute top-[8%] left-[18%] text-purple-300/45 text-xl">♥</div>
      <div className="absolute top-[4%] left-[35%] text-pink-300/40 text-2xl">♥</div>
      <div className="absolute top-[10%] right-[30%] text-purple-400/35 text-lg">♥</div>
      <div className="absolute top-[6%] right-[15%] text-pink-400/50 text-2xl">♥</div>
      <div className="absolute top-[12%] right-[5%] text-purple-300/55 text-3xl">♥</div>
      
      <div className="absolute top-[20%] left-[3%] text-purple-400/50 text-2xl">♥</div>
      <div className="absolute top-[25%] left-[8%] text-pink-300/45 text-lg">♥</div>
      <div className="absolute top-[22%] right-[6%] text-pink-400/50 text-xl">♥</div>
      <div className="absolute top-[28%] right-[3%] text-purple-300/45 text-2xl">♥</div>
      
      <div className="absolute top-[38%] left-[2%] text-pink-400/45 text-xl">♥</div>
      <div className="absolute top-[42%] left-[6%] text-purple-400/40 text-2xl">♥</div>
      <div className="absolute top-[40%] right-[4%] text-purple-300/50 text-lg">♥</div>
      <div className="absolute top-[45%] right-[2%] text-pink-300/45 text-2xl">♥</div>
      
      <div className="absolute top-[55%] left-[4%] text-purple-300/50 text-2xl">♥</div>
      <div className="absolute top-[60%] left-[10%] text-pink-400/40 text-lg">♥</div>
      <div className="absolute top-[58%] right-[8%] text-pink-300/50 text-xl">♥</div>
      <div className="absolute top-[65%] right-[4%] text-purple-400/45 text-2xl">♥</div>
      
      <div className="absolute top-[75%] left-[5%] text-pink-400/50 text-3xl">♥</div>
      <div className="absolute top-[80%] left-[15%] text-purple-300/40 text-xl">♥</div>
      <div className="absolute top-[78%] right-[12%] text-pink-300/45 text-lg">♥</div>
      <div className="absolute top-[82%] right-[5%] text-purple-400/50 text-2xl">♥</div>
      
      <div className="absolute bottom-[10%] left-[8%] text-purple-300/45 text-2xl">♥</div>
      <div className="absolute bottom-[5%] left-[25%] text-pink-400/40 text-xl">♥</div>
      <div className="absolute bottom-[8%] right-[20%] text-pink-300/50 text-lg">♥</div>
      <div className="absolute bottom-[4%] right-[8%] text-purple-400/45 text-3xl">♥</div>
      
      {/* Animated floating hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`reason-heart-${i}`}
          className="absolute"
          style={{
            left: `${5 + (i * 10) % 90}%`,
            top: `${8 + (i * 9) % 84}%`,
            fontSize: `${14 + (i % 4) * 4}px`,
            color: i % 2 === 0 ? 'rgba(244, 114, 182, 0.5)' : 'rgba(192, 132, 252, 0.45)',
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
      
      {/* Decorative circles */}
      <div className="absolute top-[8%] left-[2%] w-36 h-36 border-2 border-pink-300/35 rounded-full" />
      <div className="absolute top-[15%] right-[4%] w-28 h-28 border border-purple-200/30 rounded-full" />
      <div className="absolute top-[45%] left-[1%] w-24 h-24 border border-pink-200/25 rounded-full" />
      <div className="absolute top-[50%] right-[2%] w-32 h-32 border-2 border-purple-300/30 rounded-full" />
      <div className="absolute bottom-[25%] left-[4%] w-28 h-28 border border-pink-300/25 rounded-full" />
      <div className="absolute bottom-[20%] right-[3%] w-36 h-36 border-2 border-purple-200/30 rounded-full" />
      
      {/* Sparkle dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`reason-sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${6 + (i * 8) % 88}%`,
            top: `${10 + (i * 7) % 80}%`,
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            backgroundColor: i % 2 === 0 ? 'rgba(244, 114, 182, 0.6)' : 'rgba(192, 132, 252, 0.5)',
          }}
          animate={{ 
            opacity: [0.2, 1, 0.2], 
            scale: [1, 1.6, 1],
          }}
          transition={{ 
            duration: 1.5 + (i % 3), 
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="elegant-heading text-4xl md:text-5xl">
            why i love you
          </h2>
        </motion.div>

        {/* Reasons in a flowing layout */}
        <div className="space-y-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <span 
                className="handwritten text-xl md:text-2xl inline-block px-4 py-2"
                style={{ 
                  transform: `rotate(${(index % 2 === 0 ? -0.5 : 0.5)}deg)` 
                }}
              >
                {reason}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-3 my-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="w-12 h-px bg-pink-300/50" />
          <span className="text-pink-400/60">♥</span>
          <div className="w-12 h-px bg-pink-300/50" />
        </motion.div>

        {/* Bottom flourish */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="handwritten text-2xl md:text-3xl">
            ...and so much more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
