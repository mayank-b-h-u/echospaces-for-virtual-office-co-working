"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Users, Building2 } from "lucide-react";
import { HERO_STATS } from "../../lib/landing-data";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

const iconMap: Record<string, React.ElementType> = {
  "500+": MapPin,
  "1000+": Users,
  "50+": Building2,
};

function AnimatedTitle({ text }: { text: string }) {
  const shouldReduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <div className="flex flex-wrap gap-x-5 ">
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: shouldReduce ? 0 : 0.75,
              delay: shouldReduce ? 0 : i * 0.13,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="inline-block font-['Anton'] uppercase text-[#F8F8F8]
              text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]
              leading-none tracking-[-0.04em] "
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: shouldReduce ? 0 : 0.65,
      delay: shouldReduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#006543]  pb-0">
      {/* Subtle texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-5 "
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #DAF966 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="h-[100vh] w-full mx-auto container-dishora relative lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 pb-16 lg:pb-0 lg:pt-12">
          {/* ── Left Content ── */}
          <div className="flex flex-col gap-8 pt-8 lg:pt-12 px-6">
            {/* Overline / eyebrow */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#DAF966]">
                <span className="h-1 w-10 bg-[#DAF966] animate-pulse" />
                Premium Office Spaces · Delhi NCR
              </span>
            </motion.div>

            {/* H1 — Dishora word-mask reveal */}
            <AnimatedTitle text="Find Your Perfect Workspace" />

            {/* Subtitle */}
            <motion.p {...fadeUp(0.45)} className="font-['Anton'] text-xl uppercase tracking-wide text-[#DAF966] max-w-md">
              Coworking &amp; premium offices across Delhi NCR — from ₹5K/month
            </motion.p>


          </div>


          {/* ── Right Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldReduce ? 0 : 0.8,
              delay: shouldReduce ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex justify-center lg:justify-end px-6"
          >
            {/* Image Container with Continuous Float */}
            <motion.div
              className="relative h-[480px] w-full max-w-lg"
              animate={shouldReduce ? {} : { y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[20px] shadow-[0_-8px_60px_rgba(218,249,102,0.15)] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                  alt="Premium modern office space in Delhi NCR"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#006543]/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Badge 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-8 -left-10 z-20"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-3 rounded-[16px] border border-[#DAF966]/30 bg-[#092317] px-5 py-4 shadow-xl cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DAF966]">
                    <span className="text-xl">💰</span>
                  </div>

                  <div>
                    <div className="text-xs text-[#DAF966]/60 font-['Anton'] uppercase tracking-wide">
                      Starting From
                    </div>
                    <div className="font-['Anton'] text-[#DAF966] text-lg uppercase">
                      ₹5K / month
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                className="absolute bottom-8 -right-10 z-20"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center gap-3 rounded-[16px] border border-[#DAF966]/30 bg-[#092317] px-5 py-4 shadow-xl cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DAF966]">
                    <span className="text-xl">🏢</span>
                  </div>

                  <div>
                    <div className="text-xs text-[#DAF966]/60 font-['Anton'] uppercase tracking-wide">
                      Available Now
                    </div>
                    <div className="font-['Anton'] text-[#DAF966] text-lg uppercase">
                      100+ Spaces
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center mb-4 ">
          {/* Body para */}


          {/* CTAs */}
          <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4">
            <PrimaryButton href="/office-space">Explore Spaces</PrimaryButton>
            <PrimaryButton href="/contact">Schedule Tour</PrimaryButton>
          </motion.div>

          {/* Stats Row */}

        </div>
      </div>

    </section>
  );
}
