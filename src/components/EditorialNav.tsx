"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SHOWROOM_INFO } from "@/data/editorial";

export function EditorialNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#materials", label: "MATERIALS", number: "01" },
    { href: "#applications", label: "APPLICATIONS", number: "02" },
    { href: "#reviews", label: "REVIEWS", number: "03" },
    { href: "#showroom", label: "SHOWROOM", number: "04" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "py-3 sm:py-4 bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] text-[var(--text-primary)] shadow-sm"
            : "py-4 sm:py-6 bg-gradient-to-b from-black/85 via-black/35 to-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Monogram + Typography (Actual logo.png, no box) */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2.5 sm:space-x-3.5 group select-none min-w-0"
          >
            <Logo size="md" variant="horizontal" />
          </Link>

          {/* Desktop Navigation (>= 768px) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs font-mono tracking-[0.22em] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 group/nav transition-colors hover:text-[var(--text-primary)]"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </a>
            ))}

            {/* Desktop Button for Enquiry */}
            <a
              href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                "Hi, I would like to enquire about stone slabs at Stone Gallery Lucknow."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-current/45 hover:border-current hover:bg-white/10 text-xs font-mono tracking-[0.2em] uppercase rounded-xs transition-all duration-300 font-medium"
            >
              ENQUIRE
            </a>
          </nav>

          {/* Mobile Actions (< 768px): Prominent Enquire Button + Compact Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                "Hi, I would like to enquire about stone slabs at Stone Gallery Lucknow."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-current/50 hover:bg-white/10 text-xs font-mono tracking-[0.16em] uppercase rounded-xs font-medium"
            >
              ENQUIRE
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
            >
              <span
                className={`w-5 h-[1.5px] bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-[1.5px] bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Compact Mobile Dropdown Menu (NOT FULL PAGE) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-primary)]/98 backdrop-blur-2xl border-b border-[var(--border-subtle)] shadow-2xl px-5 py-4 z-40 animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-serif-luxury uppercase tracking-wider text-[var(--text-primary)] hover:text-white border-b border-[var(--border-subtle)]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">{link.number} →</span>
                </a>
              ))}
            </nav>

            <div className="mt-3 pt-3 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
              <span>
                TEL:{" "}
                <a
                  href={`tel:${SHOWROOM_INFO.phone1}`}
                  className="text-[var(--text-primary)] hover:underline"
                >
                  {SHOWROOM_INFO.phone1}
                </a>
              </span>
              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hi Stone Gallery, I would like to consult on stone options."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white text-black font-semibold rounded-xs uppercase tracking-wider text-[11px]"
              >
                WHATSAPP →
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
