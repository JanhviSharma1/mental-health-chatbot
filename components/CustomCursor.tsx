"use client";

import React, { useEffect } from "react";

const arrowSvg =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="black">
      <path d="M4 3.5l15 8.5-9.2 1.8L8 20z"/>
    </svg>
  `);

export default function CustomCursor() {
  const isCoarse =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isCoarse) return;

    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isCoarse]);

  if (isCoarse) return null;

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: "var(--cursor-x, -100px)",
          top: "var(--cursor-y, -100px)",
          width: 22,
          height: 22,
          backgroundImage: `url(${arrowSvg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      />
    </>
  );
}
