"use client";
import { forwardRef, useState } from "react";
import { CheckCircle, Lock } from "lucide-react";
import { INFO_CARDS, SOCIAL_LINKS } from "@/lib/contacts/contact-data";
import { Reveal } from "./HeroSection";

type FormData = { name: string; phone: string; email: string; city: string; spaceType: string; teamSize: string; preferredTime: string; message: string; };
type Status = "idle" | "loading" | "success" | "error";

const INPUT = "w-full rounded-xl bg-navy-800/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-blue-500 focus:ring-1 focus:ring-accent-blue-500 transition";
const LABEL = "block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide";

const ContactForm = forwardRef<HTMLElement, {}>((props, ref) => {
  const [form, setForm] = useState<FormData>({ name: "", phone: "+91 ", email: "", city: "", spaceType: "", teamSize: "1", preferredTime: "morning", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  const set = (k: keyof FormData, v: string) => setForm(p => ({ ...p, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading"); setErrors([]);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json() as { success: boolean; errors?: string[] };
      if (data.success) setStatus("success");
      else { setErrors(data.errors ?? ["Something went wrong."]); setStatus("error"); }
    } catch { setErrors(["Network error. Please try again."]); setStatus("error"); }
  }

  return (
    <section ref={ref} className="py-20 bg-[#080D1A]">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-[#131b2e] p-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-400">We&rsquo;ll get back to you within 30 minutes.</p>
            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle size={56} className="text-green-400" />
                <p className="text-xl font-bold text-white">We&rsquo;ll call you within 30 minutes!</p>
                <p className="text-sm text-slate-400">Check WhatsApp too — we&rsquo;ll ping you there.</p>
                <button onClick={() => { setStatus("idle"); setForm({ name: "", phone: "+91 ", email: "", city: "", spaceType: "", teamSize: "1", preferredTime: "morning", message: "" }); }} className="mt-2 text-xs text-accent-blue-400 hover:text-indigo-300 underline">Submit another inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label className={LABEL}>Full Name *</label><input className={INPUT} placeholder="Rahul Sharma" value={form.name} onChange={e => set("name", e.target.value)} required /></div>
                  <div><label className={LABEL}>Phone *</label><input className={INPUT} type="tel" placeholder="+91 92113 26157" value={form.phone} onChange={e => set("phone", e.target.value)} required /></div>
                </div>
                <div><label className={LABEL}>Email Address *</label><input className={INPUT} type="email" suppressHydrationWarning placeholder="sales@echospaces.in" value={form.email} onChange={e => set("email", e.target.value)} required /></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={LABEL}>City *</label>
                    <select className={INPUT + " appearance-none"} value={form.city} onChange={e => set("city", e.target.value)} required>
                      <option value="">Select city</option>
                      {["Delhi", "Noida", "Gurgaon", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai", "Other"].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Space Type *</label>
                    <select className={INPUT + " appearance-none"} value={form.spaceType} onChange={e => set("spaceType", e.target.value)} required>
                      <option value="">Select type</option>
                      {["Hot Desk", "Dedicated Desk", "Private Cabin", "Meeting Room", "Virtual Office", "Day Pass", "Not Sure"].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className={LABEL}>Team Size</label>
                  <div className="flex flex-wrap gap-2">
                    {["1", "2–5", "6–15", "16–50", "50+"].map(s => (
                      <label key={s} className={`cursor-pointer rounded-xl border px-4 py-2 text-sm font-medium transition-all ${form.teamSize === s ? "border-accent-blue-500 bg-accent-orange-500/15 text-indigo-300" : "border-white/15 text-slate-400 hover:border-white/30"}`}>
                        <input type="radio" className="sr-only" name="teamSize" value={s} checked={form.teamSize === s} onChange={e => set("teamSize", e.target.value)} />{s}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={LABEL}>Preferred Contact Time</label>
                  <div className="flex flex-wrap gap-2">
                    {[["morning", "Morning (9–12)"], ["afternoon", "Afternoon (12–4)"], ["evening", "Evening (4–7)"]].map(([v, l]) => (
                      <label key={v} className={`cursor-pointer rounded-xl border px-4 py-2 text-sm font-medium transition-all ${form.preferredTime === v ? "border-accent-blue-500 bg-accent-orange-500/15 text-indigo-300" : "border-white/15 text-slate-400 hover:border-white/30"}`}>
                        <input type="radio" className="sr-only" name="preferredTime" value={v} checked={form.preferredTime === v} onChange={e => set("preferredTime", e.target.value)} />{l}
                      </label>
                    ))}
                  </div>
                </div>
                <div><label className={LABEL}>Message (optional)</label><textarea className={INPUT + " resize-none"} rows={4} placeholder="Tell us about your requirements..." value={form.message} onChange={e => set("message", e.target.value)} maxLength={500} /><p className="mt-1 text-right text-[10px] text-gray-300">{form.message.length}/500</p></div>
                {errors.length > 0 && <div className="rounded-xl border border-red-500/30 bg-navy-8000/10 p-4 text-sm text-red-400 space-y-1">{errors.map(e => <p key={e}>• {e}</p>)}</div>}
                <button type="submit" disabled={status === "loading"} className="w-full rounded-xl bg-gradient-to-r from-accent-blue-500 to-purple-600 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_45px_rgba(99,102,241,0.45)] hover:-translate-y-0.5 disabled:opacity-60 transition-all">
                  {status === "loading" ? "Sending..." : "Get Free Consultation →"}
                </button>
                <p className="flex items-center justify-center gap-2 text-xs text-gray-400"><Lock size={12} />Your data is 100% safe. No spam, ever.</p>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-6">
          {INFO_CARDS.map(b => (
            <div key={b.title} className="rounded-2xl border border-white/10 bg-[#131b2e] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-orange-500/15 text-accent-blue-400"><b.icon size={18} /></div>
                <h3 className="font-bold text-white">{b.title}</h3>
              </div>
              {b.lines.map(l => <p key={l} className="text-sm text-slate-400 leading-loose">{l}</p>)}
              {b.link && <a href={b.link.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center text-xs font-semibold text-accent-blue-400 hover:text-indigo-300 transition-colors">{b.link.label}</a>}
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-[#131b2e] p-6">
            <h3 className="font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, color, label }) => (
                <a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-accent-blue-500/25 bg-accent-orange-500/8 p-6 flex gap-4">
            <CheckCircle size={22} className="text-accent-blue-400 flex-shrink-0 mt-0.5" />
            <div><p className="font-bold text-white text-sm mb-1">Our Promise</p><p className="text-xs text-slate-400 leading-relaxed">Every inquiry gets a personal response. No automated replies, no bots — just real people who care.</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
