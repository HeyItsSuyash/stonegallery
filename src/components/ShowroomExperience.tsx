"use client";

import React from "react";
import Image from "next/image";
import { GOOGLE_MAPS_META } from "@/data/reviews";
import { MapPin, Phone, MessageSquare, Navigation, Clock, CheckCircle2, Star, ShieldCheck, Sun, Truck } from "lucide-react";

export function ShowroomExperience() {
  return (
    <section
      id="showroom"
      className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>06 / PHYSICAL SHOWROOM & YARD</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              VISIT THE <br />
              <span className="italic font-normal">SLAB YARD.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif-luxury text-2xl text-[var(--text-secondary)] italic">
              &ldquo;Never finalize stone from a 4-inch sample.&rdquo;
            </p>
            <p className="mt-2 text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
              INSPECT WHOLE UNBROKEN SLABS UNDER NATURAL LUCKNOW DAYLIGHT AT OUR AYODHYA ROAD PREMISES.
            </p>
          </div>
        </div>

        {/* 3 Pillars of Visiting in Person */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[var(--text-primary)] uppercase mb-2">
              Natural Daylight Inspection
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
              Indoor showroom spotlights can mask color undertones. At our yard, inspect slabs in direct natural daylight to see true mineral reflections.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[var(--text-primary)] uppercase mb-2">
              Water-Splash & Sound Test
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
              We water-splash slabs on request to demonstrate post-polishing luster, and perform the coin-tap acoustic test to guarantee zero hollow fissures.
            </p>
          </div>

          <div className="p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mb-4">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-luxury text-xl text-[var(--text-primary)] uppercase mb-2">
              Direct Yard Loading & Delivery
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-light">
              Selected slabs are numbered and loaded onto transport with protective wooden bracing for safe delivery across Lucknow and surrounding districts.
            </p>
          </div>
        </div>

        {/* Main Location Grid: Google Maps Embed + Official Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* User's Exact Google Maps Iframe Embed */}
          <div className="lg:col-span-7 relative w-full overflow-hidden border border-[var(--border-color)] bg-stone-900 shadow-[var(--slab-shadow)] flex flex-col">
            <div className="p-4 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono tracking-wider text-[var(--text-muted)]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[var(--text-primary)] font-medium">LIVE SHOWROOM LOCATION ON GOOGLE MAPS</span>
              </div>
              <span className="text-[var(--accent)] hidden sm:inline">PLUS CODE: {GOOGLE_MAPS_META.plusCode}</span>
            </div>

            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7117.832073218969!2d81.01124119357908!3d26.87440859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3af24ea81c1%3A0x1cd7f1b20353b9e!2sStone%20Gallery!5e0!3m2!1sen!2sin!4v1791368432427!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Stone Gallery Lucknow Google Maps Location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Showroom Details & Action Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 sm:p-10 shadow-[var(--slab-shadow)]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--accent)] font-semibold">
                  VERIFIED LOCAL STORE
                </span>
                <div className="flex items-center space-x-1 bg-[var(--bg-primary)] px-2.5 py-1 border border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)]">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{GOOGLE_MAPS_META.rating}</span>
                  <span className="text-[var(--text-muted)] text-[10px]">({GOOGLE_MAPS_META.totalReviews} on Google)</span>
                </div>
              </div>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[var(--text-primary)] uppercase">
                {GOOGLE_MAPS_META.placeName}
              </h3>
              <p className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mt-1">
                {GOOGLE_MAPS_META.hindiName} · {GOOGLE_MAPS_META.category}
              </p>

              {/* Exact Address */}
              <div className="mt-6 p-5 border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs text-[var(--text-secondary)] space-y-2 font-light leading-relaxed">
                <p className="font-semibold text-sm text-[var(--text-primary)]">
                  Dharm Kanta – Ayodhya Road
                </p>
                <p>Opposite Sudha Petrol Pump, Adjoining Gard</p>
                <p>Shankar Puri, Kamta</p>
                <p className="text-[var(--text-primary)] font-medium">
                  Lucknow, Uttar Pradesh 226028
                </p>
                <div className="pt-2 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)] font-mono">
                  Landmark: Near Chinhat Tiraha / Faizabad Road Junction
                </div>
              </div>

              {/* Timings */}
              <div className="mt-6 space-y-2.5 text-xs font-mono text-[var(--text-secondary)]">
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-[var(--text-primary)] font-medium">
                    {GOOGLE_MAPS_META.openingHours}
                  </span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                  <span>Wholesale & retail rates with on-spot yard selection</span>
                </div>
              </div>
            </div>

            {/* Direct Contact & Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <a
                href={GOOGLE_MAPS_META.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center justify-center space-x-2.5 font-semibold shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS →</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${GOOGLE_MAPS_META.phoneNumbers[0].replace(/\s+/g, "")}`}
                  className="py-3.5 px-4 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-center text-xs font-mono tracking-widest uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>CALL {GOOGLE_MAPS_META.phoneNumbers[0]}</span>
                </a>

                <a
                  href={`https://wa.me/917897931966?text=${encodeURIComponent(
                    "Hello Stone Gallery, I would like to visit your Ayodhya Road showroom today to inspect stone slabs."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 bg-emerald-600 text-white text-center text-xs font-mono tracking-widest uppercase hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP CHAT</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
