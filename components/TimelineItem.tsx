"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * TimelineItem Component
 * Individual timeline memory with icon and description
 * Props:
 * - title: Memory title
 * - description: Memory description
 * - date: Date of memory
 * - icon: Icon/emoji to display
 * - side: Which side to display on (left/right)
 * - delay: Animation delay
 */

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
  side: "left" | "right";
  delay?: number;
}

export default function TimelineItem({
  title,
  description,
  date,
  icon,
  side,
  delay = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      className={`flex items-center gap-8 mb-16 ${
        side === "right" ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.6, type: "spring" }}
    >
      {/* Content card */}
      <div className="flex-1">
        <motion.div
          className="bg-white p-6 rounded-lg polaroid-shadow hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{icon}</span>
            <h3 className="elegant-heading text-xl text-gray-800">
              {title}
            </h3>
          </div>
          <p className="text-sm text-rose-500 mb-3">{date}</p>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="relative">
        <motion.div
          className="w-4 h-4 bg-rose-400 rounded-full border-4 border-cream-100"
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        />
      </div>

      {/* Spacer for other side */}
      <div className="flex-1" />
    </motion.div>
  );
}
