"use client";

import React from "react";
import { MaterialThemeProvider } from "@/context/MaterialThemeContext";
import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { HeroTransformation } from "@/components/HeroTransformation";
import { SlabExperience } from "@/components/SlabExperience";
import { MacroGallery } from "@/components/MacroGallery";
import { HorizontalSlabGallery } from "@/components/HorizontalSlabGallery";
import { ApplicationsStory } from "@/components/ApplicationsStory";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ShowroomExperience } from "@/components/ShowroomExperience";
import { BehindTheMaterial } from "@/components/BehindTheMaterial";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import { MaterialConsultation } from "@/components/MaterialConsultation";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    name: "Stone Gallery",
    alternateName: "Stone Gallery Lucknow - Architectural Stone & Surface Studio",
    url: "https://stonegallery.in",
    logo: "https://stonegallery.in/icon.svg",
    image: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    ],
    description:
      "A premier architectural stone, Italian marble, exotic granite, travertine and onyx surface studio in Lucknow, Uttar Pradesh. Discover earth's raw beauty shaped for timeless living spaces.",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Dharm Kanta – Ayodhya Road, Opposite Sudha Petrol Pump, Adjoining Gard, Shankar Puri, Kamta",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      postalCode: "226028",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.8667",
      longitude: "81.0125",
    },
    telephone: "+919999999999",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 10:00-20:00",
    priceRange: "$$$$",
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Kanpur" },
      { "@type": "City", name: "Ayodhya" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural Stone & Surface Collections",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Italian Marble Slabs (Statuario, Calacatta)" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Exotic Brazilian Granite (Cosmic Black, Titanium)" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Roman Navona Travertine" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Translucent Backlit Persian Onyx" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Engineered Architectural Quartz" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Natural Indian Stone & Sandstone" } },
      ],
    },
  };

  return (
    <MaterialThemeProvider>
      {/* Schema.org SEO for Lucknow Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Tactile Ambient Material Grain */}
      <div className="fixed inset-0 pointer-events-none z-30 bg-grain opacity-40 mix-blend-overlay" />

      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Minimal Floating Navigation */}
      <Navigation />

      {/* Main Experience Flow */}
      <main className="relative flex flex-col w-full">
        {/* WOW 01: Full-Screen Cinematic Macro Stone Hero */}
        <Hero />

        {/* Section 11: Editorial Brand Manifesto */}
        <BrandStatement />

        {/* WOW 02 & Section 10: Hero Transformation (Macro -> Surface -> Slab -> Space) */}
        <HeroTransformation />

        {/* WOW 04 & Section 14: Meet The Slab - Interactive Slab Inspector */}
        <SlabExperience />

        {/* WOW 06 & Section 15: Look Closer - Macro Material Zoom Loupe */}
        <MacroGallery />

        {/* WOW 05 & Section 19: Walking The Gallery - Horizontal Slab Runway */}
        <HorizontalSlabGallery />

        {/* WOW 07 & Section 20-21: From Slab to Space - Spatial Applications */}
        <ApplicationsStory />

        {/* Section 22-23: Stone in Context - Real Lucknow Commissions */}
        <ProjectGallery />

        {/* Section 24-25: See It In Person - Lucknow Showroom Experience */}
        <ShowroomExperience />

        {/* Section 26: Behind The Material - Studio Ethos */}
        <BehindTheMaterial />

        {/* Section 27: For Architects & Interior Designers */}
        <ArchitectsSection />

        {/* Section 28: Interactive Space Consultation */}
        <MaterialConsultation />

        {/* Section 30: Testimonials from Lucknow Homeowners & Architects */}
        <Testimonials />
      </main>

      {/* Section 33-34: Material-Aware Monograph Footer */}
      <Footer />

      {/* Mobile Sticky Bar for Direct WhatsApp & Navigation */}
      <StickyMobileBar />
    </MaterialThemeProvider>
  );
}
