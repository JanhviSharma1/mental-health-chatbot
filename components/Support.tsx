"use client";

import React from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Listbox, Portal } from "@headlessui/react";
import { useRouter } from "next/navigation";

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

const Support = () => {
  const [value, setValue] = React.useState(FEELINGS[0]);
  const router = useRouter();

  return (
    <section className="relative z-40 w-full px-6 sm:px-10 md:px-14 py-10 sm:py-12 md:py-14 text-center">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#5D1919] leading-tight">
        Whatever you’re facing,
        <br className="hidden sm:block" /> we’re here to support you
      </h2>

      {/* Subtext */}
      <p className="max-w-3xl mx-auto mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#3b2a2a]/80">
        Take a moment to reflect and share how you’re feeling. We’re here to
        guide you with resources and support to help you deal with what you’re
        dealing with.
      </p>

      {/* Controls row */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <div className="flex items-center gap-3 text-[#5D1919]">
          <span className="text-lg sm:text-xl md:text-2xl">I’m Feeling</span>
          <FeelingSelect value={value} onChange={setValue} />
        </div>

        <button
          className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 h-10 sm:h-11 md:h-12 rounded-full bg-[#FFC702] text-[#5D1919] font-semibold text-base sm:text-lg shadow-[0_10px_20px_-8px_rgba(0,0,0,0.25)]"
          onClick={() => router.push("/chat")}
        >
          Chat Now
        </button>
      </div>
    </section>
  );
};

function FeelingSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [coords, setCoords] = React.useState({ top: 0, left: 0, width: 220 });

  const measure = React.useCallback(() => {
    const r = btnRef.current?.getBoundingClientRect();
    if (!r) return;
    setCoords({
      top: r.bottom + 8,
      left: r.left,
      width: Math.max(220, r.width),
    });
  }, []);

  React.useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [measure]);

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => {
        React.useEffect(() => {
          if (open) measure();
        }, [open, measure]);

        return (
          <div className="relative">
            <Listbox.Button
              ref={btnRef}
              className="group relative inline-flex items-center pr-6 pl-0.5 py-0.5 focus:outline-none"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0E8C5E] capitalize">
                {value}
              </span>

              <span className="pointer-events-none absolute left-0 right-5 bottom-0 h-[3px] bg-[#0E8C5E]/70 rounded-full" />

              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                fill="none"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                <path
                  d="M7 10l5 5 5-5"
                  stroke="#5D1919"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </Listbox.Button>

            <AnimatePresence>
              {open && (
                <Portal>
                  <motion.ul
                    key="panel"
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="fixed z-[9999] max-h-64 overflow-auto rounded-xl bg-white shadow-xl ring-1 ring-black/5"
                    style={{
                      top: coords.top,
                      left: coords.left,
                      width: coords.width,
                    }}
                  >
                    {FEELINGS.map((opt) => (
                      <Listbox.Option key={opt} value={opt}>
                        {({ active, selected }) => (
                          <li
                            className={clsx(
                              "px-4 py-2.5 text-lg capitalize cursor-pointer flex items-center justify-between",
                              selected
                                ? "bg-[#0E8C5E] text-white"
                                : active
                                  ? "bg-[#0E8C5E]/10 text-[#0E8C5E]"
                                  : "text-[#3b2a2a]"
                            )}
                          >
                            {opt}
                            {selected && (
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M5 13l4 4L19 7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                              </svg>
                            )}
                          </li>
                        )}
                      </Listbox.Option>
                    ))}
                  </motion.ul>
                </Portal>
              )}
            </AnimatePresence>
          </div>
        );
      }}
    </Listbox>
  );
}

export default Support;
