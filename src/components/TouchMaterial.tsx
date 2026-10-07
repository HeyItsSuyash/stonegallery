"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { Sparkles, Eye, ArrowRight } from "lucide-react";

export function TouchMaterial() {
  const { activeMaterial } = useMaterialTheme();
  const [viewMode, setViewMode] = useState<"macro" | "slab">("macro");
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursorPos({ x, y });
  };

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 / TACTILE INTERACTION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              TOUCH THE <br />
              <span className="italic font-normal">MATERIAL.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase leading-relaxed">
            OBSERVE HOW SUBTERRANEAN GRAIN AND METAMORPHIC FISSURES EVOLVE FROM MICROSCOPIC TEXTURE INTO FULL ARCHITECTURAL SLABS.
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-3 mb-6">
          <button
            onClick={() => setViewMode("macro")}
            className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border transition-all ${
              viewMode === "macro"
                ? "border-[var(--accent)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold"
                : "border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
            }`}
          >
            01 / MICROSCOPIC GRAIN & VEINS
          </button>
          <button
            onClick={() => setViewMode("slab")}
            className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border transition-all ${
              viewMode === "slab"
                ? "border-[var(--accent)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold"
                : "border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
            }`}
          >
            02 / THE FULL SLAB
          </button>
        </div>

        {/* The Tactile Surface Stage */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden border border-[var(--border-color)] bg-black shadow-[var(--slab-shadow)] group"
          onMouseMove={handleMouseMove}
        >
          {/* Active Image */}
          <Image
            key={viewMode}
            src={viewMode === "macro" ? activeMaterial.macroImage : activeMaterial.slabImage}
            alt={viewMode === "macro" ? "Stone Macro Detail" : "Full Stone Slab"}
            fill
            sizes="100vw"
            className={`object-cover transition-all duration-1000 ease-out filter brightness-95 ${
              viewMode === "macro" ? "scale-110" : "scale-100"
            }`}
          />

          {/* Interactive Light Glint Effect moving with Cursor on Macro view */}
          {viewMode === "macro" && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60 mix-blend-soft-light"
              style={{
                background: `radial-gradient(circle 350px at ${cursorPos.x}% ${cursorPos.y}%, rgba(255,255,255,0.4), transparent 70%)`,
              }}
            />
          )}

          {/* Bottom HUD metadata */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white z-10 pointer-events-none">
            <div className="bg-black/70 backdrop-blur-md px-4 py-2 border border-white/20">
              <span className="text-[9px] font-mono tracking-widest text-[var(--accent)] uppercase block">
                {activeMaterial.name} · {viewMode === "macro" ? "EXTREME MACRO TEXTURE" : "NATURAL SLAB"}
              </span>
              <span className="font-serif-luxury text-xl sm:text-2xl uppercase">
                {viewMode === "macro" ? "Fissures, Quartz & Mineral Grains" : "Full Extraction Slab"}
              </span>
            </div>

            <div className="bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20 text-[10px] font-mono tracking-widest uppercase">
              TEXTURE → MATERIAL → SLAB → SPACE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
