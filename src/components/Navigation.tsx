"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { GOOGLE_MAPS_META } from "@/data/reviews";
import { Logo } from "@/components/Logo";
import { ArrowUpRight, ChevronDown, MessageSquare, Phone, MapPin, Menu, X, ArrowRight } from "lucide-react";

export function Navigation() {
  const {
    activeMaterial,
    hoveredMaterial,
    setActiveMaterialById,
    setHoveredMaterialById,
  } = useMaterialTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm text-[var(--text-primary)]"
            : "py-6 bg-gradient-to-b from-black/75 via-black/30 to-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Center Navigation with Materials Dropdown */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium">
            {/* Materials Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                className={`flex items-center space-x-2 py-1.5 px-3 border transition-all duration-300 ${
                  isMaterialsOpen
                    ? "border-[var(--accent)] bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm"
                    : isScrolled
                    ? "border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent)]"
                    : "border-white/30 text-white hover:border-white"
                }`}
                aria-expanded={isMaterialsOpen}
              >
                <span>MATERIALS</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[var(--accent)] text-white rounded">
                  {activeMaterial.number}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isMaterialsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <a
              href="#slab-inspector"
              className={`transition-colors ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              SLAB INSPECTOR
            </a>

            <a
              href="#applications"
              className={`transition-colors ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              APPLICATIONS
            </a>

            <a
              href="#showroom"
              className={`transition-colors ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              SHOWROOM MAP
            </a>

            <a
              href="#reviews"
              className={`transition-colors flex items-center space-x-1 ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              <span>REVIEWS</span>
              <span className="text-[10px] text-amber-400">★ 3.9</span>
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-5">
            <span
              className={`text-[10px] tracking-[0.3em] uppercase hidden lg:inline font-mono ${
                isScrolled ? "text-[var(--text-muted)]" : "text-stone-400"
              }`}
            >
              AYODHYA RD · LUCKNOW
            </span>

            <a
              href="#showroom"
              className={`flex items-center space-x-2 text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 font-medium ${
                isScrolled
                  ? "border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
                  : "border-white/60 text-white hover:bg-white hover:text-stone-900"
              }`}
            >
              <span>VISIT SHOWROOM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2.5">
            <button
              onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
              className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1.5 border flex items-center space-x-1.5 ${
                isScrolled
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-white/50 text-white"
              }`}
            >
              <span>{activeMaterial.name}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className={`p-2 transition-colors ${
                isScrolled ? "text-[var(--text-primary)]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Bespoke Materials Architectural Selector Panel (Dropdown) */}
      {isMaterialsOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start pt-24 pb-10 px-6 md:px-12 bg-[var(--bg-primary)]/95 backdrop-blur-2xl transition-all duration-500 animate-fadeIn text-[var(--text-primary)] overflow-y-auto">
          {/* Top Bar inside panel */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-[var(--border-color)]">
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--accent)]">
                AYODHYA ROAD SHOWROOM YARD STOCK
              </p>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] mt-1 uppercase">
                Select Material Atmosphere
              </h2>
            </div>
            <button
              onClick={() => {
                setIsMaterialsOpen(false);
                setHoveredMaterialById(null);
              }}
              className="p-3 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors border border-[var(--border-subtle)]"
              aria-label="Close Material Selector"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Materials Grid with Live Atmosphere Preview */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-8 pr-2">
            {MATERIALS.map((mat) => {
              const isActive = activeMaterial.id === mat.id;

              return (
                <div
                  key={mat.id}
                  onClick={() => {
                    setActiveMaterialById(mat.id);
                    setIsMaterialsOpen(false);
                    setHoveredMaterialById(null);
                  }}
                  onMouseEnter={() => setHoveredMaterialById(mat.id)}
                  onMouseLeave={() => setHoveredMaterialById(null)}
                  className={`group relative p-6 border transition-all duration-500 cursor-pointer text-left flex flex-col justify-between overflow-hidden shadow-sm ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--bg-surface)] ring-1 ring-[var(--accent)]"
                      : "border-[var(--border-color)] hover:border-[var(--accent)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-surface)]"
                  }`}
                >
                  {/* Subtle Background Texture Preview */}
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
                    <Image
                      src={mat.slabImage}
                      alt={mat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>

                  {/* Header info */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                      {mat.number} / 04
                    </span>
                    {isActive && (
                      <span className="text-[9px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-[var(--accent)] text-white">
                        ACTIVE ATMOSPHERE
                      </span>
                    )}
                  </div>

                  {/* Material Name & Descriptors */}
                  <div className="relative z-10 my-6">
                    <h3 className="font-serif-luxury text-2xl md:text-3xl tracking-wide text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-300 uppercase">
                      {mat.name}
                    </h3>
                    <p className="text-[10px] font-mono tracking-widest text-[var(--accent)] mt-1 uppercase">
                      {mat.descriptor}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-3 line-clamp-3 leading-relaxed font-light">
                      {mat.narrative}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono tracking-wider uppercase text-[var(--text-primary)]">
                    <span className="group-hover:text-[var(--accent)] font-semibold">
                      ACTIVATE THEME
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[var(--accent)]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Guidance Footer inside Dropdown Panel */}
          <div className="max-w-7xl mx-auto w-full mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[var(--text-muted)] gap-3">
            <span>TIP: CLICKING A MATERIAL SHIFTS THE ENTIRE WEBSITE AMBIANCE & SLAB INSPECTOR VIEW.</span>
            <span className="text-[var(--text-primary)]">SHOWROOM YARD: DHARM KANTA, AYODHYA ROAD, LUCKNOW</span>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--bg-primary)] p-6 flex flex-col justify-between lg:hidden animate-fadeIn text-[var(--text-primary)] overflow-y-auto">
          <div className="pt-6 space-y-6">
            <div className="pb-4 border-b border-[var(--border-subtle)] flex items-center justify-between">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)]">
              SELECT MATERIAL ATMOSPHERE
            </div>

            <div className="grid grid-cols-1 gap-2">
              {MATERIALS.map((mat) => {
                const isActive = activeMaterial.id === mat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => {
                      setActiveMaterialById(mat.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-3.5 text-left border flex items-center justify-between ${
                      isActive
                        ? "border-[var(--accent)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold"
                        : "border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                    }`}
                  >
                    <div>
                      <span className="font-serif-luxury text-lg block uppercase">
                        {mat.name}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {mat.descriptor}
                      </span>
                    </div>
                    {isActive && (
                      <span className="text-[9px] font-mono px-2 py-0.5 bg-[var(--accent)] text-white uppercase rounded">
                        ACTIVE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col space-y-2.5 text-xs font-mono tracking-wider uppercase border-t border-[var(--border-subtle)]">
              <a
                href="#slab-inspector"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)]"
              >
                SLAB INSPECTOR & FINISHES
              </a>
              <a
                href="#applications"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)]"
              >
                WHERE STONE BELONGS (APPLICATIONS)
              </a>
              <a
                href="#showroom"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)]"
              >
                SHOWROOM & GOOGLE MAPS
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)] flex items-center space-x-1"
              >
                <span>VERIFIED REVIEWS</span>
                <span className="text-amber-400">★ 3.9</span>
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[var(--border-color)]">
            <a
              href="https://wa.me/917897931966?text=Hello%20Stone%20Gallery,%20I%20would%20like%20to%20inquire%20about%20stone%20availability%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 text-white py-3.5 px-4 text-xs font-mono tracking-widest uppercase font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP SHOWROOM</span>
            </a>
            <a
              href="tel:+919928741111"
              className="w-full flex items-center justify-center space-x-2 border border-[var(--text-primary)] py-3 px-4 text-xs font-mono tracking-widest uppercase text-[var(--text-primary)] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>CALL +91 99287 41111</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
