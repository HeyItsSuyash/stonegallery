"use client";

import React, { useState } from "react";
import { MessageSquare, ArrowRight, Check } from "lucide-react";
import { useMaterialTheme } from "@/context/MaterialThemeContext";

const SPACES = [
  { id: "home", label: "LUXURY HOME / VILLA", desc: "Living, master baths, monolithic island" },
  { id: "office", label: "EXECUTIVE OFFICE", desc: "Reception portals, boardrooms, foyer" },
  { id: "hotel", label: "HOTEL & RESORT", desc: "Monumental lobby floors, spa suites" },
  { id: "restaurant", label: "RESTAURANT / CAFE", desc: "Stain-proof quartz & granite bars" },
  { id: "other", label: "BESPOKE COMMISSION", desc: "Custom outdoor facade or sculptural vanity" },
];

export function MaterialConsultation() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const [selectedSpace, setSelectedSpace] = useState("home");
  const [preferredFinish, setPreferredFinish] = useState("Polished");

  const curSpace = SPACES.find((s) => s.id === selectedSpace)?.label || "Luxury Home";

  const whatsappUrl = `https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20planning%20stone%20for%20my%20${encodeURIComponent(
    curSpace
  )}%20(Preferred%20finish:%20${encodeURIComponent(
    preferredFinish
  )}).%20Please%20guide%20me%20with%20material%20recommendations.`;

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>TAILORED SPECIFICATION CONCIERGE</span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[var(--text-primary)] font-light uppercase leading-[0.95]">
          NOT SURE WHAT STONE <br />
          <span className="italic font-normal">YOU NEED?</span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] font-light max-w-xl mx-auto">
          &ldquo;Tell us about your space. We&apos;ll curate the exact stone lots matching your aesthetic and functional demands.&rdquo;
        </p>

        {/* Space Selection Pills */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
          {SPACES.map((sp) => {
            const isSelected = selectedSpace === sp.id;
            return (
              <button
                key={sp.id}
                onClick={() => setSelectedSpace(sp.id)}
                className={`p-4 border transition-all text-xs ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-md"
                    : "border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-primary)]"
                }`}
              >
                <div className="flex items-center justify-between font-mono font-medium text-[11px] text-[var(--text-primary)] uppercase">
                  <span>{sp.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[var(--accent)]" />}
                </div>
                <span className="text-[10px] text-[var(--text-muted)] block mt-1">
                  {sp.desc}
                </span>
              </button>
            );
          })}
        </div>

        {/* WhatsApp Consultation Button */}
        <div className="mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#25D366] text-white font-mono text-xs tracking-widest uppercase font-semibold hover:bg-[#1fa851] transition-colors shadow-lg hover:shadow-xl"
            onMouseEnter={() => setCursor("visit", "WHATSAPP")}
            onMouseLeave={resetCursor}
          >
            <MessageSquare className="w-4 h-4" />
            <span>DISCUSS {curSpace} ON WHATSAPP →</span>
          </a>
          <span className="block mt-3 text-[10px] font-mono text-[var(--text-muted)] tracking-widest uppercase">
            TYPICAL RESPONSE TIME UNDER 15 MINUTES · DIRECT CURATOR CHAT
          </span>
        </div>
      </div>
    </section>
  );
}
