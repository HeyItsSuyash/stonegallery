"use client";

import React from "react";
import { GalleryProvider } from "@/context/GalleryContext";
import { EditorialNav } from "@/components/EditorialNav";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialMaterialSection } from "@/components/EditorialMaterialSection";
import { SignatureScrollSection } from "@/components/SignatureScrollSection";
import { EditorialApplications } from "@/components/EditorialApplications";
import { EditorialTestimonials } from "@/components/EditorialTestimonials";
import { EditorialShowroom } from "@/components/EditorialShowroom";
import { EditorialFooter } from "@/components/EditorialFooter";

export default function HomePage() {
  return (
    <GalleryProvider>
      {/* Minimal Floating Navigation */}
      <EditorialNav />

      {/* Main Single Page Experience */}
      <main className="relative flex flex-col w-full overflow-hidden">
        {/* Section 01: Full-Screen Cinematic Macro Hero */}
        <EditorialHero />

        {/* Section 02: Side-by-Side Find Your Stone + Stone Styles with Arrow Navigation */}
        <EditorialMaterialSection />

        {/* Section 03: Signature Scroll Progression (MATERIAL -> SURFACE -> SPACE) */}
        <SignatureScrollSection />

        {/* Section 04: Stone in Use (Applications) */}
        <EditorialApplications />

        {/* Section 05: Marquee-Based Testimonials */}
        <EditorialTestimonials />

        {/* Section 06: Showroom Yard & Direct Inspection */}
        <EditorialShowroom />
      </main>

      {/* Monograph Footer with Icons, Maps Embed & Contact Details */}
      <EditorialFooter />
    </GalleryProvider>
  );
}
