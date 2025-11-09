"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import BlogCard from "@/components/BlogCards";
import { blogs } from "@/app/data/blogs";
import { Search, X } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const term = searchTerm.toLowerCase();
    return (
      blog.title.toLowerCase().includes(term) ||
      blog.id.toLowerCase().includes(term) ||
      blog.excerpt.toLowerCase().includes(term) ||
      blog.category.toLowerCase().includes(term)
    );
  });

  const handleClear = () => setSearchTerm("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9] px-6 sm:py-6 lg:py-27">
      <Navbar />

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12 mt-10 sm:mt-0.5">
        <h1 className="text-3xl py-2 sm:text-4xl font-semibold text-[#0E8C5E]">
          Therapy Insights & Reflections
        </h1>
        <p className="text-[#5D1919] text-base sm:text-lg">
          Gentle reads to help you understand yourself better.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-full shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9E4C5] focus:border-transparent bg-white/90 placeholder-gray-500 text-gray-700 transition-all duration-200"
          />

          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No blogs found. Try a different keyword.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blog;
