"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const categories = ["All", "Party", "Hair", "Nails"];

const galleryImages = [
  // Party Images (from random folder)
  { id: 1, src: "/images/gallery/party/1.webp", category: "Party", alt: "Party Makeup 1" },
  { id: 2, src: "/images/gallery/party/2.webp", category: "Party", alt: "Party Makeup 2" },
  { id: 3, src: "/images/gallery/party/3.webp", category: "Party", alt: "Party Makeup 3" },
  { id: 4, src: "/images/gallery/party/4.webp", category: "Party", alt: "Party Makeup 4" },
  { id: 5, src: "/images/gallery/party/5.webp", category: "Party", alt: "Party Makeup 5" },
  { id: 6, src: "/images/gallery/party/6.webp", category: "Party", alt: "Party Makeup 6" },
  { id: 7, src: "/images/gallery/party/7.jpg", category: "Party", alt: "Party Makeup 7" },
  { id: 8, src: "/images/gallery/party/e1.webp", category: "Party", alt: "Party Makeup 8" },
  { id: 9, src: "/images/gallery/party/e2.webp", category: "Party", alt: "Party Makeup 9" },
  { id: 10, src: "/images/gallery/party/e3.webp", category: "Party", alt: "Party Makeup 10" },
  { id: 11, src: "/images/gallery/party/r2.jpg", category: "Party", alt: "Party Makeup 11" },
  { id: 12, src: "/images/gallery/party/r3.webp", category: "Party", alt: "Party Makeup 12" },
  
  // Hair Images
  { id: 13, src: "/images/gallery/hair/h1.jpg", category: "Hair", alt: "Hair Styling 1" },
  { id: 14, src: "/images/gallery/hair/h2.webp", category: "Hair", alt: "Hair Styling 2" },
  { id: 15, src: "/images/gallery/hair/h3.jpg", category: "Hair", alt: "Hair Styling 3" },
  { id: 16, src: "/images/gallery/hair/h4.webp", category: "Hair", alt: "Hair Styling 4" },
  { id: 17, src: "/images/gallery/hair/h5.webp", category: "Hair", alt: "Hair Styling 5" },
  { id: 18, src: "/images/gallery/hair/h6.jpg", category: "Hair", alt: "Hair Styling 6" },
  { id: 19, src: "/images/gallery/hair/h7.webp", category: "Hair", alt: "Hair Styling 7" },

  // Nail Images
  { id: 20, src: "/images/gallery/nails/n1.webp", category: "Nails", alt: "Nail Art 1" },
  { id: 21, src: "/images/gallery/nails/n2.webp", category: "Nails", alt: "Nail Art 2" },
  { id: 22, src: "/images/gallery/nails/n3.webp", category: "Nails", alt: "Nail Art 3" },
  { id: 23, src: "/images/gallery/nails/n4.webp", category: "Nails", alt: "Nail Art 4" },

  // New Party Images
  { id: 24, src: "/images/gallery/party/8.png", category: "Party", alt: "Party Makeup 13" },
  { id: 25, src: "/images/gallery/party/9.png", category: "Party", alt: "Party Makeup 14" },
  { id: 26, src: "/images/gallery/party/10.png", category: "Party", alt: "Party Makeup 15" },
  { id: 27, src: "/images/gallery/party/11.png", category: "Party", alt: "Party Makeup 16" },
  { id: 28, src: "/images/gallery/party/12.png", category: "Party", alt: "Party Makeup 17" },
  { id: 29, src: "/images/gallery/party/13.png", category: "Party", alt: "Party Makeup 18" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [index, setIndex] = useState(-1);

  const filteredImages = activeTab === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="bg-black py-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-cream mb-6"
          >
            Every Look, A Masterpiece
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-20 bg-gold rounded-full"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border uppercase tracking-wider ${
                activeTab === cat
                  ? "bg-gold text-black border-gold shadow-lg shadow-gold/20"
                  : "bg-transparent text-gold border-gold/30 hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-gold/10 hover:border-gold transition-colors duration-500 break-inside-avoid"
                onClick={() => setIndex(idx)}
              >
                <div className="relative aspect-auto overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={800}
                      style={{ width: "auto" }}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-gold text-sm font-semibold uppercase tracking-widest border border-gold px-4 py-2 rounded-full">
                      View Look
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={filteredImages.map(img => ({ src: img.src }))}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.95)" } }}
        />

      </div>
    </section>
  );
}
