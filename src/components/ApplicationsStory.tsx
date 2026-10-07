"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { ArrowUpRight, Compass, Shield } from "lucide-react";

interface ApplicationItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  materialsUsed: string;
  image: string;
  description: string;
  specification: string;
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "kitchens",
    number: "01",
    name: "KITCHEN ISLANDS & WORKTOPS",
    subtitle: "Monolithic Culinary Art",
    materialsUsed: "Granite · Quartz · Bookmatched Marble",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
    description:
      "A seamless 14-foot waterfall kitchen island anchors the architecture of the home. Resistant to culinary acids and high thermal shock while preserving dramatic tactile veining.",
    specification: "Mitred 60mm Apron · Undermount Sink Cutout · Invisible Seams",
  },
  {
    id: "bathrooms",
    number: "02",
    name: "SANCTUARY BATHROOMS & SPAS",
    subtitle: "Monastic Water Retreats",
    materialsUsed: "Statuario · Calacatta · Silver Travertine",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
    description:
      "Floor-to-ceiling bookmatched marble and textured travertine transform daily rituals into contemplative tranquility. Calibrated slip-resistant honed finishes provide safe footing.",
    specification: "Bookmatched Shower Walls · Floating Marble Basin · Zero-Threshold Floor",
  },
  {
    id: "staircases",
    number: "03",
    name: "CANTILEVERED STAIRCASES",
    subtitle: "Ascending Kinetic Sculptures",
    materialsUsed: "Basalt · Pietra Grey · High-Density Granite",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description:
      "Floating stone steps projecting from structural concrete walls. Solid stone treads shaped with shark-nose edges and concealed LED channels.",
    specification: "30mm Solid Tread with Steel Anchor Channel · Non-Slip Carved Grooves",
  },
  {
    id: "feature-walls",
    number: "04",
    name: "BOOKMATCHED FEATURE WALLS",
    subtitle: "Mirrored Geologic Paintings",
    materialsUsed: "Italian Marble · Persian Backlit Onyx",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    description:
      "Consecutive slabs sliced from the same block and opened like a book to create an astonishing symmetrical kaleidoscope carved entirely by natural geology.",
    specification: "Concealed Mechanical Dry-Hanging · Calibrated 2700K Backlighting",
  },
  {
    id: "flooring",
    number: "05",
    name: "EXPANSIVE LIVING FLOORS",
    subtitle: "Unbroken Ground Planes",
    materialsUsed: "Roman Travertine · Jaisalmer Heritage · Crema Marble",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    description:
      "Continuous large-format slabs running from interior living rooms directly through glass sliders into shaded verandahs, erasing the boundary between inside and nature.",
    specification: "Zero-Grout Laying · Epoxy-Infused Diamond Polish · Thermal Inertia",
  },
  {
    id: "facades",
    number: "06",
    name: "VENTILATED EXTERIOR FACADES",
    subtitle: "Enduring Monumental Shields",
    materialsUsed: "Flamed Granite · Split-Face Sandstone",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    description:
      "Thermal-regulating rainscreen facades engineered to withstand Uttar Pradesh summers while aging gracefully over generations without maintenance.",
    specification: "Stainless Bracket Cladding · 30mm Natural Stone Slabs · Air Cavity Insulation",
  },
];

export function ApplicationsStory() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const [activeAppIndex, setActiveAppIndex] = useState(0);

  const activeApp = APPLICATIONS[activeAppIndex];

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>WOW 07 / SPATIAL APPLICATIONS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase">
              FROM SLAB <br />
              <span className="italic font-normal">TO SPACE.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
            WE DO NOT JUST SUPPLY RAW MATERIAL. WE COLLABORATE WITH ARCHITECTS TO SHAPE STRUCTURAL PERFECTION.
          </div>
        </div>

        {/* Application Interactive Exhibition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Application Tabs List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {APPLICATIONS.map((app, index) => {
              const isSelected = index === activeAppIndex;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveAppIndex(index)}
                  onMouseEnter={() => setCursor("view", app.name)}
                  onMouseLeave={resetCursor}
                  className={`p-5 text-left border transition-all duration-300 ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-md translate-x-2"
                      : "border-[var(--border-subtle)] bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] hover:border-[var(--border-color)]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-1">
                    <span
                      className={
                        isSelected ? "text-[var(--accent)] font-bold" : "text-[var(--text-muted)]"
                      }
                    >
                      APPLICATION {app.number}
                    </span>
                    <span className="text-[var(--text-muted)] text-[9px]">{app.materialsUsed}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-primary)]">
                    {app.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Cinematic Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-[var(--slab-shadow)] overflow-hidden">
            {/* Architectural Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
              <Image
                key={activeApp.id}
                src={activeApp.image}
                alt={activeApp.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover animate-fadeIn filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[10px] font-mono tracking-widest uppercase">
                <span className="bg-black/60 px-3 py-1 backdrop-blur-md">
                  {activeApp.subtitle}
                </span>
                <span className="bg-black/60 px-3 py-1 backdrop-blur-md">
                  PROVEN STONE GALLERY SPECIFICATION
                </span>
              </div>
            </div>

            {/* Narrative & Specification */}
            <div className="p-8">
              <h4 className="font-serif-luxury text-2xl md:text-3xl text-[var(--text-primary)]">
                {activeApp.name}
              </h4>
              <p className="mt-3 text-xs md:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {activeApp.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[var(--text-muted)] uppercase block">
                    ENGINEERED SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-[var(--text-primary)] block mt-0.5">
                    {activeApp.specification}
                  </span>
                </div>

                <a
                  href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20interested%20in%20stone%20for%20${encodeURIComponent(
                    activeApp.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[var(--text-primary)] text-[10px] font-mono tracking-widest uppercase text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors inline-flex items-center space-x-1"
                >
                  <span>DISCUSS APPLICATION</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
