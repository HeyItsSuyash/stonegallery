"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DETAILED_STONES, SHOWROOM_INFO } from "@/data/editorial";
import { useGallery } from "@/context/GalleryContext";

export function EditorialMaterialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setActiveMaterial } = useGallery();

  const totalStones = DETAILED_STONES.length;
  const activeStone = DETAILED_STONES[currentIndex];

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? totalStones - 1 : currentIndex - 1;
    setCurrentIndex(nextIdx);
    setActiveMaterial(DETAILED_STONES[nextIdx].familyId);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === totalStones - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIdx);
    setActiveMaterial(DETAILED_STONES[nextIdx].familyId);
  };

  const handleSelectStone = (idx: number) => {
    setCurrentIndex(idx);
    setActiveMaterial(DETAILED_STONES[idx].familyId);
  };

  return (
    <section
      id="materials"
      className="relative min-h-[90vh] py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 w-full overflow-hidden text-white select-none border-t border-white/10"
    >
      {/* SECTION BACKGROUND: Actual Macro Texture of the Selected Stone */}
      <div className="absolute inset-0 z-0">
        <Image
          key={activeStone.id}
          src={activeStone.textureImage}
          alt={`${activeStone.name} Texture Background`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.24] contrast-125 transition-all duration-1000 ease-out"
        />
        {/* Architectural atmospheric gradient overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Main Content Container: Side-by-Side Split Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT COLUMN: Find Your Stone + Rich Architectural Specification Slots */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C5A880]" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] sm:tracking-[0.28em] uppercase text-stone-300">
                SECTION 01 / MATERIAL DISCOVERY
              </span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl leading-[0.92] uppercase font-light text-white tracking-tight">
              FIND <br />
              YOUR <br />
              STONE.
            </h2>

            <div className="mt-4 flex items-center space-x-3">
              <span className="px-2.5 py-1 bg-[#C5A880]/20 border border-[#C5A880]/50 text-[#E8D5B5] text-[10px] font-mono tracking-widest uppercase">
                {activeStone.category}
              </span>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                {activeStone.origin}
              </span>
            </div>

            <p className="mt-3 text-sm text-stone-300 font-light leading-relaxed max-w-md">
              {activeStone.description}
            </p>
          </div>

          {/* Architectural Specification Slots (Keep 2-column layout same as desktop) */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-2 border-t border-white/15">
            {/* Slot 1: Geology */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-0.5">
                GEOLOGY
              </span>
              <span className="block text-xs sm:text-sm font-mono text-stone-100 uppercase font-medium leading-tight">
                {activeStone.geology}
              </span>
            </div>

            {/* Slot 2: Calibration */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-0.5">
                CALIBRATION
              </span>
              <span className="block text-xs sm:text-sm font-mono text-stone-100 uppercase font-medium leading-tight">
                {activeStone.thickness}
              </span>
            </div>

            {/* Slot 3: Surface Finish */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-0.5">
                SURFACE FINISH
              </span>
              <span className="block text-xs sm:text-sm font-mono text-[#E8D5B5] uppercase font-medium leading-tight">
                {activeStone.finish}
              </span>
            </div>

            {/* Slot 4: Density & Absorption */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-0.5">
                ABSORPTION & DENSITY
              </span>
              <span className="block text-xs sm:text-sm font-mono text-stone-100 uppercase font-medium leading-tight">
                {activeStone.absorption}
              </span>
            </div>

            {/* Slot 5: Applications (Full width) */}
            <div className="col-span-2 p-3 bg-white/5 border border-white/10 rounded-xs">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-0.5">
                RECOMMENDED SPECIFICATION
              </span>
              <span className="block text-xs sm:text-sm font-mono text-stone-100 uppercase font-medium leading-relaxed">
                {activeStone.application}
              </span>
            </div>

            {/* Slot 6: Yard Status */}
            <div className="col-span-2 flex items-center justify-between px-3.5 py-2.5 bg-black/50 border border-white/15 rounded-xs text-xs font-mono">
              <span className="text-stone-300 uppercase tracking-wider">
                YARD BUNDLE: {activeStone.lotCode}
              </span>
              <span className="text-emerald-400 uppercase flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE IN YARD
              </span>
            </div>
          </div>

          {/* Arrow Navigation Toolbar */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-stone-400 block">
                LOT {currentIndex + 1} OF {totalStones}
              </span>
              <span className="text-base font-serif-luxury text-white uppercase tracking-wider font-light">
                {activeStone.name}
              </span>
            </div>

            {/* Arrow Navigation Buttons */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Stone Style"
                className="w-12 h-12 rounded-xs border border-white/30 hover:border-white bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
              >
                <span className="text-2xl leading-none">←</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Stone Style"
                className="w-12 h-12 rounded-xs border border-white/30 hover:border-white bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
              >
                <span className="text-2xl leading-none">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (BAGAL ME): Featured Stone Showcase & Slot Thumbnails */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Main Slab Showcase Frame */}
          <div className="relative p-4 sm:p-7 rounded-sm border border-white/20 bg-black/60 backdrop-blur-xl shadow-2xl">
            {/* Slab Image Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xs bg-stone-900 border border-white/10 group">
              <Image
                key={activeStone.id}
                src={activeStone.image}
                alt={activeStone.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Top Slab Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 bg-black/85 backdrop-blur-md border border-white/25 text-white text-xs font-mono tracking-widest uppercase">
                {activeStone.category} · {activeStone.origin}
              </div>

              {/* Bottom Subtle Overlay Note */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 bg-black/90 backdrop-blur-md border border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono">
                <span className="text-stone-300 uppercase tracking-wider">
                  TEXTURE LOADED IN BACKGROUND
                </span>
                <span className="text-[#E8D5B5] uppercase font-medium">
                  {activeStone.finish}
                </span>
              </div>
            </div>

            {/* Title & Direct Enquiry Row */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-stone-400 block">
                  AUTHENTIC GANGSAW SLAB
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl uppercase font-light text-white tracking-wide mt-1">
                  {activeStone.name}
                </h3>
              </div>

              {/* Large, prominent Enquire Button */}
              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hi Stone Gallery, I would like to enquire about availability and rates for ${activeStone.name} (${activeStone.origin}, ${activeStone.lotCode}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-8 py-4 bg-white text-black text-xs font-mono tracking-[0.2em] uppercase rounded-xs hover:bg-stone-200 transition-all font-semibold whitespace-nowrap self-stretch sm:self-end shadow-xl active:scale-98"
              >
                ENQUIRE THIS SLAB →
              </a>
            </div>
          </div>

          {/* Quick Stone Slot Thumbnails Rail (Click to jump to any stone) */}
          <div>
            <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-stone-400 uppercase tracking-wider">
              <span>EXPLORE ALL 8 CURATED SLABS:</span>
              <span>CLICK TO VIEW</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {DETAILED_STONES.map((stone, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={stone.id}
                    type="button"
                    onClick={() => handleSelectStone(idx)}
                    className={`relative aspect-square rounded-xs overflow-hidden border transition-all duration-300 ${
                      isSelected
                        ? "border-[#C5A880] ring-2 ring-[#C5A880]/50 scale-105"
                        : "border-white/15 opacity-60 hover:opacity-100 hover:border-white/40"
                    }`}
                    title={stone.name}
                  >
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    {isSelected && (
                      <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#C5A880]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
