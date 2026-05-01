import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kirti-jadhav-makeovers.vercel.app"),
  title: "Kirti Jadhav Makeovers | Bridal Makeup Artist in Kalyan",
  description: "Premium Bridal, Engagement, and Event Makeup Artist based in Kalyan, Maharashtra. Available for travel across Maharashtra.",
  openGraph: {
    title: "Kirti Jadhav Makeovers",
    description: "Premium Bridal and Event Makeup Artist in Maharashtra.",
    url: "https://kirti-jadhav-makeovers.vercel.app",
    siteName: "Kirti Jadhav Makeovers",
    images: [
      {
        url: "/images/artist.jpeg",
        width: 1200,
        height: 630,
        alt: "Kirti Jadhav Makeovers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirti Jadhav Makeovers",
    description: "Premium Bridal and Event Makeup Artist in Maharashtra.",
    images: ["/images/artist.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.png", type: "image/png" },
    ],
    apple: "/images/logo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
