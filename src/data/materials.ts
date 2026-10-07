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
    id: "marble",
    slug: "marble",
    number: "01",
    name: "MARBLE",
    descriptor: "Veins / Light / Movement",
    atmosphereQuote: "Veins carved by millions of years of pressure, reflecting light like frozen water.",
    tagline: "VEINS THAT NEVER REPEAT.",
    themeColor: {
      bg: "#F6F5F2",
      surface: "#DFDDD6",
      text: "#18191B",
      accent: "#8E8A83",
    },
    narrative:
      "Formed under immense metamorphic heat in the deep crust, marble carries the memory of primordial sea beds. Its calcite crystals soften ambient illumination, granting interiors a gentle, luminous serenity found in no synthetic surface.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "statuario-royal",
        name: "Statuario Royal",
        origin: "Carrara, Italy",
        finish: "Bookmatched Polish",
        dimensions: "3200 × 1950 × 20 mm",
        character: "Dramatically feathered charcoal veins dancing across a pure crystalline snow ground.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "calacatta-gold",
        name: "Calacatta Oro Borghini",
        origin: "Apuan Alps, Italy",
        finish: "Honed Velvet",
        dimensions: "3100 × 1850 × 20 mm",
        character: "Warm honey and antique bronze ribbon veining over warm milk-cream porcelain density.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "pietra-grey",
        name: "Pietra Grey Imperial",
        origin: "Isfahan Region",
        finish: "Ultra-Satin Leather",
        dimensions: "2950 × 1780 × 20 mm",
        character: "Fine spiderwebs of pure chalk white streaking through smokey graphite depth.",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Monumental Kitchen Islands",
      "Seamless Master Bathrooms",
      "Bookmatched Feature Walls",
      "Expansive Living Pavilions",
    ],
    specs: {
      porosity: "0.15% - 0.28%",
      hardness: "3.5 - 4 Mohs",
      recommendedFinishes: ["Polished Mirror", "Honed Matte", "Silk Satin"],
      idealSpaces: ["Living Rooms", "Bath Enclosures", "Foyers", "Wall Facings"],
    },
  },
  {
    id: "granite",
    slug: "granite",
    number: "02",
    name: "GRANITE",
    descriptor: "Structure / Depth / Strength",
    atmosphereQuote: "Forged in subterranean magma chambers. Massive, quiet, indestructible.",
    tagline: "BUILT FOR GENERATIONS.",
    themeColor: {
      bg: "#151618",
      surface: "#282A2E",
      text: "#F2EFEA",
      accent: "#B8B2A8",
    },
    narrative:
      "Granite is slow-cooling crystalline power. Interlocking quartz, feldspar, and biotite mica form a dense matrix that repels heat, resists knives, and anchors spaces with unwavering architectural weight.",
    heroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "black-marquina-granite",
        name: "Titanium Cosmic Black",
        origin: "Espírito Santo",
        finish: "Leathered Flamed",
        dimensions: "3250 × 1980 × 20 mm",
        character: "Waves of volcanic brass and silver quartz colliding in a deep basalt obsidian sea.",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "alaska-white",
        name: "Alaska Silver Crystalline",
        origin: "Rajasthan, India",
        finish: "Polished Crystal",
        dimensions: "3100 × 1850 × 20 mm",
        character: "Frosted icy feldspar clusters interspersed with deep smokey quartz veins.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Chef's Culinary Countertops",
      "Heavy Traffic Flooring",
      "Exterior Ventilated Facades",
      "Cantilevered Outdoor Steps",
    ],
    specs: {
      porosity: "0.02% - 0.08%",
      hardness: "6.5 - 7 Mohs",
      recommendedFinishes: ["Leathered", "Flamed", "High-Gloss Polish"],
      idealSpaces: ["Kitchens", "Exterior Facades", "High-Traffic Corridors", "Terraces"],
    },
  },
  {
    id: "travertine",
    slug: "travertine",
    number: "03",
    name: "TRAVERTINE",
    descriptor: "Warmth / Texture / Earth",
    atmosphereQuote: "Formed in geothermal hot mineral springs. Porous, organic, warm with the touch of sunlight.",
    tagline: "WARMTH, IN STONE.",
    themeColor: {
      bg: "#EDE5D8",
      surface: "#D5C8B3",
      text: "#241D17",
      accent: "#A37E55",
    },
    narrative:
      "The classic stone of Rome's monuments and timeless modern villas. Travertine's rhythmic sedimentary striations and natural surface voids evoke the soft warmth of sun-bleached Mediterranean sand.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "navona-travertine",
        name: "Travertino Romano Navona",
        origin: "Tivoli, Italy",
        finish: "Cross-cut Open Pore",
        dimensions: "2850 × 1700 × 20 mm",
        character: "Warm biscuit tones with undulating horizontal cellular cavities.",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "silver-travertine",
        name: "Silver Ash Travertine",
        origin: "Denizli, Turkey",
        finish: "Vein-cut Honed",
        dimensions: "3050 × 1820 × 20 mm",
        character: "Parallel linear bands of cool pewter, warm hazelnut, and soft chalk cream.",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Courtyard & Patio Pavilions",
      "Spa & Bathroom Sanctuary Walls",
      "Fireplace Surrounds",
      "Textured Architectural Fluting",
    ],
    specs: {
      porosity: "1.2% - 2.8% (natural)",
      hardness: "3 - 3.5 Mohs",
      recommendedFinishes: ["Unfilled Brushed", "Resin-Filled Honed", "Antique Tumbled"],
      idealSpaces: ["Indoor-Outdoor Transitions", "Spa Bathrooms", "Feature Chimneys", "Columns"],
    },
  },
  {
    id: "natural-stone",
    slug: "natural-stone",
    number: "04",
    name: "NATURAL STONE",
    descriptor: "Raw / Organic / Timeless",
    atmosphereQuote: "Direct from the quarry face. Tactile clefts, sedimentary memories, unrefined nobility.",
    tagline: "RAW EARTH, HONORED.",
    themeColor: {
      bg: "#E9E3D9",
      surface: "#CDC2B2",
      text: "#211E1A",
      accent: "#876E51",
    },
    narrative:
      "Sandstone, slate, quartzite, and limestone extracted with reverence. These surfaces preserve the tactile touch of geologic layering, bringing grounded natural permanence to urban Lucknow homes.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "jaisalmer-yellow",
        name: "Jaisalmer Heritage Teak",
        origin: "Rajasthan, India",
        finish: "Split-face & Honed",
        dimensions: "2600 × 1400 × 30 mm",
        character: "Warm golden ochre with woodgrain fossilized mineral striations.",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      },
      {
        id: "kota-stone-olive",
        name: "Kota Olive Blue Stone",
        origin: "Kota, Rajasthan",
        finish: "River-Washed Leather",
        dimensions: "2400 × 1200 × 25 mm",
        character: "Cool greenish-grey limestone with velvety matte slip resistance.",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Verandah & Balcony Slabs",
      "Courtyard Water Features",
      "Rustic Boundary Walling",
      "Stair Treads with Chiseled Noses",
    ],
    specs: {
      porosity: "0.4% - 1.2%",
      hardness: "4 - 5 Mohs",
      recommendedFinishes: ["Natural Cleft", "Flamed", "Shot-blasted", "Tumbled"],
      idealSpaces: ["Outdoor Patios", "Verandahs", "Landscape Walls", "Pool Decks"],
    },
  },
  {
    id: "onyx",
    slug: "onyx",
    number: "05",
    name: "ONYX",
    descriptor: "Depth / Light / Drama",
    atmosphereQuote: "Cryptocrystalline quartz chalcedony with translucent glow. Stone transformed into light.",
    tagline: "DEPTH & DRAMA.",
    themeColor: {
      bg: "#121214",
      surface: "#27262E",
      text: "#F9EFE3",
      accent: "#D4A373",
    },
    narrative:
      "Onyx is nature's grand theatre. Bands of parallel chalcedony allow backlighting to radiate through the stone, creating an ethereal amber, jade, or pearl glow that turns walls into luminous kinetic sculptures.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=85",
    applicationImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    slabs: [
      {
        id: "honey-onyx-backlit",
        name: "Persian Honey Onyx",
        origin: "Yazd, Iran",
        finish: "Translucent Polish",
        dimensions: "2800 × 1650 × 18 mm",
        character: "Amber-honey concentric rings that illuminate into incandescent gold when backlit.",
        image:
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "Backlit Bar Facings",
      "Powder Room Floating Vanities",
      "Foyer Art Installations",
      "Executive Reception Portals",
    ],
    specs: {
      porosity: "0.1% - 0.2%",
      hardness: "3 - 3.5 Mohs",
      recommendedFinishes: ["High Gloss Translucent Polish"],
      idealSpaces: ["Backlit Walls", "Bar Counters", "Sculptural Furniture", "Powder Rooms"],
    },
  },
  {
    id: "quartz",
    slug: "quartz",
    number: "06",
    name: "QUARTZ",
    descriptor: "Precision / Surface / Contemporary",
    atmosphereQuote: "Engineered mineral purity. Uncompromising non-porous resilience and architectural poise.",
    tagline: "PRECISION SURFACES.",
    themeColor: {
      bg: "#F3F3F5",
      surface: "#D8DAE0",
      text: "#18191E",
      accent: "#7C869E",
    },
    narrative:
      "Pure crushed quartz bound with high-performance polymers under vibro-compression vacuum. Immune to citrus acid, turmeric staining, and knife scratches—designed for contemporary gourmet kitchens that demand surgical cleanliness.",
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
        id: "super-white-quartz",
        name: "Arctic Crystalline Quartz",
        origin: "Contemporary Synthesis",
        finish: "Velvet Suede Touch",
        dimensions: "3200 × 1600 × 20 mm",
        character: "Unblemished architectural white with microscopic light-refracting silica crystals.",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
        macroImage:
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85",
        architectureImage:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      },
    ],
    applications: [
      "High-Traffic Culinary Islands",
      "Stain-Prone Prep Countertops",
      "Commercial Vanity Runs",
      "Clean-Line Modern Backsplashes",
    ],
    specs: {
      porosity: "0.01% (Zero absorption)",
      hardness: "7 Mohs",
      recommendedFinishes: ["Polished Ultra-Dense", "Suede Touch Matte"],
      idealSpaces: ["Main Kitchens", "Commercial Cafes", "Medical Vanities", "Laundry Rooms"],
    },
  },
];
