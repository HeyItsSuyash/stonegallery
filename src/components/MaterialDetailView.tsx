"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MaterialCategory } from "@/data/materials";
import { MaterialThemeProvider } from "@/context/MaterialThemeContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MessageSquare, Compass, ShieldCheck } from "lucide-react";

export function MaterialDetailView({ material }: { material: MaterialCategory }) {
  return (
    <MaterialThemeProvider>
      <div
        className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-700"
        data-material={material.id}
      >
        <Navigation />

        {/* Hero Section for Material */}
        <section className="relative min-h-[85svh] w-full flex flex-col justify-between overflow-hidden bg-black text-white">
          <Image
            src={material.heroImage}
            alt={material.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-85 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

          {/* Top back breadcrumb */}
          <div className="relative z-10 pt-32 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-stone-300 hover:text-white uppercase transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO MAIN SHOWROOM</span>
            </Link>
            <span className="text-[10px] font-mono tracking-widest uppercase text-stone-400">
              CATEGORY {material.number} / 03
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

          {/* Bottom Info Bar */}
          <div className="relative z-10 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/20 pt-4 text-xs font-mono text-stone-300">
            <div>SHOWROOM YARD: KAMTA · AYODHYA ROAD, LUCKNOW</div>
            <div className="text-[10px] uppercase tracking-widest text-stone-400">
              PHYSICAL SLABS AVAILABLE FOR INSPECTION
            </div>
          </div>
        </section>

        {/* Narrative & Applications Section */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>MATERIAL PROFILE</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl uppercase text-[var(--text-primary)]">
            {material.tagline}
          </h2>
          <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] font-light leading-relaxed">
            {material.narrative}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {material.applications.map((app, i) => (
              <div key={i} className="p-5 border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] block mb-1">
                  APPLICATION 0{i + 1}
                </span>
                <h4 className="font-serif-luxury text-xl text-[var(--text-primary)]">
                  {app.title}
                </h4>
                <p className="mt-2 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Varieties & Products in Stock */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-color)]">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] block mb-1">
              CURRENT VARIETIES IN STOCK
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-5xl uppercase text-[var(--text-primary)]">
              {material.name} Varieties at Stone Gallery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {material.products.map((prod) => (
              <div
                key={prod.id}
                className="border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 flex flex-col justify-between shadow-[var(--slab-shadow)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black mb-5">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 text-white text-[9px] font-mono uppercase">
                    {prod.finish}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif-luxury text-2xl text-[var(--text-primary)]">
                    {prod.name}
                  </h4>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-1 uppercase">
                    Best for: {prod.bestFor}
                  </p>
                  <p className="mt-3 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[9px] font-mono text-emerald-600 flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>LUCKNOW SHOWROOM</span>
                  </span>
                  <a
                    href={`https://wa.me/919999999999?text=Hi,%20I%20found%20${encodeURIComponent(
                      prod.name
                    )}%20on%20your%20website%20and%20would%20like%20to%20know%20more%20about%20availability%20and%20pricing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase text-[var(--text-primary)] hover:text-emerald-600 font-semibold"
                  >
                    WHATSAPP ENQUIRY →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </MaterialThemeProvider>
  );
}
