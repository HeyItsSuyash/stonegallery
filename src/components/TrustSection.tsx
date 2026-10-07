"use client";

import React from "react";
import { Check, Shield, Sun, Truck } from "lucide-react";

export function TrustSection() {
  const points = [
    {
      title: "Full Slab Physical Inspection",
      desc: "Examine complete slabs in daylight before purchasing—not tiny corner sample tiles. Water splash testing available to preview mirror polish.",
    },
    {
      title: "Batch & Vein Consistency",
      desc: "We help you select consecutive slabs cut from the same block to ensure uniform color and veining across your kitchen, room, or door frames.",
    },
    {
      title: "Direct Physical Showroom Yard",
      desc: "Conveniently located along Ayodhya Road, Kamta, Lucknow with crane and loading facilities for safe transport to your site.",
    },
    {
      title: "Honest Application Advice",
      desc: "Transparent guidance on which stone is suitable for high-stain kitchen counters versus anti-slip outdoor paving or termite-proof door frames.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[10px] font-mono tracking-[0.35em] text-[var(--accent)] uppercase mb-3">
              05 / TRANSPARENT BUYING PROCESS
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-primary)] font-light uppercase">
              THE SHOWROOM <br />
              <span className="italic font-normal">STANDARD.</span>
            </h2>
          </div>

          <div className="max-w-md text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
            WE BELIEVE BUYING NATURAL STONE SHOULD BE TRANSPARENT, TACTILE AND TRUSTWORTHY.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, i) => (
            <div
              key={i}
              className="p-6 border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase block mb-3">
                  PILLAR 0{i + 1}
                </span>
                <h3 className="font-serif-luxury text-xl text-[var(--text-primary)] mb-3">
                  {pt.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
