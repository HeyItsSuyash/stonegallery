"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SHOWROOM_INFO } from "@/data/editorial";
import { useGallery } from "@/context/GalleryContext";

export function EditorialShowroom() {
  const { materialData, setCursorLabel } = useGallery();
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="showroom" className="py-28 md:py-48 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Title */}
      <div className="mb-16 md:mb-24">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-3">
          SHOWROOM YARD · LUCKNOW
        </span>
        <h2 className="font-serif-luxury text-[13vw] sm:text-[10vw] md:text-[8vw] leading-[0.9] uppercase font-light text-[var(--text-primary)]">
          SEE IT <br />
          IN PERSON.
        </h2>
      </div>

      {/* Large Showroom Photograph / Map Viewport */}
      <div
        className="relative aspect-[16/9] w-full overflow-hidden bg-black/10 select-none group"
        onMouseEnter={() => setCursorLabel(showMap ? "MAP" : "SHOWROOM")}
        onMouseLeave={() => setCursorLabel(null)}
      >
        {!showMap ? (
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
            alt="Stone Gallery Showroom Yard Lucknow"
            fill
            sizes="100vw"
            className="object-cover filter brightness-90 transition-transform duration-1000 ease-out group-hover:scale-102"
          />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7117.832073218969!2d81.01124119357908!3d26.87440859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3af24ea81c1%3A0x1cd7f1b20353b9e!2sStone%20Gallery!5e0!3m2!1sen!2sin!4v1791368432427!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Stone Gallery Lucknow Google Maps"
            className="w-full h-full"
          />
        )}

        <button
          onClick={() => setShowMap(!showMap)}
          className="absolute top-6 right-6 px-4 py-2 bg-[var(--bg-primary)]/90 backdrop-blur-md text-[var(--text-primary)] text-[10px] font-mono tracking-widest uppercase border border-[var(--border-color)] hover:opacity-80 transition-opacity"
        >
          {showMap ? "SHOW PHOTOGRAPH" : "VIEW GOOGLE MAP"}
        </button>
      </div>

      {/* Copy & Details Block */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-7">
          <p className="font-serif-luxury text-2xl sm:text-3xl text-[var(--text-primary)] font-light leading-snug">
            &ldquo;Stone changes under real light. Come see the slab before you choose it.&rdquo;
          </p>

          {/* Understated Primary CTA */}
          <div className="mt-8">
            <a
              href={SHOWROOM_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] uppercase text-[var(--text-primary)] hover:opacity-60 transition-opacity border-b border-current pb-1"
            >
              <span>VISIT SHOWROOM →</span>
            </a>
          </div>
        </div>

        {/* Small Address & Understated Action Links */}
        <div className="md:col-span-5 text-xs text-[var(--text-secondary)] font-light space-y-4">
          <div className="space-y-1">
            {SHOWROOM_INFO.address.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center gap-6 text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--text-primary)]">
            <a
              href={SHOWROOM_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              GET DIRECTIONS
            </a>
            <a
              href={`tel:${SHOWROOM_INFO.phone1}`}
              className="hover:opacity-60 transition-opacity"
            >
              CALL
            </a>
            <a
              href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
                "Hi, I would like to visit the Stone Gallery showroom on Ayodhya Road today."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Section 14: Contact / Material Enquiry */}
      <div id="contact" className="mt-28 md:mt-40 pt-16 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-baseline justify-between gap-6">
        <div>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-1">
            DIRECT INQUIRY
          </span>
          <p className="font-serif-luxury text-2xl md:text-3xl uppercase font-light text-[var(--text-primary)]">
            Active Selection: {materialData.name}
          </p>
        </div>

        <a
          href={`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(
            `Hi, I found ${materialData.name} on the Stone Gallery website and would like to enquire about it.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] uppercase text-[var(--text-primary)] hover:opacity-60 transition-opacity border-b border-current pb-1 whitespace-nowrap"
        >
          <span>ENQUIRE ABOUT THIS MATERIAL →</span>
        </a>
      </div>
    </section>
  );
}
