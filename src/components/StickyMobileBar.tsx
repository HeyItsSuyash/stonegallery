"use client";

import React from "react";
import { MessageSquare, Phone, MapPin } from "lucide-react";
import { useMaterialTheme } from "@/context/MaterialThemeContext";

export function StickyMobileBar() {
  const { activeMaterial } = useMaterialTheme();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-t border-[var(--border-color)] px-4 py-2.5 flex items-center justify-between md:hidden shadow-2xl">
      <a
        href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20inquiring%20about%20${encodeURIComponent(
          activeMaterial.name
        )}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 mr-2 bg-[#25D366] text-white py-2.5 px-3 rounded flex items-center justify-center space-x-1.5 text-[11px] font-mono font-semibold tracking-wider uppercase shadow-sm"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WHATSAPP</span>
      </a>

      <a
        href="tel:+919999999999"
        className="px-3 py-2.5 border border-[var(--border-color)] text-[var(--text-primary)] rounded flex items-center justify-center text-[11px] font-mono tracking-wider mr-2 uppercase"
      >
        <Phone className="w-3.5 h-3.5" />
      </a>

      <a
        href="https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2.5 border border-[var(--border-color)] text-[var(--text-primary)] rounded flex items-center justify-center text-[11px] font-mono tracking-wider uppercase"
      >
        <MapPin className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
