"use client";

import React from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MapPin, Phone, MessageSquare, Compass, Clock, Navigation, CheckCircle } from "lucide-react";

export function ShowroomExperience() {
  const { setCursor, resetCursor } = useMaterialTheme();

  return (
    <section
      id="showroom"
      className="py-28 md:py-44 px-6 md:px-12 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Emotional Pre-heading (Touch the Material) */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>THE PHYSICAL GALLERY EXPERIENCE</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.95]">
            YOU CAN SEE IT HERE. <br />
            <span className="italic font-normal">BUT YOU SHOULD TOUCH IT.</span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            &ldquo;Stone has texture, depth and variation that photographs can never completely capture.&rdquo;
            We invite architects, interior designers, and discerning homeowners to walk our physical slab gallery 
            along Ayodhya Road, view full bookmatched slabs under natural sunlight, and feel the raw geology.
          </p>
        </div>

        {/* Showroom Interactive Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visual: Physical Showroom Photography */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto w-full overflow-hidden border border-[var(--border-color)] bg-black shadow-[var(--slab-shadow)]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
              alt="Stone Gallery Showroom Lucknow"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Overlaid Showroom Highlights */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[9px] font-mono tracking-widest text-[var(--accent)] uppercase block mb-1">
                LUCKNOW PHYSICAL SHOWROOM & SLAB YARD
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl uppercase">
                Over 350 Slabs Displayed in Full Height
              </h3>
              <p className="mt-2 text-xs text-stone-300 font-light max-w-lg">
                Walk through dedicated zones for Italian Carrara Marble, Exotic Brazilian Granites, Turkish Travertines, and Backlit Onyx displays.
              </p>
            </div>
          </div>

          {/* Architectural Location & Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-primary)] p-8 md:p-10 shadow-[var(--slab-shadow)]">
            <div>
              <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase mb-3">
                <MapPin className="w-4 h-4" />
                <span>OFFICIAL VERIFIED LOCATION</span>
              </div>

              <h4 className="font-serif-luxury text-3xl text-[var(--text-primary)] uppercase">
                STONE GALLERY
              </h4>

              {/* Exact Address Specified */}
              <div className="mt-4 p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-xs text-[var(--text-secondary)] space-y-1.5 font-light leading-relaxed">
                <p className="font-semibold text-[var(--text-primary)]">
                  Dharm Kanta – Ayodhya Road
                </p>
                <p>Opposite Sudha Petrol Pump</p>
                <p>Adjoining Gard, Shankar Puri, Kamta</p>
                <p className="font-medium text-[var(--accent)]">
                  Lucknow, Uttar Pradesh · India
                </p>
              </div>

              {/* Timing & Consultation Details */}
              <div className="mt-6 space-y-3 text-xs font-mono text-[var(--text-secondary)]">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-[var(--accent)]" />
                  <span>Monday – Sunday: 10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                  <span>Complimentary Architect & Dry-Lay Consultation</span>
                </div>
              </div>
            </div>

            {/* Conversion Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <a
                href="https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center justify-center space-x-2"
                onMouseEnter={() => setCursor("visit", "MAPS")}
                onMouseLeave={resetCursor}
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS →</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20Ayodhya%20Road%20showroom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 border border-emerald-600/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/5 text-center text-xs font-mono tracking-widest uppercase hover:bg-emerald-500/15 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href="tel:+919999999999"
                  className="py-3 border border-[var(--border-color)] text-[var(--text-primary)] text-center text-xs font-mono tracking-widest uppercase hover:border-[var(--text-primary)] transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
