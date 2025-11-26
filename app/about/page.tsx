"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const leftSlide = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9] px-6 py-16 flex flex-col items-center">
      <Navbar />

      {/* About */}
      <div className="max-w-3xl text-center mb-3">
        <h1 className="text-5xl font-bold text-[#5D1919] mt-10">About Us</h1>
      </div>

      <motion.div
        className="max-w-2xl text-center mb-4"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-lg text-[#5D1919] mb-4">
          Mendly is a virtual mental health companion offering accessible,
          stigma-free emotional support. Using AI, it helps manage stress,
          anxiety, and depression through empathetic conversations and
          personalized strategies. With privacy and anonymity at its core,
          Mendly bridges the gap between rising mental health needs and
          traditional therapy limitations.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="max-w-2xl text-center mb-12"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-[#0E8C5E] mb-3">
          OUR VISION
        </h2>
        <p className="text-[#5D1919] text-lg">
          We envision a world where mental health care is as accessible as
          technology itself—a future where anyone, regardless of background or
          location, can find timely support, build emotional resilience, and
          live with greater peace of mind.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        className="max-w-2xl text-center mb-16"
        variants={fadeDown}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-[#0E8C5E] mb-3">
          OUT MISSION
        </h2>
        <p className="text-[#5D1919] text-lg">
          Our mission is to make mental health support available to everyone,
          anytime, anywhere. We aim to break barriers of cost, stigma, and
          accessibility by offering a compassionate, AI-powered platform that
          empowers individuals to take charge of their emotional well-being.
        </p>
      </motion.div>

      {/* Why Mendly */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {[
          {
            title: "Always Available, Always Listening",
            desc: "Mendly is accessible anytime, offering instant emotional support when it’s needed most. No appointments, no waiting—just real-time help during stress, anxiety, or loneliness.",
            img: "/Listening.png",
          },
          {
            title: "Private, Anonymous, and Judgment-Free",
            desc: "Your conversations remain confidential, ensuring complete safety and trust. Seek support without stigma, fear, or external judgment holding you back.",
            img: "/Anonymous.png",
          },
          {
            title: "Emotion-Aware, Personalized Support",
            desc: "Mendly recognizes emotions and tailors responses to your unique state. From mindfulness tips to motivation, it delivers what you truly need.",
            img: "/Emotion.png",
          },
          {
            title: "Encouraging Positivity & Wellness",
            desc: "Beyond support, Mendly nurtures resilience and daily mental balance. Gentle reminders and affirmations help build lasting healthy habits.",
            img: "/Wellness.png",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#FFC702]/40 p-6 rounded-2xl shadow-md border border-[#5D1919]"
            variants={leftSlide}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: i * 0.2,
              type: "spring",
              stiffness: 70,
            }}
            whileHover={{ scale: 1.05 }}
            animate={{
              y: 0,
              ...(typeof window !== "undefined" &&
                window.innerWidth >= 1024 && {
                  y: [0, -6, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }),
            }}
          >
            {/* Box Content*/}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-[#5D1919]">{item.desc}</p>
              </div>

              {/* Image */}
              <div className="w-32 h-32 lg:w-40 lg:h-40 flex-shrink-0 mt-4 lg:mt-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
