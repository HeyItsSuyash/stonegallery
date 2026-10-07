"use client";

import React from "react";
import { Phone, MessageSquare, Navigation, MapPin } from "lucide-react";
import { GOOGLE_MAPS_META } from "@/data/reviews";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[var(--bg-primary)]/95 backdrop-blur-md border-t border-[var(--border-color)] px-4 py-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+919928741111"
          className="py-2.5 px-2 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-[10px] font-mono tracking-wider uppercase flex flex-col items-center justify-center space-y-1 hover:border-[var(--accent)] transition-colors"
        >
          <Phone className="w-4 h-4 text-[var(--accent)]" />
          <span>CALL</span>
        </a>

        <a
          href={`https://wa.me/917897931966?text=${encodeURIComponent(
            "Hello Stone Gallery, I would like to check prices and slab availability in your Lucknow showroom."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 bg-emerald-600 text-white text-[10px] font-mono tracking-wider uppercase flex flex-col items-center justify-center space-y-1 shadow-sm hover:bg-emerald-700 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>

        <a
          href={GOOGLE_MAPS_META.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 bg-[var(--text-primary)] text-[var(--bg-primary)] text-[10px] font-mono tracking-wider uppercase flex flex-col items-center justify-center space-y-1 font-semibold hover:bg-[var(--accent)] hover:text-white transition-colors"
        >
          <Navigation className="w-4 h-4" />
          <span>MAPS</span>
        </a>
      </div>
    </div>
  );
}
