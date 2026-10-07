"use client";

import React from "react";
import { Phone, MessageSquare, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-stone-950/95 backdrop-blur-md border-t border-white/15 px-4 py-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phones[0].raw}`}
          className="py-2.5 px-2 border border-white/20 bg-stone-900 text-white text-[10px] font-mono tracking-wider uppercase flex flex-col items-center justify-center space-y-1 hover:border-amber-400 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>CALL NOW</span>
        </a>

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
            "Hello Stone Gallery, I would like to check prices and slab availability in your Lucknow showroom."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 bg-emerald-600 text-white text-[10px] font-mono tracking-wider uppercase flex flex-col items-center justify-center space-y-1 shadow-sm hover:bg-emerald-700 transition-colors font-semibold"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-2 bg-white text-stone-950 text-[10px] font-mono tracking-wider uppercase flex flex-col items-center justify-center space-y-1 font-bold hover:bg-amber-400 transition-colors"
        >
          <Navigation className="w-4 h-4 text-stone-950" />
          <span>DIRECTIONS</span>
        </a>
      </div>
    </div>
  );
}
