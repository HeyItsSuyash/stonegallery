"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SHOWROOM_INFO } from "@/data/editorial";

export function EditorialNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] text-[var(--text-primary)] shadow-sm"
          : "py-6 bg-gradient-to-b from-black/80 via-black/30 to-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Monogram + Typography (New Logo, No Box) */}
        <Link
          href="/"
          className="flex items-center space-x-3.5 group select-none"
        >
          <Logo size="md" variant="horizontal" />
        </Link>

        {/* Center/Right Minimal Navigation with Animated Bottom Border Highlights */}
        <nav className="flex items-center space-x-6 md:space-x-8 text-[11px] font-mono tracking-[0.22em] uppercase">
          <a
            href="#materials"
            className="relative py-1 group/nav transition-colors"
          >
            <span>MATERIALS</span>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left ease-out" />
          </a>

          <a
            href="#applications"
            className="relative py-1 group/nav transition-colors hidden sm:inline-block"
          >
            <span>APPLICATIONS</span>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left ease-out" />
          </a>

          <a
            href="#reviews"
            className="relative py-1 group/nav transition-colors hidden md:inline-block"
          >
            <span>REVIEWS</span>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left ease-out" />
          </a>

          <a
            href="#showroom"
            className="relative py-1 group/nav transition-colors"
          >
            <span>SHOWROOM</span>
            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left ease-out" />
          </a>

          {/* Far Right: Ghost Button for Enquiry (No Arrow) */}
          <a
            href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
              "Hi, I would like to enquire about stone slabs at Stone Gallery Lucknow."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-current/35 hover:border-current hover:bg-white/10 text-[10px] font-mono tracking-[0.2em] uppercase rounded-xs transition-all duration-300 font-medium"
          >
            ENQUIRE
          </a>
        </nav>
      </div>
    </header>
  );
}
