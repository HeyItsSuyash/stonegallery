"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { Sparkles, Maximize2, Move, Info, Check } from "lucide-react";

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  tag: string;
  description: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "primary-vein",
    x: 45,
    y: 28,
    title: "Continuous Mineral Feathering",
    tag: "VEIN DIRECTION",
    description:
      "Tectonic metamorphic currents create this diagonal vein flow. In Italian quarries, block cuts are aligned to preserve this sweeping continuity.",
  },
  {
    id: "crystal-matrix",
    x: 68,
    y: 52,
    title: "Crystalline Density",
    tag: "CALCITE MATRIX",
    description:
      "Interlocking quartz and calcium crystals reflect ambient illumination with an ethereal subsurface glow.",
  },
  {
    id: "finish-luster",
    x: 32,
    y: 75,
    title: "Depth of Luster",
    tag: "FINISH SURFACE",
    description:
      "Multi-stage diamond abrasive polishing enhances contrast while preserving natural micro-pores and organic tactility.",
  },
  {
    id: "variation",
    x: 58,
    y: 88,
    title: "Subtle Warm Clouding",
    tag: "NATURAL VARIATION",
    description:
      "Sedimentary iron oxide deposits produce subtle champagne-taupe halos, guaranteeing this slab cannot be duplicated by any factory.",
  },
];

const FINISHES = [
  { id: "polished", name: "High Polish", desc: "Mirror gloss reflecting architecture" },
  { id: "honed", name: "Honed Velvet", desc: "Smooth silky matte without glare" },
  { id: "leathered", name: "Leathered Antique", desc: "Tactile relief following vein curves" },
  { id: "fluted", name: "Architectural Fluted", desc: "Linear sculpted 3D ribbing" },
];

