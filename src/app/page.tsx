"use client";

import React from "react";
import { MaterialThemeProvider } from "@/context/MaterialThemeContext";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { HeroTransformation } from "@/components/HeroTransformation";
import { SlabExperience } from "@/components/SlabExperience";
import { MacroGallery } from "@/components/MacroGallery";
import { HorizontalSlabGallery } from "@/components/HorizontalSlabGallery";
import { ApplicationsStory } from "@/components/ApplicationsStory";
import { ShowroomExperience } from "@/components/ShowroomExperience";
import { Testimonials } from "@/components/Testimonials";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { GOOGLE_MAPS_META } from "@/data/reviews";

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    name: "Stone Gallery",
    alternateName: "स्टोन गैलरी - Marble, Granite & Natural Stone Showroom Lucknow",
    url: "https://stonegallery.in",
    logo: "https://stonegallery.in/logo.png",
    image: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    ],
    description:
      "A premier physical stone, granite, marble, and tile showroom in Lucknow, Uttar Pradesh. Specializing in Rajasthan Black Granite, Italian Marble, Kota Stone, granite door chowkhats, kitchen countertops, and vitrified tiles.",
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
      latitude: "26.8744086",
      longitude: "81.0112412",
    },
    telephone: "+919928741111",
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 10:00-20:00",
    priceRange: "₹₹ - ₹₹₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "3.9",
      reviewCount: "15",
    },
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Chinhat" },
      { "@type": "City", name: "Gomti Nagar" },
      { "@type": "City", name: "Indira Nagar" },
      { "@type": "City", name: "Ayodhya" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marble, Granite & Natural Stone Slabs",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rajasthan Black Granite (Z-Black)" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Italian Marble Slabs (Statuario, Botticino)" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Granite Door & Window Frames (Chowkhats)" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Granite Kitchen Countertops" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kota Stone River Finish" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Designer Vitrified Tile Slabs (1200x1800mm)" } },
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

      {/* Subtle Material Atmosphere Ambient Grain */}
      <div className="fixed inset-0 pointer-events-none z-30 bg-grain opacity-35 mix-blend-overlay" />

      {/* Floating Minimal Navigation */}
      <Navigation />

      {/* Main Experience Flow */}
      <main className="relative flex flex-col w-full">
        {/* 01: Hero Section */}
        <Hero />

        {/* 02: Editorial Brand Manifesto */}
        <BrandStatement />

        {/* 03: Progressive Transformation (Macro -> Surface -> Slab -> Space) */}
        <HeroTransformation />

        {/* 04: Meet The Real Slab - Interactive Slab Inspector */}
        <SlabExperience />

        {/* 05: Look Closer - Macro Material Zoom Loupe */}
        <MacroGallery />

        {/* 06: Walking The Gallery - Horizontal Slab Runway */}
        <HorizontalSlabGallery />

        {/* 07: Real Architectural Applications (Kitchen Tops, Chowkhats, Floors, Paving) */}
        <ApplicationsStory />

        {/* 08: See It In Person - Lucknow Showroom with Embedded Google Maps */}
        <ShowroomExperience />

        {/* 09: Customer Reviews from Google Maps */}
        <Testimonials />

        {/* 10: For Architects, Designers & Home Builders */}
        <ArchitectsSection />
      </main>

      {/* Monograph Editorial Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar (Call / WhatsApp / Maps) */}
      <StickyMobileBar />
    </MaterialThemeProvider>
  );
}
