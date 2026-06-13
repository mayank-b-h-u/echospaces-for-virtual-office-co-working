"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function NotFound() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#092317] text-[#FDFEFB]">
      {/* Background abstract shapes for design */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#1B6543]/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#DAF966]/10 blur-[120px]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container-dishora relative z-10 mx-auto px-6 py-24 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-4xl w-full"
        >
          {/* 404 Text */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <motion.h1
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="text-[10rem] md:text-[14rem] leading-none font-['Anton'] text-transparent bg-clip-text bg-gradient-to-b from-[#DAF966] to-[#1B6543] select-none"
              style={{ WebkitTextStroke: "2px rgba(218, 249, 102, 0.2)" }}
            >
              404
            </motion.h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
              <span className="bg-[#092317]/80 backdrop-blur-md px-6 py-2 rounded-full text-xl md:text-2xl font-['Anton'] tracking-widest uppercase text-[#FDFEFB] border border-[#1B6543]/30">
                Page Not Found
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="max-w-xl mb-12">
            <p className="text-lg md:text-xl text-[#B8CFC5] font-light">
              Oops! Looks like you took a wrong turn. The page you are looking for might have been moved, deleted, or possibly never existed.
            </p>
          </motion.div>

          {/* Links / Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 w-full"
          >
            <PrimaryButton href="/">Home</PrimaryButton>
            <SecondaryButton href="/about">About Us</SecondaryButton>
            <SecondaryButton href="/contact">Contact</SecondaryButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 w-full mt-4"
          >
            <SecondaryButton href="/virtual-office">Virtual Office</SecondaryButton>
            <SecondaryButton href="/coworking">Coworking</SecondaryButton>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
