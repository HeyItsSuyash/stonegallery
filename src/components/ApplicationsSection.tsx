"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MessageSquare, ArrowUpRight } from "lucide-react";

interface ApplicationItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  materialUsed: string;
  image: string;
  description: string;
  practicalBenefits: string[];
}

const APPLICATIONS: ApplicationItem[] = [
  {
    id: "kitchens",
    number: "01",
    title: "KITCHEN COUNTERTOPS & TOPS",
    tagline: "Resilient Gourmet Worktops",
    materialUsed: "Granite (Black / Red / Green)",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
    description:
      "Granite remains the undisputed standard for Indian cooking. Hot cookware, spices, citrus, and mustard oil will not stain or degrade dense granite countertops.",
    practicalBenefits: [
      "Zero heat scorch marks from hot pans",
      "Stain-resistant against turmeric and oil",
      "Edge profiles: Bullnose, Chamfered, Half-Round",
    ],
  },
  {
    id: "door-frames",
    number: "02",
    title: "GRANITE DOOR & WINDOW FRAMES",
    tagline: "Termite-Proof Stone Chowkhats",
    materialUsed: "Rajasthan Black Granite & Red Granite",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description:
      "A timeless alternative to wood in north Indian climate. Granite door and window frames never suffer from moisture warping, white ants/termites, or seasonal swelling.",
    practicalBenefits: [
      "100% immune to termites and moisture rot",
      "Pre-cut and polished to custom jamb depths",
      "Lifetime structural stability without repainting",
    ],
  },
  {
    id: "floors",
    number: "03",
    title: "NATURAL STONE & MARBLE FLOORING",
    tagline: "Naturally Cool Living Plinths",
    materialUsed: "Indian White Marble, Granite & Kota Stone",
    image:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
    description:
      "Expansive polished marble and satin-finished stone floors provide permanent coolness underfoot during Lucknow's intense summer heat.",
    practicalBenefits: [
      "Natural thermal cooling throughout summer",
      "Can be re-polished and mirror-crystallized anytime",
      "High compressive strength for decades of heavy wear",
    ],
  },
  {
    id: "walls",
    number: "04",
    title: "WALLS & ACCENT SURFACES",
    tagline: "Textured Natural Backdrops",
    materialUsed: "Veined Marble, Granite & Split-Face Stone",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    description:
      "Vertical stone applications for living room TV backdrops, Mandir shrines, and bathroom cladding that eliminate recurring repaint maintenance.",
    practicalBenefits: [
      "Zero dampness seepage through internal stone face",
      "Permanent mineral patterns that never fade",
      "Easily cleaned with a simple damp cloth",
    ],
  },
  {
    id: "outdoor-spaces",
    number: "05",
    title: "OUTDOOR PAVING & STEPS",
    tagline: "Anti-Slip Walkways & Porches",
    materialUsed: "Kota Stone, Flamed Granite & Sandstone",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    description:
      "Heavy-duty rough cleft stone and flamed granite designed for car porches, parking entries, exterior stairs, and verandah transitions.",
    practicalBenefits: [
      "High friction anti-slip surface even when wet",
      "Withstands heavy vehicular weight without cracking",
      "Naturally resistant to algae and weathering",
    ],
  },
];

export function ApplicationsSection() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const [activeTab, setActiveTab] = useState(0);

  const activeApp = APPLICATIONS[activeTab];

  return (
    <section
      id="applications"
      className="py-24 md:py-40 px-6 md:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <span>02 / PRACTICAL USE CASES</span>
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              WHERE STONE <br />
              <span className="italic font-normal">BELONGS.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase leading-relaxed">
            REAL RESIDENTIAL AND COMMERCIAL USES: KITCHENS, CHOWKHAT DOOR FRAMES, HARD-WEARING FLOORS, AND WEATHERPROOF OUTDOOR PAVING.
          </div>
        </div>

        {/* Horizontal Tab Buttons */}
        <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-[var(--border-subtle)]">
          {APPLICATIONS.map((app, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={app.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-shrink-0 px-5 py-3 text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] font-semibold shadow-sm"
                    : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span>{app.number} {app.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Large Visual Editorial Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 sm:p-10 shadow-[var(--slab-shadow)]">
          {/* Main Visual Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-black">
            <Image
              key={activeApp.id}
              src={activeApp.image}
              alt={activeApp.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover animate-fadeIn filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-md px-3 py-1.5">
              <span>APPLICATION: {activeApp.title}</span>
              <span>{activeApp.materialUsed}</span>
            </div>
          </div>

          {/* Editorial Content & Practical Benefits */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-2">
                APPLICATION 0{activeTab + 1} OF 05
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[var(--text-primary)] uppercase leading-tight">
                {activeApp.title}
              </h3>
              <p className="mt-4 text-xs md:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                {activeApp.description}
              </p>

              {/* Practical Benefits */}
              <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] space-y-2.5">
                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--text-muted)] block">
                  KEY ADVANTAGES FOR HOMEOWNERS:
                </span>
                {activeApp.practicalBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-[var(--text-primary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Enquiry for this application */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <a
                href={`https://wa.me/919999999999?text=Hi,%20I%20am%20interested%20in%20stone%20for%20${encodeURIComponent(
                  activeApp.title
                )}%20from%20your%20Stone%20Gallery%20website.%20Please%20share%20suitable%20material%20options%20and%20rates.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center justify-center space-x-2"
                onMouseEnter={() => setCursor("visit", "ENQUIRE")}
                onMouseLeave={resetCursor}
              >
                <MessageSquare className="w-4 h-4" />
                <span>ENQUIRE FOR THIS APPLICATION →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
