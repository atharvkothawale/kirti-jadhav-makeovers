"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const StatCounter = ({ value, label, showDivider = true }: { value: string, label: string, showDivider?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const targetValue = parseInt(value);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue]);

  return (
    <div className="flex items-center">
      <div ref={ref} className="text-center px-4 md:px-8">
        <div className="text-3xl md:text-4xl font-bold text-gold mb-1">
          {count}{value.includes("+") ? "+" : ""}
        </div>
        <div className="text-[10px] md:text-xs uppercase tracking-wider text-cream/70 max-w-[100px] mx-auto leading-tight">
          {label}
        </div>
      </div>
      {showDivider && <div className="h-12 w-[1px] bg-gold/30" />}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="bg-black py-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl border border-gold/50 overflow-hidden bg-gradient-to-br from-black via-[#1a110a] to-black group shadow-2xl shadow-gold/5">
              {/* Actual Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500" 
                style={{ backgroundImage: "url('/images/artist.jpeg')" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-gold italic text-sm md:text-base tracking-wide">
                  &quot;Available across Maharashtra&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-cream leading-tight">
                The Artist Behind <br />
                <span className="text-gold italic">The Brush</span>
              </h2>
              <p className="text-cream/80 text-sm md:text-base leading-relaxed max-w-xl">
                Kirti Jadhav is a passionate makeup artist based in Kalyan, Maharashtra. 
                With years of experience in bridal and event makeup, she has transformed 
                hundreds of women across Maharashtra. She believes every woman deserves 
                to feel her most beautiful on her most important day.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex items-center py-6 border-y border-gold/10 w-fit">
              <StatCounter value="200+" label="Brides Made Beautiful" />
              <StatCounter value="5+" label="Years Experience" />
              <StatCounter value="10+" label="Cities Covered" showDivider={false} />
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/919769666005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-gold/20"
                aria-label="Book your makeover on WhatsApp"
              >
                Book Your Look
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
