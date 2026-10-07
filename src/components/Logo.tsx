"use client";

import React from "react";
import Image from "next/image";

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
  const imageDimensions =
    size === "sm" ? 34 : size === "lg" ? 56 : 42;

  const LogoImage = (
    <div
      className={`relative rounded-md overflow-hidden flex-shrink-0 bg-black border border-white/15 transition-transform duration-300 group-hover:scale-105`}
      style={{
        width: `${imageDimensions}px`,
        height: `${imageDimensions}px`,
      }}
    >
      <Image
        src="/logo.png"
        alt="Stone Gallery Monogram Logo"
        fill
        sizes={`${imageDimensions}px`}
        className="object-contain p-0.5"
        priority
      />
    </div>
  );

  if (variant === "mark-only") {
    return <div className={`inline-flex items-center ${className}`}>{LogoImage}</div>;
  }

  if (variant === "stacked") {
    return (
      <div className={`group inline-flex flex-col items-center text-center select-none ${className}`}>
        <div className="mb-2.5">{LogoImage}</div>
        <div className="flex flex-col items-center leading-tight">
          <span className="font-serif-luxury text-2xl tracking-[0.25em] uppercase font-light">
            STONE GALLERY
          </span>
          <span className="font-sans-utility text-[9px] tracking-[0.45em] uppercase font-semibold text-[var(--accent)] mt-1">
            LUCKNOW
          </span>
          <span className="text-[8px] font-mono tracking-[0.25em] uppercase opacity-60 mt-0.5">
            MARBLE · GRANITE · NATURAL STONE
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
      {LogoImage}
      <div className="flex flex-col justify-center">
        <span className="font-serif-luxury text-xl md:text-2xl font-light tracking-[0.22em] uppercase">
          STONE GALLERY
        </span>
        <div className="flex items-center space-x-2 mt-1">
          <span className="font-sans-utility text-[8px] tracking-[0.4em] uppercase font-semibold text-[var(--accent)]">
            LUCKNOW
          </span>
          <span className="w-1 h-1 rounded-full bg-current opacity-30" />
          <span className="font-mono text-[7px] tracking-[0.25em] uppercase opacity-60">
            MARBLE · GRANITE · STONE
          </span>
        </div>
      </div>
    </div>
  );
}
