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
  title: "Kirti Jadhav Makeovers | Bridal Makeup Artist in Kalyan, Maharashtra",
  description: "Kirti Jadhav is a professional bridal makeup artist based in Kalyan, Maharashtra. Specializing in bridal, engagement, party makeup, nail art and hair styling. Available across Pune, Sangli, Satara, Kolhapur and all of Maharashtra.",
  keywords: "bridal makeup artist Kalyan, makeup artist Kalyan Maharashtra, bridal makeup Pune, engagement makeup Kalyan, party makeup Maharashtra, nail art Kalyan, hair styling Kalyan, Kirti Jadhav Makeovers",
  authors: [{ name: "Kirti Jadhav Makeovers" }],
  creator: "Kirti Jadhav Makeovers",
  openGraph: {
    title: "Kirti Jadhav Makeovers | Bridal Makeup Artist in Kalyan",
    description: "Professional bridal and event makeup artist based in Kalyan, Maharashtra. Available across Maharashtra.",
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
    title: "Kirti Jadhav Makeovers | Bridal Makeup Artist in Kalyan",
    description: "Professional bridal and event makeup artist in Kalyan, Maharashtra.",
    images: ["/images/artist.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "A9G6moblnI6Vv66SY5OiaSUPH2U437v6eLGHJsSU62k",
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
      <head>
        <meta name="google-site-verification" content="A9G6moblnI6Vv66SY5OiaSUPH2U437v6eLGHJsSU62k" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kirti Jadhav Makeovers",
              "description": "Professional bridal makeup artist in Kalyan, Maharashtra",
              "telephone": "+919769000005",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kalyan",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "url": "https://kirti-jadhav-makeovers.vercel.app",
              "sameAs": [
                "https://www.instagram.com/kirti_jmakeover"
              ],
              "priceRange": "₹₹",
              "image": "https://kirti-jadhav-makeovers.vercel.app/images/logo.png"
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
