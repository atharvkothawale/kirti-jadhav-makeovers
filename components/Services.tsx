"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, Heart, Star, Paintbrush, Scissors, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Bridal Makeup",
    description: "Look breathtaking on your most special day. HD and airbrush options available.",
    icon: Sparkles,
  },
  {
    title: "Engagement Makeup",
    description: "Glowing, photogenic looks crafted for your engagement ceremony.",
    icon: Heart,
  },
  {
    title: "Party & Event Makeup",
    description: "Turn heads at every event with a glamorous, long-lasting look.",
    icon: Star,
  },
  {
    title: "Nail Art",
    description: "Intricate and beautiful nail designs to complete your look.",
    icon: Paintbrush,
  },
  {
    title: "Hair Styling",
    description: "Elegant hairstyles for brides, events, and every occasion.",
    icon: Scissors,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-[#111111] py-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading text-cream mb-6"
          >
            Services Made For You
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-20 bg-gold rounded-full"
          />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-[#0A0A0A] border border-gold/20 hover:border-gold transition-all duration-300 rounded-2xl p-8 group hover:shadow-[0_0_30px_-10px_rgba(184,134,11,0.3)] flex flex-col h-full"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-gold/5 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300 w-fit">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-heading text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <a
                href="https://wa.me/919769666005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gold font-semibold text-sm uppercase tracking-wider group/link transition-all"
                aria-label={`Enquire about ${service.title} on WhatsApp`}
              >
                Enquire Now 
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
