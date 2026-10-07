"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";
import { MATERIAL_FAMILIES, SHOWROOM_INFO } from "@/data/editorial";

export function EditorialMaterialSection() {
  const { activeMaterial, materialData, setActiveMaterial } = useGallery();
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  const materialsList: Array<"marble" | "granite" | "stone"> = ["granite", "marble", "stone"];
  const currentVarieties = materialData.varieties;
  const activeVariety = currentVarieties[currentStyleIndex] || currentVarieties[0];

  const handlePrev = () => {
    setCurrentStyleIndex((prev) => (prev === 0 ? currentVarieties.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStyleIndex((prev) => (prev === currentVarieties.length - 1 ? 0 : prev + 1));
  };

  const handleSelectMaterial = (matKey: "marble" | "granite" | "stone") => {
    setActiveMaterial(matKey);
    setCurrentStyleIndex(0);
  };

  return (
    <section id="materials" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Side-by-Side: Find Your Stone (Left) + Stone Styles with Arrow Navigation (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* LEFT COLUMN: FIND YOUR STONE & Material Selectors */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[var(--text-muted)] block mb-3">
              SECTION 01 / MATERIAL COLLECTION
            </span>
            <h2 className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl leading-[0.92] uppercase font-light text-[var(--text-primary)] tracking-tight">
              FIND <br />
              YOUR <br />
              STONE.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed max-w-md">
              &ldquo;{materialData.caption}&rdquo; Select a petrographic family below to inspect
              authenticated gangsaw lots in our showroom yard.
            </p>
          </div>

          {/* Three Material Selectors (Stacked Architectural Buttons) */}
          <div className="space-y-3">
            {materialsList.map((matKey, idx) => {
              const mat = MATERIAL_FAMILIES[matKey];
              const isSelected = activeMaterial === matKey;

              return (
                <button
                  key={matKey}
                  type="button"
                  onClick={() => handleSelectMaterial(matKey)}
                  className={`w-full text-left p-4 rounded-xs border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-md"
                      : "bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--text-secondary)]"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span className="text-[10px] font-mono tracking-widest opacity-60">
                      0{idx + 1}
                    </span>
                    <span className="font-serif-luxury text-2xl uppercase tracking-wider font-light">
                      {mat.name}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase">
                    {isSelected ? "ACTIVE ●" : "SELECT →"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Arrow Navigation Toolbar for Stone Styles */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] block">
                STYLE {currentStyleIndex + 1} OF {currentVarieties.length}
              </span>
              <span className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-wider font-medium">
                {activeVariety.name}
              </span>
            </div>

            {/* Previous / Next Arrow Navigation */}
            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Stone Style"
                className="w-12 h-12 rounded-xs border border-[var(--border-subtle)] hover:border-[var(--text-primary)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
              >
                <span className="text-lg">←</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Stone Style"
                className="w-12 h-12 rounded-xs border border-[var(--border-subtle)] hover:border-[var(--text-primary)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200"
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (BAGAL ME): Featured Stone Style Showcase */}
        <div className="lg:col-span-7">
          <div className="p-4 sm:p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-xl relative">
            {/* Stone Image with smooth transition */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-xs bg-black/20">
              <Image
                key={activeVariety.name}
                src={activeVariety.image}
                alt={activeVariety.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* In-Yard badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase">
                {materialData.name} · IN LUCKNOW YARD
              </div>
            </div>

            {/* Stone Information */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] block">
                  ORIGIN: {activeVariety.origin}
                </span>

                <h3 className="font-serif-luxury text-3xl sm:text-4xl uppercase font-light text-[var(--text-primary)] tracking-wide mt-1">
                  {activeVariety.name}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light mt-2 max-w-lg leading-relaxed">
                  {activeVariety.note}
                </p>
              </div>

              {/* Direct WhatsApp Enquiry for this specific stone style */}
              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hi Stone Gallery, I am enquiring about availability and rates for ${activeVariety.name} (${activeVariety.origin}) under the ${materialData.name} collection.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] font-mono tracking-widest uppercase rounded-xs hover:opacity-85 transition-opacity whitespace-nowrap self-start sm:self-end font-medium"
              >
                ENQUIRE THIS SLAB →
              </a>
            </div>

            {/* Thumbnail dots / clickable selector for all styles in family */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                ALL {materialData.name} LOTS:
              </span>

              <div className="flex items-center space-x-2">
                {currentVarieties.map((v, i) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setCurrentStyleIndex(i)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      i === currentStyleIndex
                        ? "w-8 bg-[var(--text-primary)]"
                        : "w-2 bg-[var(--border-subtle)] hover:bg-[var(--text-muted)]"
                    }`}
                    aria-label={`Go to ${v.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
