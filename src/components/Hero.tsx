"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ArrowDown, Compass, Sparkles } from "lucide-react";

export function Hero() {
  const { activeMaterial, setCursor, resetCursor } = useMaterialTheme();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Gentle depth parallax for desktop
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none">
      {/* Background Cinematic Stone Macro Landscape with Cursor Parallax */}
      <div
        className="absolute inset-0 z-0 scale-105 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(1.06) translate3d(${mouseOffset.x * -0.6}px, ${
            mouseOffset.y * -0.6
          }px, 0)`,
        }}
      >
        <Image
          src={activeMaterial.heroImage}
          alt={`${activeMaterial.name} Macro Landscape`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85 filter brightness-95 contrast-105"
        />
        {/* Subtle cinematic gradient vignette & grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Top Metadata Spacer / Header spacing */}
      <div className="relative z-10 pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-3 text-[11px] font-mono tracking-[0.35em] text-stone-300 uppercase">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>ACTIVE MATERIAL WORLD // {activeMaterial.number} {activeMaterial.name}</span>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono tracking-[0.35em] text-stone-400 uppercase">
          <span>LAT 26.86° N · LON 81.01° E</span>
        </div>
      </div>

      {/* Center Hero Typography */}
      <div
        className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full my-auto transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${
            mouseOffset.y * 0.4
          }px, 0)`,
        }}
      >
        <div className="max-w-4xl">
          <span className="block text-xs md:text-sm font-mono tracking-[0.45em] uppercase text-stone-300 mb-4">
            ARCHITECTURAL SURFACE STUDIO · LUCKNOW
          </span>

          <h1 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight uppercase text-stone-100 font-light">
            WHERE <br />
            <span className="italic font-normal text-stone-200">EARTH</span> <br />
            BECOMES <br />
            <span className="tracking-widest text-[var(--accent)]">ARCHITECTURE.</span>
          </h1>

          <p className="mt-8 text-stone-300 text-sm md:text-base max-w-xl font-light leading-relaxed tracking-wide">
            {activeMaterial.atmosphereQuote}
          </p>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="relative z-10 pb-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-center space-x-6 text-[11px] font-mono tracking-[0.3em] uppercase text-stone-300">
          <div>
            <span className="text-stone-500 block text-[9px]">SHOWROOM LOCATION</span>
            <span>KAMTA · AYODHYA ROAD</span>
          </div>
          <div className="h-6 w-[1px] bg-stone-700" />
          <div>
            <span className="text-stone-500 block text-[9px]">NATURAL ORIGIN</span>
            <span>CARRARA · RAJASTHAN · VERONA</span>
          </div>
        </div>

        <a
          href="#transformation"
          className="group flex items-center space-x-3 text-xs tracking-[0.25em] uppercase font-medium text-stone-300 hover:text-white transition-colors"
          onMouseEnter={() => setCursor("explore", "SCROLL")}
          onMouseLeave={resetCursor}
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-8 h-8 rounded-full border border-stone-500 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </div>
        </a>
      </div>
    </section>
  );
}
