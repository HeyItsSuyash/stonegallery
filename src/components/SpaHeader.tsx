"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BUSINESS_INFO } from "@/data/business";
import { Phone, MessageSquare, MapPin, Menu, X } from "lucide-react";

export function SpaHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-stone-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "py-5 bg-gradient-to-b from-stone-950/90 via-stone-950/40 to-transparent"
        } text-white`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with clean lockup */}
          <Link href="/" className="flex items-center space-x-3">
            <Logo variant="horizontal" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase">
            <a href="#products" className="text-stone-300 hover:text-white transition-colors">
              MATERIALS & STOCK
            </a>
            <a href="#showroom-map" className="text-stone-300 hover:text-white transition-colors">
              SHOWROOM MAP
            </a>
            <a href="#contact" className="text-stone-300 hover:text-white transition-colors">
              GET A QUOTE
            </a>
            <a href="#reviews" className="text-stone-300 hover:text-white transition-colors">
              REVIEWS ★3.9
            </a>
          </nav>

          {/* Right Direct Contact CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello Stone Gallery, I would like to check prices and slab availability."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center space-x-1.5 font-semibold shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="px-3.5 py-2 border border-white/30 hover:border-amber-400 hover:text-amber-300 text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center space-x-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="p-2 border border-white/20 text-white"
              aria-label="Call Showroom"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Open menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950 p-6 flex flex-col justify-between md:hidden animate-fadeIn text-white">
          <div className="pt-4 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-sm font-mono tracking-wider uppercase pt-4">
              <a
                href="#products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-white/5"
              >
                MATERIALS & PRODUCTS IN STOCK
              </a>
              <a
                href="#showroom-map"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-white/5"
              >
                SHOWROOM & GOOGLE MAPS
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-white/5"
              >
                GET A PRICE QUOTE
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 flex items-center space-x-1"
              >
                <span>GOOGLE REVIEWS</span>
                <span className="text-amber-400">★ 3.9</span>
              </a>
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-emerald-600 text-white text-xs font-mono tracking-widest uppercase font-bold flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="w-full py-3.5 border border-white/20 text-white text-xs font-mono tracking-widest uppercase font-medium flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>CALL {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
