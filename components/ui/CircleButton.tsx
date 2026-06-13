"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CircleButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: number;
  id?: string;
}

/**
 * Dishora Circle Button — Sage ring with dual half-fill slide-in on hover.
 * Two bg halves slide from left/right to meet center filling the circle.
 */
export default function CircleButton({
  children,
  href,
  onClick,
  className = "",
  size = 64,
  id,
}: CircleButtonProps) {
  const inner = (
    <motion.span
      whileHover="hover"
      className={`
        group relative inline-flex items-center justify-center overflow-hidden
        rounded-full border border-[#B8CFC5]/80 bg-[rgba(209,209,209,0.26)]
        cursor-pointer select-none font-['Anton'] uppercase text-[#1B6543]
        ${className}
      `}
      style={{ width: size, height: size }}
      id={id}
    >
      {/* Left fill half */}
      <motion.span
        variants={{ hover: { x: "0%" }, initial: { x: "-100%" } }}
        initial="initial"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-[#B8CFC5] rounded-l-full"
      />
      {/* Right fill half */}
      <motion.span
        variants={{ hover: { x: "0%" }, initial: { x: "100%" } }}
        initial="initial"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[#B8CFC5] rounded-r-full"
      />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return (
    <button type="button" onClick={onClick} className="appearance-none">
      {inner}
    </button>
  );
}
