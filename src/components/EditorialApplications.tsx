"use client";

import React from "react";
import Image from "next/image";
import { APPLICATIONS_DATA } from "@/data/editorial";
import { useGallery } from "@/context/GalleryContext";

export function EditorialApplications() {
  const { setCursorLabel } = useGallery();

  return (
    <section className="py-28 md:py-48 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Editorial Title */}
      <div className="mb-20 md:mb-32">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-3">
          BUILT COMMISSIONS
        </span>
        <h2 className="font-serif-luxury text-[13vw] sm:text-[10vw] md:text-[8vw] leading-[0.9] uppercase font-light text-[var(--text-primary)]">
          STONE <br />
          IN <br />
          USE.
        </h2>
      </div>

      {/* Asymmetric Art-Directed Layout */}
      <div className="space-y-24 md:space-y-40">
        {/* Row 1: Kitchen (Large vertical) & Floor (Horizontal offset) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div
            className="lg:col-span-7 group cursor-pointer"
            onMouseEnter={() => setCursorLabel("KITCHEN")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/10">
              <Image
                src={APPLICATIONS_DATA[0].image}
                alt={APPLICATIONS_DATA[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif-luxury text-4xl sm:text-5xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[0].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[0].subtitle}
              </span>
            </div>
          </div>

          <div
            className="lg:col-span-5 lg:pt-24 group cursor-pointer"
            onMouseEnter={() => setCursorLabel("FLOOR")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
              <Image
                src={APPLICATIONS_DATA[1].image}
                alt={APPLICATIONS_DATA[1].name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif-luxury text-3xl sm:text-4xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[1].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[1].subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Door Frame Chowkhat & Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div
            className="lg:col-span-5 group cursor-pointer"
            onMouseEnter={() => setCursorLabel("DOOR")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/10">
              <Image
                src={APPLICATIONS_DATA[2].image}
                alt={APPLICATIONS_DATA[2].name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif-luxury text-3xl sm:text-4xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[2].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[2].subtitle}
              </span>
            </div>
          </div>

          <div
            className="lg:col-span-7 lg:pb-20 group cursor-pointer"
            onMouseEnter={() => setCursorLabel("WALL")}
            onMouseLeave={() => setCursorLabel(null)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
              <Image
                src={APPLICATIONS_DATA[3].image}
                alt={APPLICATIONS_DATA[3].name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <h3 className="font-serif-luxury text-4xl sm:text-5xl uppercase font-light text-[var(--text-primary)]">
                {APPLICATIONS_DATA[3].name}
              </h3>
              <span className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-wider">
                {APPLICATIONS_DATA[3].subtitle}
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Full Width Outdoor */}
        <div
          className="group cursor-pointer"
          onMouseEnter={() => setCursorLabel("OUTDOOR")}
          onMouseLeave={() => setCursorLabel(null)}
        >
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full overflow-hidden bg-black/10">
            <Image
              src={APPLICATIONS_DATA[4].image}
              alt={APPLICATIONS_DATA[4].name}
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-5 flex items-baseline justify-between">
            <h3 className="font-serif-luxury text-4xl sm:text-5xl uppercase font-light text-[var(--text-primary)]">
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
