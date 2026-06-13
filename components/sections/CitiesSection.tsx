"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CITY_CARDS } from "../../lib/landing-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function CitiesSection() {
  return (
    <section className="bg-[#FDFEFB] section-standard">
      <div className="container-dishora">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#1B6543]">
            Our Presence
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
            Serving Businesses Across Delhi NCR
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-gray-mid font-[var(--font-body)]">
            Find office space for lease in Gurgaon, Noida, and Delhi including coworking spaces,
            managed offices, and fully furnished commercial spaces.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {CITY_CARDS.map((city) => (
            <motion.div key={city.name} variants={cardVariants}>
              <Link
                href={city.href}
                className="group relative block h-72 overflow-hidden rounded-[20px]"
              >
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#092317]/80 via-[#092317]/20 to-transparent" />

                {/* Lime top-left badge */}
                <div className="absolute left-4 top-4">
                  <span className="badge-lime">Delhi NCR</span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-[#FDFEFB]">
                    {city.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 font-['Anton'] text-sm uppercase tracking-wide text-[#DAF966] transition-all group-hover:gap-2">
                    <span>Explore Spaces</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
