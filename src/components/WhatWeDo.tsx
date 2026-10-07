"use client";

import React from "react";
import Image from "next/image";
import { PRODUCTS_OFFERED, BUSINESS_INFO } from "@/data/business";
import { Check, MessageSquare, ArrowUpRight } from "lucide-react";

export function WhatWeDo() {
  return (
    <section id="products" className="py-20 md:py-32 px-6 md:px-12 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold block mb-2">
              OUR COMPLETE PRODUCT RANGE
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight">
              WHAT WE SUPPLY & CUT.
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            Everything your home, villa, or commercial site needs in natural stone and architectural tiles. All materials available in ready stock at our Ayodhya Road yard.
          </p>
        </div>

        {/* 6 Core Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_OFFERED.map((prod) => (
            <div
              key={prod.id}
              className="border border-white/10 bg-stone-950 p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-amber-400/60 hover:-translate-y-1"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900 border border-white/5 mb-5">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover filter brightness-95 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-1 text-amber-300 text-[9px] font-mono tracking-wider uppercase">
                    IN STOCK AT YARD
                  </div>
                </div>

                <h3 className="font-serif-luxury text-2xl text-white uppercase">
                  {prod.title}
                </h3>

                <p className="text-xs font-mono text-amber-400/90 mt-1 uppercase">
                  {prod.subtitle}
                </p>

                <p className="mt-3 text-xs text-stone-300 font-light leading-relaxed">
                  {prod.description}
                </p>

                {/* Popular stock varieties */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block mb-2">
                    POPULAR VARIETIES:
                  </span>
                  <div className="space-y-1.5">
                    {prod.popularItems.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-stone-200">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Stone Gallery, I would like to check prices and stock for ${prod.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-white/10 hover:bg-emerald-600 text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>INQUIRE RATES ON WHATSAPP</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
