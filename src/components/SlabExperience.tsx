"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ZoomIn, Check, Sparkles, Layers, Sliders, ShieldCheck } from "lucide-react";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
  tag: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "spot-1",
    x: 32,
    y: 38,
    title: "Continuous Mineral Crystal Structure",
    description:
      "Interlocking igneous quartz and feldspar grain. Inspected at our Lucknow yard for zero hairline cracks or hollow seams.",
    tag: "CALIBRATED DENSITY",
  },
  {
    id: "spot-2",
    x: 68,
    y: 52,
    title: "Uniform Mirror Polish & Reflection",
    description:
      "Automated multi-head resin polishing produces high reflectivity that brightens residential kitchens and foyers.",
    tag: "SURFACE LUSTER",
  },
  {
    id: "spot-3",
    x: 48,
    y: 78,
    title: "18mm Calibrated Slab Thickness",
    description:
      "Precisely gauge-calibrated to 18mm thickness so countertops and flooring lay flat with minimal adhesive mortar bed.",
    tag: "TRUE THICKNESS",
  },
];

const FINISHES = [
  { id: "polished", name: "Mirror Polish", desc: "Reflective, liquid glass shine for countertops & halls" },
  { id: "leathered", name: "River Leather", desc: "Tactile undulating matte with rich velvety texture" },
  { id: "honed", name: "Honed Matte", desc: "Soft non-reflective satin touch, slip-resistant" },
  { id: "fluted", name: "Fluted 3D", desc: "Linear architectural fluting for reception desks & bars" },
];

export function SlabExperience() {
  const { activeMaterial } = useMaterialTheme();
  const [selectedFinish, setSelectedFinish] = useState("polished");
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -120;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -120;
    setPanOffset({ x, y });
  };

  return (
    <section
      id="slab-inspector"
      className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>03 / INTERACTIVE SLAB INSPECTOR</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              MEET THE <br />
              <span className="italic font-normal">REAL SLAB.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif-luxury text-2xl text-[var(--text-secondary)] italic">
              &ldquo;Inspect whole slabs before cutting.&rdquo;
            </p>
            <p className="mt-2 text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
              CLICK HOTSPOTS TO INSPECT GRAIN DENSITY, VEIN CONTINUITY, AND SURFACE FINISHES.
            </p>
          </div>
        </div>

        {/* The Inspector Workstation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Slab Viewport */}
          <div
            className="lg:col-span-8 relative aspect-[16/10] w-full overflow-hidden border border-[var(--border-color)] bg-stone-950 shadow-[var(--slab-shadow)]"
            onMouseMove={handleMouseMove}
          >
            {/* The Slab Image */}
            <div
              className={`w-full h-full relative transition-transform duration-500 ease-out ${
                isZoomed ? "scale-150 cursor-move" : "scale-100"
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

            {/* Controls Bar on Top Right */}
            <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase flex items-center space-x-1.5 hover:bg-white hover:text-black transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>{isZoomed ? "RESET ZOOM" : "2× ZOOM LOUPE"}</span>
              </button>
            </div>

            {/* Slab Ruler / Dimensional Marks */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-[10px] font-mono tracking-widest pointer-events-none">
              <span className="bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                WIDTH: ~1950 MM
              </span>
              <span className="bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                CALIBRATED 18MM THICKNESS
              </span>
              <span className="bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/20">
                HEIGHT: ~3100 MM
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
                AVAILABLE SLAB FINISHES IN SHOWROOM
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
                  SHOWROOM YARD LOT STATUS
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] block mt-1">
                  Full Lots Available at Ayodhya Road Yard
                </span>
                <span className="text-xs text-[var(--text-secondary)] block mt-1 font-light">
                  Direct inspection under natural daylight with water splash preview on site.
                </span>
              </div>
              <a
                href={`https://wa.me/917897931966?text=${encodeURIComponent(
                  `Hello Stone Gallery, I am interested in inspecting the ${activeMaterial.name} slab lot shown on your website.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors font-semibold"
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
