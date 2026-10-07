"use client";

import React from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";

export function BehindTheMaterial() {
  const { setCursor, resetCursor } = useMaterialTheme();

  return (
    <section
      id="studio"
      className="py-28 md:py-44 px-6 md:px-12 bg-[var(--bg-primary)] border-b border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--border-color)] shadow-[var(--slab-shadow)]">
              <Image
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85"
                alt="Stone Gallery Material Inspection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover filter contrast-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 text-white text-[9px] font-mono tracking-widest uppercase flex justify-between">
                <span>QUARRY SELECTION PROCESS</span>
                <span>VERIFIED INSPECTION</span>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
              <span>03 / STUDIO ETHOS</span>
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.95]">
              BEHIND <br />
              <span className="italic font-normal">THE MATERIAL.</span>
            </h2>

            <div className="mt-8 space-y-5 text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              <p>
                Stone Gallery began with a single conviction: standard marble yards treat stone like bulk construction aggregate. 
                We believe that every slab of stone extracted from the earth is an irreplaceable geological artifact.
              </p>
              <p>
                Our curators personally travel to mountain quarries across Carrara, Verona, Rajasthan, and Tivoli. 
                Out of hundreds of raw extracted blocks, only those exhibiting uninterrupted vein harmony, structural crystalline density, 
                and zero unnatural chemical fills are selected for our Lucknow gallery.
              </p>
              <p>
                When a client or architect walks our Ayodhya Road showroom, they are not handed a catalogue. 
                We unfold full slabs, pour clean water across the raw surface to preview deep polishing luster, 
                and dry-lay mirror sets in daylight so you know exactly how the stone will live inside your home.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono">
              <div>
                <span className="text-[var(--accent)] block text-base font-semibold">ZERO COMPROMISE</span>
                <span className="text-[var(--text-muted)] text-[10px] uppercase">Direct Quarry Selection</span>
              </div>
              <div>
                <span className="text-[var(--accent)] block text-base font-semibold">FULL DRY-LAY</span>
                <span className="text-[var(--text-muted)] text-[10px] uppercase">Floor Verification</span>
              </div>
              <div>
                <span className="text-[var(--accent)] block text-base font-semibold">LUCKNOW BASED</span>
                <span className="text-[var(--text-muted)] text-[10px] uppercase">Ayodhya Road Yard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
