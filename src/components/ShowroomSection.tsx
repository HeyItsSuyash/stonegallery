"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, MessageSquare, Navigation, Clock, CheckCircle } from "lucide-react";

export function ShowroomSection() {

  return (
    <section
      id="showroom"
      className="py-24 md:py-40 px-6 md:px-12 bg-[var(--bg-primary)] border-b border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>LUCKNOW PHYSICAL SHOWROOM</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.95]">
            SEE IT IN <br />
            <span className="italic font-normal">PERSON.</span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl mx-auto">
            Stone looks different in a photograph. Visit the showroom, see the material up close, compare textures and choose what feels right for your space.
          </p>
        </div>

        {/* Showroom Visual & Directions Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Showroom Yard Visual */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto w-full overflow-hidden border border-[var(--border-color)] bg-stone-900 shadow-[var(--slab-shadow)]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
              alt="Stone Gallery Showroom Yard Lucknow"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[9px] font-mono tracking-widest text-[var(--accent)] uppercase block mb-1">
                PHYSICAL YARD & SLAB DISPLAY
              </span>
              <h3 className="font-serif-luxury text-2xl md:text-3xl uppercase">
                Inspect Full Slabs in Daylight
              </h3>
              <p className="mt-2 text-xs text-stone-300 font-light max-w-lg leading-relaxed">
                Water-splash testing and dry-lay matching available on site to inspect natural luster before purchasing.
              </p>
            </div>
          </div>

          {/* Location Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 sm:p-10 shadow-[var(--slab-shadow)]">
            <div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] mb-2">
                OFFICIAL LOCATION
              </div>
              <h4 className="font-serif-luxury text-3xl text-[var(--text-primary)] uppercase">
                STONE GALLERY
              </h4>

              {/* Verified Primary Address */}
              <div className="mt-5 p-4 border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs text-[var(--text-secondary)] space-y-1.5 font-light leading-relaxed">
                <p className="font-semibold text-[var(--text-primary)]">
                  Dharm Kanta – Ayodhya Road
                </p>
                <p>Opposite Sudha Petrol Pump</p>
                <p>Adjoining Gard, Shankar Puri, Kamta</p>
                <p className="text-[var(--text-primary)] font-medium">
                  Lucknow, Uttar Pradesh 226028
                </p>

                <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] font-mono">
                  Also associated listing: Plot No. 36, Near Chinhat Tiraha, Faizabad Road, Chinhat, Lucknow 226028.
                </div>
              </div>

              {/* Timings */}
              <div className="mt-6 space-y-2 text-xs font-mono text-[var(--text-secondary)]">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[var(--accent)]" />
                  <span>Open: Monday – Sunday: 10:00 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                  <span>Direct slab yard inspection & loading assistance</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <a
                href="https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS →</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20would%20like%20to%20visit%20your%20Ayodhya%20Road%20showroom%20today."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-emerald-600 text-white text-center text-xs font-mono tracking-widest uppercase hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
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
