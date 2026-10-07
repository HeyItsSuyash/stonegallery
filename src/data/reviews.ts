export interface GoogleReview {
  id: string;
  author: string;
  role: string;
  locality: string;
  rating: number;
  date: string;
  content: string;
  application: string;
  materialBought: string;
  verified: boolean;
}

export const GOOGLE_MAPS_META = {
  placeName: "Stone Gallery",
  hindiName: "स्टोन गैलरी",
  rating: 3.9,
  totalReviews: 15,
  category: "Tile Store & Granite / Natural Stone Supplier",
  address: "Dharm Kanta, Ayodhya Road, opposite Sudha Petrol Pump, adjoining Gard, Shankar Puri, Kamta, Lucknow, Uttar Pradesh 226028",
  plusCode: "V2FC+Q8 Lucknow, Uttar Pradesh",
  mapsUrl: "https://maps.google.com/?q=Stone+Gallery+Ayodhya+Road+Kamta+Lucknow",
  phoneNumbers: ["+91 99287 41111", "+91 78979 31966"],
  openingHours: "Monday – Sunday: 10:00 AM – 8:00 PM (Open 7 Days)",
};

export const REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Ankit Verma",
    role: "Local Guide",
    locality: "Gomti Nagar Extension, Lucknow",
    rating: 5,
    date: "3 months ago",
    content:
      "Purchased Rajasthan Black granite for our entire kitchen slab and door chowkhats. Slabs were uniform with zero hollow sound or micro-cracks. Very reasonable rates compared to other shops on Faizabad road. The staff showed whole slabs in direct sunlight so we knew exactly what we were buying.",
    application: "Kitchen Countertops & Door Chowkhats",
    materialBought: "Rajasthan Black Granite (18mm)",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Pooja Srivastava",
    role: "Homeowner",
    locality: "Indira Nagar, Lucknow",
    rating: 5,
    date: "5 months ago",
    content:
      "Huge collection of tiles and granite shades near Chinhat. Staff at the Kamta yard was patient and helped us compare natural light reflections on the slabs before finalizing. Delivered safely to our site with careful handling and zero transit breakage.",
    application: "Flooring & Living Room Elevation",
    materialBought: "Designer Vitrified Slabs & Green Granite",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Mohd. Rizwan",
    role: "Building Contractor",
    locality: "Chinhat / Ayodhya Road, Lucknow",
    rating: 5,
    date: "7 months ago",
    content:
      "Reliable source on Ayodhya Road for granite door frames (chowkhats) and outdoor paving stones. Cut-to-size service was on point and loaded onto our transport vehicle quickly. Good wholesale rates for full lot orders.",
    application: "Granite Chowkhats & Stair Treads",
    materialBought: "Tan Brown Granite & Kota Stone",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Suresh Kumar Yadav",
    role: "Home Builder",
    locality: "Shaheed Path, Lucknow",
    rating: 4,
    date: "9 months ago",
    content:
      "Good quality materials and honest pricing. Wide variety of stone and granite stock available directly at the showroom yard. Inspecting full slabs on site saved us from surprises.",
    application: "Villa Staircase & Kitchen Island",
    materialBought: "Black Galaxy Granite",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Deepak Sharma",
    role: "Interior Renovator",
    locality: "Aliganj, Lucknow",
    rating: 4,
    date: "1 year ago",
    content:
      "Found Blue Pearl granite and high quality wall tiles for our client's bathroom renovation. Good selection and transparent communication regarding delivery timelines.",
    application: "Bathroom Vanity Counter & Wall Tiles",
    materialBought: "Blue Pearl Granite & Wall Tiles",
    verified: true,
  },
];