export function SlabExperience() {
  const { activeMaterial, setCursor, resetCursor } = useMaterialTheme();
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0].id);
  const [isZoomed, setIsZoomed] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  const slab = activeMaterial.slabs[0] || {
    name: "Statuario Royal",
    dimensions: "3200 × 1950 × 20 mm",
    origin: "Carrara, Italy",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -120;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -120;
    setPanOffset({ x, y });
  };

  return (
    <section
      id="slab-experience"
      className="py-28 md:py-40 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WOW 04 / FULL SLAB INSPECTION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase">
              MEET <br />
              <span className="italic font-normal">THE SLAB.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase">
              <span className="text-[var(--text-primary)] block font-bold text-sm">
                {slab.dimensions}
              </span>
              <span>SLAB SPECIFICATION · 20MM THICKNESS</span>
            </div>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="px-5 py-2.5 border border-[var(--border-color)] text-xs font-mono tracking-widest uppercase text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors flex items-center space-x-2"
              onMouseEnter={() => setCursor("explore", isZoomed ? "RESET" : "ZOOM")}
              onMouseLeave={resetCursor}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isZoomed ? "RESET VIEW" : "INSPECT DETAILS"}</span>
            </button>
          </div>
        </div>

        {/* The Interactive Slab Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Huge Vertical Slab Explorer */}
          <div
            className="lg:col-span-8 relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden border border-[var(--border-color)] shadow-[var(--slab-shadow)] bg-stone-900 cursor-crosshair group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursor("drag", "INSPECT SLAB")}
            onMouseLeave={resetCursor}
          >
            {/* The Slab Image */}
            <div
              className={`w-full h-full relative transition-transform duration-500 ease-out ${
                isZoomed ? "scale-150 cursor-grab" : "scale-100"
              }`}
              style={
                isZoomed
                  ? {
                      transform: `scale(1.6) translate3d(${panOffset.x}px, ${panOffset.y}px, 0)`,
                    }
                  : undefined
              }
            >
              <Image
                src={activeMaterial.slabImage}
                alt={`${activeMaterial.name} Full Slab`}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className={`object-cover transition-all duration-700 ${
                  selectedFinish === "honed"
                    ? "contrast-95 brightness-95"
                    : selectedFinish === "leathered"
                    ? "contrast-115 brightness-90"
                    : selectedFinish === "fluted"
                    ? "contrast-110"
                    : "contrast-105"
                }`}
              />

              {/* Finish texture overlay simulation */}
              {selectedFinish === "fluted" && (
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(0,0,0,0.18)_10px,rgba(0,0,0,0.18)_12px)] pointer-events-none" />
              )}
            </div>

            {/* Interactive Hotspot Pins (only when not zoomed to avoid obscuring) */}
            {!isZoomed &&
              HOTSPOTS.map((spot) => {
                const isSelected = activeHotspot?.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-20 focus:outline-none"
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    aria-label={spot.title}
                  >
                    <span
                      className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                        isSelected
                          ? "bg-[var(--accent)] border-white text-white scale-110 shadow-lg"
                          : "bg-black/60 backdrop-blur-md border-white/60 text-white hover:scale-105"
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-ping absolute opacity-50" />
                      <span className="w-2 h-2 rounded-full bg-white" />
                    </span>
                    <span className="hidden sm:inline-block absolute left-10 top-1/2 -translate-y-1/2 bg-black/85 text-white px-2 py-1 text-[9px] font-mono tracking-widest whitespace-nowrap uppercase opacity-0 group-hover/pin:opacity-100 transition-opacity">
                      {spot.tag}
                    </span>
                  </button>
                );
              })}

            {/* Slab Ruler / Dimensional Marks */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-[10px] font-mono tracking-widest pointer-events-none">
              <span className="bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                W: 1950 MM
              </span>
              <span className="bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                BOOKMATCHED LOT #LKO-SG-802
              </span>
              <span className="bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                H: 3200 MM
              </span>
            </div>
          </div>

          {/* Side Controls & Annotation Panel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Active Hotspot Inspector Details */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
                <span>INSPECTION PIN</span>
                <span>{activeHotspot?.tag || "SELECTED FEATURE"}</span>
              </div>
              <h3 className="font-serif-luxury text-2xl text-[var(--text-primary)] mb-3">
                {activeHotspot?.title || "Explore Material Characteristics"}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
                {activeHotspot?.description ||
                  "Click any glowing inspection pin on the slab to examine geological crystallization, vein continuity, and mineral luster."}
              </p>
            </div>

            {/* Tactile Surface Finish Switcher */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)]">
              <div className="text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4">
                AVAILABLE SLAB FINISHES
              </div>
              <div className="grid grid-cols-2 gap-3">
                {FINISHES.map((fin) => {
                  const isCur = selectedFinish === fin.id;
                  return (
                    <button
                      key={fin.id}
                      onClick={() => setSelectedFinish(fin.id)}
                      className={`p-3 text-left border text-xs transition-all ${
                        isCur
                          ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-sm"
                          : "border-[var(--border-subtle)] hover:border-[var(--border-color)] opacity-75"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif-luxury text-sm text-[var(--text-primary)]">
                          {fin.name}
                        </span>
                        {isCur && <Check className="w-3 h-3 text-[var(--accent)]" />}
                      </div>
                      <span className="text-[9px] text-[var(--text-muted)] block mt-1 leading-tight">
                        {fin.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slab Reserve / WhatsApp Inquire Action */}
            <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--text-muted)] block">
                  SHOWROOM LOT STATUS
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] block mt-1">
                  18 Slabs Available in Ayodhya Road Yard
                </span>
                <span className="text-xs text-[var(--text-secondary)] block mt-1">
                  Dry-lay layout viewable in person under calibrated lighting.
                </span>
              </div>
              <a
                href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20interested%20in%20inspecting%20the%20${encodeURIComponent(
                  activeMaterial.name
                )}%20slab%20lot%20shown%20on%20your%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                REQUEST LOT HOLD ON WHATSAPP →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
