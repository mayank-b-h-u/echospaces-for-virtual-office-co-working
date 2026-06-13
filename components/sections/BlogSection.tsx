"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../../lib/landing-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogSection() {
  return (
    <section className="bg-[#DDE8E7]/30 section-blog">
      <div className="container-dishora">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#1B6543]">
            Insights & Trends
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
            Office Space Insights &amp; Trends
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-mid font-[var(--font-body)]">
            Stay up to date with the latest trends in commercial real estate and workspace solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <Link
                href={post.href}
                className="group block overflow-hidden rounded-[20px] border border-[#B8CFC5]/40 bg-white
                  shadow-sm transition-all duration-300
                  hover:shadow-[0_8px_32px_rgba(27,101,67,0.12)]"
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden rounded-t-[20px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute left-3 top-3">
                    <span className="badge-lime">Blog</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-5">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-mid font-[var(--font-body)]">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-['Anton'] text-lg uppercase leading-snug text-[#1B6543] transition-colors group-hover:text-[#006543]">
                    {post.title}
                  </h3>

                  {/* Read More */}
                  <div className="flex items-center gap-1.5 font-['Anton'] text-sm uppercase tracking-wide text-[#DAF966] bg-[#1B6543] rounded-[99px] px-4 py-1.5 w-fit transition-all group-hover:bg-[#006543]">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
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
