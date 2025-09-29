"use client";
import React, { useState } from "react";
import { X, Search } from "lucide-react";
import Navbar from "@/components/navbar";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9] px-6 py-16 ">
      <Navbar />
      <div className="bg-white lg:mt-10 sm:mt-0 mx-auto flex items-center rounded-full shadow-md px-4 py-2 max-w-xl">
        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blogs..."
          className="flex-grow bg-transparent outline-none text-[#5D1919] placeholder:text-[#5D1919]/70 px-2"
        />

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {query && (
            <button
              onClick={() => setQuery("")}
              className="bg-[#0E8C5E] rounded-full text-white p-2 hover:bg-[#0c6e4a] transition"
            >
              <X size={18} />
            </button>
          )}
          <button className="bg-[#0E8C5E] rounded-full text-white p-2 hover:bg-[#0c6e4a] transition">
            <Search size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
