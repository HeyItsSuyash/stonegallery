"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { ArrowUpRight, ChevronDown, Compass, MapPin, Phone, MessageSquare, X, Menu } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Navigation() {
  const {
    activeMaterial,
    hoveredMaterial,
    setActiveMaterialById,
    setHoveredMaterialById,
    setCursor,
    resetCursor,
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
            ? "py-3 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm text-[var(--text-primary)]"
            : "py-6 bg-gradient-to-b from-black/50 via-black/20 to-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group"
            onMouseEnter={() => setCursor("default")}
            onMouseLeave={resetCursor}
          >
            <Logo />
          </Link>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-xs tracking-[0.2em] uppercase font-medium">
            {/* Materials Interactive Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
                className={`flex items-center space-x-2 py-1 transition-colors duration-300 group ${
                  isScrolled
                    ? "text-[var(--text-primary)] hover:text-[var(--accent)]"
                    : "text-stone-200 hover:text-white"
                }`}
                onMouseEnter={() => setCursor("explore", "SELECT")}
                onMouseLeave={resetCursor}
                aria-expanded={isMaterialsOpen}
              >
                <span>MATERIALS</span>
                <span className="text-[10px] opacity-70 px-1.5 py-0.5 rounded-full border border-current text-xs">
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
              href="#projects"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              PROJECTS
            </a>

            <a
              href="#studio"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              STUDIO
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-6">
            <span
              className={`text-[10px] tracking-[0.3em] uppercase hidden lg:inline font-mono ${
                isScrolled ? "text-[var(--text-muted)]" : "text-stone-400"
              }`}
            >
              LUCKNOW · UP
            </span>
            <a
              href="#showroom"
              className={`group flex items-center space-x-2 text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                isScrolled
                  ? "border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
                  : "border-white/60 text-white hover:bg-white hover:text-stone-900"
              }`}
              onMouseEnter={() => setCursor("visit", "VISIT")}
              onMouseLeave={resetCursor}
            >
              <span>VISIT SHOWROOM</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setIsMaterialsOpen(!isMaterialsOpen)}
              className={`text-[11px] tracking-wider uppercase px-2.5 py-1.5 border ${
                isScrolled ? "border-[var(--border-color)]" : "border-white/40"
              }`}
            >
              {activeMaterial.name}
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

      {/* Bespoke Materials Architectural Selector Panel */}
      {isMaterialsOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start pt-24 pb-10 px-6 md:px-12 bg-[var(--bg-primary)]/95 backdrop-blur-2xl transition-all duration-500 animate-fadeIn">
          {/* Top Bar inside panel */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-[var(--border-color)]">
            <div>
              <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)]">
                CURATED ARCHITECTURAL SLABS
              </p>
              <h2 className="font-serif-luxury text-2xl md:text-3xl text-[var(--text-primary)] mt-1">
                Select Material Atmosphere
              </h2>
            </div>
            <button
              onClick={() => {
                setIsMaterialsOpen(false);
                setHoveredMaterialById(null);
              }}
              className="p-3 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors"
              aria-label="Close Material Selector"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Materials Grid / List with Live Hover Atmosphere Preview */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-8 overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
            {MATERIALS.map((mat) => {
              const isActive = activeMaterial.id === mat.id;
              const isHovered = hoveredMaterial?.id === mat.id;

              return (
                <div
                  key={mat.id}
                  onClick={() => {
                    setActiveMaterialById(mat.id);
                    setIsMaterialsOpen(false);
                    setHoveredMaterialById(null);
                  }}
                  onMouseEnter={() => {
                    setHoveredMaterialById(mat.id);
                    setCursor("explore", mat.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredMaterialById(null);
                    resetCursor();
                  }}
                  className={`group relative p-6 border transition-all duration-500 cursor-pointer text-left flex flex-col justify-between overflow-hidden ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--bg-surface)] shadow-lg"
                      : "border-[var(--border-color)] hover:border-[var(--accent)] bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-surface)]/70"
                  }`}
                >
                  {/* Subtle Background Texture Preview */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <Image
                      src={mat.slabImage}
                      alt={mat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Header info */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                      {mat.number} / 06
                    </span>
                    {isActive && (
                      <span className="text-[9px] tracking-widest uppercase font-mono px-2 py-0.5 rounded bg-[var(--accent)] text-white">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  {/* Material Name & Descriptors */}
                  <div className="relative z-10 my-6">
                    <h3 className="font-serif-luxury text-3xl md:text-4xl tracking-wide text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-300">
                      {mat.name}
                    </h3>
                    <p className="text-xs font-mono tracking-widest text-[var(--text-secondary)] mt-1 uppercase">
                      {mat.descriptor}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-3 line-clamp-2 leading-relaxed">
                      {mat.narrative}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono tracking-widest uppercase text-[var(--text-secondary)]">
                    <span>{mat.slabs.length} SIGNATURE SLABS</span>
                    <span className="flex items-center space-x-1 group-hover:text-[var(--text-primary)]">
                      <span>ENTER ROOM</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-7xl mx-auto w-full mt-6 text-center text-xs text-[var(--text-muted)] font-mono tracking-widest uppercase">
            HOVER TO SENSE THE ATMOSPHERE · CLICK TO TRANSFORM THE STUDIO
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)] p-8 flex flex-col justify-between md:hidden animate-fadeIn">
          <div className="pt-12 space-y-8">
            <div className="pb-4 border-b border-[var(--border-subtle)]">
              <Logo />
            </div>
            <div className="flex flex-col space-y-6 text-2xl font-serif-luxury">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMaterialsOpen(true);
                }}
                className="text-left py-2 border-b border-[var(--border-subtle)] flex items-center justify-between text-[var(--text-primary)]"
              >
                <span>EXPLORE MATERIALS</span>
                <span className="text-xs font-mono">{activeMaterial.name}</span>
              </button>
              <a
                href="#projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left py-2 border-b border-[var(--border-subtle)] text-[var(--text-primary)]"
              >
                SELECTED PROJECTS
              </a>
              <a
                href="#slab-experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left py-2 border-b border-[var(--border-subtle)] text-[var(--text-primary)]"
              >
                MEET THE SLAB
              </a>
              <a
                href="#studio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left py-2 border-b border-[var(--border-subtle)] text-[var(--text-primary)]"
              >
                THE STUDIO & STORY
              </a>
              <a
                href="#showroom"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left py-2 border-b border-[var(--border-subtle)] text-[var(--text-primary)]"
              >
                SHOWROOM & DIRECTIONS
              </a>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[var(--border-color)]">
            <a
              href="https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20would%20like%20to%20inquire%20about%20architectural%20stone%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 px-4 text-xs tracking-widest uppercase font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP CONCIERGE</span>
            </a>
            <a
              href="tel:+919999999999"
              className="w-full flex items-center justify-center space-x-2 border border-[var(--text-primary)] py-3 px-4 text-xs tracking-widest uppercase text-[var(--text-primary)]"
            >
              <Phone className="w-4 h-4" />
              <span>CALL SHOWROOM</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
