"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const LINKS = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#blog", label: "BLOG" },
  { href: "#chat", label: "CHAT" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          w-[92%] max-w-3xl
          rounded-3xl bg-white/30 backdrop-blur-xl
          shadow-lg border border-white/20
        "
      >
        <div className="relative flex items-center justify-between px-5 py-3 md:py-3.5 min-h-[56px]">
          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="
              md:hidden
              inline-flex items-center justify-center
              w-10 h-10 rounded-xl
              bg-white/60 backdrop-blur border border-black/10
              shadow-sm
            "
          >
            <motion.span
              initial={false}
              animate={open ? "open" : "closed"}
              className="relative block w-5 h-4"
            >
              {["top", "middle", "bottom"].map((key) => (
                <motion.span
                  key={key}
                  className="absolute left-0 right-0 h-[2px] bg-[#5D1919] rounded"
                  variants={{
                    closed:
                      key === "top"
                        ? { y: 0, rotate: 0 }
                        : key === "middle"
                        ? { y: 6, opacity: 1 }
                        : { y: 12, rotate: 0 },
                    open:
                      key === "top"
                        ? { y: 6, rotate: 45 }
                        : key === "middle"
                        ? { opacity: 0 }
                        : { y: 6, rotate: -45 },
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                />
              ))}
            </motion.span>
          </button>

          {/* Center links (desktop) */}
          <div className="hidden md:flex justify-center gap-10 text-sm font-semibold">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[#5D1919] hover:opacity-70 transition"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Auth buttons (right side) */}
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm sm:text-base font-medium px-4 sm:px-5 h-9 sm:h-10 rounded-full border border-[#0E8C5E] text-[#0E8C5E] hover:bg-[#0E8C5E] hover:text-white transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#0E8C5E]/70 text-white rounded-full font-medium text-sm sm:text-base h-9 sm:h-10 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col px-3 pb-4 gap-2 text-sm font-semibold">
                {LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block w-full rounded-xl px-4 py-3 text-[#5D1919] hover:bg-black/5 transition"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="h-20 md:h-0" />
    </>
  );
}
