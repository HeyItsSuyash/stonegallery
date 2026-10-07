"use client";

import React from "react";
import { SpaHeader } from "@/components/SpaHeader";
import { SpaHero } from "@/components/SpaHero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ShowroomMapSection } from "@/components/ShowroomMapSection";
import { QuickContactForm } from "@/components/QuickContactForm";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { SpaFooter } from "@/components/SpaFooter";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { BUSINESS_INFO } from "@/data/business";

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeGoodsStore"],
    name: BUSINESS_INFO.name,
    alternateName: "स्टोन गैलरी - Marble, Granite & Stone Showroom Lucknow",
    url: "https://stonegallery.in",
    logo: "https://stonegallery.in/logo.png",
    image: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    ],
    description:
      "A premier physical stone, granite, marble, and tile showroom in Lucknow, Uttar Pradesh. Dealing in Rajasthan Black Granite, Italian & Indian Marble, Kota Stone, granite door chowkhats, kitchen countertops, and vitrified tiles.",
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
    telephone: BUSINESS_INFO.phones[0].raw,
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
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col w-full selection:bg-amber-400 selection:text-stone-950 font-sans">
      {/* Schema.org SEO for Lucknow Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Sticky Top Header Navigation */}
      <SpaHeader />

      {/* Main Single Page Application Flow */}
      <main className="flex-1 w-full flex flex-col">
        {/* 01: Hero Showcase & Direct Contact Bar */}
        <SpaHero />

        {/* 02: Core Business - What We Supply & Cut */}
        <WhatWeDo />

        {/* 03: Why Choose Stone Gallery */}
        <WhyChooseUs />

        {/* 04: Physical Location & Embedded Google Map */}
        <ShowroomMapSection />

        {/* 05: Direct Price Quote & Contact Form */}
        <QuickContactForm />

        {/* 06: Real Google Maps Customer Reviews (3.9 Rating) */}
        <GoogleReviewsSection />
      </main>

      {/* Footer */}
      <SpaFooter />

      {/* Mobile Sticky Action Bar for 1-Tap Call, WhatsApp, & Directions */}
      <StickyMobileBar />
    </div>
  );
}
