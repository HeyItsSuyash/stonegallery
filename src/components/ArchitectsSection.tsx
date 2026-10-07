"use client";

import React from "react";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { Compass, Box, Layers, Sparkles, ArrowUpRight } from "lucide-react";

export function ArchitectsSection() {
  const { setCursor, resetCursor } = useMaterialTheme();

  const services = [
    {
      title: "Hand-Curated Sample Boxes",
      tag: "PHYSICAL SAMPLES",
      desc: "Delivered directly to your architectural studio in Lucknow. 150×150mm calibrated stone tiles with polished, honed, and leathered finishes.",
    },
    {
      title: "Batch Dry-Lay & Inspection",
      tag: "PRE-INSTALLATION",
      desc: "Lay out your entire bookmatched pattern on our showroom floor before cutting. Verify vein alignments with your client under calibrated daylight.",
    },
    {
      title: "High-Resolution 3D Seamless Maps",
      tag: "DIGITAL ASSETS",
      desc: "4K seamless diffuse, bump, and normal maps of our actual yard slabs for your SketchUp, 3ds Max, and Lumion architectural renders.",
    },
    {
      title: "Custom Quarry Block Sourcing",
      tag: "PROJECT SOURCING",
      desc: "Direct block indenting from Carrara, Kishangarh, Makrana, and Tivoli for large-scale institutional, hospitality, and residential projects.",
    },
  ];

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[var(--bg-primary)] border-b border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>FOR ARCHITECTS & INTERIOR DESIGNERS</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.95]">
              FOR PEOPLE <br />
              <span className="italic font-normal">WHO DESIGN</span> <br />
              SPACES.
            </h2>

            <p className="mt-6 text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              We treat stone not as a construction commodity, but as a fine artistic medium. We work hand-in-hand with 
              leading architects and designers across Uttar Pradesh to ensure your vision translates from blueprint 
              to stone with zero compromise.
            </p>

            <a
              href="https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20an%20architect/designer%20and%20would%20like%20to%20request%20a%20sample%20box%20and%20spec%20catalogue."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center space-x-2 px-6 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors"
              onMouseEnter={() => setCursor("explore", "PARTNER")}
              onMouseLeave={resetCursor}
            >
              <span>REGISTER YOUR PRACTICE →</span>
            </a>
          </div>

          {/* Right Column: Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((item, i) => (
              <div
                key={i}
                className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--accent)] block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
