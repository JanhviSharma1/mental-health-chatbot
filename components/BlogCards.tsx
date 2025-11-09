"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BlogCard({ blog, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 60 }}
      className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between"
    >
      <div>
        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          {blog.title}
        </h2>
        <p className="text-gray-700 text-[15px] leading-relaxed">
          {blog.excerpt}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-[#0E8C5E] font-medium">
        <span>{blog.category}</span>
        <Link
          href={`/blog/${blog.id}`}
          className="flex items-center gap-1 bg-[#0E8C5E] text-black px-3 py-1.5 rounded-full font-medium hover:bg-[#0b764f] transition-all duration-200 group"
        >
          <ChevronRight className="w-4 h-4 mt-[1px] text-white" />
        </Link>
      </div>
    </motion.div>
  );
}
