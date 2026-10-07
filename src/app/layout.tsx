import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1B1C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stonegallery.in"),
  title: {
    default: "STONE GALLERY | Earth, Shaped For Space | Lucknow",
    template: "%s | Stone Gallery Lucknow",
  },
  description:
    "A premier architectural stone, Italian marble, exotic granite, travertine and onyx surface studio in Lucknow, Uttar Pradesh. Discover earth's raw beauty shaped for timeless living spaces.",
  keywords: [
    "Stone Gallery Lucknow",
    "Italian marble showroom Lucknow",
    "granite showroom Lucknow",
    "architectural stone Lucknow",
    "marble showroom near Kamta",
    "Ayodhya Road stone showroom",
    "natural stone Uttar Pradesh",
    "luxury marble India",
    "travertine tiles Lucknow",
    "onyx backlit wall Lucknow",
    "kitchen granite countertops Lucknow",
    "Statuario marble dealer Lucknow",
  ],
  authors: [{ name: "Stone Gallery Studio", url: "https://stonegallery.in" }],
  creator: "Stone Gallery Studio",
  publisher: "Stone Gallery Studio",
  category: "Architecture & Luxury Surfaces",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "STONE GALLERY | Earth, Shaped For Space | Lucknow",
    description:
      "Luxury architectural stone, Italian marble, exotic granite and surface studio in Lucknow, Uttar Pradesh. Explore raw slabs, tactile finishes, and curated living spaces.",
    url: "https://stonegallery.in",
    siteName: "Stone Gallery Lucknow",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Stone Gallery - Earth, Shaped For Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STONE GALLERY | Earth, Shaped For Space",
    description:
      "Premier architectural stone, Italian marble, granite, and surface studio in Lucknow, UP.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased selection:bg-[#a38a6d]/20 selection:text-current`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
