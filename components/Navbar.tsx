"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black border-b border-gold py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex z-50 relative items-center">
          <Image 
            src="/images/logo.png" 
            alt="Kirti Jadhav Makeovers Logo" 
            width={60} 
            height={60} 
            style={{ width: "auto" }}
            className="h-[60px] object-contain"
            priority 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-cream hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <a
            href="https://wa.me/919769666005"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-black px-6 py-2 rounded-full font-semibold transition-colors duration-300 uppercase tracking-wide text-sm"
            aria-label="Book Now on WhatsApp"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black pt-24 px-6 md:hidden z-40 flex flex-col h-screen"
          >
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-cream hover:text-gold transition-colors duration-300 text-xl font-medium tracking-wide block border-b border-white/10 pb-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://wa.me/919769666005"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="bg-gold hover:bg-gold-light text-black px-6 py-4 rounded-full font-semibold transition-colors duration-300 uppercase tracking-wide text-center block w-full"
                aria-label="Book Now on WhatsApp"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
