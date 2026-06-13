"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PROMO_FEATURES } from "../../lib/landing-data";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function PromoSection() {
  return (
    <section className="bg-[#DDE8E7]/30 section-blog">
      <div className="container-dishora">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[20px] bg-[#1B6543] shadow-2xl"
        >
          <div className="grid gap-8 p-10 lg:grid-cols-2 lg:gap-0 lg:p-0">
            {/* Left */}
            <div className="flex flex-col justify-center gap-6 lg:p-14">
              <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#DAF966]">
                Ready to Move?
              </span>
              <h2 className="font-['Anton'] text-[2rem] lg:text-[2.75rem] leading-none tracking-[-0.02em] uppercase text-[#FDFEFB]">
                Find Your Ideal Office Space with EchoSpaces
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {PROMO_FEATURES.map((f) => (
                  <div key={f.text} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#DAF966]" />
                    <span className="text-sm text-[#FDFEFB]/90 font-[var(--font-body)]">{f.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton href="/contact">Get Free Enquiry</PrimaryButton>
                <div className="flex items-center gap-2 font-['Anton'] text-sm uppercase tracking-wide text-[#DAF966]">
                  <span>📞</span>
                  <a href="tel:+919800001131" className="hover:text-[#FDFEFB] transition-colors">
                    +91 98-0000-1131
                  </a>
                </div>
              </div>
            </div>

            {/* Right — image panel */}
            <div className="relative hidden lg:block min-h-[380px]">
              <Image
                src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80&w=800"
                alt="Modern office panorama"
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1B6543]/80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
