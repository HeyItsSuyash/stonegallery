"use client";

import React from "react";
import Link from "next/link";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { ArrowUpRight, MapPin, Phone, MessageSquare, Mail, Globe } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { activeMaterial, setActiveMaterialById, setCursor, resetCursor } =
    useMaterialTheme();

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[var(--text-primary)] transition-colors duration-700 overflow-hidden">
      {/* Background Subtle Material Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03] translate-x-1/4 translate-y-1/4">
        <span className="font-serif-luxury text-[30vw] uppercase leading-none font-extrabold text-[var(--text-primary)]">
          {activeMaterial.name}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 relative z-10">
        {/* Dynamic Material-Aware Final Call to Action */}
        <div className="pb-20 border-b border-[var(--border-color)] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase block mb-3">
              THE NEXT STEP IN YOUR SPACE
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl uppercase leading-none">
              FIND YOUR <br />
              <span className="italic font-normal text-[var(--accent)]">
                {activeMaterial.name}.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20would%20like%20to%20consult%20with%20you%20regarding%20${encodeURIComponent(
                activeMaterial.name
              )}%20for%20my%20residence.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-colors flex items-center space-x-2"
              onMouseEnter={() => setCursor("visit", "WHATSAPP")}
              onMouseLeave={resetCursor}
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
            <a
              href="#showroom"
              className="px-8 py-4 border border-[var(--border-color)] text-xs font-mono tracking-widest uppercase hover:border-[var(--text-primary)] transition-colors flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>SHOWROOM DIRECTIONS</span>
            </a>
          </div>
        </div>

        {/* Multi-Column Monograph Navigation */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[var(--border-subtle)]">
          {/* Brand Identity */}
          <div className="md:col-span-5">
            <Logo variant="horizontal" />
            <p className="mt-6 text-xs text-[var(--text-secondary)] font-light max-w-sm leading-relaxed">
              An architectural material studio dedicated to the tactile beauty of earth&apos;s natural stones. 
              Proudly based in Lucknow, Uttar Pradesh, serving architectural commissions across India.
            </p>

            <div className="mt-8 text-xs font-mono text-[var(--text-muted)] space-y-1">
              <p>Dharm Kanta – Ayodhya Road, Lucknow, UP</p>
              <p>Opposite Sudha Petrol Pump, Shankar Puri, Kamta</p>
              <p className="text-[var(--text-primary)] mt-2">Hours: Mon – Sun, 10:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* Quick Links: Materials */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
              ARCHITECTURAL MATERIALS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono uppercase">
              {MATERIALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMaterialById(m.id)}
                  className={`text-left py-1 hover:text-[var(--accent)] transition-colors ${
                    activeMaterial.id === m.id
                      ? "text-[var(--accent)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {m.number} {m.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
              DIRECT CHANNELS
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 99999 99999</span>
              </a>
              <a
                href="tel:+919999999999"
                className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Phone: +91 99999 99999</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram: @stonegallery.lko</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] gap-4">
          <div>
            © {new Date().getFullYear()} STONE GALLERY STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="font-serif-luxury text-base tracking-widest text-[var(--text-primary)]">
            EARTH, SHAPED FOR SPACE.
          </div>
          <div>
            LUCKNOW · UTTAR PRADESH · INDIA
          </div>
        </div>
      </div>
    </footer>
  );
}
