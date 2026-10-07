"use client";

import React from "react";
import { useMaterialTheme } from "@/context/MaterialThemeContext";

const REVIEWS = [
  {
    quote:
      "Most marble dealers in Lucknow show you broken corner cutouts. Stone Gallery laid out four full consecutive Statuario slabs across their yard under morning sun. Seeing the bookmatched vein continuity before cutting gave us absolute confidence.",
    author: "Prashant Srivastava",
    role: "Homeowner · Gomti Nagar Residence",
    material: "Italian Statuario Marble",
  },
  {
    quote:
      "For our cantilevered courtyard design, we needed Roman Travertine with consistent warm porosity that wouldn't pit under Lucknow weather. Their batch curation and dry-lay service was flawless from specification to delivery.",
    author: "Studio Awasthi Architects",
    role: "Lead Architect · Ansal Golf City Manor",
    material: "Navona Travertine & Flamed Granite",
  },
  {
    quote:
      "The cosmic black leathered granite island in our open-plan kitchen is the centerpiece of the entire penthouse. Zero maintenance issues, extraordinary tactile feel.",
    author: "Dr. R. K. Mehrotra",
    role: "Homeowner · Hazratganj",
    material: "Titanium Cosmic Leathered Granite",
  },
];

export function Testimonials() {
  const { setCursor, resetCursor } = useMaterialTheme();

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
          <span>04 / CURATED CLIENT TESTIMONIALS</span>
          <div className="w-8 h-[1px] bg-[var(--accent)]" />
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.95] mb-16">
          CHOSEN FOR SPACES <br />
          <span className="italic font-normal">THAT LAST.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
            <div
              key={i}
              className="p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-serif-luxury text-5xl text-[var(--accent)] block leading-none mb-4">
                  &ldquo;
                </span>
                <p className="text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                  {rev.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                <h4 className="font-serif-luxury text-xl text-[var(--text-primary)]">
                  {rev.author}
                </h4>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mt-1">
                  {rev.role}
                </p>
                <span className="text-[9px] font-mono text-[var(--accent)] uppercase block mt-1">
                  Material: {rev.material}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
