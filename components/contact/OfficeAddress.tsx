"use client";
import { MapPin } from "lucide-react";
import { Reveal } from "./HeroSection";

export default function OfficeAddress() {
  return (
    <section className="bg-[#080D1A]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <Reveal className="text-center mb-6"><h2 className="text-3xl font-extrabold tracking-tight">Our Flagship Location</h2></Reveal>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "16/5" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1827098063!2d77.08940931508364!3d28.49228898247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193f3f17c4b1%3A0x8e8b02abcaf97e0c!2sDLF%20Cyber%20City%2C%20DLF%20Phase%202%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1617123456789!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 flex items-center gap-2"><MapPin size={14} className="text-accent-blue-400" />DLF Cyber City, Gurugram 122002, Haryana</p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-accent-orange-500 hover:bg-accent-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors">Get Directions →</a>
        </Reveal>
      </div>
    </section>
  );
}
