"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { BUSINESS_INFO } from "@/data/business";
import { Phone, MessageSquare, MapPin, Navigation, Star } from "lucide-react";

export function SpaFooter() {
  return (
    <footer className="bg-stone-950 text-white border-t border-white/10 pt-16 pb-24 md:pb-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Logo variant="horizontal" />
            <p className="mt-4 text-xs font-mono uppercase text-amber-400">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="mt-3 text-xs text-stone-400 font-light max-w-sm leading-relaxed">
              Physical stone yard & showroom in Lucknow dealing in genuine Granite countertops, termite-proof door chowkhats, Italian & Indian marble, Kota stone, and vitrified tiles.
            </p>

            <div className="mt-5 flex items-center space-x-2 text-xs font-mono text-stone-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{BUSINESS_INFO.rating} / 5.0</span>
              <span className="text-stone-400">({BUSINESS_INFO.reviewCount} Google Maps Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-4">
              MATERIALS IN STOCK
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-mono text-stone-300">
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Rajasthan Z-Black Granite
              </a>
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Granite Door Chowkhats
              </a>
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Italian & Indian Marble
              </a>
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Kota Stone Flooring
              </a>
              <a href="#products" className="hover:text-amber-400 transition-colors">
                Vitrified Wall & Floor Tiles
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-4">
              SHOWROOM LOCATION & CONTACT
            </h4>
            <div className="space-y-3 text-xs font-mono text-stone-300">
              <p className="text-white font-medium">
                {BUSINESS_INFO.fullAddress}
              </p>
              <p className="text-[11px] text-stone-400">
                Timings: {BUSINESS_INFO.timings}
              </p>

              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                  className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call: {BUSINESS_INFO.phones[0].display}</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-emerald-400 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: +91 78979 31966</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-stone-400 hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} STONE GALLERY (स्टोन गैलरी) · KAMTA, LUCKNOW
          </div>
          <div>
            ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
