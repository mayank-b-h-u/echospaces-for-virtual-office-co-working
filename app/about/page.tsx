"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  ArrowRight, Rocket, Eye, Wifi, MapPin, Users, Zap,
  Trophy, Star, Quote, Phone,
} from "lucide-react";
import { FiLinkedin as Linkedin } from "react-icons/fi";

/* ─── Scroll-reveal hook ─────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Animated counter ───────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Reveal wrapper ─────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */
const STATS = [
  { to: 50,    suffix: "+",   label: "Cities" },
  { to: 200,   suffix: "+",   label: "Centers" },
  { to: 10000, suffix: "+",   label: "Happy Members" },
  { to: 5,     suffix: "+",   label: "Years of Excellence" },
];

const FEATURES = [
  { icon: Zap,    title: "No Lock-in Contracts",     desc: "Month-to-month plans. Scale up or down anytime." },
  { icon: Wifi,   title: "Enterprise-Grade Amenities", desc: "1Gbps WiFi, 4K meeting rooms, unlimited chai & coffee." },
  { icon: MapPin, title: "Pan-India Network",          desc: "Work from any of our 200+ centers across India." },
  { icon: Users,  title: "Thriving Community",         desc: "10,000+ members. Regular events, workshops & networking." },
];

const TEAM = [
  { name: "Rahul Sharma",  role: "CEO & Co-founder",      bio: "Serial entrepreneur with 12 years in PropTech.",    initials: "RS", color: "from-accent-blue-500 to-purple-600" },
  { name: "Priya Mehta",   role: "Head of Operations",    bio: "Ops wizard who scaled us from 3 to 50+ cities.",    initials: "PM", color: "from-purple-500 to-pink-600"   },
  { name: "Arjun Singh",   role: "Head of Community",     bio: "Building India's most engaged workspace community.", initials: "AS", color: "from-amber-500 to-orange-600"  },
  { name: "Sneha Kapoor",  role: "Chief Design Officer",  bio: "Designs spaces that people actually love to work in.", initials: "SK", color: "from-emerald-500 to-teal-600" },
];

const PRESS = [
  "Economic Times", "YourStory", "Inc42", "CNBC TV18", "Startup India", "Shark Tank India",
];

const AWARDS = [
  { icon: Trophy, title: "Best Coworking Space 2023", org: "Realty+ Awards" },
  { icon: Star,   title: "Top 10 Startups — 2023",   org: "Inc42 Recognition" },
];

const COMMUNITY = [
  { icon: "💻", type: "Freelancers & Solopreneurs", count: "3,200+ Members", quote: "Finally a space that feels like it was built for me." },
  { icon: "🚀", type: "Startups & Scale-ups",       count: "5,800+ Members", quote: "We went from 5 to 80 people without changing our workspace partner." },
  { icon: "🏢", type: "Enterprises & MNCs",         count: "1,000+ Members", quote: "EchoSpaces gives our satellite teams a premium experience anywhere." },
];

