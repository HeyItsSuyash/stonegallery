"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MATERIALS } from "@/data/materials";
import { Logo } from "@/components/Logo";
import { ArrowUpRight, MessageSquare, Phone, MapPin, Menu, X } from "lucide-react";

export function Navigation() {
  const {
    activeMaterial,
    setActiveMaterialById,
    setHoveredMaterialById,
    setCursor,
    resetCursor,
  } = useMaterialTheme();

  const [isScrolled, setIsScrolled] = useState(false);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled
            ? "py-3 bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm text-[var(--text-primary)]"
            : "py-6 bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white"
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

          {/* Desktop Center Navigation with Material-Driven Atmosphere Switcher */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase font-medium">
            {MATERIALS.map((mat) => {
              const isActive = activeMaterial.id === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterialById(mat.id)}
                  onMouseEnter={() => {
                    setHoveredMaterialById(mat.id);
                    setCursor("explore", mat.name);
                  }}
                  onMouseLeave={() => {
                    setHoveredMaterialById(null);
                    resetCursor();
                  }}
                  className={`py-1 transition-all duration-300 relative group ${
                    isActive
                      ? "text-[var(--accent)] font-semibold"
                      : isScrolled
                      ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  <span>{mat.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--accent)] animate-fadeIn" />
                  )}
                </button>
              );
            })}

            <div className="h-3 w-[1px] bg-current opacity-20" />

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
              href="#products"
              className={`transition-colors ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              CATALOGUE
            </a>

            <a
              href="#showroom"
              className={`transition-colors ${
                isScrolled
                  ? "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              SHOWROOM
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20am%20inquiring%20about%20stone%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 hover:underline flex items-center space-x-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>

            <a
              href="#showroom"
              className={`px-4 py-2 border text-xs font-mono tracking-widest uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                isScrolled
                  ? "border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
                  : "border-white/60 text-white hover:bg-white hover:text-black"
              }`}
              onMouseEnter={() => setCursor("visit", "VISIT")}
              onMouseLeave={resetCursor}
            >
              <span>VISIT SHOWROOM</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
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

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--bg-primary)] p-6 flex flex-col justify-between lg:hidden animate-fadeIn text-[var(--text-primary)]">
          <div className="pt-12 space-y-6">
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
                    className={`p-4 text-left border flex items-center justify-between ${
                      isActive
                        ? "border-[var(--accent)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold"
                        : "border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                    }`}
                  >
                    <div>
                      <span className="font-serif-luxury text-xl block uppercase">
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

            <div className="pt-4 flex flex-col space-y-3 text-sm font-mono tracking-wider uppercase border-t border-[var(--border-subtle)]">
              <a
                href="#applications"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)]"
              >
                WHERE STONE BELONGS (APPLICATIONS)
              </a>
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)]"
              >
                PRODUCT DISCOVERY CATALOGUE
              </a>
              <a
                href="#showroom"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 text-[var(--text-secondary)]"
              >
                SHOWROOM & DIRECTIONS
              </a>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-[var(--border-color)]">
            <a
              href="https://wa.me/919999999999?text=Hello%20Stone%20Gallery,%20I%20would%20like%20to%20inquire%20about%20stone%20availability%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 px-4 text-xs font-mono tracking-widest uppercase font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP SHOWROOM</span>
            </a>
            <a
              href="tel:+919999999999"
              className="w-full flex items-center justify-center space-x-2 border border-[var(--text-primary)] py-3 px-4 text-xs font-mono tracking-widest uppercase text-[var(--text-primary)]"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
