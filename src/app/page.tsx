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
import { RefinedCursor } from "@/components/RefinedCursor";

export default function HomePage() {
  return (
    <GalleryProvider>
      {/* Desktop Refined Text Cursor Badge */}
      <RefinedCursor />

      {/* Minimal Floating Navigation */}
      <EditorialNav />

      {/* Main Single Page Experience */}
      <main className="relative flex flex-col w-full overflow-hidden">
        {/* Section 01: Full-Screen Cinematic Macro Hero */}
        <EditorialHero />

        {/* Section 02 & 03: Editorial Statement + Three Massive Materials + Digital Catalogue */}
        <EditorialMaterialSection />

        {/* Section 04: Signature Scroll Progression (MATERIAL -> SURFACE -> SPACE) */}
        <SignatureScrollSection />

        {/* Section 05: Stone in Use (Applications) */}
        <EditorialApplications />

        {/* Section 06: Separate Verified Testimonials Section */}
        <EditorialTestimonials />

        {/* Section 07: See It In Person (Showroom Yard & Direct Enquiry) */}
        <EditorialShowroom />
      </main>

      {/* Monograph Footer with Icons, Maps Embed & Contact Details */}
      <EditorialFooter />
    </GalleryProvider>
  );
}
