"use client";

import React from "react";
import { Compass, CheckCircle2, Ruler, Truck, MessageSquare, Phone } from "lucide-react";

export function ArchitectsSection() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text and Proposition */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>FOR ARCHITECTS, DESIGNERS & BUILDERS</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-6xl text-[var(--text-primary)] font-light uppercase leading-[0.95]">
              DIRECT SPECIFICATION & <br />
              <span className="italic font-normal">WHOLESALE LOT SUPPLY.</span>
            </h2>

            <p className="mt-6 text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed max-w-xl">
              We partner directly with Lucknow-based architectural studios, civil contractors, and interior designers. Bring your project drawings or visit our Kamta yard with your clients for guided material walkthroughs.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <div className="flex items-center space-x-2 text-[var(--accent)] mb-1">
                  <Ruler className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Precision Calibration</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-light">
                  Exact 18mm/20mm gauge tolerance so your site contractors don&apos;t struggle with uneven joints.
                </p>
              </div>

              <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <div className="flex items-center space-x-2 text-[var(--accent)] mb-1">
                  <Truck className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Project-Phase Dispatch</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] font-light">
                  Store reserved lots in our yard and call for phased dispatches as your site slab casting completes.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Trade Contact Card */}
          <div className="lg:col-span-5 p-8 border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-[var(--slab-shadow)]">
            <span className="text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase block mb-1">
              ARCHITECT & CONTRACTOR DESK
            </span>
            <h3 className="font-serif-luxury text-2xl text-[var(--text-primary)] uppercase">
              Schedule A Yard Walkthrough
            </h3>
            <p className="mt-2 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Have a floor plan or BOQ? Send us your requirements on WhatsApp or call our Ayodhya Road desk directly.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/917897931966?text=Hi%20Stone%20Gallery,%20I%20am%20an%20architect/contractor%20in%20Lucknow%20and%20want%20to%20discuss%20stone%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 text-white text-xs font-mono tracking-widest uppercase hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                <span>SHARE BOQ ON WHATSAPP</span>
              </a>

              <a
                href="tel:+919928741111"
                className="w-full py-3.5 border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-xs font-mono tracking-widest uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <Phone className="w-4 h-4 text-[var(--accent)]" />
                <span>CALL +91 99287 41111</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
