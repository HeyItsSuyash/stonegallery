export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  material: string;
  application: string;
  year: string;
  clientType: "Private Villa" | "Luxury Penthouse" | "Architectural Pavilion" | "Boutique Residence";
  description: string;
  heroImage: string;
  galleryImages: string[];
  slabUsed: string;
  curatorNotes: string;
}

export const PROJECTS: Project[] = [
  {
    id: "gomti-nagar-villa",
    slug: "gomti-nagar-villa",
    title: "The Monolith Pavilion",
    location: "Gomti Nagar Extension, Lucknow",
    material: "Italian Statuario Marble & Pietra Grey",
    application: "Double-Height Bookmatched Wall & Master Spa",
    year: "2025",
    clientType: "Private Villa",
    description:
      "A 7,200 sq.ft private residence designed around natural daylight and raw materiality. Two continuous 12-foot Statuario slabs were matched mirror-image across the living pavilion, while Pietra Grey provides meditative calmness in the master bath.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
    ],
    slabUsed: "Statuario Royal 20mm Polish",
    curatorNotes:
      "Precision dry-lay inspection took place at our Ayodhya Road showroom before dry-hang installation with stainless steel concealed brackets.",
  },
  {
    id: "ansal-golf-city-manor",
    slug: "ansal-golf-city-manor",
    title: "Travertine Courtyard House",
    location: "Sushant Golf City, Lucknow",
    material: "Roman Navona Travertine & Flamed Granite",
    application: "Verandah Columns, Courtyard Floor & Cantilever Steps",
    year: "2024",
    clientType: "Boutique Residence",
    description:
      "An earthy sanctuary blending contemporary brutalist lines with organic Roman travertine. Unfilled brushed surfaces welcome the north Indian sunlight without harsh glare.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
    ],
    slabUsed: "Travertino Romano Cross-Cut 30mm",
    curatorNotes:
      "Each batch was hand-sorted to preserve consistent warm sand undertones across 4,000 sq.ft of continuous indoor-outdoor flooring.",
  },
  {
    id: "hazratganj-penthouse",
    slug: "hazratganj-penthouse",
    title: "Obsidian Culinary Suite",
    location: "Hazratganj, Lucknow",
    material: "Cosmic Black Leathered Granite & Pure Quartz",
    application: "Monolithic 16-Foot Kitchen Island & Butler Pantry",
    year: "2025",
    clientType: "Luxury Penthouse",
    description:
      "A high-contrast gastronomic space where dark leathered cosmic granite stands juxtaposed against warm teak joinery and recessed cove lighting. The textured surface softens light while repelling everyday stains.",
    heroImage:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1400&q=85",
    ],
    slabUsed: "Titanium Cosmic Leathered 20mm with Shark-nose Edge",
    curatorNotes:
      "Seamless waterjet miter joints hide all seam lines, giving the appearance of a single solid block carved from a quarry cliff.",
  },
  {
    id: "shalimar-oneworld-residence",
    slug: "shalimar-oneworld-residence",
    title: "Luminous Onyx Portal",
    location: "Shalimar OneWorld, Gomti Nagar, Lucknow",
    material: "Persian Backlit Honey Onyx & Calacatta Gold",
    application: "Translucent Bar Screen & Powder Room Cantilever Basin",
    year: "2024",
    clientType: "Luxury Penthouse",
    description:
      "Onyx is light captured in stone. We created a custom 2700K dimmable LED diffuser lattice behind an 18mm honey chalcedony slab to produce an incandescent golden sanctuary during twilight.",
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    ],
    slabUsed: "Persian Honey Onyx 18mm Translucent Polish",
    curatorNotes:
      "Calibrated light transmission testing conducted at our showroom before final installation ensured zero hot spots or visible diode glare.",
  },
];
