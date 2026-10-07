"use client";

import React from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";

export function BrandStatement() {
  const { activeMaterial } = useMaterialTheme();

  return (
    <section className="py-28 md:py-44 px-6 md:px-12 max-w-7xl mx-auto w-full bg-[var(--bg-primary)] transition-colors duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Editorial Heading Column */}
        <div className="lg:col-span-7">
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-6">
            <span>01 / EDITORIAL MANIFESTO</span>
            <div className="w-8 h-[1px] bg-[var(--accent)]" />
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[var(--text-primary)] font-light uppercase tracking-tight">
            STONE <br />
            IS NEVER <br />
            <span className="italic font-normal">JUST STONE.</span>
          </h2>

          <div className="mt-10 max-w-xl">
            <p className="font-serif-luxury text-2xl md:text-3xl text-[var(--text-secondary)] italic leading-relaxed">
              &ldquo;Every slab carries a pattern no one else can reproduce.&rdquo;
            </p>

            <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light">
              Beneath the surface of every block lies hundreds of millions of years of geologic pressure. 
              The mineral veining, crystalline fractures, and natural color shifts are not imperfections—they are 
              the earth&apos;s indelible handwriting. In a world saturated with synthetic imitations and repeated 
              digital prints, genuine stone remains the single truly unique material in modern architecture.
            </p>

            <div className="mt-10 pt-8 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
              <span>NATURAL VARIATION</span>
              <span>·</span>
              <span>UNREPEATABLE ARTISTRY</span>
              <span>·</span>
              <span>GEOLOGIC PERMANENCE</span>
            </div>
          </div>
        </div>

        {/* Large Supporting Editorial Photograph */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--border-color)] shadow-[var(--slab-shadow)]">
            <Image
              src={activeMaterial.macroImage}
              alt="Natural Stone Texture Detail"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Fine architectural metadata label */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 text-white text-[9px] font-mono tracking-widest uppercase flex justify-between items-center">
              <span>{activeMaterial.name} / SLAB DETAIL</span>
              <span>ORIGIN VERIFIED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
