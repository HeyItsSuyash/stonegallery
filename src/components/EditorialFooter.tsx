"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SHOWROOM_INFO } from "@/data/editorial";

export function EditorialFooter() {
  return (
    <footer id="contact" className="pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-14 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--border-subtle)] text-[var(--text-primary)]">
      {/* Top Section: Brand + Contact & Enquiries Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-14 border-b border-[var(--border-subtle)]">
        {/* Brand identity with Logo (NO BOX) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <Logo size="lg" variant="horizontal" />
            </div>

            <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed max-w-sm mb-6">
              Direct quarry procurement of high-density granite, Italian marble, and architectural
              natural stones for residences and commercial spaces.
            </p>

            {/* Social Icons: WhatsApp, Instagram, Google Maps */}
            <div className="flex items-center space-x-4">
              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hi Stone Gallery, I would like to enquire about stone availability and rates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xs border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.961.947 2.796.947 3.179 0 5.767-2.587 5.767-5.766.001-3.187-2.575-5.734-5.767-5.734zm3.385 8.163c-.145.411-.74.757-1.026.787-.279.03-.64.14-2.146-.484-1.801-.746-2.951-2.587-3.04-2.708-.09-.121-.726-.968-.726-1.847 0-.879.461-1.311.626-1.488.164-.176.357-.221.478-.221.121 0 .241.002.346.007.11.005.258-.041.403.308.145.353.496 1.21.539 1.299.044.088.073.192.015.308-.059.117-.088.19-.176.293s-.188.232-.268.312c-.089.088-.182.185-.078.364.104.179.462.763.992 1.235.683.608 1.258.796 1.437.885.179.088.283.074.388-.045.105-.118.448-.522.569-.701.12-.179.24-.149.403-.089.164.059 1.04.49 1.218.579.179.089.298.133.342.208.045.074.045.432-.1.843zm-3.385-10.335c-5.514 0-10 4.486-10 10 0 1.944.561 3.759 1.529 5.301l-1.575 5.753 5.92-1.551c1.487.892 3.23 1.497 5.126 1.497 5.514 0 10-4.486 10-10s-4.486-10-10-10z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href={SHOWROOM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xs border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Google Maps Icon */}
              <a
                href={SHOWROOM_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Location"
                className="w-10 h-10 rounded-xs border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:border-amber-500 hover:text-amber-400 hover:bg-amber-500/10 transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Enquiries & Business Numbers */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-stone-300 font-medium block mb-3">
              DIRECT ENQUIRIES & CONTACT
            </span>

            {/* Email link */}
            <div className="mb-5">
              <span className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">
                OFFICIAL EMAIL:
              </span>
              <a
                href={`mailto:${SHOWROOM_INFO.email}`}
                className="font-mono text-base sm:text-lg text-[var(--text-primary)] font-medium hover:underline decoration-1 underline-offset-4 break-all sm:break-normal"
              >
                {SHOWROOM_INFO.email}
              </a>
            </div>

            {/* Business Phone Numbers */}
            <div className="mb-5">
              <span className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">
                SHOWROOM DIRECT DESK:
              </span>
              <div className="space-y-1 font-mono text-base text-[var(--text-primary)] font-medium">
                <div>
                  <a href={`tel:${SHOWROOM_INFO.phone1}`} className="hover:underline">
                    {SHOWROOM_INFO.phone1}
                  </a>
                </div>
                <div>
                  <a href={`tel:${SHOWROOM_INFO.phone2}`} className="hover:underline">
                    {SHOWROOM_INFO.phone2}
                  </a>
                </div>
              </div>
            </div>

            {/* Physical Yard Location */}
            <div>
              <span className="block text-xs font-mono text-[var(--text-muted)] uppercase mb-1">
                YARD ADDRESS:
              </span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light">
                {SHOWROOM_INFO.address.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-stone-300 font-medium block mb-3">
              ARCHITECTURAL DIRECTORY
            </span>

            <nav className="flex flex-col space-y-3 text-sm font-mono tracking-[0.16em] uppercase text-[var(--text-secondary)]">
              <a href="#materials" className="hover:text-[var(--text-primary)] transition-colors">
                → MATERIALS ARCHIVE
              </a>
              <a href="#applications" className="hover:text-[var(--text-primary)] transition-colors">
                → APPLICATIONS
              </a>
              <a href="#reviews" className="hover:text-[var(--text-primary)] transition-colors">
                → VERIFIED REVIEWS
              </a>
              <a href="#showroom" className="hover:text-[var(--text-primary)] transition-colors">
                → SHOWROOM YARD
              </a>
              <a
                href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hi Stone Gallery, I would like to enquire about stone availability and rates."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors font-medium text-emerald-400"
              >
                → WHATSAPP DESK
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Embedded Store Location on Google Maps */}
      <div className="pt-8 sm:pt-10 pb-6 sm:pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[var(--text-muted)]">
            STORE LOCATION · KAMTA, LUCKNOW
          </span>
          <a
            href={SHOWROOM_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-primary)] hover:opacity-60 transition-opacity underline underline-offset-4"
          >
            OPEN IN GOOGLE MAPS APP ↗
          </a>
        </div>

        <div className="w-full h-[210px] sm:h-[260px] md:h-[300px] rounded-xs overflow-hidden border border-[var(--border-subtle)] bg-stone-900/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7117.832073218969!2d81.01124119357908!3d26.87440859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3af24ea81c1%3A0x1cd7f1b20353b9e!2sStone%20Gallery!5e0!3m2!1sen!2sin!4v1791368432427!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Stone Gallery Lucknow Google Maps Store Location"
            className="w-full h-full filter contrast-105"
          />
        </div>
      </div>

      {/* Bottom Bar: Copyright & Location Note */}
      <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[9px] sm:text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
        <span>© {new Date().getFullYear()} STONE GALLERY LUCKNOW. ALL RIGHTS RESERVED.</span>
        <span>KAMTA YARD · AYODHYA ROAD · OPPOSITE SUDHA PETROL PUMP</span>
      </div>
    </footer>
  );
}
