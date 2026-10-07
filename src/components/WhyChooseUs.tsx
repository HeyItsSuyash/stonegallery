"use client";

import React from "react";
import { Sun, ShieldCheck, Tag, Truck } from "lucide-react";

const REASONS = [
  {
    icon: Sun,
    title: "Daylight Yard Inspection",
    description: "Never buy from a 4-inch sample box. Walk through our Kamta yard and inspect whole unbroken slabs in natural sunlight to see true color, veins, and crystal luster.",
  },
  {
    icon: ShieldCheck,
    title: "18mm Calibrated Thickness",
    description: "No hollow sounding spots or uneven thickness. Our slabs and granite chowkhats are gauge-calibrated for level, crack-free installation.",
  },
  {
    icon: Tag,
    title: "Direct Showroom Rates",
    description: "Direct wholesale and retail pricing. Transparent per-square-foot and running-foot rates for homeowners, architects, and building contractors.",
  },
  {
    icon: Truck,
    title: "Crane Loading & Site Delivery",
    description: "On-site mechanized crane loading with wooden spacers to prevent transit damage. Timely delivery across all areas of Lucknow and surrounding districts.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-6 md:px-12 bg-stone-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold block mb-2">
            WHY STONE GALLERY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl uppercase tracking-tight">
            WHY LUCKNOW BUYS FROM US.
          </h2>
          <p className="mt-3 text-sm text-stone-300 font-light">
            We operate a real physical yard where you inspect the exact slab that gets loaded onto your truck.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="p-6 border border-white/10 bg-stone-900 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-luxury text-xl text-white uppercase mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed">
                    {r.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
