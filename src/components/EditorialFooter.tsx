"use client";

import React from "react";
import { SHOWROOM_INFO } from "@/data/editorial";
import { useGallery } from "@/context/GalleryContext";

export function EditorialFooter() {
  const { setCursorLabel } = useGallery();

  return (
    <footer className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--border-color)] text-[var(--text-primary)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        {/* Left: Giant Typography */}
        <div>
          <h2 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl leading-[0.88] uppercase font-light tracking-tight">
            STONE <br />
            GALLERY
          </h2>

          <div className="mt-8 space-y-1">
            <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
              MARBLE · GRANITE · STONE
            </p>
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Lucknow, India
            </p>
          </div>
        </div>

        {/* Right: Minimal Links */}
        <div className="flex flex-wrap items-center gap-8 md:gap-12 text-[11px] font-mono tracking-[0.25em] uppercase">
          <a
            href="#materials"
            className="hover:opacity-60 transition-opacity"
            onMouseEnter={() => setCursorLabel("VIEW")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            MATERIALS
          </a>
          <a
            href="#showroom"
            className="hover:opacity-60 transition-opacity"
            onMouseEnter={() => setCursorLabel("VISIT")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            SHOWROOM
          </a>
          <a
            href={`https://wa.me/${SHOWROOM_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            onMouseEnter={() => setCursorLabel("CHAT")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            WHATSAPP
          </a>
          <a
            href={SHOWROOM_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
            onMouseEnter={() => setCursorLabel("MAP")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            DIRECTIONS
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
        <span>© {new Date().getFullYear()} STONE GALLERY</span>
        <span>KAMTA · AYODHYA ROAD</span>
      </div>
    </footer>
  );
}
