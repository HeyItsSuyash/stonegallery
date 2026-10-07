"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

interface GallerySlab {
  id: string;
  name: string;
  origin: string;
  category: string;
  dimensions: string;
  finish: string;
  bestFor: string;
  image: string;
}

const RUNWAY_SLABS: GallerySlab[] = [
  {
    id: "slab-1",
    name: "Rajasthan Z-Black Granite",
    origin: "Rajasthan, India",
    category: "Granite",
    dimensions: "3100 × 1950 × 18 mm",
    finish: "Mirror Polish",
    bestFor: "Kitchen Countertops & Door Chowkhats",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "slab-2",
    name: "Statuario Altissimo Marble",
    origin: "Carrara, Italy",
    category: "Italian Marble",
    dimensions: "3200 × 1950 × 20 mm",
    finish: "Bookmatched Polish",
    bestFor: "Living Room Floor & Feature Wall",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "slab-3",
    name: "Blue Pearl Granite",
    origin: "Larvik, Norway",
    category: "Granite",
    dimensions: "2900 × 1800 × 20 mm",
    finish: "High Gloss Polish",
    bestFor: "Luxury Island & Bathroom Vanity",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "slab-4",
    name: "Kota Blue-Green River Stone",
    origin: "Kota, Rajasthan",
    category: "Natural Stone",
    dimensions: "2400 × 1200 × 25 mm",
    finish: "River Washed",
    bestFor: "Verandah, Courtyard & Parking",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "slab-5",
    name: "Tan Brown Granite",
    origin: "Telangana, India",
    category: "Granite",
    dimensions: "3000 × 1850 × 18 mm",
    finish: "Polished / Flamed",
    bestFor: "Exterior Stairs & Boundary Thresholds",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
  },
];

export function HorizontalSlabGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <span>WALKING THE GALLERY RUNWAY</span>
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              CURATED SLAB <br />
              <span className="italic font-normal">SELECTIONS.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Runway */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
        >
          {RUNWAY_SLABS.map((slab) => (
            <div
              key={slab.id}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[420px] snap-start border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 shadow-[var(--slab-shadow)] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
                  <span>{slab.category}</span>
                  <span className="text-[var(--accent)] font-semibold">{slab.origin}</span>
                </div>

                {/* Slab Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--border-subtle)] bg-stone-900 mb-5">
                  <Image
                    src={slab.image}
                    alt={slab.name}
                    fill
                    sizes="(max-width: 768px) 300px, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-md px-2.5 py-1 text-white text-[9px] font-mono tracking-wider uppercase">
                    {slab.finish}
                  </div>
                </div>

                <h3 className="font-serif-luxury text-2xl text-[var(--text-primary)] uppercase">
                  {slab.name}
                </h3>

                <p className="mt-2 text-xs text-[var(--text-secondary)] font-light">
                  <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase block mb-0.5">
                    IDEAL APPLICATION:
                  </span>
                  {slab.bestFor}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                  {slab.dimensions}
                </span>

                <a
                  href={`https://wa.me/917897931966?text=${encodeURIComponent(
                    `Hi Stone Gallery, I would like to inquire about ${slab.name} shown on your gallery runway.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs font-mono tracking-wider text-[var(--accent)] uppercase font-medium hover:underline"
                >
                  <span>INQUIRE</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
