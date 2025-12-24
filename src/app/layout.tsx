import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Primary Meta Tags
  title: "Multi-Cast Audiobooks - Every Character, Unique Voice | ElevenReader",
  description: "Transform books into cinematic audio experiences with Multi-Cast AI narration. Each character gets a unique voice. Try ElevenReader's revolutionary audiobook technology.",
  keywords: ["audiobooks", "multi-cast narration", "AI voices", "text to speech", "ElevenReader", "audiobook technology"],
  authors: [{ name: "ElevenReader" }],

  // Favicon
  icons: {
    icon: "/elevenreader.png",
    apple: "/elevenreader.png",
  },

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevenreaderdemo.vercel.app",
    siteName: "ElevenReader",
    title: "Multi-Cast Audiobooks | ElevenReader",
    description: "Every character brought to life with unique AI voices. Experience audiobooks like never before.",
    images: [
      {
        url: "/elevenreader.png",
        width: 1200,
        height: 630,
        alt: "ElevenReader Multi-Cast Audiobooks",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Multi-Cast Audiobooks | ElevenReader",
    description: "Every character brought to life with unique AI voices",
    images: ["/elevenreader.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Multi-Cast Audiobooks",
  "description": "AI-powered multi-voice audiobook narration that brings every character to life with unique voices",
  "brand": {
    "@type": "Brand",
    "name": "ElevenReader"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": "0",
    "description": "Free to try"
  },
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Web"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </body>
    </html>
  );
}
