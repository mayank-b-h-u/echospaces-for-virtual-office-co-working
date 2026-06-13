"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { LOCATION_CARDS } from "../../lib/landing-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function LocationsSection() {
  return (
    <section className="bg-[#1B6543] section-standard">
      <div className="container-dishora">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#DAF966]">
            Where We Are
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#FDFEFB]">
            Premium Locations in Delhi NCR
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B8CFC5] font-[var(--font-body)]">
            Explore our most popular office and coworking locations across the capital region.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {LOCATION_CARDS.map((loc) => (
            <motion.div
              key={loc.name}
              variants={cardVariants}
              style={{
                gridColumn: loc.colSpan ? `span ${loc.colSpan}` : undefined,
                gridRow: loc.rowSpan ? `span ${loc.rowSpan}` : undefined,
              }}
            >
              <Link
                href={`/locations/${loc.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative flex h-44 overflow-hidden rounded-[20px]"
                style={{ height: loc.rowSpan ? "100%" : "11rem", minHeight: loc.rowSpan ? "22rem" : "11rem" }}
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#092317]/80 via-[#092317]/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#DAF966]/80 font-['Anton'] uppercase">
                    <MapPin className="h-3 w-3" />
                    {loc.city}
                  </div>
                  <div className="font-['Anton'] text-base uppercase tracking-wide text-[#FDFEFB]">
                    {loc.name}
                  </div>
                  <div className="mt-1 flex gap-3 text-xs text-[#B8CFC5] font-[var(--font-body)]">
                    <span>{loc.spaces} Spaces</span>
                    <span>From {loc.startingFrom}</span>
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
