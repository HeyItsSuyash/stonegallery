"use client";

import React from "react";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "mark-only";
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className = "",
  variant = "horizontal",
  size = "md",
}: LogoProps) {
  const pixelSize = size === "sm" ? 30 : size === "lg" ? 48 : 38;

  // Ultra-Luxury Architectural Monolith Emblem (Vector - No Box, No Border)
  const Emblem = (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
      aria-label="Stone Gallery Architectural Monolith Mark"
    >
      {/* Precision Stone Facet 01 - Deep Crystalline Left Plane */}
      <polygon
        points="10,15 24,7 24,35 10,43"
        fill="currentColor"
        className="opacity-90"
      />
      {/* Precision Stone Facet 02 - Luminous Reflective Right Plane */}
      <polygon
        points="24,7 38,15 38,43 24,35"
        fill="currentColor"
        className="opacity-60"
      />
      {/* Precision Stone Facet 03 - Planar Top Cut */}
      <polygon
        points="24,7 38,15 24,23 10,15"
        fill="currentColor"
        className="opacity-95"
      />
      {/* Geological Vein Incision - Luxury Warm Gold */}
      <line
        x1="18"
        y1="11"
        x2="30"
        y2="39"
        stroke="#C5A880"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Core Mineral Spark */}
      <circle cx="24" cy="25" r="1.5" fill="#C5A880" />
    </svg>
  );

  if (variant === "mark-only") {
    return <div className={`inline-flex items-center ${className}`}>{Emblem}</div>;
  }

  if (variant === "stacked") {
    return (
      <div className={`group inline-flex flex-col items-center text-center select-none ${className}`}>
        <div className="mb-2">{Emblem}</div>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif-luxury text-2xl tracking-[0.2em] uppercase font-light">
            STONE GALLERY
          </span>
          <span className="text-[9px] font-mono tracking-[0.4em] uppercase opacity-70 mt-1">
            LUCKNOW
          </span>
        </div>
      </div>
    );
  }

  // Default: Horizontal Lockup
  return (
    <div
      className={`group inline-flex items-center space-x-3 select-none leading-none ${className}`}
    >
      {Emblem}
      <div className="flex flex-col justify-center">
        <span className="font-serif-luxury text-xl md:text-2xl font-light tracking-[0.15em] uppercase">
          STONE GALLERY
        </span>
        <span className="text-[9px] font-mono tracking-[0.28em] uppercase text-[var(--text-muted)] mt-1 opacity-80">
          LUCKNOW
        </span>
      </div>
    </div>
  );
}
