export interface ProductItem {
  id: string;
  name: string;
  category: "granite" | "marble" | "natural-stone";
  categoryLabel: string;
  finish: string;
  bestFor: string;
  image: string;
  description: string;
}

export interface MaterialCategory {
  id: "marble" | "granite" | "natural-stone";
  slug: string;
  number: string;
  name: string;
  tagline: string;
  descriptor: string;
  atmosphereQuote: string;
  narrative: string;
  heroImage: string;
  macroImage: string;
  slabImage: string;
  applications: {
    title: string;
    description: string;
  }[];
  products: ProductItem[];
}

export const MATERIALS: MaterialCategory[] = [
  {
    id: "granite",
    slug: "granite",
    number: "01",
    name: "GRANITE",
    tagline: "STRENGTH, DENSITY AND TIMELESS POLISH.",
    descriptor: "Structure / Strength / Everyday Durability",
    atmosphereQuote: "Dense, scratch-resistant and naturally durable for daily living.",
    narrative:
      "Granite is renowned for its exceptional hardness and density. Ideal for high-use kitchens, door frames, heavy-traffic flooring, and outdoor paving, granite resists scratches, heat, and everyday kitchen spills while holding a deep, permanent polish.",
    heroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    applications: [
      {
        title: "Kitchen Countertops & Tops",
        description: "Hard-wearing surfaces resistant to oil, spices, heat, and daily cooking wear.",
      },
      {
        title: "Granite Door & Window Frames",
        description: "Solid stone chowkhats that never rot, warp, or suffer termite damage.",
      },
      {
        title: "High-Traffic Flooring & Steps",
        description: "Durable flooring and staircase treads that withstand decades of foot traffic.",
      },
      {
        title: "Outdoor Paving & Parking",
        description: "Flamed and rough-textured granite paving for porches, ramps, and walkways.",
      },
    ],
    products: [
      {
        id: "rajasthan-black-granite",
        name: "Rajasthan Black Granite",
        category: "granite",
        categoryLabel: "Granite",
        finish: "Mirror Polish / Leathered",
        bestFor: "Kitchen Tops, Door Frames & Steps",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
        description:
          "Deep uniform dark ground with fine crystalline sparkle. The most popular choice for Indian kitchen tops and granite door frames.",
      },
      {
        id: "green-granite",
        name: "Green Granite",
        category: "granite",
        categoryLabel: "Granite",
        finish: "Polished",
        bestFor: "Kitchen Counters, Wall Skirting & Flooring",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
        description:
          "Rich mineral green shades with organic quartz accents, providing a fresh, earthy accent in residential and commercial spaces.",
      },
      {
        id: "blue-pearl-granite",
        name: "Blue Pearl Granite",
        category: "granite",
        categoryLabel: "Granite",
        finish: "High Gloss Polish",
        bestFor: "Premium Countertops & Vanity Counters",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
        description:
          "Metallic silver-blue iridescent feldspar crystals that shimmer when illuminated by direct kitchen or ceiling lights.",
      },
      {
        id: "red-granite",
        name: "Red Granite (Jhansi / South Red)",
        category: "granite",
        categoryLabel: "Granite",
        finish: "Polished / Flamed",
        bestFor: "Staircases, Borders & Facades",
        image:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
        description:
          "Warm terra-cotta and deep crimson feldspar granules with black mica flecks. Highly durable for outdoor boundary walls and risers.",
      },
      {
        id: "cats-eye-granite",
        name: "Cats Eye Granite",
        category: "granite",
        categoryLabel: "Granite",
        finish: "High Polish",
        bestFor: "Flooring Inlays, Kitchen Tops & Door Caps",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
        description:
          "Deep reddish-brown base with distinctive shimmering optical chatoyancy crystals resembling a cat's eye.",
      },
    ],
  },
  {
    id: "marble",
    slug: "marble",
    number: "02",
    name: "MARBLE",
    tagline: "LIGHT, LUSTER AND NATURAL VEINING.",
    descriptor: "Veins / Luster / Classic Living",
    atmosphereQuote: "Natural calcite veining reflecting light with understated warmth.",
    narrative:
      "Marble brings natural softness, cool surface touch, and unique organic veining to floors, puja rooms, and decorative feature walls. Each slab bears mineral markings that make your living space truly one of a kind.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    applications: [
      {
        title: "Living Room & Hall Flooring",
        description: "Seamless white and beige marble floors that keep interiors naturally cool during Lucknow summers.",
      },
      {
        title: "Puja Room & Temple Shrines",
        description: "Pristine white marble surfaces carved and polished for serene home sanctums.",
      },
      {
        title: "Accent Walls & TV Units",
        description: "Bookmatched and linear vein marble backdrops creating a luxurious focal point.",
      },
      {
        title: "Bathroom Vanity Tops & Cladding",
        description: "Honed and polished marble counters for elegant master and powder baths.",
      },
    ],
    products: [
      {
        id: "indian-white-marble",
        name: "Indian White Marble",
        category: "marble",
        categoryLabel: "Marble",
        finish: "Mirror Polish",
        bestFor: "Living Flooring, Temples & Steps",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
        description:
          "Classic white calcite base with soft grey diagonal veining. A traditional favorite for north Indian residences.",
      },
      {
        id: "beige-crema-marble",
        name: "Warm Beige Marble",
        category: "marble",
        categoryLabel: "Marble",
        finish: "Polished / Honed",
        bestFor: "Bedroom Flooring & Wall Accents",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
        description:
          "Neutral cream and biscuit tones that blend effortlessly with wooden furnishings and warm ambient lighting.",
      },
    ],
  },
  {
    id: "natural-stone",
    slug: "natural-stone",
    number: "03",
    name: "NATURAL STONE",
    tagline: "RAW EARTH, SLATE, SANDSTONE AND KOTA.",
    descriptor: "Earthy / Organic / Anti-Slip",
    atmosphereQuote: "Tactile cleft surfaces and natural slip resistance direct from Indian quarries.",
    narrative:
      "Natural stone includes sandstone, slate, Kota stone, and limestone. Valued for their slip-resistant cleft textures, natural weathering, and cost-effectiveness, these stones are ideal for verandahs, balconies, ramps, and garden pathways.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85",
    macroImage:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    slabImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    applications: [
      {
        title: "Outdoor Verandahs & Patios",
        description: "Cool, weather-resistant natural stone floors that handle rains and direct sun.",
      },
      {
        title: "Car Porch & Driveway Paving",
        description: "Heavy-duty rough cleft stone paving that offers excellent tyre and shoe grip.",
      },
      {
        title: "Boundary Wall Cladding",
        description: "Textured split-face stone tiles creating natural boundary wall elevations.",
      },
      {
        title: "Corridors & Basement Steps",
        description: "Kota stone and durable limestone flooring built for longevity and low maintenance.",
      },
    ],
    products: [
      {
        id: "kota-stone-blue",
        name: "Kota Stone (Blue / Greenish Grey)",
        category: "natural-stone",
        categoryLabel: "Natural Stone",
        finish: "Rough Cleft / Semi-Polished",
        bestFor: "Pavements, Porches, Pathways & Corridors",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
        description:
          "Fine-grained limestone from Kota, Rajasthan. Naturally non-porous, non-slip, and resilient against heavy foot traffic.",
      },
      {
        id: "teakwood-sandstone",
        name: "Teakwood Sandstone",
        category: "natural-stone",
        categoryLabel: "Natural Stone",
        finish: "Honed / Sawn Cut",
        bestFor: "Exterior Cladding & Feature Accents",
        image:
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
        description:
          "Natural golden-yellow sandstone featuring natural wood-grain banding. Ideal for garden accents and wall elevations.",
      },
    ],
  },
];

// Helper to get all verified products flat
export const ALL_PRODUCTS: ProductItem[] = MATERIALS.flatMap((m) => m.products);
