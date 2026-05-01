"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [hoverPart, setHoverPart] = useState<"top" | "bottom" | null>(null);

  const handleScroll = (direction: "up" | "down") => {
    const scrollAmount = direction === "up" ? -window.innerHeight : window.innerHeight;
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  return (
    <div 
      className="fixed right-0 top-0 bottom-0 w-2 md:w-3 z-[9999] cursor-pointer hidden md:block group"
      onMouseLeave={() => setHoverPart(null)}
    >
      {/* Background Track - Make it clearly visible */}
      <div className="absolute inset-0 bg-white/10 border-l border-gold/30 group-hover:bg-white/20 transition-colors" />

      {/* Progress Fill */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-gold origin-top z-10"
        style={{ scaleY }}
      />

      {/* Click Areas - Positioned on top of everything */}
      <div 
        className="absolute top-0 w-full h-1/2 z-30" 
        onClick={() => handleScroll("up")}
        onMouseEnter={() => setHoverPart("top")}
      />
      <div 
        className="absolute bottom-0 w-full h-1/2 z-30" 
        onClick={() => handleScroll("down")}
        onMouseEnter={() => setHoverPart("bottom")}
      />

      {/* Tooltips */}
      <div 
        className={`absolute right-8 p-2 bg-gold text-black text-[10px] font-bold rounded shadow-2xl whitespace-nowrap transition-all duration-300 pointer-events-none z-40 ${
          hoverPart === "top" ? "top-1/4 opacity-100 translate-x-0" : 
          hoverPart === "bottom" ? "bottom-1/4 opacity-100 translate-x-0" : 
          "opacity-0 translate-x-4"
        }`}
      >
        {hoverPart === "top" ? "↑ Scroll Up" : "↓ Scroll Down"}
      </div>
    </div>
  );
}
