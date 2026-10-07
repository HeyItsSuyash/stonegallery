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
  const pixelSize = size === "sm" ? 32 : size === "lg" ? 48 : 38;

  // Actual uploaded Logo Image with NO BOX, NO BORDER, NO BACKGROUND
  const LogoImage = (
    <div
      className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
      }}
    >
      <Image
        src="/logo.png"
        alt="Stone Gallery Logo"
        fill
        sizes={`${pixelSize}px`}
        className="object-contain"
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
        <div className="mb-2">{LogoImage}</div>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif-luxury text-2xl tracking-[0.16em] uppercase font-light">
            STONE GALLERY
          </span>
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase opacity-70 mt-1">
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
      {LogoImage}
      <div className="flex flex-col justify-center">
        <span className="font-serif-luxury text-xl md:text-2xl font-light tracking-[0.14em] uppercase">
          STONE GALLERY
        </span>
        <span className="text-[9px] font-mono tracking-[0.25em] uppercase opacity-60 mt-0.5">
          LUCKNOW
        </span>
      </div>
    </div>
  );
}
