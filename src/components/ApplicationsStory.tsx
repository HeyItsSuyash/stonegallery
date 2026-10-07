"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, ShieldCheck, Flame, Bug, Droplets, Sparkles } from "lucide-react";

interface ApplicationItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  recommendedStone: string;
  whyThisStone: string;
  benefits: string[];
  image: string;
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "kitchen",
    number: "01",
    title: "CULINARY & KITCHEN COUNTERTOPS",
    subtitle: "Built for Daily Indian Cooking",
    tag: "HEAT & ACID IMMUNE",
    recommendedStone: "Rajasthan Black, Tan Brown, or Blue Pearl Granite (18mm - 20mm)",
    whyThisStone:
      "Granite does not react to turmeric, hot cooking oil, lemon juice, or pressure cookers placed straight off the burner. Non-porous mirror polish wipes clean effortlessly.",
    benefits: [
      "Zero burn marks or thermal shock cracks",
      "Impervious to turmeric (Haldi) and curry stains",
      "Diamond-polished edges with double bullnose or chamfer",
      "Scratch resistant against knives and steel utensils",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "chowkhats",
    number: "02",
    title: "GRANITE DOOR & WINDOW FRAMES",
    subtitle: "The Permanent Replacement for Wooden Frames",
    tag: "100% TERMITE PROOF",
    recommendedStone: "Rajasthan Black & Tan Brown Granite Solid Sections",
    whyThisStone:
      "Unlike wooden chowkhats that warp during Lucknow monsoons and attract termite damage within years, granite door frames are permanent, fireproof, water-resistant, and cost significantly less over time.",
    benefits: [
      "Zero termite or pest attack forever",
      "No seasonal swelling or door-jamming during humid rains",
      "Pre-grooved for door rebates, hinges, and tower bolts",
      "Retains high polish without need for repeated repainting",
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "flooring",
    number: "03",
    title: "RESIDENTIAL & VILLA FLOORING",
    subtitle: "Monumental Living Halls & Foyers",
    tag: "MIRROR LUSTER",
    recommendedStone: "Imported Italian Marble, Indian Makrana, or Large Vitrified Slabs",
    whyThisStone:
      "Seamless large slabs create continuous natural veining that expands room dimensions. Calcite crystals softly diffuse sunlight, providing a cool, welcoming ambiance.",
    benefits: [
      "Continuous bookmatched diamond pattern layouts",
      "High natural reflectivity that brightens indoor spaces",
      "Long-term value asset for Lucknow properties",
      "Can be re-polished every 10-15 years to look brand new",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "stairs",
    number: "04",
    title: "STAIRCASES, RISERS & SKIRTING",
    subtitle: "Safety, Non-Slip Grip & Heavy Footfall",
    tag: "HEAVY DUTY",
    recommendedStone: "Rajasthan Black Flamed/Polished, Tan Brown Granite, or Kota Stone",
    whyThisStone:
      "Stairs endure concentrated friction and point impact. Solid calibrated stone steps with anti-slip grooves provide lifelong safety and dignified elegance.",
    benefits: [
      "Precision machine bullnosed step fronts",
      "Optional double-groove anti-slip traction lines",
      "Full slab treads with matching seamless vertical risers",
      "Withstands decades of continuous footwear traffic",
    ],
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "exterior",
    number: "05",
    title: "EXTERIOR ELEVATION & DRIVEWAY PAVING",
    subtitle: "Weatherproof Modern Facades & Patios",
    tag: "WEATHERPROOF",
    recommendedStone: "Kota River Blue Stone, Jaisalmer Teak Sandstone, Flamed Granite",
    whyThisStone:
      "Exterior stone must survive relentless UP heat, heavy monsoon downpours, and freeze-thaw cycles without fading or chipping.",
    benefits: [
      "Zero color fading under extreme UV summer sunlight",
      "Naturally textured non-skid surface for car tyres in rain",
      "Pleasantly cool underfoot on verandahs and terraces",
      "Rich rustic textures that age gracefully like heritage architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
  },
];

export function ApplicationsStory() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const activeApp = APPLICATIONS[activeAppIndex];

  return (
    <section
      id="applications"
      className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <span>05 / REAL ARCHITECTURAL APPLICATIONS</span>
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              FROM SLAB <br />
              <span className="italic font-normal">TO YOUR SPACE.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase leading-relaxed">
            SEE HOW RAW SLABS ARE SPECIFIED, CUT, AND INSTALLED IN REAL LUCKNOW HOMES AND COMMERCIAL COMMISSIONS.
          </div>
        </div>

        {/* Application Navigation Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-4 mb-10 border-b border-[var(--border-subtle)]">
          {APPLICATIONS.map((app, idx) => {
            const isCur = idx === activeAppIndex;
            return (
              <button
                key={app.id}
                onClick={() => setActiveAppIndex(idx)}
                className={`px-5 py-3 text-xs font-mono tracking-widest uppercase transition-all whitespace-nowrap border ${
                  isCur
                    ? "border-[var(--accent)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm"
                    : "border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {app.number} · {app.title.split("&")[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Main Application Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto w-full overflow-hidden border border-[var(--border-color)] bg-stone-900 shadow-[var(--slab-shadow)]">
            <Image
              src={activeApp.image}
              alt={activeApp.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover filter brightness-95 contrast-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase">
              {activeApp.tag}
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase block mb-1">
                APPLICATION 0{activeAppIndex + 1}
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl uppercase">
                {activeApp.title}
              </h3>
              <p className="mt-1 text-xs text-stone-300 font-light max-w-lg">
                {activeApp.subtitle}
              </p>
            </div>
          </div>

          {/* Details & Benefits Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 sm:p-10 shadow-[var(--slab-shadow)]">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-2">
                RECOMMENDED STONE SPECIFICATION
              </div>
              <h4 className="font-serif-luxury text-2xl text-[var(--text-primary)] uppercase">
                {activeApp.recommendedStone}
              </h4>

              <div className="mt-5 p-4 border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <span className="text-[9px] font-mono tracking-widest text-[var(--text-muted)] uppercase block mb-1">
                  WHY THIS MATERIAL WORKS BEST:
                </span>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                  {activeApp.whyThisStone}
                </p>
              </div>

              {/* Key Benefits List */}
              <div className="mt-6 space-y-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] block">
                  PRACTICAL ADVANTAGES:
                </span>
                {activeApp.benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-[var(--text-secondary)]">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-light">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire on WhatsApp */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <a
                href={`https://wa.me/917897931966?text=${encodeURIComponent(
                  `Hi Stone Gallery, I am planning ${activeApp.title} in Lucknow and want to discuss slab availability and rates.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                <span>CONSULT FOR THIS APPLICATION ON WHATSAPP →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
