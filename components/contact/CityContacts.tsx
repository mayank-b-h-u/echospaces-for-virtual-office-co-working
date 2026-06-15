"use client";
import { OFFICE_LOCATIONS } from "@/lib/contacts/contact-data";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "./HeroSection";

export default function CityContacts() {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal className="text-center mb-12"><h2 className="text-4xl font-extrabold tracking-tight">Find Us In Your City</h2></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OFFICE_LOCATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="group rounded-2xl border border-white/8 bg-[#131b2e] p-6 hover:border-accent-blue-500/35 hover:bg-accent-orange-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white">{c.name}</h3>
                  <span className="text-xs font-semibold text-accent-blue-400 bg-accent-orange-500/10 rounded-full px-2.5 py-1">{c.centers} Centers</span>
                </div>
                <p className="text-xs text-slate-400 flex items-start gap-1.5 mb-1"><MapPin size={12} className="flex-shrink-0 mt-0.5" />{c.address}</p>
                <p className="text-xs text-slate-400 flex items-center gap-1.5 mb-4"><Phone size={12} />{c.phone}</p>
                <a href="#" className="text-xs font-semibold text-accent-blue-400 hover:text-indigo-300 transition-colors">View Centers →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
