"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      {/* Logo */}
      <div className="mb-8 lg:mt-10">
        <Image
          src="/mendly-logo.png"
          alt="Mendly Logo"
          width={120}
          height={120}
          priority
        />
      </div>

      {/* About */}
      <div className="max-w-3xl text-center mb-3">
        <h1 className="text-5xl font-bold text-[#5D1919]">About Mendly</h1>
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
          Mendly is a virtual mental health companion designed to provide
          accessible, stigma-free, and real-time emotional support. Built using
          advanced artificial intelligence, it helps individuals cope with
          stress, anxiety, and depression through empathetic conversations,
          emotion recognition, and personalized coping strategies. With a focus
          on privacy, anonymity, and user well-being, AI Therapist bridges the
          gap between the urgent need for mental health care and the limitations
          of traditional therapy.
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {[
          {
            title: "Always Available, Always Listening",
            desc: "Unlike traditional therapy limited by schedules, AI Therapist is accessible 24/7. It provides immediate support during moments of stress, anxiety, or loneliness, ensuring help is always within reach.",
          },
          {
            title: "Private, Anonymous, and Judgment-Free",
            desc: "Many people avoid therapy due to social stigma or fear of judgment. With AI Therapist, users can engage confidentially and safely, knowing their conversations remain private and stigma-free.",
          },
          {
            title: "Emotion-Aware and Personalized Support",
            desc: "Through advanced emotion recognition and natural language processing, the AI detects your mood and tailors responses with mindfulness tips, motivational content, and coping strategies that truly match your emotional state.",
          },
          {
            title: "Beyond Support: Growth and Self-Tracking",
            desc: "AI Therapist doesn’t just respond—it helps you grow. With features like mood tracking dashboards, calmness scores, and mental readiness metrics, it encourages self-reflection, builds emotional resilience, and promotes healthier daily habits.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#FFC702]/40 p-6 rounded-2xl shadow-md text-center border border-[#5D1919]"
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
            <h3 className="text-xl font-semibold text-[#5D1919] mb-2">
              {item.title}
            </h3>
            <p className="text-[#5D1919]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
