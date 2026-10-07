"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ALL_PRODUCTS, ProductItem } from "@/data/materials";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { MessageSquare, Check, ShieldCheck, ArrowUpRight } from "lucide-react";

export function ProductDiscovery() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="products"
      className="py-24 md:py-40 px-6 md:px-12 bg-[var(--bg-primary)] transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <span>03 / PRODUCT DISCOVERY</span>
              <div className="w-8 h-[1px] bg-[var(--accent)]" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase leading-[0.92]">
              MATERIAL & <br />
              <span className="italic font-normal">PRODUCT CATALOGUE.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase leading-relaxed">
            DISCOVER POPULAR GRANITES, MARBLES AND NATURAL STONE SLABS ASSOCIATED WITH OUR LUCKNOW SHOWROOM YARD.
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-4 mb-10 border-b border-[var(--border-subtle)]">
          {[
            { id: "all", label: "ALL MATERIALS" },
            { id: "granite", label: "GRANITE" },
            { id: "marble", label: "MARBLE" },
            { id: "natural-stone", label: "NATURAL STONE" },
          ].map((cat) => {
            const isCur = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 border ${
                  isCur
                    ? "border-[var(--accent)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold shadow-sm"
                    : "border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((prod) => {
            const whatsappText = `Hi, I found ${prod.name} on your website and would like to know more about availability and pricing.`;
            const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(
              whatsappText
            )}`;

            return (
              <div
                key={prod.id}
                className="group border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 shadow-[var(--slab-shadow)] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
                onMouseEnter={() => setCursor("explore", prod.name)}
                onMouseLeave={resetCursor}
              >
                {/* Category & Status */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)] mb-3">
                  <span>{prod.categoryLabel}</span>
                  <span className="text-[var(--accent)] font-semibold">VERIFIED PRODUCT</span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900 border border-[var(--border-subtle)] mb-5">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Finish Badge */}
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 text-white text-[9px] font-mono tracking-widest uppercase">
                    {prod.finish}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {prod.name}
                  </h3>

                  <div className="mt-2 text-xs font-mono text-[var(--text-muted)] uppercase">
                    BEST FOR: <span className="text-[var(--text-primary)]">{prod.bestFor}</span>
                  </div>

                  <p className="mt-3 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                {/* WhatsApp Action with Pre-filled Message */}
                <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono tracking-widest uppercase hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>ENQUIRE ON WHATSAPP →</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
