"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../lib/landing-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[#1B6543] section-standard">
      <div className="container-dishora">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#DAF966]">
            Client Reviews
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#FDFEFB]">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[#B8CFC5] font-[var(--font-body)]">
            Trusted by hundreds of businesses across Delhi NCR for their workspace needs.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="group relative flex flex-col gap-4 rounded-[20px]
                bg-[#FDFEFB]/8 border border-[#DAF966]/20 p-7
                backdrop-blur-sm transition-all duration-300
                hover:border-[#DAF966]/50 hover:bg-[#FDFEFB]/12"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-[#DAF966]/60" />

              {/* Body */}
              <p className="text-sm leading-relaxed text-[#FDFEFB]/90 font-[var(--font-body)]">
                {t.content}
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-auto">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < t.rating
                        ? "fill-[#DAF966] text-[#DAF966]"
                        : "text-[#FDFEFB]/20"
                    }`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#DAF966]/20 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DAF966] font-['Anton'] text-[#1B6543] text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-['Anton'] uppercase tracking-wide text-[#FDFEFB]">{t.name}</div>
                  <div className="text-xs text-[#B8CFC5] font-[var(--font-body)]">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
