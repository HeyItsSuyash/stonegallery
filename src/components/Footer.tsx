"use client";

import React from "react";
import Link from "next/link";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { GOOGLE_MAPS_META } from "@/data/reviews";
import { Logo } from "@/components/Logo";
import { MessageSquare, Phone, MapPin, Navigation, Star } from "lucide-react";

export function Footer() {
  const { activeMaterial, setActiveMaterialById } = useMaterialTheme();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[var(--text-primary)] transition-colors duration-700 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[var(--border-subtle)]">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5">
            <Logo variant="horizontal" />
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Marble · Granite · Natural Stone · Tiles
            </p>
            <p className="mt-4 text-xs text-[var(--text-secondary)] font-light max-w-sm leading-relaxed">
              A physical stone, granite, and marble showroom & yard located on Ayodhya Road, Kamta, Lucknow. Dedicated to natural daylight slab inspection, calibrated thickness guarantees, and safe delivery across Uttar Pradesh.
            </p>

            <div className="mt-6 flex items-center space-x-2 text-xs font-mono text-[var(--text-muted)]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-[var(--text-primary)] font-semibold">{GOOGLE_MAPS_META.rating} / 5.0</span>
              <span>· Based on {GOOGLE_MAPS_META.totalReviews} Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Materials & Applications */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
              MATERIALS & SECTIONS
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono uppercase">
              {MATERIALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMaterialById(m.id)}
                  className={`text-left hover:text-[var(--accent)] transition-colors ${
                    activeMaterial.id === m.id
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {m.name}
                </button>
              ))}
              <a href="#slab-inspector" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] pt-1">
                SLAB INSPECTOR
              </a>
              <a href="#applications" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                REAL APPLICATIONS
              </a>
              <a href="#showroom" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                SHOWROOM MAP
              </a>
              <a href="#reviews" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                CUSTOMER REVIEWS
              </a>
            </div>
          </div>

          {/* Col 3: Showroom & Direct Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
              SHOWROOM & CONTACT
            </h4>
            <div className="space-y-3 text-xs font-mono text-[var(--text-secondary)]">
              <p className="text-[var(--text-primary)]">
                {GOOGLE_MAPS_META.address}
              </p>
              <p className="text-[10px] text-[var(--text-muted)]">
                Timings: {GOOGLE_MAPS_META.openingHours}
              </p>

              <div className="flex items-center space-x-2 pt-1">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <a
                  href="https://wa.me/917897931966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)]"
                >
                  WhatsApp: +91 78979 31966
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
                <a href="tel:+919928741111" className="hover:text-[var(--text-primary)]">
                  Phone: +91 99287 41111
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Navigation className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <a
                  href={GOOGLE_MAPS_META.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] underline"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] gap-4">
          <div>
            © {new Date().getFullYear()} STONE GALLERY (स्टोन गैलरी). LUCKNOW, UTTAR PRADESH.
          </div>
          <div className="font-serif-luxury text-sm tracking-widest text-[var(--text-primary)]">
            EARTH, SHAPED FOR SPACE.
          </div>
        </div>
      </div>
    </footer>
  );
}
