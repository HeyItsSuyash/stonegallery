"use client";

import React from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Navigation, Phone } from "lucide-react";
import { GOOGLE_MAPS_META } from "@/data/reviews";

export function Hero() {
  const { activeMaterial } = useMaterialTheme();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Natural Stone Slab Hero Visual - Clean, Solid, No Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeMaterial.heroImage}
          alt={`${activeMaterial.name} Luxury Architectural Surface`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-105 transition-all duration-1000 ease-out"
        />
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/70 pointer-events-none" />
      </div>

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-16 flex flex-col justify-between min-h-[85vh]">
        {/* Top Atmosphere Monogram / Tag */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono tracking-[0.35em] uppercase text-stone-300">
          <div className="flex items-center space-x-2.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>AYODHYA ROAD, KAMTA · LUCKNOW</span>
          </div>

          <div className="flex items-center space-x-3 text-stone-400">
            <span>SHOWROOM YARD OPEN 10 AM – 8 PM</span>
            <span>·</span>
            <span className="text-amber-400 font-semibold">★ {GOOGLE_MAPS_META.rating} GOOGLE RATING</span>
          </div>
        </div>

        {/* Central High-Impact Headline */}
        <div className="my-auto py-10 max-w-5xl">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-[var(--accent)] font-semibold">
              01 / ARCHITECTURAL STONE & SURFACE STUDIO
            </span>
            <div className="w-12 h-[1px] bg-[var(--accent)] opacity-60" />
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] uppercase font-light tracking-tight text-white drop-shadow-sm">
            EARTH, <br />
            SHAPED FOR <br />
            <span className="italic font-normal text-stone-200">
              SPACE.
            </span>
          </h1>

          <p className="mt-8 text-sm sm:text-base md:text-lg text-stone-300 font-light max-w-2xl leading-relaxed">
            Lucknow&apos;s physical showroom and slab yard for <span className="text-white font-medium">Granite</span>, <span className="text-white font-medium">Italian & Indian Marble</span>, <span className="text-white font-medium">Kota Stone</span>, and <span className="text-white font-medium">Designer Vitrified Slabs</span>. Inspect unbroken slabs in natural daylight before cutting.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#showroom"
              className="px-8 py-4 bg-white text-black text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-all duration-300 flex items-center space-x-2 font-semibold shadow-lg"
            >
              <MapPin className="w-4 h-4 text-[var(--accent)]" />
              <span>VISIT SHOWROOM YARD</span>
            </a>

            <a
              href="#slab-inspector"
              className="px-8 py-4 border border-white/60 bg-black/40 backdrop-blur-md text-white text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2 font-medium"
            >
              <span>INSPECT REAL SLABS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${GOOGLE_MAPS_META.phoneNumbers[0].replace(/\s+/g, "")}`}
              className="px-6 py-4 border border-white/30 text-white text-xs font-mono tracking-widest uppercase hover:border-white transition-all duration-300 flex items-center space-x-2 hidden sm:flex"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" />
              <span>{GOOGLE_MAPS_META.phoneNumbers[0]}</span>
            </a>
          </div>
        </div>

        {/* Bottom Colophon / Material Indicator */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-stone-400 gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-white uppercase font-semibold tracking-wider">
              ACTIVE ATMOSPHERE: {activeMaterial.name}
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline text-stone-400">
              {activeMaterial.tagline}
            </span>
          </div>

          <a
            href="#transformation"
            className="flex items-center space-x-2 text-stone-400 hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
