"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const phoneNumber = "919769666005";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <footer id="contact" className="bg-black pt-20 pb-10 px-4 md:px-8 border-t border-gold/20">
        <div className="container mx-auto max-w-6xl text-center">
          
          {/* Part 1: Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-heading text-cream mb-6">
              Ready To Look Your Best?
            </h2>
            <p className="text-cream/70 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              Book your appointment today. Available across Kalyan, Pune, Sangli, Satara, 
              Kolhapur and all of Maharashtra.
            </p>
            
            <div className="flex flex-col items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center shadow-lg shadow-gold/20"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </motion.a>
              <span className="text-muted text-[10px] uppercase tracking-widest mt-4">
                Usually responds within 1 hour
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gold/10 mb-10" />

          {/* Part 2: Footer Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10">
            {/* Logo */}
            <div className="flex justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Kirti Jadhav Makeovers Logo" 
                width={50} 
                height={50} 
                style={{ width: "auto" }}
                className="h-[50px] object-contain"
              />
            </div>

            {/* Copyright */}
            <p className="text-muted text-xs tracking-wide text-center order-last md:order-none">
              © 2025 Kirti Jadhav Makeovers. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 items-center">
              <a href="https://www.instagram.com/kirti_jmakeover" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-gold hover:text-gold-light transition-colors cursor-pointer">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="tel:+919769666005" 
                className="p-3 rounded-full border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all"
                aria-label="Call Us"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="relative"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-gold text-black rounded-full shadow-[0_0_20px_rgba(184,134,11,0.5)] active:scale-95 transition-transform"
            aria-label="Chat with us"
          >
            <MessageCircle size={30} fill="currentColor" fillOpacity={0.1} />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}
