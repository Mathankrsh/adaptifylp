import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Primary Meta Tags
  title: "Adaptify - Automated SEO Delivery For Your Agency",
  description: "Rank on Google with AI Search. Secure high-authority backlinks, create optimized content, and build data-driven proposals automatically.",
  keywords: ["seo", "agency", "automation", "backlinks", "content", "proposals", "white label works"],
  authors: [{ name: "Adaptify" }],

  // Favicon
  icons: {
    icon: "/favicon.ico",
  },

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adaptify.ai/seo",
    siteName: "Adaptify",
    title: "Adaptify - Automated SEO Delivery For Your Agency",
    description: "Rank on Google with AI Search using Adaptify's automated SEO platform.",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Adaptify - Automated SEO Delivery For Your Agency",
    description: "Rank on Google with AI Search using Adaptify's automated SEO platform.",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
