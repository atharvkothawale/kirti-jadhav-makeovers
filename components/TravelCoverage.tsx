"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle } from "lucide-react";

const cities = [
  "Kalyan", "Pune", "Sangli", "Satara", "Kolhapur", 
  "Thane", "Nashik", "Aurangabad", "Nagpur", "Mumbai"
];

export default function TravelCoverage() {
  return (
    <section id="travel" className="bg-black py-20 px-4 md:px-8 overflow-hidden border-t border-gold/10">
      <div className="container mx-auto max-w-6xl text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            We Come To You
          </span>
          <h2 className="text-4xl md:text-5xl font-heading text-cream mb-6">
            Available Across Maharashtra
          </h2>
          <p className="text-cream/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Kirti travels for all bookings. Based in Kalyan, available across Maharashtra. 
            Experience premium makeovers in the comfort of your venue.
          </p>
        </motion.div>

        {/* City Chips */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-4xl mx-auto"
        >
          {cities.map((city) => (
            <div 
              key={city}
              className="flex items-center bg-gold/5 border border-gold/30 text-gold px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider hover:bg-gold hover:text-black transition-all duration-300 cursor-default"
            >
              <MapPin size={14} className="mr-2" />
              {city}
            </div>
          ))}
          <div className="flex items-center bg-transparent border border-gold/20 text-cream/50 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium italic">
            + and more on request
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919769666005"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center shadow-lg shadow-gold/20"
            aria-label="Plan your booking on WhatsApp"
          >
            <MessageCircle className="mr-2" size={20} />
            Plan Your booking
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
