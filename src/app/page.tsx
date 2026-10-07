"use client";

import React from "react";
import { MaterialThemeProvider } from "@/context/MaterialThemeContext";
import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MaterialExplorer } from "@/components/MaterialExplorer";
import { ApplicationsSection } from "@/components/ApplicationsSection";
import { ProductDiscovery } from "@/components/ProductDiscovery";
import { TouchMaterial } from "@/components/TouchMaterial";
import { TrustSection } from "@/components/TrustSection";
import { ShowroomSection } from "@/components/ShowroomSection";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    name: "Stone Gallery",
    alternateName: "Stone Gallery Lucknow - Marble, Granite & Natural Stone Dealer",
    url: "https://stonegallery.in",
    logo: "https://stonegallery.in/icon.svg",
    image: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    ],
    description:
      "A physical stone, marble, granite and architectural-surface showroom and dealer in Lucknow, Uttar Pradesh. Dealing in Rajasthan Black Granite, Green Granite, Blue Pearl Granite, Indian White Marble, and Natural Stone.",
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
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Lucknow" },
      { "@type": "City", name: "Chinhat" },
      { "@type": "City", name: "Kamta" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marble, Granite & Natural Stone Collections",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rajasthan Black Granite" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Green Granite" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Blue Pearl Granite" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Red Granite" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cats Eye Granite" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Indian White Marble" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kota Stone Flooring & Paving" } },
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

      {/* Subtle Ambient Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 bg-grain opacity-35 mix-blend-overlay" />

      {/* Desktop Custom Precision Cursor */}
      <CustomCursor />

      {/* Material-driven Floating Navigation */}
      <Navigation />

      {/* Main Experience Flow */}
      <main className="relative flex flex-col w-full">
        {/* Section 4: Hero "STONE, FOR EVERY SPACE." */}
        <Hero />

        {/* Section 6: Material Explorer "FIND YOUR STONE" (Huge Visual Objects) */}
        <MaterialExplorer />

        {/* Section 8: "WHERE STONE BELONGS" (Kitchens, Door Frames, Floors, Walls, Outdoor) */}
        <ApplicationsSection />

        {/* Section 9: Product Discovery (Rajasthan Black, Green, Blue Pearl, Red, Cats Eye, etc.) */}
        <ProductDiscovery />

        {/* Section 11: "Touch The Material" Moment (Microscopic Texture -> Full Slab) */}
        <TouchMaterial />

        {/* Section 15: Restrained Trust Section (Transparent Showroom Standard) */}
        <TrustSection />

        {/* Section 12: "SEE IT IN PERSON." (Showroom Ayodhya Road Lucknow + Maps + Call + WhatsApp) */}
        <ShowroomSection />
      </main>

      {/* Section 16: Minimal Premium Footer */}
      <Footer />

      {/* Persistent Mobile Action Bar */}
      <StickyMobileBar />
    </MaterialThemeProvider>
  );
}
