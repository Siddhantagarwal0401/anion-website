"use client";

import { motion } from "framer-motion";

/**
 * EndingSection Component
 * Simple, intimate ending with heartfelt message
 * Customize: Add your own personal message
 */
export default function EndingSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-rose-100/60 via-pink-50/80 to-orange-50/50 overflow-hidden">
      {/* Warm ambient blobs - more of them */}
      <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-pink-200/40 rounded-full blur-3xl" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-purple-200/35 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-rose-200/35 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-purple-100/25 rounded-full blur-3xl" />
      
      {/* LOTS of scattered hearts */}
      <div className="absolute top-[5%] left-[5%] text-pink-400/55 text-3xl">♥</div>
      <div className="absolute top-[8%] left-[18%] text-purple-300/45 text-xl">♥</div>
      <div className="absolute top-[4%] left-[35%] text-pink-300/40 text-2xl">♥</div>
      <div className="absolute top-[10%] right-[30%] text-purple-400/35 text-lg">♥</div>
      <div className="absolute top-[6%] right-[15%] text-pink-400/50 text-2xl">♥</div>
      <div className="absolute top-[12%] right-[5%] text-purple-300/55 text-3xl">♥</div>
      
      <div className="absolute top-[20%] left-[3%] text-purple-400/50 text-2xl">♥</div>
      <div className="absolute top-[25%] left-[10%] text-pink-300/45 text-lg">♥</div>
      <div className="absolute top-[22%] right-[8%] text-pink-400/50 text-xl">♥</div>
      <div className="absolute top-[28%] right-[3%] text-purple-300/45 text-2xl">♥</div>
      
      <div className="absolute top-[38%] left-[2%] text-pink-400/45 text-xl">♥</div>
      <div className="absolute top-[42%] left-[8%] text-purple-400/40 text-2xl">♥</div>
      <div className="absolute top-[40%] right-[4%] text-purple-300/50 text-lg">♥</div>
      <div className="absolute top-[45%] right-[2%] text-pink-300/45 text-2xl">♥</div>
      
      <div className="absolute top-[55%] left-[4%] text-purple-300/50 text-2xl">♥</div>
      <div className="absolute top-[60%] left-[12%] text-pink-400/40 text-lg">♥</div>
      <div className="absolute top-[58%] right-[10%] text-pink-300/50 text-xl">♥</div>
      <div className="absolute top-[65%] right-[4%] text-purple-400/45 text-2xl">♥</div>
      
      <div className="absolute top-[75%] left-[6%] text-pink-400/50 text-3xl">♥</div>
      <div className="absolute top-[80%] left-[18%] text-purple-300/40 text-xl">♥</div>
      <div className="absolute top-[78%] right-[15%] text-pink-300/45 text-lg">♥</div>
      <div className="absolute top-[82%] right-[6%] text-purple-400/50 text-2xl">♥</div>
      
      <div className="absolute bottom-[12%] left-[8%] text-purple-300/45 text-2xl">♥</div>
      <div className="absolute bottom-[6%] left-[22%] text-pink-400/40 text-xl">♥</div>
      <div className="absolute bottom-[10%] right-[18%] text-pink-300/50 text-lg">♥</div>
      <div className="absolute bottom-[5%] right-[8%] text-purple-400/55 text-3xl">♥</div>
      
      {/* Animated floating hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`ending-heart-${i}`}
          className="absolute"
          style={{
            left: `${4 + (i * 6.5) % 92}%`,
            top: `${6 + (i * 6) % 88}%`,
            fontSize: `${14 + (i % 4) * 5}px`,
            color: i % 2 === 0 ? 'rgba(244, 114, 182, 0.5)' : 'rgba(192, 132, 252, 0.45)',
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.3, 0.65, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
      
      {/* Decorative circles */}
      <div className="absolute top-[8%] left-[3%] w-40 h-40 border-2 border-pink-300/35 rounded-full" />
      <div className="absolute top-[12%] right-[5%] w-32 h-32 border border-purple-200/30 rounded-full" />
      <div className="absolute top-[35%] left-[2%] w-28 h-28 border border-pink-200/25 rounded-full" />
      <div className="absolute top-[45%] right-[3%] w-36 h-36 border-2 border-purple-300/30 rounded-full" />
      <div className="absolute top-[65%] left-[5%] w-32 h-32 border-2 border-purple-200/25 rounded-full" />
      <div className="absolute top-[70%] right-[4%] w-28 h-28 border border-pink-300/30 rounded-full" />
      <div className="absolute bottom-[18%] left-[8%] w-36 h-36 border border-pink-200/30 rounded-full" />
      <div className="absolute bottom-[12%] right-[6%] w-40 h-40 border-2 border-purple-300/25 rounded-full" />
      
      {/* Sparkle dots */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={`ending-sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${5 + (i * 5.5) % 90}%`,
            top: `${8 + (i * 5) % 84}%`,
            width: `${4 + (i % 4) * 2}px`,
            height: `${4 + (i % 4) * 2}px`,
            backgroundColor: i % 3 === 0 
              ? 'rgba(244, 114, 182, 0.65)' 
              : i % 3 === 1 
                ? 'rgba(192, 132, 252, 0.55)' 
                : 'rgba(251, 207, 232, 0.7)',
          }}
          animate={{ 
            opacity: [0.2, 1, 0.2], 
            scale: [1, 1.8, 1],
          }}
          transition={{ 
            duration: 1.5 + (i % 4) * 0.5, 
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
      
      {/* Small rotating stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`ending-star-${i}`}
          className="absolute"
          style={{
            left: `${10 + (i * 9) % 80}%`,
            top: `${15 + (i * 8) % 70}%`,
            fontSize: `${10 + (i % 3) * 4}px`,
            color: i % 2 === 0 ? 'rgba(244, 114, 182, 0.4)' : 'rgba(192, 132, 252, 0.35)',
          }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 5 + (i % 3), 
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Letter-style message */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          {/* CUSTOMIZE: Write your own heartfelt message */}
          <motion.p 
            className="handwritten text-xl md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            I know that this exam period has not been easy for us. We have had to constanly prioritize school over each other.
            But we made it through, and no matter how little time we have with each other I will always cherish every moment we have and nothing can change the way I feel about you. LIKE EVER
          </motion.p>
          
          <motion.p 
            className="handwritten text-xl md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            One last final thing which is very very important to say
          </motion.p>
          
          <motion.p 
            className="handwritten text-xl md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            You worked extremely hard during this exam period, and if no one else has said it I am extremely PROUD of u.
            I know it wasn't always easy, but I always believed in you and I am EXTREMELY EXTREMELY proud of u.
          </motion.p>
          
          
        </motion.div>

        {/* Final line */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <p className="elegant-heading text-3xl md:text-4xl">
            LOVE U MOST
          </p>
        </motion.div>

        {/* Signature */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <p className="handwritten text-2xl md:text-3xl">
            {/* CUSTOMIZE: Add your name */}
            yours, always
          </p>
        </motion.div>
      </div>
    </section>
  );
}
