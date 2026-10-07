"use client";

import React from "react";
import { BUSINESS_INFO } from "@/data/business";
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldCheck, Star } from "lucide-react";

export function ShowroomMapSection() {
  return (
    <section id="showroom-map" className="py-20 md:py-32 px-6 md:px-12 bg-stone-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold block mb-2">
            LOCATION & CONTACT
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl uppercase tracking-tight">
            VISIT OUR LUCKNOW SHOWROOM.
          </h2>
          <p className="mt-3 text-sm text-stone-300 font-light">
            We invite you to inspect full slabs under natural sunlight at our Ayodhya Road yard before purchasing. Compare grain, polish, and edge thickness in person.
          </p>
        </div>

        {/* Two-column layout: Info Card & Embedded Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 p-8 border border-white/10 bg-stone-900 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  VERIFIED LOCAL SHOWROOM
                </span>
                <div className="flex items-center space-x-1 text-xs font-mono bg-black/40 px-2 py-0.5 border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{BUSINESS_INFO.rating}</span>
                  <span className="text-stone-400 text-[10px]">({BUSINESS_INFO.reviewCount} on Google)</span>
                </div>
              </div>

              <h3 className="font-serif-luxury text-3xl uppercase text-white">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs font-mono text-stone-400 uppercase mt-0.5">
                {BUSINESS_INFO.hindiName} · {BUSINESS_INFO.tagline}
              </p>

              {/* Exact Address */}
              <div className="mt-6 p-4 border border-white/10 bg-stone-950 text-xs text-stone-300 space-y-1.5 font-light leading-relaxed">
                <p className="font-semibold text-white text-sm">
                  Dharm Kanta – Ayodhya Road
                </p>
                <p>Opposite Sudha Petrol Pump, Adjoining Gard</p>
                <p>Shankar Puri, Kamta</p>
                <p className="text-white font-medium">
                  Lucknow, Uttar Pradesh 226028
                </p>
                <div className="pt-2 mt-2 border-t border-white/10 text-[11px] text-stone-400 font-mono">
                  {BUSINESS_INFO.landmark}
                </div>
              </div>

              {/* Timings & Highlights */}
              <div className="mt-6 space-y-2.5 text-xs font-mono text-stone-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-white">{BUSINESS_INFO.timings}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Wholesale & retail rates with on-site crane loading</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white text-stone-950 text-xs font-mono tracking-widest uppercase hover:bg-amber-400 transition-colors flex items-center justify-center space-x-2 font-bold shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>OPEN IN GOOGLE MAPS →</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                  className="py-3 px-3 border border-white/20 bg-stone-950 text-white text-xs font-mono tracking-wider uppercase hover:border-amber-400 transition-colors flex items-center justify-center space-x-2 text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>CALL {BUSINESS_INFO.phones[0].display}</span>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    "Hello Stone Gallery, I would like to visit your Ayodhya Road showroom today."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 text-center font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* User's Exact Embedded Google Maps Iframe */}
          <div className="lg:col-span-7 border border-white/10 bg-stone-900 overflow-hidden shadow-2xl flex flex-col min-h-[420px]">
            <div className="p-3 bg-stone-900 border-b border-white/10 flex items-center justify-between text-xs font-mono text-stone-300">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE LOCATION EMBED</span>
              </div>
              <span className="text-amber-400 text-[11px]">PLUS CODE: {BUSINESS_INFO.plusCode}</span>
            </div>

            <div className="relative w-full h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7117.832073218969!2d81.01124119357908!3d26.87440859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3af24ea81c1%3A0x1cd7f1b20353b9e!2sStone%20Gallery!5e0!3m2!1sen!2sin!4v1791368432427!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Stone Gallery Lucknow Google Maps Location"
                className="w-full h-full min-h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
