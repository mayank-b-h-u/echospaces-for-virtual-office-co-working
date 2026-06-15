"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../../lib/landing-data";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="bg-[#FDFEFB] section-blog">
      <div className="container-dishora max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#1B6543]">
            Got Questions?
          </span>
          <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3.5rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-mid font-[var(--font-body)]">
            Everything you need to know about finding the perfect office space in Delhi NCR.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`w-full max-w-[900px] mx-auto overflow-hidden rounded-[20px] border transition-all duration-300 ${isOpen
                  ? "border-[#DAF966] bg-[#1B6543]"
                  : "border-[#B8CFC5]/60 bg-white hover:border-[#1B6543]/40"
                  }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DAF966]"
                  aria-expanded={isOpen}
                >
                  <span className={`font-['Anton'] uppercase tracking-wide text-base ${isOpen ? "text-[#DAF966]" : "text-[#1B6543]"}`}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#DAF966]" : "text-[#1B6543]"
                      }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-[#B8CFC5] font-[var(--font-body)]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
