"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CONTACT_FAQS } from "@/lib/contacts/contact-data";
import { Reveal } from "./HeroSection";

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center px-6 py-4 text-left text-sm font-semibold text-white hover:bg-navy-700/5 transition-colors">
        {q}<ChevronDown size={16} className={`flex-shrink-0 ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/8 pt-4">{a}</div>}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="text-center mb-10"><h2 className="text-4xl font-extrabold tracking-tight">Quick Answers</h2><p className="mt-3 text-slate-400 text-sm">Most common questions — answered.</p></Reveal>
        <div className="space-y-3">
          {CONTACT_FAQS.map((f, i) => <Reveal key={f.q} delay={i * 0.08}><FAQ q={f.q} a={f.a} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
