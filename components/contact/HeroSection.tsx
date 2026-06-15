"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(t = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    o.observe(el); return () => o.disconnect();
  }, [t]);
  return { ref, inView: v };
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return <div ref={ref} className={className} style={{ opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: `opacity .65s ease ${delay}s, transform .65s ease ${delay}s` }}>{children}</div>;
}

type Props = {
  onScrollToForm?: () => void;
};

export default function HeroSection({ onScrollToForm }: Props) {
  return (
    <section className="relative py-24 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900/70 to-[#0F172A]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="relative mx-auto max-w-4xl px-4 text-center w-full">
        <Reveal><span className="inline-flex items-center gap-2 rounded-full border border-accent-blue-400/30 bg-indigo-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-6"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />Contact Us</span></Reveal>
        <Reveal delay={0.1}><h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Let&rsquo;s Find Your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Perfect Space</span></h1></Reveal>
        <Reveal delay={0.2}><p className="mt-5 text-lg text-slate-400 max-w-xl mx-auto">Our team responds within 30 minutes. Talk to a real person — not a bot.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[["⚡", "30 min response"], ["📞", "Free consultation"], ["🏢", "200+ centers"]].map(([e, l]) => (
              <div key={l} className="flex items-center gap-2 rounded-full border border-white/15 bg-navy-800/5 px-5 py-2.5 text-sm font-medium text-slate-300"><span>{e}</span>{l}</div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}
