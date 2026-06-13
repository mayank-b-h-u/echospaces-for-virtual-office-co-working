"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function LeadFormSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", spaceType: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = `w-full rounded-[12px] border border-[#B8CFC5] bg-white/10
    px-4 py-3 text-sm text-[#FDFEFB] placeholder:text-[#B8CFC5]/70
    outline-none font-[var(--font-body)]
    focus:border-[#DAF966] focus:ring-2 focus:ring-[#DAF966]/30
    transition-all`;

  const labelClass = "block mb-1.5 font-['Anton'] text-xs uppercase tracking-wider text-[#DAF966]";

  return (
    <section className="bg-[#006543] section-standard">
      <div className="container-dishora">
        <div className="overflow-hidden rounded-[20px] border border-[#DAF966]/20 bg-[#1B6543]/60 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            {/* Form Side */}
            <div className="flex flex-col justify-center gap-6 p-10 lg:p-14">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#DAF966]">
                  Free Consultation
                </span>
                <h2 className="mt-3 font-['Anton'] text-[2rem] lg:text-[2.75rem] leading-none tracking-[-0.02em] uppercase text-[#FDFEFB]">
                  Let Us Find Your Perfect Office Space
                </h2>
                <p className="mt-4 text-[#B8CFC5] font-[var(--font-body)]">
                  Fill in your details and our experts will connect with you within 24 hours.
                </p>
              </motion.div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-[20px] bg-[#DAF966] p-8 text-center"
                >
                  <div className="text-4xl">🎉</div>
                  <h3 className="mt-3 font-['Anton'] text-xl uppercase text-[#1B6543]">Thank You!</h3>
                  <p className="mt-2 text-sm text-[#1B6543]/80 font-[var(--font-body)]">
                    Our team will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        type="text" required suppressHydrationWarning
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email" required suppressHydrationWarning
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel" required suppressHydrationWarning
                      placeholder="+91 98000-00000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Space Type</label>
                    <select
                      value={form.spaceType} suppressHydrationWarning
                      onChange={(e) => setForm({ ...form, spaceType: e.target.value })}
                      className={inputClass + " bg-[#1B6543]"}
                    >
                      <option value="">Select space type...</option>
                      <option value="coworking">Coworking Space</option>
                      <option value="private">Private Office</option>
                      <option value="managed">Managed Office</option>
                      <option value="virtual">Virtual Office</option>
                    </select>
                  </div>
                  <div className="pt-2">
                    <PrimaryButton type="submit" className="w-full justify-center">
                      Find My Space
                    </PrimaryButton>
                  </div>
                </form>
              )}
            </div>

            {/* Image Side */}
            <div className="relative hidden lg:block min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
                alt="Team meeting in modern office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B6543]/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
