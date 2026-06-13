"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, FileText, Star } from "lucide-react";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function CallbackSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const features = [
    { icon: CalendarCheck, title: "Schedule a Meeting", desc: "Book a free consultation at your preferred time." },
    { icon: FileText, title: "Flexible Lease Terms", desc: "Customized agreements that match your requirements." },
    { icon: Star, title: "Premium Amenities", desc: "Fully equipped spaces with top-tier facilities." },
  ];

  const inputClass = `w-full rounded-[12px] border border-[#B8CFC5]/60 bg-[#FDFEFB]
    px-4 py-3 text-sm text-[#1B6543] placeholder:text-gray-mid
    outline-none font-[var(--font-body)]
    focus:border-[#DAF966] focus:ring-2 focus:ring-[#DAF966]/30 transition-all`;

  return (
    <section className="bg-[#DDE8E7]/40 section-standard">
      <div className="container-dishora">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="font-['Anton'] text-sm uppercase tracking-[0.15em] text-[#1B6543]">
                Expert Support
              </span>
              <h2 className="mt-3 font-['Anton'] text-[2.5rem] lg:text-[3rem] leading-none tracking-[-0.02em] uppercase text-[#1B6543]">
                We&apos;re Here to Help You
              </h2>
              <p className="mt-5 text-gray-mid font-[var(--font-body)]">
                Our dedicated leasing experts are ready to assist you find the perfect workspace.
                Get in touch for a personalized consultation.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#DAF966]">
                    <f.icon className="h-6 w-6 text-[#1B6543]" />
                  </div>
                  <div>
                    <div className="font-['Anton'] uppercase tracking-wide text-[#1B6543]">{f.title}</div>
                    <div className="mt-0.5 text-sm text-gray-mid font-[var(--font-body)]">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="tel:+919800001131"
              className="inline-flex items-center gap-2 font-['Anton'] text-sm uppercase tracking-wide text-[#1B6543] hover:text-[#006543] transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#DAF966] flex items-center justify-center">
                <Phone className="h-4 w-4 text-[#1B6543]" />
              </div>
              +91 98-0000-1131
            </a>
          </motion.div>

          {/* Right form card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[20px] bg-white p-8 shadow-lg border border-[#B8CFC5]/40"
          >
            <h3 className="font-['Anton'] text-2xl uppercase tracking-wide text-[#1B6543] mb-6">
              Request a Call Back
            </h3>

            {submitted ? (
              <div className="rounded-[20px] bg-[#DAF966] p-8 text-center">
                <div className="text-4xl">📞</div>
                <h3 className="mt-3 font-['Anton'] text-xl uppercase text-[#1B6543]">
                  We&apos;ll Call You Back!
                </h3>
                <p className="mt-2 text-sm text-[#1B6543]/80 font-[var(--font-body)]">
                  Expect a call from our team within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block mb-1.5 font-['Anton'] text-xs uppercase tracking-wider text-[#1B6543]">
                    Full Name
                  </label>
                  <input
                    type="text" required suppressHydrationWarning
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 font-['Anton'] text-xs uppercase tracking-wider text-[#1B6543]">
                    Phone Number
                  </label>
                  <input
                    type="tel" required suppressHydrationWarning
                    placeholder="+91 98000-00000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block mb-1.5 font-['Anton'] text-xs uppercase tracking-wider text-[#1B6543]">
                    Email Address
                  </label>
                  <input
                    type="email" suppressHydrationWarning
                    placeholder="your@email.com (optional)"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="mt-2">
                  <PrimaryButton type="submit" className="w-full justify-center">
                    Submit Enquiry
                  </PrimaryButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
