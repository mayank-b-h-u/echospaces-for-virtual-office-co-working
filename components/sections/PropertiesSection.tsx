"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft, ChevronRight, AirVent, ParkingSquare, Bike, Camera,
  ArrowUpDown, Wifi, Zap, Shield, Sparkles, MapPin
} from "lucide-react";
import { PROPERTY_CARDS } from "../../lib/landing-data";
import type { Amenity } from "../../types/landing";
import SecondaryButton from "@/components/ui/SecondaryButton";

const iconMap: Record<string, React.ElementType> = {
  AirVent, ParkingSquare, Bike, Camera, ArrowUpDown, Wifi, Zap, Shield, Sparkles,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function AmenityIcon({ amenity }: { amenity: Amenity }) {
  const Icon = iconMap[amenity.icon] ?? MapPin;
  return (
    <div className="flex items-center gap-1.5 rounded-full bg-[#DDE8E7] px-2.5 py-1 text-xs text-[#1B6543] font-[var(--font-body)]">
      <Icon className="h-3.5 w-3.5" />
      <span>{amenity.label}</span>
    </div>
  );
}

function PropertyCardComponent({ card }: { card: typeof PROPERTY_CARDS[0] }) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <motion.div
      variants={cardVariants}
      className="group overflow-hidden rounded-[20px] border border-[#B8CFC5]/40 bg-white
        shadow-sm transition-all duration-300
        hover:shadow-[0_8px_32px_rgba(27,101,67,0.12)]"
    >
      {/* Image Slider */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={card.image[imgIdx]}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="badge-lime">{card.badge}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-['Anton'] uppercase text-white ${
            card.status === "FULLY FURNISHED" ? "bg-[#1B6543]" : "bg-[#006543]"
          }`}>
            {card.status}
          </span>
        </div>
        {/* Image Nav */}
        {card.image.length > 1 && (
          <>
            <button
              onClick={() => setImgIdx((p) => (p - 1 + card.image.length) % card.image.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#092317]/60 p-1 text-white opacity-0 transition group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setImgIdx((p) => (p + 1) % card.image.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#092317]/60 p-1 text-white opacity-0 transition group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-['Anton'] text-lg uppercase tracking-wide text-[#1B6543]">{card.title}</h3>
            <div className="mt-0.5 flex items-center gap-1 text-sm text-gray-mid font-[var(--font-body)]">
              <MapPin className="h-3.5 w-3.5" />
              {card.location}
            </div>
          </div>
          <div className="text-right">
            <div className="font-['Anton'] text-xl text-[#006543]">{card.price}</div>
            <div className="text-xs text-gray-mid font-[var(--font-body)]">{card.sqft.toLocaleString()} sqft</div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5">
          {card.amenities.slice(0, 4).map((a) => (
            <AmenityIcon key={a.label} amenity={a} />
          ))}
          {card.amenities.length > 4 && (
            <div className="flex items-center rounded-full bg-[#DDE8E7] px-2.5 py-1 text-xs text-[#1B6543] font-[var(--font-body)]">
              +{card.amenities.length - 4}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="flex gap-3 pt-1">
          <Link
            href="/contact"
            className="flex-1 rounded-[99px] bg-[#DAF966] py-2.5 text-center font-['Anton'] text-sm uppercase tracking-wide text-[#1B6543] transition-all hover:bg-[#1B6543] hover:text-[#DAF966]"
          >
            Enquiry
          </Link>
          <Link
            href={`/office-space/${card.id}`}
            className="flex-1 rounded-[99px] border border-[#1B6543] py-2.5 text-center font-['Anton'] text-sm uppercase tracking-wide text-[#1B6543] transition-all hover:bg-[#1B6543] hover:text-[#DAF966]"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function PropertiesSection() {
  return (
    <section className="bg-[#DDE8E7]/30 section-standard">
      <div className="container-dishora">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#1B6543]">
            Featured Listings
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
            Premium Office Buildings in Delhi NCR
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-mid font-[var(--font-body)]">
            Browse our curated selection of prime commercial office spaces available for lease.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {PROPERTY_CARDS.map((card) => (
            <PropertyCardComponent key={card.id} card={card} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <SecondaryButton href="/office-space">View All Properties</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
