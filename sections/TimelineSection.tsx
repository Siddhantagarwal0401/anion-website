"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, Phone, Music, Sparkles, Calendar } from "lucide-react";

/**
 * TimelineSection Component
 * Beautiful visual timeline of relationship milestones
 * Customize: Add your own memories and dates
 */

const icons = {
  message: MessageCircle,
  heart: Heart,
  phone: Phone,
  music: Music,
  sparkle: Sparkles,
  calendar: Calendar,
};

export default function TimelineSection() {
  // CUSTOMIZE: Add your own timeline memories
  const memories = [
    {
      title: "First Conversation",
      description: "The day we started talking and I knew there was something special about you.",
      date: "February 23, 2024",
      icon: "message" as keyof typeof icons,
      side: "left" as const,
    },
    {
      title: "First Date",
      description: "Our first date where time flew by and I didn't want it to end.",
      date: "March 1, 2024",
      icon: "calendar" as keyof typeof icons,
      side: "right" as const,
    },
    {
      title: "That Unforgettable Call",
      description: "We talked until 3 AM and it felt like minutes. I fell asleep smiling.",
      date: "March 15, 2024",
      icon: "phone" as keyof typeof icons,
      side: "left" as const,
    },
    {
      title: "The Funniest Memory",
      description: "When we couldn't stop laughing and my stomach hurt. You make everything fun.",
      date: "April 2, 2024",
      icon: "sparkle" as keyof typeof icons,
      side: "right" as const,
    },
    {
      title: "Realizing I Love You",
      description: "The moment I knew this was more than just feelings - this was real.",
      date: "April 20, 2024",
      icon: "heart" as keyof typeof icons,
      side: "left" as const,
    },
    {
      title: "Our Song",
      description: "The song that became 'ours' and now I can't hear it without thinking of you.",
      date: "May 5, 2024",
      icon: "music" as keyof typeof icons,
      side: "right" as const,
    },
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 bg-gradient-to-b from-rose-50/30 via-amber-50/40 to-orange-50/30 overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 paper-texture opacity-50" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="elegant-heading text-5xl md:text-6xl mb-4">
            Our Journey
          </h2>
          <p className="handwritten text-xl">
            every moment that brought us closer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300/50 via-rose-300/50 to-amber-300/50"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline items */}
          <div className="relative space-y-12">
            {memories.map((memory, index) => {
              const IconComponent = icons[memory.icon];
              const isLeft = memory.side === "left";
              
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {/* Icon dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-amber-100 z-10">
                    <IconComponent className="w-5 h-5 text-rose-400" />
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="bg-white p-5 rounded-sm shadow-sm border border-amber-50 hover:shadow-md transition-shadow">
                      <p className="text-xs text-rose-400 font-medium mb-1">{memory.date}</p>
                      <h3 className="font-serif text-lg font-semibold text-stone-800 mb-2">
                        {memory.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        {memory.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="handwritten text-2xl">
            and many more memories to come...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
