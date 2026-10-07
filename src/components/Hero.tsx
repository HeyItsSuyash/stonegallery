"use client";

import React from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const { activeMaterial } = useMaterialTheme();

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none">
      {/* Background Natural Stone Slab Hero Visual - Clean, Solid, No Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeMaterial.heroImage}
          alt={`${activeMaterial.name} Natural Slab`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85 filter brightness-90 contrast-105"
        />
        {/* Architectural vignette for crisp typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Top Header Spacing */}
      <div className="relative z-10 pt-28 md:pt-36 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.35em] text-stone-300 uppercase">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          <span>SHOWROOM COLLECTION · {activeMaterial.name}</span>
        </div>
        <div className="hidden sm:flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-stone-400 uppercase">
          <span>KAMTA · AYODHYA ROAD · LUCKNOW</span>
        </div>
      </div>

      {/* Center Hero Typography */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full my-auto">
        <div className="max-w-4xl">
          <span className="block text-[11px] md:text-xs font-mono tracking-[0.45em] uppercase text-stone-300 mb-4">
            MARBLE · GRANITE · NATURAL STONE SHOWROOM
          </span>

          <h1 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight uppercase text-stone-100 font-light">
            STONE, <br />
            <span className="italic font-normal text-stone-200">FOR EVERY</span> <br />
            SPACE.
          </h1>

          <p className="mt-6 md:mt-8 text-stone-300 text-base md:text-xl font-light leading-relaxed max-w-2xl">
            Marble, granite and natural stone for homes, interiors and everyday spaces.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#materials"
              className="px-8 py-4 bg-white text-black text-xs font-mono tracking-[0.2em] uppercase font-semibold hover:bg-stone-200 transition-colors inline-flex items-center space-x-2 shadow-lg"
            >
              <span>EXPLORE MATERIALS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#showroom"
              className="px-8 py-4 border border-white/60 text-white text-xs font-mono tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors inline-flex items-center space-x-2"
            >
              <span>VISIT SHOWROOM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Natural Variation Info & Subtle Scroll Indicator */}
      <div className="relative z-10 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-stone-400 text-[10px] font-mono tracking-[0.3em] uppercase">
        <div className="flex items-center space-x-4">
          <span>VEINS</span>
          <span>·</span>
          <span>TEXTURE</span>
          <span>·</span>
          <span>NATURAL DENSITY</span>
        </div>

        <a
          href="#materials"
          className="group flex items-center space-x-2 text-stone-300 hover:text-white transition-colors"
        >
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
