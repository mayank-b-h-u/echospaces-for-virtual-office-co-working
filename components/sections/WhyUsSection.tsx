"use client";
import { motion } from "framer-motion";
import {
  MapPin, Zap, FileText, Layout, TrendingUp, Shield
} from "lucide-react";
import { WHY_US_FEATURES } from "../../lib/landing-data";

const iconMap: Record<string, React.ElementType> = {
  MapPin, Zap, FileText, Layout, TrendingUp, Shield,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function WhyUsSection() {
  return (
    <section className="bg-[#FDFEFB] section-standard">
      <div className="container-dishora">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#1B6543]">
            Our Advantages
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
            Why Choose EchoSpaces?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-mid text-base leading-relaxed font-[var(--font-body)]">
            We offer unparalleled service, premium locations, and flexible terms to help your business thrive.
          </p>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY_US_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] ?? MapPin;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group overflow-hidden rounded-[20px] border border-[#B8CFC5]/50 bg-white p-7
                  shadow-sm transition-all duration-300
                  hover:border-[#DAF966]/60 hover:shadow-[0_8px_32px_rgba(218,249,102,0.15)]"
              >
                {/* Icon badge — lime */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#DAF966]">
                  <Icon className="h-6 w-6 text-[#1B6543]" />
                </div>
                <h3 className="mb-2 font-['Anton'] text-xl uppercase tracking-wide text-[#1B6543]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-mid font-[var(--font-body)]">
                  {feature.description}
                </p>

                {/* Animated bottom accent */}
                <div className="mt-5 h-[2px] w-0 bg-[#DAF966] transition-all duration-300 group-hover:w-full rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
