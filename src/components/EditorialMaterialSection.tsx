"use client";

import React from "react";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";
import { MATERIAL_FAMILIES } from "@/data/editorial";
import { SHOWROOM_INFO } from "@/data/editorial";

export function EditorialMaterialSection() {
  const { activeMaterial, materialData, setActiveMaterial, setCursorLabel } = useGallery();

  const materialsList: Array<"marble" | "granite" | "stone"> = ["marble", "granite", "stone"];

  return (
    <section id="materials" className="py-28 md:py-48 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Huge Editorial Statement */}
      <div id="statement" className="mb-24 md:mb-36">
        <h2 className="font-serif-luxury text-[13vw] sm:text-[10vw] md:text-[8vw] leading-[0.9] uppercase font-light text-[var(--text-primary)]">
          FIND <br />
          YOUR <br />
          STONE.
        </h2>
      </div>

      {/* Three Enormous Material Images (Asymmetric Editorial Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-36">
        {materialsList.map((matKey) => {
          const mat = MATERIAL_FAMILIES[matKey];
          const isSelected = activeMaterial === matKey;

          return (
            <div
              key={matKey}
              onClick={() => setActiveMaterial(matKey)}
              onMouseEnter={() => {
                setActiveMaterial(matKey);
                setCursorLabel("VIEW");
              }}
              onMouseLeave={() => setCursorLabel(null)}
              className="cursor-pointer group select-none"
            >
              {/* Enormous Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/10">
                <Image
                  src={mat.heroImage}
                  alt={mat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover transition-all duration-1000 ease-out group-hover:scale-105 ${
                    isSelected ? "filter brightness-100 contrast-105" : "filter brightness-80"
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>

              {/* Minimal Typography below / on image */}
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-serif-luxury text-3xl md:text-4xl uppercase text-[var(--text-primary)] font-light">
                  {mat.name}
                </h3>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase">
                  {isSelected ? "SELECTED" : "EXPLORE"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Material Experience / Digital Catalogue */}
      <div className="pt-20 border-t border-[var(--border-color)]">
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-2">
              DIGITAL MATERIAL CATALOGUE
            </span>
            <h3 className="font-serif-luxury text-6xl sm:text-8xl md:text-9xl uppercase font-light text-[var(--text-primary)] leading-none">
              {materialData.name}
            </h3>
          </div>
          <p className="text-sm md:text-base font-serif-luxury italic text-[var(--text-secondary)] max-w-md">
            &ldquo;{materialData.caption}&rdquo;
          </p>
        </div>

        {/* Selected Varieties: Horizontal Editorial Gallery */}
        <div
          className="flex space-x-8 md:space-x-12 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory"
          onMouseEnter={() => setCursorLabel("DRAG")}
          onMouseLeave={() => setCursorLabel(null)}
        >
          {materialData.varieties.map((variety) => (
            <div
              key={variety.name}
              className="flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[35vw] snap-start group"
            >
              {/* Big Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/10">
                <Image
                  src={variety.image}
                  alt={variety.name}
                  fill
                  sizes="(max-width: 768px) 80vw, 35vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & minimal note directly beside/below image */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-serif-luxury text-2xl md:text-3xl uppercase font-light text-[var(--text-primary)]">
                    {variety.name}
                  </h4>
                  <p className="text-[11px] font-mono tracking-wider uppercase text-[var(--text-muted)] mt-1">
                    {variety.origin}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-2 max-w-sm leading-relaxed">
                    {variety.note}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                    `Hi, I found ${variety.name} on the Stone Gallery website and would like to enquire about it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-primary)] hover:opacity-60 transition-opacity whitespace-nowrap pt-1"
                >
                  ENQUIRE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
