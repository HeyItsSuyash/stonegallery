"use client";

import React from "react";
import Image from "next/image";
import { BUSINESS_INFO } from "@/data/business";
import { Phone, MessageSquare, MapPin, Star, ShieldCheck, Clock, ArrowDown } from "lucide-react";

export function SpaHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Showroom Slab Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=2000&q=85"
          alt="Stone Gallery Lucknow Marble and Granite Slabs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.4] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full pt-28 pb-16 flex flex-col justify-between">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-300 border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-white font-medium">AYODHYA ROAD, KAMTA · LUCKNOW</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-bold text-white">{BUSINESS_INFO.rating}</span>
              <span className="text-stone-400">({BUSINESS_INFO.reviewCount} Google Reviews)</span>
            </div>
            <span className="hidden sm:inline text-stone-500">|</span>
            <div className="hidden sm:flex items-center space-x-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BUSINESS_INFO.timings}</span>
            </div>
          </div>
        </div>

        {/* Central Headline & Business Core */}
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-wider uppercase rounded mb-4">
            Physical Showroom & Wholesale Yard
          </span>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] uppercase font-light text-white tracking-tight">
            STONE GALLERY <br />
            <span className="italic font-normal text-stone-300">
              LUCKNOW
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-3xl leading-relaxed">
            Your trusted local dealer for <strong className="text-white font-semibold">Granite Slabs & Kitchen Countertops</strong>, <strong className="text-white font-semibold">Termite-Proof Granite Door Frames (Chowkhats)</strong>, <strong className="text-white font-semibold">Indian & Italian Marble</strong>, <strong className="text-white font-semibold">Kota Stone</strong>, and <strong className="text-white font-semibold">Vitrified Tiles</strong>.
          </p>

          <p className="mt-2 text-xs sm:text-sm text-stone-400 font-mono">
            Direct whole-slab inspection in natural sunlight. Custom machine cutting & direct site delivery across Lucknow.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="py-4 px-6 bg-white text-stone-950 text-xs font-mono tracking-widest uppercase hover:bg-amber-400 transition-colors flex items-center space-x-2.5 font-bold shadow-lg"
            >
              <Phone className="w-4 h-4 text-stone-950" />
              <span>CALL NOW: {BUSINESS_INFO.phones[0].display}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                "Hello Stone Gallery, I am planning a project in Lucknow and would like to check prices and slab availability."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-6 bg-emerald-600 text-white text-xs font-mono tracking-widest uppercase hover:bg-emerald-700 transition-colors flex items-center space-x-2.5 font-semibold shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP INQUIRY</span>
            </a>

            <a
              href="#showroom-map"
              className="py-4 px-6 border border-white/40 bg-stone-900/60 backdrop-blur-md text-white text-xs font-mono tracking-widest uppercase hover:bg-white hover:text-stone-950 transition-colors flex items-center space-x-2.5 font-medium"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>SHOWROOM LOCATION</span>
            </a>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-stone-300">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>100% Verified Quality Slabs</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Daylight Slab Inspection</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Pre-Grooved Granite Chowkhats</span>
          </div>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Truck Delivery Across Lucknow</span>
          </div>
        </div>
      </div>
    </section>
  );
}
