"use client";

import React from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { ArrowUpRight } from "lucide-react";

export function MaterialExplorer() {
  const {
    activeMaterial,
    setActiveMaterialById,
    setHoveredMaterialById,
  } = useMaterialTheme();

  return (
    <section
      id="materials"
      className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto w-full bg-[var(--bg-primary)] transition-colors duration-700"
    >
      {/* Editorial Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
            <span>01 / MATERIAL SELECTOR</span>
            <div className="w-8 h-[1px] bg-[var(--accent)]" />
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
            FIND YOUR <br />
            <span className="italic font-normal">STONE.</span>
          </h2>
        </div>

        <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase leading-relaxed">
          SELECT A MATERIAL TO TRANSFORM THE SHOWROOM ENVIRONMENT. OBSERVE REAL SLAB TEXTURES AND PRACTICAL RESIDENTIAL APPLICATIONS.
        </div>
      </div>

      {/* Huge Visual Objects Display for the 3 Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {MATERIALS.map((mat) => {
          const isActive = activeMaterial.id === mat.id;

          return (
            <div
              key={mat.id}
              onClick={() => setActiveMaterialById(mat.id)}
              onMouseEnter={() => setHoveredMaterialById(mat.id)}
              onMouseLeave={() => setHoveredMaterialById(null)}
              className={`group relative flex flex-col justify-between p-6 sm:p-8 border transition-all duration-700 cursor-pointer overflow-hidden shadow-[var(--slab-shadow)] ${
                isActive
                  ? "border-[var(--accent)] bg-[var(--bg-surface)] ring-1 ring-[var(--accent)]"
                  : "border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent)]"
              }`}
            >
              {/* Top Index & Active Indicator */}
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-6 z-10">
                <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                  CATEGORY {mat.number}
                </span>
                {isActive ? (
                  <span className="px-2 py-0.5 bg-[var(--accent)] text-white text-[9px] font-semibold uppercase">
                    ACTIVE ATMOSPHERE
                  </span>
                ) : (
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] flex items-center space-x-1">
                    <span>SELECT</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </div>

              {/* Large Vertical Slab Object */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-900 border border-[var(--border-subtle)] my-4">
                <Image
                  src={mat.slabImage}
                  alt={`${mat.name} Slab`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Subtitle overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-[9px] font-mono tracking-widest uppercase flex justify-between items-center bg-black/60 backdrop-blur-md px-2.5 py-1">
                  <span>{mat.descriptor.split("/")[0]}</span>
                  <span>VIEW SLABS</span>
                </div>
              </div>

              {/* Material Title & Restrained Editorial Copy */}
              <div className="mt-4 z-10">
                <h3 className="font-serif-luxury text-3xl sm:text-4xl uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {mat.name}
                </h3>
                <p className="mt-2 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                  {mat.narrative}
                </p>
              </div>

              {/* Bottom Quick Spec Bar */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)]">
                <span>{mat.products.length} POPULAR VARIETIES</span>
                <span className="text-[var(--accent)]">IN STOCK</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
