"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { ArrowLeft, ArrowRight, Compass, ShieldCheck } from "lucide-react";

export function HorizontalSlabGallery() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Flatten all curated signature slabs
  const allCuratedSlabs = MATERIALS.flatMap((m) =>
    m.slabs.map((s) => ({
      ...s,
      categoryName: m.name,
      categoryNumber: m.number,
      materialId: m.id,
    }))
  );

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scrollByAmount = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 md:py-40 bg-[var(--bg-primary)] border-b border-[var(--border-color)] overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>WOW 05 / PHYSICAL GALLERY WALK</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase">
            WALKING <br />
            <span className="italic font-normal">THE GALLERY.</span>
          </h2>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center space-x-4">
          <div className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase hidden sm:block">
            HORIZONTAL SLAB RUNWAY
          </div>
          <button
            onClick={() => scrollByAmount(-450)}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all ${
              canScrollLeft
                ? "hover:border-[var(--text-primary)] text-[var(--text-primary)] cursor-pointer"
                : "opacity-30 cursor-not-allowed text-[var(--text-muted)]"
            }`}
            aria-label="Previous slabs"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollByAmount(450)}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all ${
              canScrollRight
                ? "hover:border-[var(--text-primary)] text-[var(--text-primary)] cursor-pointer"
                : "opacity-30 cursor-not-allowed text-[var(--text-muted)]"
            }`}
            aria-label="Next slabs"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Slab Runway */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex space-x-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setCursor("drag", "DRAG SLABS")}
        onMouseLeave={resetCursor}
      >
        {allCuratedSlabs.map((slab, index) => (
          <div
            key={`${slab.id}-${index}`}
            className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] group flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 shadow-[var(--slab-shadow)] transition-transform duration-500 hover:-translate-y-2"
          >
            {/* Top Slab Details */}
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
              <span>
                {slab.categoryNumber} / {slab.categoryName}
              </span>
              <span className="text-[var(--accent)]">{slab.origin}</span>
            </div>

            {/* Vertical Slab Image Showcase */}
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-black border border-[var(--border-subtle)] my-2">
              <Image
                src={slab.image}
                alt={slab.name}
                fill
                sizes="(max-width: 768px) 300px, 420px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Dimensional overlay badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono tracking-widest text-white/90">
                <span className="bg-black/60 px-2 py-0.5 backdrop-blur-md">
                  {slab.dimensions}
                </span>
                <span className="bg-black/60 px-2 py-0.5 backdrop-blur-md">
                  {slab.finish}
                </span>
              </div>
            </div>

            {/* Slab Information & Character */}
            <div className="mt-4">
              <h3 className="font-serif-luxury text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {slab.name}
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2 font-light leading-relaxed">
                {slab.character}
              </p>
            </div>

            {/* Inquire Action */}
            <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-[9px] font-mono tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3 h-3" />
                <span>LOT INSPECTED</span>
              </span>
              <a
                href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20inquiring%20about%20the%20${encodeURIComponent(
                  slab.name
                )}%20slab.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                HOLD LOT →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
