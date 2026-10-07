"use client";

import React from "react";
import Image from "next/image";
import { APPLICATIONS_DATA } from "@/data/editorial";

export function EditorialApplications() {
  return (
    <section id="applications" className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--border-subtle)]">
      {/* Editorial Title */}
      <div className="mb-12 sm:mb-16 md:mb-24">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-3">
          BUILT COMMISSIONS & DETAIL
        </span>
        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl leading-[0.95] uppercase font-light text-[var(--text-primary)]">
          STONE <br />
          IN <br />
          USE.
        </h2>
      </div>

      {/* Asymmetric Art-Directed Layout */}
      <div className="space-y-16 sm:space-y-20 md:space-y-32">
        {/* Row 1: Kitchen (Large vertical) & Floor (Horizontal offset) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-center">
          <div className="lg:col-span-7 group cursor-pointer">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/10 rounded-xs">
              <Image
                src={APPLICATIONS_DATA[0].image}
                alt={APPLICATIONS_DATA[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[0].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[0].subtitle}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-20 group cursor-pointer">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10 rounded-xs">
              <Image
                src={APPLICATIONS_DATA[1].image}
                alt={APPLICATIONS_DATA[1].name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[1].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[1].subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Door Frame Chowkhat & Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-16 items-center">
          <div className="lg:col-span-5 group cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/10 rounded-xs">
              <Image
                src={APPLICATIONS_DATA[2].image}
                alt={APPLICATIONS_DATA[2].name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[2].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[2].subtitle}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pb-16 group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10 rounded-xs">
              <Image
                src={APPLICATIONS_DATA[3].image}
                alt={APPLICATIONS_DATA[3].name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[3].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[3].subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Full Width Outdoor */}
        <div className="group cursor-pointer">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-black/10 rounded-xs">
            <Image
              src={APPLICATIONS_DATA[4].image}
              alt={APPLICATIONS_DATA[4].name}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl uppercase font-light text-[var(--text-primary)]">
              {APPLICATIONS_DATA[4].name}
            </h3>
            <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
              {APPLICATIONS_DATA[4].subtitle}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
