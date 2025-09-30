"use client";
import React, { useState } from "react";
import { X, Search } from "lucide-react";
import Navbar from "@/components/navbar";

const SearchBar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFF7D9] via-[#F6F9E9] to-[#EAF8D9] px-6 py-16 ">
      <Navbar />
    </div>
  );
};

export default SearchBar;
