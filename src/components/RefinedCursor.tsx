"use client";

import React, { useEffect, useState } from "react";
import { useGallery } from "@/context/GalleryContext";

export function RefinedCursor() {
  const { cursorLabel } = useGallery();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [visible]);

  if (!visible || !cursorLabel) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      <div className="px-2.5 py-1 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[9px] font-mono tracking-[0.25em] uppercase font-medium shadow-md">
        {cursorLabel}
      </div>
    </div>
  );
}
