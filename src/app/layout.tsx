import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121316",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stonegallery.in"),
  title: {
    default: "STONE GALLERY — Lucknow",
    template: "%s — Stone Gallery",
  },
  description:
    "Marble, Granite, and Natural Stone. A physical showroom and slab yard in Lucknow, Uttar Pradesh.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "STONE GALLERY — Lucknow",
    description: "Marble, Granite, and Natural Stone showroom in Lucknow.",
    url: "https://stonegallery.in",
    siteName: "STONE GALLERY",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://stonegallery.in/logo.png", width: 800, height: 800, alt: "Stone Gallery" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${geist.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-1000 ease-out font-sans">
        {children}
      </body>
    </html>
  );
}
