"use client";

import React from "react";
import { TESTIMONIALS, SHOWROOM_INFO } from "@/data/editorial";

export function EditorialTestimonials() {

  // Duplicate items to make the horizontal marquee loop seamlessly
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="reviews" className="py-24 md:py-36 w-full border-t border-[var(--border-subtle)] overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
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
              VERIFIED GOOGLE MAPS REVIEWS
            </span>
          </div>
        </div>
      </div>

      {/* Marquee Carousel with Gradient Overlay Edges */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left Gradient Fade Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />

        {/* Right Gradient Fade Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />

        {/* Infinite Scrolling Track */}
        <div className="marquee-track flex gap-6 sm:gap-8 px-6 py-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 p-6 sm:p-8 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--text-primary)] transition-all duration-300 flex flex-col justify-between group cursor-grab active:cursor-grabbing"
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
      </div>

      {/* Bottom Sub-bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <span className="text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            HOVER OVER ANY CARD TO PAUSE SCROLL
          </span>

          <a
            href={SHOWROOM_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] uppercase tracking-widest underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            VIEW ALL REVIEWS ON GOOGLE MAPS →
          </a>
        </div>
      </div>
    </section>
  );
}
