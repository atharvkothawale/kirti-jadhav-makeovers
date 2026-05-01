"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center w-full overflow-hidden">
      {/* Background Image / Placeholder Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-[#2a1a0f] to-[#1a0f0a]">
        {/* Placeholder for future Image component */}
        {/* <Image src="/hero-bg.jpg" alt="Background" fill className="object-cover opacity-50" /> */}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto mt-16 md:mt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Label */}
          <motion.span
            variants={itemVariants}
            className="text-gold text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-6"
          >
            Premium Makeup Artist • Kalyan, Maharashtra
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-6xl md:text-8xl text-cream font-bold leading-tight mb-2"
          >
            Kirti Jadhav
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="font-heading italic text-4xl md:text-6xl text-gold mb-6"
          >
            Makeovers
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-cream/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-10 max-w-2xl leading-relaxed"
          >
            Bridal • Engagement • Events • Nail Art • Hair Styling
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919769666005"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-colors hover:bg-gold-light text-center"
              aria-label="Book appointment on WhatsApp"
            >
              Book on WhatsApp
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery"
              className="bg-transparent border border-gold text-cream px-8 py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-colors hover:bg-gold/10 text-center"
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <a href="#about" aria-label="Scroll down" className="text-gold/80 hover:text-gold transition-colors block p-2">
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
