"use client";

import React from "react";
import Image from "next/image";
import { useGallery } from "@/context/GalleryContext";

export function EditorialHero() {
  const { materialData } = useGallery();

  return (
    <section className="relative h-[100dvh] min-h-[560px] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none">
      {/* Cinematic Stone Macro Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          key={materialData.id}
          src={materialData.macroImage}
          alt="Natural Stone Detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.78] contrast-110 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />
      </div>

      {/* Top spacer for navbar */}
      <div className="relative z-10 pt-24 sm:pt-28" />

      {/* Central / Bottom Editorial Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pb-14 sm:pb-16 flex flex-col justify-end">
        <div className="max-w-4xl">
          <h1 className="font-serif-luxury text-[15vw] sm:text-[12vw] md:text-[9.5vw] leading-[0.88] uppercase tracking-tight text-white font-light">
            STONE <br />
            GALLERY
          </h1>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 border-t border-white/20 pt-5 sm:pt-6">
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-stone-200 font-medium">
              MARBLE · GRANITE · NATURAL STONE
            </p>

            <a
              href="#materials"
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] uppercase text-stone-300 hover:text-white transition-colors"
            >
              <span>EXPLORE</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
