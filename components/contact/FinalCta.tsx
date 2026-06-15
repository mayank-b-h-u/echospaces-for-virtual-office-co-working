"use client";
import { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import { Reveal } from "./HeroSection";

type Props = {
  onScrollToForm?: () => void;
};

export default function FinalCta({ onScrollToForm }: Props) {
  const [callback, setCallback] = useState("");
  const [callbackDone, setCallbackDone] = useState(false);

  return (
    <section className="py-16 bg-[#080D1A] border-t border-white/6">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-2xl border border-accent-blue-500/20 bg-gradient-to-br from-indigo-900/40 to-purple-900/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Reveal>
            <p className="text-2xl font-extrabold text-white">Still not sure?</p>
            <p className="text-slate-400 text-sm mt-1">Let us call you — free, no commitment.</p>
          </Reveal>
          <Reveal delay={0.1} className="flex w-full md:w-auto gap-3">
            {callbackDone ? (
              <div className="flex items-center gap-2 text-green-400 font-semibold"><CheckCircle size={20} />We&rsquo;ll call you shortly!</div>
            ) : (
              <>
                <input value={callback} onChange={e => setCallback(e.target.value)} type="tel" placeholder="+91 92113 26157" className="flex-1 md:w-56 rounded-xl bg-navy-800/8 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-accent-blue-500 transition" />
                <button onClick={() => { if (callback.trim()) setCallbackDone(true); }} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue-500 to-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all whitespace-nowrap"><Send size={14} />Request Callback</button>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
