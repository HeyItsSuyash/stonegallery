export interface Variety {
  name: string;
  origin: string;
  image: string;
  note: string;
}

export interface MaterialFamily {
  id: "marble" | "granite" | "stone";
  name: string;
  caption: string;
  heroImage: string;
  macroImage: string;
  spaceImage: string;
  varieties: Variety[];
}

export const MATERIAL_FAMILIES: Record<"marble" | "granite" | "stone", MaterialFamily> = {
  marble: {
    id: "marble",
    name: "MARBLE",
    caption: "Veined. Luminous. Unrepeatable.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90",
    macroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90",
    spaceImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
    varieties: [
      {
        name: "STATUARIO ALTISSIMO",
        origin: "Carrara, Italy",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        note: "Pure white ground with bold graphite veining.",
      },
      {
        name: "MAKRANA PURE WHITE",
        origin: "Rajasthan, India",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        note: "Crystalline white calcium carbonate that grows more luminous over time.",
      },
      {
        name: "BOTTICINO CLASSICO",
        origin: "Brescia, Italy",
        image:
          "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
        note: "Warm cream tone with delicate golden-hazel markings.",
      },
      {
        name: "RAINFOREST GREEN",
        origin: "Bidasar, India",
        image:
          "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85",
        note: "Deep moss green intersected by dark tree-like veining.",
      },
    ],
  },
  granite: {
    id: "granite",
    name: "GRANITE",
    caption: "Strong. Natural. Made for everyday spaces.",
    heroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=2400&q=90",
    macroImage:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=90",
    spaceImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=90",
    varieties: [
      {
        name: "RAJASTHAN Z-BLACK",
        origin: "Rajasthan, India",
        image:
          "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
        note: "Solid deep black with microscopic quartz crystals. Zero stain absorption.",
      },
      {
        name: "BLACK GALAXY",
        origin: "Andhra Pradesh, India",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        note: "Deep obsidian field with reflective golden-bronze bronzite specks.",
      },
      {
        name: "BLUE PEARL",
        origin: "Larvik, Norway",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
        note: "Silvery-blue iridescent feldspar that shimmers in daylight.",
      },
      {
        name: "TAN BROWN",
        origin: "Telangana, India",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
        note: "Chocolate brown matrix with warm burnt-orange mineral blooms.",
      },
    ],
  },
  stone: {
    id: "stone",
    name: "NATURAL STONE",
    caption: "Tactile. Earthy. Cool underfoot.",
    heroImage:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=2400&q=90",
    macroImage:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1800&q=90",
    spaceImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90",
    varieties: [
      {
        name: "KOTA RIVER BLUE",
        origin: "Kota, Rajasthan",
        image:
          "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=85",
        note: "Velvety river-washed limestone. Stays naturally cool in summer heat.",
      },
      {
        name: "JAISALMER TEAK",
        origin: "Jaisalmer, Rajasthan",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        note: "Golden yellow sandstone with natural woodgrain mineral bands.",
      },
      {
        name: "DHOLPUR SANDSTONE",
        origin: "Dholpur, Rajasthan",
        image:
          "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
        note: "Warm buff-pink sedimentary stone for exterior elevations and courtyards.",
      },
    ],
  },
};

export const APPLICATIONS_DATA = [
  {
    name: "KITCHEN",
    subtitle: "Countertops · Islands",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[4/5]",
  },
  {
    name: "FLOOR",
    subtitle: "Living Halls · Foyers",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    name: "DOOR",
    subtitle: "Granite Chowkhats · Frames",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[3/4]",
  },
  {
    name: "WALL",
    subtitle: "Feature Slabs · Vanities",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[4/3]",
  },
  {
    name: "OUTDOOR",
    subtitle: "Verandahs · Paving",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
    aspect: "aspect-[16/9]",
  },
];

export const SHOWROOM_INFO = {
  name: "STONE GALLERY",
  location: "Lucknow, Uttar Pradesh",
  address: [
    "Dharm Kanta, Ayodhya Road",
    "Opposite Sudha Petrol Pump",
    "Shankar Puri, Kamta",
    "Lucknow, Uttar Pradesh 226028",
  ],
  phone1: "+91 99287 41111",
  phone2: "+91 78979 31966",
  whatsapp: "917897931966",
  email: "contact@stonegallery.in",
  instagram: "https://instagram.com",
  mapsUrl: "https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow",
};

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  location: string;
  type: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amit Srivastava",
    role: "Local Guide · Homeowner",
    location: "Lucknow",
    type: "Residential Project",
    rating: 5,
    quote:
      "Best collection of granite and marble in Lucknow. Very fair rates and transparent dealing. Got all my flooring and kitchen countertops from Stone Gallery with zero hassle.",
  },
  {
    name: "Dr. Rajesh Verma",
    role: "Homeowner",
    location: "Gomti Nagar Extension, Lucknow",
    type: "Villa Construction",
    rating: 5,
    quote:
      "The owner and staff are very humble, patient, and knowledgeable. They took the time to explain which granite and marble finishes suit Lucknow's climate best. Highly recommended.",
  },
  {
    name: "Er. Alok Pandey",
    role: "Architect & Civil Consultant",
    location: "Lucknow",
    type: "Commercial Architecture",
    rating: 5,
    quote:
      "Wide variety of South Indian granite, Rajasthan black, and Italian marble slabs. Excellent gangsaw calibration and ready stock available in the yard for immediate delivery.",
  },
  {
    name: "Neha Gupta",
    role: "Interior Designer",
    location: "Hazratganj, Lucknow",
    type: "Penthouse Interiors",
    rating: 5,
    quote:
      "Authentic gangsaw cut slabs with extraordinary mirror finish. The granite chowkhats and vanity tops arrived in flawless condition. Extremely reliable team.",
  },
  {
    name: "Mohd. Tariq",
    role: "Civil Contractor",
    location: "Lucknow",
    type: "Institutional Flooring",
    rating: 5,
    quote:
      "High density Z-Black granite and pure Makrana white marble. Direct quarry rates without any middleman markup. Very dependable people for bulk yard dispatch.",
  },
];

