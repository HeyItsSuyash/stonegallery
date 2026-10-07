"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MaterialCategory } from "@/data/materials";
import { MaterialThemeProvider } from "@/context/MaterialThemeContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SlabExperience } from "@/components/SlabExperience";
import { MacroGallery } from "@/components/MacroGallery";
import { ArrowLeft, ArrowUpRight, MessageSquare, Compass, ShieldCheck } from "lucide-react";

export function MaterialDetailView({ material }: { material: MaterialCategory }) {
  return (
    <MaterialThemeProvider>
      <div
        className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-700"
        data-material={material.id}
      >
        <CustomCursor />
        <Navigation />

        {/* Hero Section for Material World */}
        <section className="relative min-h-[90svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white">
          <Image
            src={material.heroImage}
            alt={material.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80 filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

          {/* Top back breadcrumb */}
          <div className="relative z-10 pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-stone-300 hover:text-white uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO GALLERY</span>
            </Link>
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
              MATERIAL WORLD {material.number} / 06
            </span>
          </div>

          {/* Material Title */}
          <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full my-auto">
            <div className="max-w-3xl">
              <span className="text-xs font-mono tracking-[0.4em] uppercase text-stone-300 block mb-3">
                {material.descriptor}
              </span>
              <h1 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl uppercase tracking-tight text-white leading-none">
                {material.name}
              </h1>
              <p className="mt-6 text-stone-200 text-lg md:text-xl font-serif-luxury italic leading-relaxed max-w-xl">
                &ldquo;{material.atmosphereQuote}&rdquo;
              </p>
            </div>
          </div>

          {/* Quick specs bar */}
          <div className="relative z-10 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono border-t border-white/20 pt-6">
            <div>
              <span className="text-stone-400 block text-[9px] uppercase">WATER ABSORPTION</span>
              <span className="text-white">{material.specs.porosity}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[9px] uppercase">MOHS HARDNESS</span>
              <span className="text-white">{material.specs.hardness}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[9px] uppercase">IDEAL APPLICATION</span>
              <span className="text-white">{material.specs.idealSpaces[0]}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[9px] uppercase">INSPECTION YARD</span>
              <span className="text-white">Ayodhya Road, Lucknow</span>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>GEOLOGICAL PROFILE</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl uppercase text-[var(--text-primary)]">
            {material.tagline}
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            {material.narrative}
          </p>
        </section>

        {/* Dedicated Signature Slabs */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-color)]">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] block mb-1">
              CURRENT LOTS IN STOCK
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-5xl uppercase text-[var(--text-primary)]">
              Signature Slabs of {material.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {material.slabs.map((slab) => (
              <div
                key={slab.id}
                className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 flex flex-col justify-between shadow-[var(--slab-shadow)]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black mb-6">
                  <Image
                    src={slab.image}
                    alt={slab.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 px-2 py-1 text-white text-[9px] font-mono uppercase">
                    {slab.origin}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif-luxury text-2xl text-[var(--text-primary)]">
                    {slab.name}
                  </h4>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-1 uppercase">
                    {slab.dimensions} · {slab.finish}
                  </p>
                  <p className="mt-3 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {slab.character}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[9px] font-mono text-emerald-600 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>LUCKNOW YARD</span>
                  </span>
                  <a
                    href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20inquiring%20about%20${encodeURIComponent(
                      slab.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase text-[var(--text-primary)] hover:text-[var(--accent)]"
                  >
                    INQUIRE SLAB →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded Interactive Slab Experience */}
        <SlabExperience />

        {/* Embedded Macro Closer Inspection */}
        <MacroGallery />

        <Footer />
      </div>
    </MaterialThemeProvider>
  );
}
