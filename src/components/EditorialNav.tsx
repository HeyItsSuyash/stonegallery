"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";
import { SHOWROOM_INFO } from "@/data/editorial";

export function EditorialNav() {
  const { setCursorLabel } = useGallery();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled
          ? "py-4 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] text-[var(--text-primary)]"
          : "py-7 bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Brand Monogram + Typography */}
        <Link
          href="/"
          className="flex items-center space-x-3.5 group"
          onMouseEnter={() => setCursorLabel("HOME")}
          onMouseLeave={() => setCursorLabel(null)}
        >
          <div className="relative w-8 h-8 rounded-sm overflow-hidden bg-black/40 border border-white/20 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Stone Gallery"
              fill
              sizes="32px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <span className="font-serif-luxury text-xl md:text-2xl tracking-[0.15em] uppercase font-light">
            STONE GALLERY
          </span>
        </Link>

        {/* Center/Right Minimal Navigation */}
        <nav className="flex items-center space-x-6 md:space-x-10 text-[11px] font-mono tracking-[0.25em] uppercase">
          <a
            href="#materials"
            className="hover:opacity-60 transition-opacity"
            onMouseEnter={() => setCursorLabel("VIEW")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            MATERIALS
          </a>
          <a
            href="#showroom"
            className="hover:opacity-60 transition-opacity hidden sm:inline"
            onMouseEnter={() => setCursorLabel("VISIT")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            SHOWROOM
          </a>
          <a
            href="#contact"
            className="hover:opacity-60 transition-opacity hidden sm:inline"
            onMouseEnter={() => setCursorLabel("CONTACT")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            CONTACT
          </a>

          {/* Far Right: ENQUIRE */}
          <a
            href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
              "Hi, I would like to enquire about stone slabs at Stone Gallery Lucknow."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-2 border-l border-current/20 hover:opacity-60 transition-opacity font-medium"
            onMouseEnter={() => setCursorLabel("ENQUIRE")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            ENQUIRE →
          </a>
        </nav>
      </div>
    </header>
  );
}
