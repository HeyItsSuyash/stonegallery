"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SHOWROOM_INFO } from "@/data/editorial";

export function EditorialShowroom() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="showroom" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-[var(--border-subtle)]">
      {/* Title */}
      <div className="mb-14 md:mb-20">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-3">
          SHOWROOM YARD · LUCKNOW
        </span>
        <h2 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl leading-[0.95] uppercase font-light text-[var(--text-primary)]">
          SEE IT <br />
          IN PERSON.
        </h2>
      </div>

      {/* Large Showroom Photograph / Map Viewport */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/10 select-none group rounded-xs border border-[var(--border-subtle)]">
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

        <div className="md:col-span-5 space-y-4 text-xs font-mono text-[var(--text-muted)]">
          <div>
            <span className="block text-[10px] tracking-widest uppercase text-[var(--text-primary)] mb-1">
              ADDRESS
            </span>
            <p className="leading-relaxed">{SHOWROOM_INFO.address.join(", ")}</p>
          </div>

          <div className="pt-2">
            <span className="block text-[10px] tracking-widest uppercase text-[var(--text-primary)] mb-1">
              VISITING HOURS
            </span>
            <p>Monday – Sunday: 9:30 AM – 8:00 PM</p>
          </div>

          <div className="pt-2">
            <span className="block text-[10px] tracking-widest uppercase text-[var(--text-primary)] mb-1">
              TELEPHONE
            </span>
            <p>
              <a href={`tel:${SHOWROOM_INFO.phone1}`} className="hover:text-[var(--text-primary)] transition-colors">
                {SHOWROOM_INFO.phone1}
              </a>
              {" / "}
              <a href={`tel:${SHOWROOM_INFO.phone2}`} className="hover:text-[var(--text-primary)] transition-colors">
                {SHOWROOM_INFO.phone2}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
