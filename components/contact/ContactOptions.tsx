"use client";
import { CONTACT_METHODS } from "@/lib/contacts/contact-data";
import { Reveal } from "./HeroSection";

export default function ContactOptions() {
  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTACT_METHODS.map((c, i) => {
          const accent = c.color === "green" ? "border-green-500/30 hover:border-green-500/50 hover:shadow-green-500/10" : c.color === "amber" ? "border-amber-500/30 hover:border-amber-500/50 hover:shadow-amber-500/10" : "border-accent-blue-500/30 hover:border-accent-blue-500/50 hover:shadow-indigo-500/10";
          const btnCls = c.color === "green" ? "bg-navy-8000 hover:bg-green-400 text-white" : c.color === "amber" ? "bg-navy-8000 hover:bg-accent-orange-400 text-[#0F172A]" : "bg-accent-orange-500 hover:bg-accent-orange-500 text-white";
          const iconCls = c.color === "green" ? "bg-navy-8000/15 text-green-400" : c.color === "amber" ? "bg-navy-8000/15 text-amber-400" : "bg-accent-orange-500/15 text-accent-blue-400";
          return (
            <Reveal key={c.title} delay={i * 0.12}>
              <div className={`relative rounded-2xl border bg-[#131b2e] p-7 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${accent}`}>
                {c.badge && <span className="absolute top-4 right-4 rounded-full bg-navy-8000/15 border border-green-500/30 text-green-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5">{c.badge}</span>}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconCls}`}><c.icon size={22} /></div>
                <div><p className="font-bold text-white text-lg">{c.title}</p><p className="text-base font-medium text-slate-200 mt-1">{c.detail}</p><p className="text-xs text-gray-400 mt-0.5">{c.sub}</p></div>
                <a href={c.href} target={c.color === "green" ? "_blank" : undefined} rel="noreferrer" className={`mt-auto inline-flex justify-center items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${btnCls}`}>{c.btn}</a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
