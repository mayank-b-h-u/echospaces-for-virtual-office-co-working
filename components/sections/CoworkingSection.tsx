"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Wifi, Coffee, Zap, Users } from "lucide-react";
import { COWORKING_CARDS } from "../../lib/landing-data";
import SecondaryButton from "@/components/ui/SecondaryButton";

const amenityIconMap: Record<string, React.ElementType> = {
  WiFi: Wifi,
  "Meeting Rooms": Users,
  "Power Backup": Zap,
  Cafeteria: Coffee,
  Lounge: Coffee,
  "24/7 Access": Zap,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function CoworkingSection() {
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
            Flexible Workspaces
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
            Premium Coworking Spaces in Delhi NCR
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-mid font-[var(--font-body)]">
            Flexible coworking memberships with world-class amenities and vibrant communities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {COWORKING_CARDS.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="group overflow-hidden rounded-[20px] border border-[#B8CFC5]/40 bg-white
                shadow-sm transition-all duration-300
                hover:shadow-[0_8px_32px_rgba(27,101,67,0.12)]"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {card.status && (
                  <div className="absolute left-3 top-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-['Anton'] uppercase text-white ${
                      card.status === "PREMIUM" ? "bg-[#006543]" : "bg-[#1B6543]"
                    }`}>
                      {card.status}
                    </span>
                  </div>
                )}
                {card.rating && (
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow">
                    <Star className="h-3.5 w-3.5 fill-[#DAF966] text-[#DAF966]" />
                    <span className="text-xs font-['Anton'] text-[#1B6543]">{card.rating}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-['Anton'] text-lg uppercase tracking-wide leading-snug text-[#1B6543]">
                      {card.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-gray-mid font-[var(--font-body)]">
                      <MapPin className="h-3.5 w-3.5" />
                      {card.location}
                    </div>
                  </div>
                  <div className="font-['Anton'] text-xl text-[#006543]">{card.pricePerSeat}</div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5">
                  {card.amenities.map((am) => {
                    const Icon = amenityIconMap[am] ?? Wifi;
                    return (
                      <div key={am} className="flex items-center gap-1.5 rounded-full bg-[#DDE8E7] px-2.5 py-1 text-xs text-[#1B6543] font-[var(--font-body)]">
                        <Icon className="h-3 w-3" />
                        {am}
                      </div>
                    );
                  })}
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
                    href={`/co-working/${card.id}`}
                    className="flex-1 rounded-[99px] border border-[#1B6543] py-2.5 text-center font-['Anton'] text-sm uppercase tracking-wide text-[#1B6543] transition-all hover:bg-[#1B6543] hover:text-[#DAF966]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <SecondaryButton href="/co-working">View All Spaces</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
