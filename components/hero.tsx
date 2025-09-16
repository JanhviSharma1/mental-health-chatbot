"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-2 md:pt-30 pb-16 md:pb-20 gap-8 md:gap-12">
      {/* Left column - image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/hero-img.png"
          alt="hero-img"
          width={400}
          height={400}
          className="rounded-lg md:w-[500px] md:h-[500px] w-[300px] h-[300px] object-contain"
        />
      </motion.div>

      {/* Right column - heading + buttons */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D1919] leading-snug mb-6 sm:mb-8">
          Your Personal AI Therapist Companion for Stress & Anxiety
        </h1>
        <div className="flex flex-col gap-4 w-full max-w-[500px]">
          <motion.button
            className="w-full px-6 py-3 md:py-4 rounded-[20px] bg-[#0E8C5E]/70 text-black text-sm md:text-base shadow-md hover:bg-[#0E8C5E]/80 transition text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Anonymous, free, and available 24/7 — your safe space for mental
            well-being.
          </motion.button>

          <motion.button
            className="w-full px-6 py-3 md:py-4 rounded-[20px] bg-[#FFC702]/60 text-black text-base md:text-lg font-medium shadow-md hover:bg-[#FFC702]/70 transition text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start your journey to peace NOW!
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
