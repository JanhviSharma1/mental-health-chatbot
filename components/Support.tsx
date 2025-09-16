"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const FEELINGS = [
  "anxious",
  "stressed",
  "sad",
  "angry",
  "lonely",
  "overwhelmed",
  "numb",
  "okay",
];

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const child: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Support() {
  const [feeling, setFeeling] = React.useState("anxious");

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full rounded-3xl px-6 sm:px-10 md:px-14 py-12 sm:py-14 md:py-16 text-center shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.h2
        variants={child}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5D1919] leading-tight"
      >
        Whatever you’re facing,
        <br className="hidden sm:block" /> we’re here to support you
      </motion.h2>

      <motion.p
        variants={child}
        className="max-w-3xl mx-auto mt-5 text-sm sm:text-base text-[#3b2a2a]/80"
      >
        Take a moment to reflect and share how you’re feeling. We’re here to
        guide you with resources and support to help you deal with what you’re
        dealing with.
      </motion.p>

      <motion.div
        variants={child}
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
      >
        <motion.div
          className="flex items-center gap-3 text-[#5D1919]"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl">I’m Feeling</span>

          <div className="relative">
            <motion.select
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
              aria-label="Select your feeling"
              className="appearance-none bg-transparent text-xl sm:text-2xl md:text-3xl font-bold text-[#0E8C5E] pl-1 pr-7 py-1 border-b-4 border-[#0E8C5E]/60 focus:outline-none focus:border-[#0E8C5E]"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {FEELINGS.map((f) => (
                <option key={f} value={f} className="text-black">
                  {f}
                </option>
              ))}
            </motion.select>

            <motion.svg
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              animate={{ y: [0, -1, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M7 10l5 5 5-5"
                stroke="#5D1919"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </motion.div>

        <motion.button
          variants={child}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 h-12 sm:h-12 md:h-14 rounded-full bg-[#FFC702] text-[#5D1919] font-semibold text-lg shadow-[0_10px_20px_-8px_rgba(0,0,0,0.25)] transition"
        >
          Chat Now
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
