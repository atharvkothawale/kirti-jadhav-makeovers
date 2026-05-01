"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Kalyan",
    text: "Kirti made me look absolutely stunning on my wedding day. Everyone kept complimenting my makeup. She is truly talented!",
    service: "Bridal Makeup",
    rating: 5,
  },
  {
    name: "Sneha Patil",
    location: "Pune",
    text: "Got my engagement makeup done by Kirti and I was glowing the entire day. She understood exactly what I wanted.",
    service: "Engagement Makeup",
    rating: 5,
  },
  {
    name: "Anita Desai",
    location: "Kalyan",
    text: "Kirti did makeup for me and my entire family for a wedding function. All of us looked beautiful. Highly recommend!",
    service: "Party Makeup",
    rating: 5,
  },
  {
    name: "Rutuja More",
    location: "Sangli",
    text: "She travelled all the way to Sangli for my wedding. So professional and the makeup lasted the entire day.",
    service: "Bridal Makeup",
    rating: 5,
  },
  {
    name: "Kavya Joshi",
    location: "Satara",
    text: "The nail art Kirti did for my mehendi was so beautiful. Got so many compliments. Will definitely book again!",
    service: "Nail Art",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextTestimonial, 4000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, currentIndex]);

  return (
    <section id="testimonials" className="bg-[#111111] py-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Client Love
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-cream mb-6"
          >
            Words From My Brides
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-20 bg-gold rounded-full"
          />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop View (3 cards) */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => {
              const item = testimonials[(currentIndex + i) % testimonials.length];
              return (
                <motion.div
                  key={`${item.name}-${currentIndex}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-black border border-gold/10 rounded-2xl p-8 flex flex-col h-full hover:border-gold/30 transition-colors"
                >
                  <Quote className="text-gold mb-6" size={40} fill="currentColor" fillOpacity={0.1} />
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <Star key={starIdx} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-cream italic font-sans leading-relaxed mb-8 flex-grow">
                    &quot;{item.text}&quot;
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-xl font-heading font-bold text-cream mb-1">
                      {item.name}
                    </h4>
                    <p className="text-muted text-xs uppercase tracking-wider">
                      {item.service} • {item.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile View (1 card) */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-black border border-gold/10 rounded-2xl p-8 flex flex-col min-h-[350px]"
              >
                <Quote className="text-gold mb-6" size={32} fill="currentColor" fillOpacity={0.1} />
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star key={starIdx} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-cream italic font-sans leading-relaxed mb-8 flex-grow">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>
                <div className="mt-auto">
                  <h4 className="text-xl font-heading font-bold text-cream mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted text-xs uppercase tracking-wider">
                    {testimonials[currentIndex].service} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Carousel Indicators (Optional, but good for UX) */}
          <div className="hidden lg:flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  currentIndex === idx ? "w-8 bg-gold" : "w-2 bg-gold/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
