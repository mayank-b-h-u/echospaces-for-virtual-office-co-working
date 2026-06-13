"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  id?: string;
}

/**
 * Dishora Primary Button
 *
 * Default:
 *  bg: #DAF966
 *  text: #1B6543
 *
 * Hover:
 *  bg: #1B6543
 *  border: #DAF966
 *  text: #DAF966
 */

export default function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  id,
}: PrimaryButtonProps) {
  const inner = (
    <motion.span
      id={id}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full
        px-8 py-3
        bg-[#DAF966]
        text-[#1B6543]
        font-['Anton']
        uppercase
        tracking-wide
        cursor-pointer
        select-none
        ${className}
      `}
    >
      {/* Hover Background */}
      <motion.span
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 rounded-full bg-[#1B6543] border-[5px] border-[#DAF966]"
      />

      {/* Animated Text */}
      <span className="relative z-10 h-[1.2em] overflow-hidden">
        {/* Current Text */}
        <motion.span
          variants={{
            rest: { y: "0%" },
            hover: { y: "-100%" },
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="block text-[#1B6543]"
        >
          {children}
        </motion.span>

        {/* Hover Text */}
        <motion.span
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 block text-[#DAF966]"
        >
          {children}
        </motion.span>
      </span>
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="appearance-none bg-transparent border-none p-0"
    >
      {inner}
    </button>
  );
}