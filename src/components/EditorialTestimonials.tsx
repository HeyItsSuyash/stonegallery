"use client";

import React from "react";
import { TESTIMONIALS, SHOWROOM_INFO } from "@/data/editorial";
import { useGallery } from "@/context/GalleryContext";

export function EditorialTestimonials() {
  const { setCursorLabel } = useGallery();

  return (
    <section id="reviews" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--border-subtle)]">
      {/* Editorial Header */}
      <div className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
        <div>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[var(--text-muted)] block mb-2">
            CLIENT EXPERIENCES & REVIEWS
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl uppercase font-light text-[var(--text-primary)] tracking-tight">
            COMMISSIONS & REPUTATION
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono">
          <div className="flex items-center space-x-1.5 text-amber-400">
            <span>★★★★★</span>
            <span className="text-[var(--text-primary)] font-medium ml-1">4.9 / 5.0</span>
          </div>
          <span className="text-[var(--text-muted)] hidden sm:inline">·</span>
          <span className="text-[var(--text-secondary)] uppercase tracking-wider">
            VERIFIED REVIEWS ON GOOGLE MAPS
          </span>
        </div>
      </div>

      {/* Grid of Verified Testimonials */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        onMouseEnter={() => setCursorLabel("REVIEWS")}
        onMouseLeave={() => setCursorLabel(null)}
      >
        {TESTIMONIALS.map((item, idx) => (
          <div
            key={item.name}
            className={`p-6 sm:p-8 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--text-primary)] transition-all duration-300 flex flex-col justify-between group ${
              idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div>
              {/* Stars & Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="text-amber-400 text-xs tracking-widest">
                  {"★".repeat(item.rating)}
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[var(--text-muted)] border border-[var(--border-subtle)] px-2 py-0.5 rounded-xs">
                  {item.type}
                </span>
              </div>

              {/* Quote */}
              <p className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-primary)] font-light leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-end justify-between">
              <div>
                <h4 className="font-sans font-medium text-sm text-[var(--text-primary)] uppercase tracking-wider">
                  {item.name}
                </h4>
                <p className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                  {item.role}
                </p>
              </div>

              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                {item.location}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Leave review prompt / Google link */}
      <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <span className="text-[var(--text-muted)] uppercase tracking-wider">
          REVIEWED BY HOMEOWNERS, ARCHITECTS & CONTRACTORS ACROSS LUCKNOW
        </span>

        <a
          href={SHOWROOM_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-primary)] uppercase tracking-widest underline underline-offset-4 hover:opacity-60 transition-opacity"
        >
          VIEW MORE ON GOOGLE MAPS →
        </a>
      </div>
    </section>
  );
}
