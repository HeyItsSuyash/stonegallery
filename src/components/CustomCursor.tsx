"use client";

import React, { useEffect, useState } from "react";
import { useMaterialTheme } from "@/context/MaterialThemeContext";

export function CustomCursor() {
  const { cursorState } = useMaterialTheme();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isBadge = cursorState.type !== "default";

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ${
          isBadge
            ? "w-20 h-20 rounded-full bg-stone-900/90 text-stone-100 border border-stone-100/20 shadow-2xl backdrop-blur-md"
            : "w-3 h-3 rounded-full bg-stone-900/60 dark:bg-stone-100/70 border border-white/40"
        }`}
      >
        {isBadge && (
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-medium text-center px-1">
            {cursorState.label ||
              (cursorState.type === "drag"
                ? "DRAG"
                : cursorState.type === "macro"
                ? "INSPECT"
                : cursorState.type === "slab"
                ? "EXPLORE"
                : cursorState.type === "view"
                ? "VIEW"
                : cursorState.type === "visit"
                ? "VISIT"
                : "EXPLORE")}
          </span>
        )}
      </div>
    </div>
  );
}
