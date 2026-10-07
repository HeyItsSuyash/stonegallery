export interface Slab {
  id: string;
  name: string;
  origin: string;
  finish: string;
  dimensions: string;
  character: string;
  image: string;
  macroImage: string;
  architectureImage: string;
}

export interface MaterialCategory {
  id: string;
  slug: string;
  number: string;
  name: string;
  descriptor: string;
  atmosphereQuote: string;
  tagline: string;
  themeColor: {
    bg: string;
    surface: string;
    text: string;
    accent: string;
  };
  narrative: string;
  heroImage: string;
  macroImage: string;
  slabImage: string;
  applicationImage: string;
  slabs: Slab[];
  applications: string[];
  specs: {
    porosity: string;
    hardness: string;
    recommendedFinishes: string[];
    idealSpaces: string[];
  };
}

export const MATERIALS: MaterialCategory[] = [
  {
    id: "granite",
    slug: "granite",
    number: "01",
    name: "GRANITE",
    descriptor: "High Density / Scratch-Proof / Permanent Polish",
    atmosphereQuote: "Tested for daily Indian cooking, heavy vessels, and zero-maintenance longevity.",
    tagline: "STRENGTH FOR EVERYDAY LIVING.",
    themeColor: {
      bg: "#161719",
      surface: "#24262B",
      text: "#ECEBE8",
      accent: "#B49A76",
    },
    narrative:
      "Granite is Lucknow's gold standard for kitchens, staircases, and granite door chowkhats. Dense and impervious to turmeric, hot oil, and citrus acids, our stock is hand-selected directly from quarries in Rajasthan and South India with verified zero-hollow calibration.",
    heroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "rajasthan-black",
        name: "Rajasthan Z-Black Granite",
        origin: "Rajasthan, India",
        finish: "High Gloss Polish & Leathered",
        dimensions: "3100 × 1950 × 18 mm",
        character: "Solid deep black base with microscopic quartz crystals. The #1 trusted stone for Indian kitchen countertops and door chowkhats.",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "blue-pearl",
        name: "Blue Pearl Granite",
        origin: "Larvik, Norway",
        finish: "Mirror Polish",
        dimensions: "2900 × 1800 × 20 mm",
        character: "Silvery-blue iridescent feldspar crystals that shimmer when sunlight enters your kitchen or bathroom.",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "tan-brown",
        name: "Tan Brown Granite",
        origin: "Telangana, India",
        finish: "Polished & Flamed",
        dimensions: "3000 × 1850 × 18 mm",
        character: "Warm chocolate brown background with reddish-orange mineral blossoms. Exceptional for exterior staircases and heavy-duty thresholds.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Modular Kitchen Countertops (Heat & Stain Proof)",
      "Granite Door & Window Frames (100% Termite Proof Chowkhats)",
      "Stair Treads, Risers & Bullnose Moldings",
      "Outdoor Driveway Paving & Boundary Walls",
    ],
    specs: {
      porosity: "0.05% - 0.15% (Extremely low)",
      hardness: "6.5 - 7 Mohs",
      recommendedFinishes: ["High-Gloss Polish", "Leather / River Finish", "Flamed Non-Slip"],
      idealSpaces: ["Main Kitchen", "Staircases", "Door Frames", "Portico & Driveway"],
    },
  },
  {
    id: "marble",
    slug: "marble",
    number: "02",
    name: "MARBLE",
    descriptor: "Natural Calcite / Continuous Veins / Timeless Elegance",
    atmosphereQuote: "Veins shaped over geological epochs, reflecting ambient light with subtle warmth.",
    tagline: "VEINS THAT NEVER REPEAT.",
    themeColor: {
      bg: "#F6F5F2",
      surface: "#DFDDD6",
      text: "#18191B",
      accent: "#8E8A83",
    },
    narrative:
      "From pristine Indian Makrana white to imported Italian Statuario and Botticino, natural marble remains the timeless choice for luxury flooring, puja rooms, and grand living spaces across Lucknow's finest homes.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "statuario-classic",
        name: "Statuario Altissimo",
        origin: "Carrara, Italy",
        finish: "Bookmatched Polish",
        dimensions: "3200 × 1950 × 20 mm",
        character: "Pure crystalline snow-white field crossed by dramatic charcoal and feather-grey veins. Creates spectacular bookmatched diamond patterns.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "makrana-white",
        name: "Makrana Pure White",
        origin: "Nagaur, Rajasthan",
        finish: "Silky Mirror Polish",
        dimensions: "2600 × 1600 × 18 mm",
        character: "98% pure calcium carbonate. The historic heritage stone of Indian monuments that grows whiter and more luminous with every passing decade.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Grand Living Room Slabs & Foyer Flooring",
      "Mandir & Puja Room Sanctuary Linings",
      "Master Bathroom Floating Vanities",
      "Bookmatched Feature Walls",
    ],
    specs: {
      porosity: "0.2% - 0.5%",
      hardness: "3 - 4 Mohs",
      recommendedFinishes: ["Bookmatched Diamond Polish", "Honed Matte Velvet", "Antique Brushed"],
      idealSpaces: ["Living Halls", "Puja Rooms", "Master Baths", "Feature Panels"],
    },
  },
  {
    id: "natural-stone",
    slug: "natural-stone",
    number: "03",
    name: "NATURAL STONE",
    descriptor: "Cooling / Non-Slip / Earthy Organic Comfort",
    atmosphereQuote: "Naturally cool underfoot during Uttar Pradesh summers. Organic, tactile, and slip-resistant.",
    tagline: "NATURAL EARTH, HONORED.",
    themeColor: {
      bg: "#EBE6DD",
      surface: "#D4CCBF",
      text: "#201E1B",
      accent: "#8B7355",
    },
    narrative:
      "Kota stone, Jaisalmer golden teak, and Dholpur sandstone provide natural climatic cooling and earthy texture. Ideal for verandahs, courtyards, terraces, and heritage architectural elevations.",
    heroImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "kota-blue-stone",
        name: "Kota Blue-Green River Stone",
        origin: "Kota, Rajasthan",
        finish: "Natural Cleft & River Washed",
        dimensions: "2400 × 1200 × 25 mm",
        character: "Cool greenish-grey limestone that remains pleasantly cool underfoot even in peak summer heat. Renowned for zero slippery surface.",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "jaisalmer-yellow",
        name: "Jaisalmer Golden Sandstone",
        origin: "Jaisalmer, Rajasthan",
        finish: "Honed & Split Face",
        dimensions: "2600 × 1400 × 30 mm",
        character: "Rich golden ochre with fossilized wood striations. Brings regal Rajasthani warmth to exterior boundary walls and elevation fins.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Verandah & Balcony Summer Flooring",
      "Courtyard & Patio Paving",
      "Front Elevation Stone Cladding",
      "Heavy-duty Corridor & Parking Slabs",
    ],
    specs: {
      porosity: "0.5% - 1.2%",
      hardness: "4 - 5 Mohs",
      recommendedFinishes: ["River Washed", "Natural Cleft", "Honed Matte"],
      idealSpaces: ["Verandahs", "Outdoor Patios", "Parking Areas", "Terraces"],
    },
  },
  {
    id: "tiles",
    slug: "tiles",
    number: "04",
    name: "TILES & CLADDING",
    descriptor: "Vitrified Slabs / Elevation Stone / Zero Absorption",
    atmosphereQuote: "Large format vitrified slabs up to 1200×1800mm with seamless joint-free beauty.",
    tagline: "SEAMLESS ARCHITECTURAL SURFACES.",
    themeColor: {
      bg: "#1D1E22",
      surface: "#2C2E35",
      text: "#ECECF0",
      accent: "#9DA3B4",
    },
    narrative:
      "As a certified dealer for leading tile brands, our showroom displays full-scale panels of large-format vitrified slabs (800×1600mm, 1200×1800mm), stone-finish elevation tiles, and anti-skid bathroom surfaces.",
    heroImage:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "vitrified-large-slab",
        name: "1200×1800mm High Gloss Vitrified Slab",
        origin: "Certified Ceramic Hub, Morbi",
        finish: "Full Body Nano Polish",
        dimensions: "1800 × 1200 × 9 mm",
        character: "Virtually zero water absorption (<0.05%). Replicates Statuario and Calacatta marble continuous veining with zero maintenance required.",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Modern Living Room Flooring (Joint-free look)",
      "Exterior Villa Elevation Tiles (Weatherproof)",
      "Master Bathroom Wall & Floor Combinations",
      "Commercial Showrooms & Offices",
    ],
    specs: {
      porosity: "< 0.05% (Non-porous)",
      hardness: "7 Mohs",
      recommendedFinishes: ["High Gloss Nano Glaze", "Carving Matte", "Anti-Skid Satin"],
      idealSpaces: ["Bathrooms", "Living Floors", "Exterior Elevations", "Kitchen Backsplashes"],
    },
  },
];
