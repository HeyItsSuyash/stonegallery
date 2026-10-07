"use client";

import React from "react";
import Link from "next/link";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { Logo } from "@/components/Logo";
import { MessageSquare, Phone, MapPin, Navigation } from "lucide-react";

export function Footer() {
  const { activeMaterial, setActiveMaterialById, setCursor, resetCursor } =
    useMaterialTheme();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[var(--text-primary)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[var(--border-subtle)]">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <Logo variant="horizontal" />
            <p className="mt-4 text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Marble · Granite · Natural Stone
            </p>
            <p className="mt-4 text-xs text-[var(--text-secondary)] font-light max-w-sm leading-relaxed">
              A physical stone and marble showroom located in Lucknow, Uttar Pradesh. Dealing in verified granites, classic marbles, door frames, and natural stone flooring for homes and commercial spaces.
            </p>
          </div>

          {/* Col 2: Materials */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
              MATERIALS
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
              <a href="#applications" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] pt-1">
                APPLICATIONS
              </a>
              <a href="#products" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                PRODUCT CATALOGUE
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
                Dharm Kanta – Ayodhya Road, Opp. Sudha Petrol Pump, Kamta, Lucknow 226028
              </p>
              <div className="flex items-center space-x-2 pt-1">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)]"
                >
                  WhatsApp: +91 99999 99999
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[var(--accent)]" />
                <a href="tel:+919999999999" className="hover:text-[var(--text-primary)]">
                  Call: +91 99999 99999
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Navigation className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                <a
                  href="https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)]"
                >
                  Get Google Maps Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] gap-4">
          <div>
            © {new Date().getFullYear()} STONE GALLERY. LUCKNOW, UTTAR PRADESH.
          </div>
          <div className="font-serif-luxury text-sm tracking-widest text-[var(--text-primary)]">
            STONE, FOR EVERY SPACE.
          </div>
        </div>
      </div>
    </footer>
  );
}
