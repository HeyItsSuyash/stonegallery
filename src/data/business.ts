export interface ProductOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  popularItems: string[];
  applications: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: "Stone Gallery",
  hindiName: "स्टोन गैलरी",
  tagline: "Marble, Granite, Natural Stone & Tiles Showroom",
  location: "Kamta, Ayodhya Road, Lucknow",
  fullAddress: "Dharm Kanta, Ayodhya Road, opposite Sudha Petrol Pump, adjoining Gard, Shankar Puri, Kamta, Lucknow, Uttar Pradesh 226028",
  landmark: "Opposite Sudha Petrol Pump / Near Chinhat Tiraha, Faizabad Road",
  plusCode: "V2FC+Q8 Lucknow, Uttar Pradesh",
  timings: "Open 7 Days · 10:00 AM – 8:00 PM",
  phones: [
    { display: "+91 99287 41111", raw: "+919928741111" },
    { display: "+91 78979 31966", raw: "+917897931966" },
  ],
  whatsappNumber: "917897931966",
  googleMapsUrl: "https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow",
  rating: 3.9,
  reviewCount: 15,
};

export const PRODUCTS_OFFERED: ProductOffering[] = [
  {
    id: "granite",
    title: "Granite Slabs & Countertops",
    subtitle: "High-Density Natural Granite for Daily Durability",
    description:
      "Wide stock of full unbroken granite slabs. Dense, heat-resistant, and impervious to kitchen oils, spices, and scratches with deep permanent polish.",
    popularItems: [
      "Rajasthan Z-Black Granite",
      "Black Galaxy Granite",
      "Blue Pearl Granite",
      "Tan Brown Granite",
      "Green Granite",
    ],
    applications: "Modular Kitchen Counters, Island Tops, Staircases, Flooring",
    image:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "chowkhats",
    title: "Granite Door & Window Frames (Chowkhats)",
    subtitle: "Permanent 100% Termite-Proof Alternative to Wood",
    description:
      "Solid calibrated granite sections cut to precision for door and window frames. Zero swelling in Lucknow monsoons, no termite rot, and lasts decades.",
    popularItems: [
      "Rajasthan Black Door Sections",
      "Tan Brown Frame Sections",
      "Pre-grooved Rebated Chowkhats",
      "Window Sills & Thresholds",
    ],
    applications: "Main Entry Doors, Room Frames, Bathroom Doors, Window Sills",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "marble",
    title: "Indian & Italian Marble",
    subtitle: "Natural Calcite Slabs for Luxury Living Spaces",
    description:
      "Timeless marble slabs for residential living rooms, puja rooms, and grand foyers. Full lots available for dry-lay bookmatching and inspection.",
    popularItems: [
      "Statuario Altissimo (Italian)",
      "Makrana Pure White Marble",
      "Botticino Classico",
      "Indian Green & Rainforest Marble",
    ],
    applications: "Living Room Flooring, Mandir Linings, Bathroom Vanities, Feature Walls",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "natural-stone",
    title: "Kota Stone & Natural Sandstone",
    subtitle: "Naturally Cool Underfoot in Summer Heat",
    description:
      "River-washed Kota stone and sandstone slabs. Keeps rooms and verandahs naturally cool during UP summers with reliable non-slip texture.",
    popularItems: [
      "Kota River Blue Stone (25mm)",
      "Jaisalmer Golden Teak Stone",
      "Dholpur Pink Sandstone",
      "Rough Cleft Paving Stone",
    ],
    applications: "Verandahs, Balconies, Porches, Car Parking, Garden Pathways",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "tiles",
    title: "Vitrified Tiles & Wall Cladding",
    subtitle: "Large-Format Slabs & Modern Elevation Tiles",
    description:
      "Certified dealer for leading ceramic brands. Full panels of large-format slabs (1200×1800mm, 800×1600mm), elevation stone claddings, and anti-skid bathroom tiles.",
    popularItems: [
      "1200×1800mm High Gloss Slabs",
      "800×1600mm Floor Tiles",
      "Exterior 3D Elevation Cladding",
      "Anti-Skid Matte Bathroom Tiles",
    ],
    applications: "Seamless Floors, Elevation Facades, Bathrooms, Kitchen Backsplashes",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "services",
    title: "Custom Sizing & Direct Yard Loading",
    subtitle: "End-to-End Stone Supply for Homes & Builders",
    description:
      "Direct slab yard inspection under daylight, machine edge polishing (bullnose, chamfer), cut-to-size service, and crane loading with truck delivery across Lucknow.",
    popularItems: [
      "Precision Sizing & Cutting",
      "Machine Edge Bullnosing",
      "Crane Loading & Packaging",
      "Direct Site Delivery across Lucknow",
    ],
    applications: "Independent House Builders, Villa Projects, Interior Renovations",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
  },
];
