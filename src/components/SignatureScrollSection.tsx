"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";

export function SignatureScrollSection() {
  const { materialData } = useGallery();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = -rect.top;
      const prog = Math.max(0, Math.min(1, currentScroll / totalHeight));
      setProgress(prog);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Words progression based on progress (0 to 1)
  const words = ["MATERIAL", "VEIN", "TEXTURE", "SURFACE", "SPACE"];
  const wordIndex = Math.min(words.length - 1, Math.floor(progress * words.length));
  const activeWord = words[wordIndex];

  return (
    <section ref={containerRef} className="relative h-[200vh] sm:h-[240vh] w-full bg-black select-none">
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        {/* Layer 1: Raw Slab Image */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            opacity: Math.max(0, 1 - progress * 1.6),
            transform: `scale(${1 + progress * 0.08})`,
          }}
        >
          <Image
            src={materialData.heroImage}
            alt="Raw Material Slab"
            fill
            sizes="100vw"
            className="object-cover filter brightness-75 contrast-110"
          />
        </div>

        {/* Layer 2: Built Architectural Room/Space Image */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            opacity: Math.min(1, Math.max(0, (progress - 0.35) * 1.8)),
            transform: `scale(${1.08 - (1 - progress) * 0.06})`,
          }}
        >
          <Image
            src={materialData.spaceImage}
            alt="Material Built Into Space"
            fill
            sizes="100vw"
            className="object-cover filter brightness-85 contrast-105"
          />
        </div>

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Centered Giant Typographic Word Reveal */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <span className="text-[10px] font-mono tracking-[0.3em] sm:tracking-[0.4em] uppercase text-stone-400 block mb-2 sm:mb-3">
            PROGRESSION · {materialData.name}
          </span>
          <h3
            key={activeWord}
            className="font-serif-luxury text-[13vw] sm:text-[14vw] md:text-[11vw] leading-none uppercase font-light text-white tracking-tight animate-fadeIn"
          >
            {activeWord}
          </h3>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 right-4 sm:right-6 max-w-7xl mx-auto flex items-center justify-between text-white/70 text-[9px] sm:text-[10px] font-mono tracking-[0.25em] sm:tracking-[0.3em] uppercase">
          <span>01 / MATERIAL</span>
          <div className="w-20 sm:w-24 h-[1px] bg-white/30 hidden xs:block sm:block">
            <div
              className="h-full bg-white transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span>02 / SPACE</span>
        </div>
      </div>
    </section>
  );
}