/* ════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  return (
    <main className="bg-[#0F172A] text-white overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1e1152] to-[#0F172A]" />
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.45), transparent)" }} />
        {/* grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-blue-500/30 bg-accent-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              About EchoSpaces
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
              We Are{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
                Redefining
              </span>
              <br />How India Works
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto">
              From freelancers to Fortune 500 — we build spaces where ambition meets flexibility.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.5)] transition-all hover:-translate-y-0.5">
                Explore Our Spaces <ArrowRight size={16} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-700/10 hover:border-white/40 transition-all">
                Book a Free Tour
              </Link>
            </div>
          </Reveal>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </section>

      {/* ── 2. OUR STORY ──────────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-navy-8000/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-300">
              Our Story
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Born From a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Simple Frustration
              </span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>In 2019, we saw a gap — businesses were paying lakhs for offices they didn&rsquo;t fully use. Rigid leases, empty desks, and zero flexibility were bleeding SMEs dry.</p>
              <p>We built EchoSpaces to fix that. <span className="text-white font-medium">Flexible. Affordable. Beautiful.</span> Starting from a single center in Gurugram, we&rsquo;ve grown to 200+ locations across 50+ Indian cities.</p>
              <p>Today we serve everyone — from a solo developer in Pune to a 500-person MNC scaling into Bengaluru. One platform, infinite possibilities.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue-400 hover:text-indigo-300 transition-colors">
              Join Our Story <ArrowRight size={15} />
            </Link>
          </Reveal>

          {/* Timeline cards */}
          <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
            {[
              { year: "2019", event: "Founded in Gurugram", color: "from-accent-blue-500/20 to-accent-orange-500/5", border: "border-accent-blue-500/20" },
              { year: "2021", event: "Expanded to 12 cities", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/20" },
              { year: "2022", event: "10,000 members milestone", color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/20" },
              { year: "2024", event: "200+ centers across India", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/20" },
            ].map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className={`rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} p-6 hover:-translate-y-1 transition-transform`}>
                  <div className="text-3xl font-extrabold text-white">{item.year}</div>
                  <div className="mt-2 text-sm text-slate-300">{item.event}</div>
                </div>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 3. MISSION & VISION ───────────────────────────────── */}
      <section className="py-24 bg-[#080D1A]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight">Our Purpose</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">Two north stars that guide everything we build.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Rocket, label: "Mission", delay: 0,
                gradient: "from-accent-blue-500/20 to-purple-600/10",
                border: "hover:border-accent-blue-500/40",
                iconBg: "bg-accent-orange-500/15 text-accent-blue-400",
                text: "Make premium workspaces accessible to every business — big or small. No compromise on quality, no compromise on affordability.",
              },
              {
                icon: Eye, label: "Vision", delay: 0.12,
                gradient: "from-purple-600/20 to-pink-600/10",
                border: "hover:border-purple-500/40",
                iconBg: "bg-navy-8000/15 text-purple-400",
                text: "To be India's most trusted coworking network by 2027 — the default choice for any business that values its people.",
              },
            ].map((card) => (
              <Reveal key={card.label} delay={card.delay}>
                <div className={`group rounded-2xl border border-white/8 bg-gradient-to-br ${card.gradient} p-8 ${card.border} hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300`}>
                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconBg}`}>
                    <card.icon size={24} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">{card.label}</div>
                  <p className="text-lg leading-relaxed text-slate-300">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. STATS COUNTER ──────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-indigo-900/50 via-[#0F172A] to-purple-900/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight">The Numbers Speak</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-navy-800/4 backdrop-blur-sm p-8 text-center hover:border-accent-blue-500/30 hover:bg-accent-orange-500/5 transition-all">
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-400">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ──────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center mb-14">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-navy-8000/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Why Us
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Why Businesses Choose Us</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">Built for the way modern India works — flexible, connected, and always premium.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/8 bg-[#131b2e] p-8 hover:border-accent-blue-500/35 hover:bg-accent-orange-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-orange-500/10 text-accent-blue-400 group-hover:bg-accent-orange-500/20 group-hover:text-indigo-300 transition-colors">
                    <f.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TEAM ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#080D1A]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight">The People Behind Your Space</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">A diverse team of builders, operators, and problem-solvers united by a shared mission.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group rounded-2xl border border-white/8 bg-[#131b2e] p-6 text-center hover:border-accent-blue-500/30 hover:shadow-[0_8px_40px_rgba(79,70,229,0.15)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className={`mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-extrabold text-white shadow-lg`}>
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-accent-blue-400">{member.role}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">{member.bio}</p>
                  <a href="#" aria-label="LinkedIn" className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:border-accent-blue-500/40 hover:text-accent-blue-400 transition-colors">
                    <Linkedin size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. AWARDS & PRESS ─────────────────────────────────── */}
      <section className="py-24 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight">As Seen In & Recognized By</h2>
          </Reveal>
          {/* Press logos */}
          <Reveal>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-px border border-white/6 rounded-2xl overflow-hidden">
              {PRESS.map((name) => (
                <div key={name} className="bg-[#0d1424] flex items-center justify-center py-6 px-4 hover:bg-accent-orange-500/10 transition-colors group cursor-default">
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-accent-blue-400 transition-colors text-center leading-snug">{name}</span>
                </div>
              ))}
            </div>
          </Reveal>
          {/* Award badges */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {AWARDS.map((award, i) => (
              <Reveal key={award.title} delay={i * 0.1}>
                <div className="flex items-center gap-4 rounded-2xl border border-amber-500/20 bg-navy-8000/5 p-5 hover:border-amber-500/35 transition-colors">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy-8000/15 text-amber-400">
                    <award.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{award.title}</p>
                    <p className="text-xs text-amber-400/70 mt-0.5">{award.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. COMMUNITY ──────────────────────────────────────── */}
      <section className="py-24 bg-[#080D1A]">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight">Our Members, Our Pride</h2>
            <p className="mt-4 text-slate-400">From solo freelancers to 500-person teams</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY.map((c, i) => (
              <Reveal key={c.type} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-[#131b2e] p-8 hover:border-accent-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4">
                  <div className="text-4xl">{c.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{c.type}</h3>
                    <p className="text-xs font-semibold text-accent-blue-400 mt-1">{c.count}</p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/6">
                    <Quote size={16} className="text-gray-300 mb-2" />
                    <p className="text-sm italic text-slate-400 leading-relaxed">{c.quote}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ──────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-[#0F172A]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue-400/50 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Perfect Space?</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400">
              Join 10,000+ professionals who work smarter with us.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/locations"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3.5 text-sm font-semibold text-[#0F172A] shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_45px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 transition-all">
                View All Locations <ArrowRight size={16} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-700/10 hover:border-white/40 transition-all">
                <Phone size={15} /> Talk to Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
