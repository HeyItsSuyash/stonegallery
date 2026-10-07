"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMaterialTheme } from "@/context/MaterialThemeContext";
import { Eye, Search, Sparkles } from "lucide-react";

const MACRO_DETAILS = [
  {
    title: "Crystalline Fissures",
    tag: "CALCITE FRACTURE",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    description:
      "Healed tectonic fractures filled with translucent secondary quartz. Each micro-vein creates depth through light refraction.",
  },
  {
    title: "Feldspar & Quartz Grain",
    tag: "IGNEOUS MATRIX",
    image:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Granular interlocking magma minerals cooled over millenia deep inside tectonic plutons.",
  },
  {
    title: "Sedimentary Cellular Voids",
    tag: "TRAVERTINE PORES",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Organic gas pockets preserved from thermal spring precipitation, offering warm acoustic dampening and natural softness.",
  },
];

export function MacroGallery() {
  const { setCursor, resetCursor } = useMaterialTheme();
  const [activeDetail, setActiveDetail] = useState(0);
  const [loupePos, setLoupePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const detail = MACRO_DETAILS[activeDetail];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLoupePos({ x, y });
  };

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>WOW 06 / MACRO MATERIAL INSPECTION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[var(--text-primary)] font-light uppercase">
              LOOK <br />
              <span className="italic font-normal">CLOSER.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-serif-luxury text-2xl text-[var(--text-secondary)] italic">
              &ldquo;Imperfection becomes character.&rdquo;
            </p>
            <p className="mt-2 text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
              EXPLORE THE MICROSCOPIC GEOLOGIC SIGNATURES WITH CURSOR MAGNIFICATION.
            </p>
          </div>
        </div>

        {/* Gallery Grid & Magnifier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Loupe Interactive Display */}
          <div
            className="lg:col-span-8 relative aspect-[16/10] w-full overflow-hidden border border-[var(--border-color)] bg-black shadow-[var(--slab-shadow)] cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setIsHovering(true);
              setCursor("macro", "ZOOM");
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              resetCursor();
            }}
          >
            {/* Standard Image */}
            <Image
              src={detail.image}
              alt={detail.title}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />

            {/* Simulated 2.5x Magnifying Loupe Lens on Cursor Hover */}
            {isHovering && (
              <div
                className="absolute w-44 h-44 rounded-full border-2 border-white/80 shadow-2xl pointer-events-none overflow-hidden -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={{
                  left: `${loupePos.x}%`,
                  top: `${loupePos.y}%`,
                  backgroundImage: `url(${detail.image})`,
                  backgroundSize: "280%",
                  backgroundPosition: `${loupePos.x}% ${loupePos.y}%`,
                }}
              >
                <div className="absolute inset-0 bg-radial from-transparent to-black/20" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-widest text-white/90 bg-black/60 px-2 py-0.5 rounded-full uppercase">
                  3.5× MACRO
                </div>
              </div>
            )}

            {/* Corner metadata */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 text-white text-[9px] font-mono tracking-widest uppercase">
              {detail.tag}
            </div>
          </div>

          {/* Selector Thumbnails & Technical Notes */}
          <div className="lg:col-span-4 space-y-4">
            {MACRO_DETAILS.map((item, idx) => {
              const isSelected = idx === activeDetail;
              return (
                <div
                  key={item.title}
                  onClick={() => setActiveDetail(idx)}
                  className={`p-5 border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--bg-primary)] shadow-md"
                      : "border-[var(--border-subtle)] bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-primary)]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono tracking-widest uppercase text-[var(--accent)] mb-1">
                    <span>DETAIL 0{idx + 1}</span>
                    <span>{item.tag}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
