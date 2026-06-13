"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth out the progress with a spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[9999]"
      // Using a gradient based on the brand colors
      style={{
        scaleX,
        background: "linear-gradient(to right, #006543, #DAF966)",
        boxShadow: "0 1px 10px rgba(218, 249, 102, 0.4)"
      }}
    />
  );
}
