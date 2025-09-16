"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  content1: string;
  content2?: string;
  imageSrc?: string;
  bg: "teal" | "yellow";
  textAlign?: "left" | "right";
  textColor?: "white" | "black";
  imagePosition?: "left" | "right";
  className?: string;
  index?: number;
};

const bgMap: Record<CardProps["bg"], string> = {
  teal: "bg-[#57AC88]",
  yellow: "bg-[#FCDA64]",
};
const textColorMap = { white: "text-white", black: "text-black" } as const;

const textAlignMap: Record<NonNullable<CardProps["textAlign"]>, string> = {
  left: "text-center md:text-left",
  right: "text-center md:text-right",
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.08 },
  }),
};

const Card = ({
  title,
  content1,
  content2,
  imageSrc,
  bg,
  textAlign = "left",
  textColor = "black",
  imagePosition = "right",
  className,
  index = 0,
}: CardProps) => (
  <motion.article
    variants={cardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.35 }}
    custom={index}
    whileHover={{ y: -4, boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
    className={clsx(
      "rounded-3xl p-6 md:p-8 min-h-[220px] h-full transition-transform duration-300 will-change-transform",
      "flex flex-col items-center gap-5 md:flex-row md:items-center md:justify-between md:gap-6",
      bgMap[bg],
      textColorMap[textColor],
      textAlignMap[textAlign],
      className
    )}
  >
    {/* IMAGE */}
    {imageSrc && (
      <div
        className={clsx(
          "relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0",
          imagePosition === "left" ? "md:order-0" : "md:order-2"
        )}
        aria-hidden
      >
        <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-contain"
            sizes="160px"
          />
        </motion.div>
      </div>
    )}

    {/* TEXT */}
    <div className={clsx("flex-1", imageSrc ? "md:order-1" : "")}>
      <h3 className="text-xl md:text-2xl font-extrabold mb-3">{title}</h3>
      <p className="text-[15px] md:text-base leading-snug font-semibold">
        {content1}
      </p>
      {content2 && (
        <p className="text-[15px] md:text-base leading-snug font-semibold mt-2">
          {content2}
        </p>
      )}
    </div>
  </motion.article>
);

const Service = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-4 pt-20 pb-12">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#4b1d1d] mb-6">
        What we offer?
      </h2>

      <div className="space-y-5 md:space-y-5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          <Card
            index={0}
            className="md:col-span-2"
            title="Real-Time Emotional Support"
            content1="Chat with our AI therapist anytime, available 24/7."
            content2="Get empathetic, non-judgmental responses tailored to your feelings."
            imageSrc="/card-img1.png"
            bg="teal"
            textAlign="left"
            textColor="white"
            imagePosition="right"
          />
          <Card
            index={1}
            className="md:col-span-1"
            title="Emotion Detection & Mood Tracking"
            content1="The system understands your emotions from text."
            bg="yellow"
            textAlign="right"
            textColor="black"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
          <Card
            index={2}
            className="md:col-span-1"
            title="Anonymous & Private Conversations"
            content1="Engage freely without fear of judgment or stigma."
            bg="yellow"
            textAlign="left"
            textColor="black"
          />
          <Card
            index={3}
            className="md:col-span-2"
            title="Daily Motivation & Mindfulness"
            content1="Receive motivational quotes, relaxation guides, and coping strategies."
            content2="Learn simple mindfulness practices to reduce stress and anxiety."
            imageSrc="/card-img2.png"
            bg="teal"
            textAlign="right"
            textColor="white"
            imagePosition="left"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;
