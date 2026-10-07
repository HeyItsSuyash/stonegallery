"use client";

import React from "react";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "mark-only";
  inverted?: boolean;
}

export function Logo({
  className = "",
  variant = "horizontal",
  inverted = false,
}: LogoProps) {
  // Architectural Monolithic Stone Slab Mark
  const Emblem = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 md:w-9 md:h-9 flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
      aria-label="Stone Gallery Architectural Monolith Mark"
    >
      {/* Base Geological Block Facet (Left Shadow) */}
      <polygon
        points="8,14 24,6 24,34 8,42"
        className="fill-current opacity-85 transition-opacity duration-300"
      />
      {/* Right Monolithic Facet (Luminous Crystalline Face) */}
      <polygon
        points="24,6 40,14 40,42 24,34"
        className="fill-current opacity-60 transition-opacity duration-300 group-hover:opacity-75"
      />
      {/* Top Architectural Planar Cut (Reflecting Ambient Light) */}
      <polygon
        points="24,6 40,14 24,22 8,14"
        className="fill-current opacity-95"
      />
      {/* Golden Ratio Vein Incision (Earth, Shaped For Space) */}
      <line
        x1="16"
        y1="10"
        x2="32"
        y2="38"
        stroke="var(--accent, #9A7E5E)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="transition-all duration-300 group-hover:stroke-width-2"
      />
      {/* Crystalline Core Spark */}
      <circle cx="24" cy="24" r="1.5" fill="var(--accent, #9A7E5E)" />
    </svg>
  );

  if (variant === "mark-only") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {Emblem}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div
        className={`group inline-flex flex-col items-center text-center select-none ${className}`}
      >
        <div className="mb-2">{Emblem}</div>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif-luxury text-2xl tracking-[0.28em] uppercase font-light">
            STONE
          </span>
          <span className="font-sans-utility text-[9px] tracking-[0.55em] uppercase font-medium opacity-70 mt-1 pl-1">
            GALLERY
          </span>
          <span className="text-[7px] font-mono tracking-[0.3em] uppercase opacity-50 mt-1">
            LUCKNOW · STUDIO
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
        <div className="flex items-baseline space-x-1.5">
          <span className="font-serif-luxury text-xl md:text-2xl font-light tracking-[0.24em] uppercase">
            STONE
          </span>
          <span className="font-serif-luxury text-xl md:text-2xl font-light tracking-[0.2em] uppercase opacity-90">
            GALLERY
          </span>
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className="font-sans-utility text-[8px] tracking-[0.45em] uppercase font-semibold text-[var(--accent)]">
            LUCKNOW
          </span>
          <span className="w-1 h-1 rounded-full bg-current opacity-30" />
          <span className="font-mono text-[7px] tracking-[0.3em] uppercase opacity-50">
            SURFACE STUDIO
          </span>
        </div>
      </div>
    </div>
  );
}
