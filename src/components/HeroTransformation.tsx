"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ArrowRight, Layers, Eye, Maximize2 } from "lucide-react";

interface Stage {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  scaleFactor: string;
}

const STAGES: Stage[] = [
  {
    number: "01",
    name: "MACRO TEXTURE",
    subtitle: "Magnification: 20× Micro-Crystalline",
    description:
      "At extreme proximity, stone resembles a celestial mountain range. Calcite veins and quartz flecks reveal millions of years of subterranean heat and tectonic pressure.",
    scaleFactor: "scale-150",
  },
  {
    number: "02",
    name: "SURFACE & FINISH",
    subtitle: "Tactile Finish & Luster",
    description:
      "Stepping back, the interplay of light and texture emerges. Honed matte absorbs softness; mirror polish illuminates depth.",
    scaleFactor: "scale-125",
  },
  {
    number: "03",
    name: "THE FULL SLAB",
    subtitle: "3.2m × 1.9m Natural Monolith",
    description:
      "Extracted directly from the mountain quarry face. The continuous unbroken vein map spans an entire 60 sq.ft plane of unrepeatable natural art.",
    scaleFactor: "scale-100",
  },
  {
    number: "04",
    name: "ARCHITECTURAL SPACE",
    subtitle: "Built Living Application",
    description:
      "The slab becomes the space around us. Bookmatched living backdrops, monolithic waterfall islands, and sculptural vanities define contemporary luxury.",
    scaleFactor: "scale-100",
  },
];

export function HeroTransformation() {
  const { activeMaterial, setCursor, resetCursor } = useMaterialTheme();
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  const stage = STAGES[currentStageIndex];

  const getStageImage = () => {
    switch (currentStageIndex) {
      case 0:
        return activeMaterial.macroImage;
      case 1:
        return activeMaterial.heroImage;
      case 2:
        return activeMaterial.slabImage;
      case 3:
      default:
        return activeMaterial.applicationImage;
    }
  };

  return (
    <section
      id="transformation"
      className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>WOW 02 / PROGRESSIVE TRANSFORMATION</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[var(--text-primary)] font-light uppercase">
              EARTH TO <br />
              <span className="italic font-normal">ARCHITECTURE.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase leading-relaxed">
            OBSERVE HOW RAW GEOLOGY EVOLVES FROM MICROSCOPIC CRYSTALS INTO THE MONUMENTAL SPACES WE INHABIT.
          </div>
        </div>

        {/* Interactive Stage Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8">
          {STAGES.map((stg, idx) => {
            const isSelected = idx === currentStageIndex;
            return (
              <button
                key={stg.number}
                onClick={() => setCurrentStageIndex(idx)}
                onMouseEnter={() => setCursor("explore", stg.name)}
                onMouseLeave={resetCursor}
                className={`p-4 text-left border transition-all duration-300 ${
                  isSelected
                    ? "bg-[var(--bg-primary)] border-[var(--accent)] shadow-md"
                    : "bg-transparent border-[var(--border-subtle)] hover:border-[var(--border-color)] opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest mb-2">
                  <span className={isSelected ? "text-[var(--accent)] font-bold" : "text-[var(--text-muted)]"}>
                    STAGE {stg.number}
                  </span>
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />}
                </div>
                <div className="font-serif-luxury text-lg md:text-xl text-[var(--text-primary)] leading-tight">
                  {stg.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Cinematic Transformation Viewport */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-[var(--border-color)] shadow-[var(--slab-shadow)] bg-black">
          <Image
            key={`${activeMaterial.id}-${currentStageIndex}`}
            src={getStageImage()}
            alt={stage.name}
            fill
            sizes="100vw"
            className="object-cover transition-all duration-1000 ease-out animate-fadeIn filter brightness-95 contrast-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Stage HUD / Overlay Information */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white text-[10px] font-mono tracking-[0.25em] uppercase">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/20">
              {activeMaterial.name} · {stage.subtitle}
            </div>
            <div className="hidden sm:block bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/20">
              STAGE 0{currentStageIndex + 1} / 04
            </div>
          </div>

          {/* Bottom Stage Narrative */}
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase block mb-1">
                TRANSFORMATION STEP
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-4xl uppercase tracking-wide">
                {stage.name}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-stone-300 font-light max-w-xl leading-relaxed">
                {stage.description}
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  setCurrentStageIndex((prev) => (prev > 0 ? prev - 1 : 3))
                }
                className="px-4 py-2 border border-white/40 text-[10px] font-mono tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
              >
                PREV
              </button>
              <button
                onClick={() =>
                  setCurrentStageIndex((prev) => (prev < 3 ? prev + 1 : 0))
                }
                className="px-4 py-2 bg-white text-black text-[10px] font-mono tracking-widest uppercase hover:bg-stone-200 transition-colors flex items-center space-x-2"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
