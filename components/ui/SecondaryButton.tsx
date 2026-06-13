"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  id?: string;
}

/**
 * Dishora Secondary Button
 *
 * Default:
 *  bg: #1B6543
 *  text: #F8F8F8
 *
 * Hover:
 *  bg: #DAF966
 *  border: #1B6543
 *  text: #1B6543
 */

export default function SecondaryButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  id,
}: SecondaryButtonProps) {
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
        bg-[#1B6543]
        text-[#F8F8F8]
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
        className="absolute inset-0 rounded-full bg-[#DAF966] border-[5px] border-[#1B6543]"
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
          className="block text-[#F8F8F8]"
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
          className="absolute inset-0 block text-[#1B6543]"
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