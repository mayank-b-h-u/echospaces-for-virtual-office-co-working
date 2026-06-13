"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "../../lib/navbar";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CallModal from "@/components/ui/Modals/CallModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ═══════════════════════════════
          NAVBAR BAR
      ═══════════════════════════════ */}
      <nav
        className={`sticky top-0 z-50 w-full bg-[#1B6543] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(9,35,23,0.40)]" : ""
          }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 lg:px-6 flex h-16 items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[#DAF966] rounded">
            <span className="font-['Anton'] text-lg uppercase text-[#DAF966] tracking-widest">
              {navbarData.logoText}
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden md:flex items-center gap-5">
            {navbarData.links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              const hasDropdown = !!link.dropdown?.length;

              return (
                <div key={link.title} className="relative group/navitem h-16 flex items-center">
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 font-['Anton'] text-sm uppercase tracking-wider transition-opacity duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#DAF966] rounded
                      ${isActive ? "text-[#DAF966]" : "text-[#DAF966]/80 hover:text-[#DAF966]"}`}
                  >
                    {link.title}
                    {hasDropdown && (
                      <ChevronDown className="w-4 h-4 opacity-70 transition-transform group-hover/navitem:rotate-180 duration-200" />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#DAF966] rounded-full"
                      />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {hasDropdown && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-52 opacity-0 invisible group-hover/navitem:opacity-100 group-hover/navitem:visible transition-all duration-200 origin-top scale-95 group-hover/navitem:scale-100">
                      <div className="bg-[#092317] rounded-xl shadow-2xl border border-[#DAF966]/20 overflow-hidden flex flex-col p-2">
                        {link.dropdown?.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-[#DAF966]/80 hover:text-[#DAF966] hover:bg-[#1B6543]/60 transition-colors font-['Anton'] text-sm uppercase tracking-wide"
                          >
                            {item.image && (
                              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#DAF966]/30">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                              </div>
                            )}
                            <span>{item.title}</span>
                          </Link>
                        ))}
                        {link.viewAllLink && (
                          <>
                            <div className="h-px bg-[#DAF966]/20 my-2" />
                            <Link href={link.viewAllLink} className="text-xs font-['Anton'] uppercase text-center text-[#DAF966] hover:text-[#DAF966]/80 py-1 pb-2 tracking-wide">
                              View All
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Desktop Right: Phone + CTA ── */}
          <div className="hidden md:flex items-center gap-4">
            {/* Phone — only show on large screens where there's room */}
            <a
              href={`tel:${navbarData.phoneNumber}`}
              className="hidden lg:flex items-center gap-1.5 font-['Anton'] text-xs uppercase tracking-wider text-[#DAF966]/80 hover:text-[#DAF966] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#DAF966] rounded whitespace-nowrap"
            >
              <div className="w-7 h-7 rounded-full bg-[#DAF966]/10 border border-[#DAF966]/30 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#DAF966]" />
              </div>
              {navbarData.phoneNumber}
            </a>
            <PrimaryButton onClick={() => setShowCallModal(true)}
            >
              {navbarData.ctaText}

            </PrimaryButton>
            <CallModal
              isOpen={showCallModal}
              onClose={() => setShowCallModal(false)}
            />
          </div>

          {/* ════════════════════════════
              MOBILE HAMBURGER BUTTON
          ════════════════════════════ */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            className="md:hidden relative z-[60] flex flex-col items-center justify-center gap-[5px]
              w-11 h-11 rounded-xl bg-[#DAF966]/10 border border-[#DAF966]/30
              hover:bg-[#DAF966]/20 active:scale-95
              transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#DAF966]"
          >
            {/* Animated 3-bar hamburger lines */}
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[2px] w-6 rounded-full bg-[#DAF966] origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              className="block h-[2px] w-6 rounded-full bg-[#DAF966]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[2px] w-6 rounded-full bg-[#DAF966] origin-center"
            />
          </button>
        </div>
      </nav>

      {/* ════════════════════════════════════
          MOBILE FULL-SCREEN DRAWER
      ════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-20 z-40 bg-[#092317]/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-down drawer panel */}
            <motion.div
              id="mobile-drawer"
              key="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -16, scaleY: 0.96 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -16, scaleY: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top" }}
              className="fixed inset-x-0 top-20 z-50 md:hidden
                bg-[#1B6543] border-t-2 border-[#DAF966]/30
                shadow-[0_20px_60px_rgba(9,35,23,0.6)]"
            >
              <div className="flex flex-col px-6 py-8 gap-1">

                {/* Nav Links */}
                {navbarData.links.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-4
                          border-b border-[#DAF966]/10
                          font-['Anton'] text-xl uppercase tracking-wide
                          transition-colors duration-150
                          ${isActive
                            ? "text-[#DAF966]"
                            : "text-[#DAF966]/70 hover:text-[#DAF966]"
                          }`}
                      >
                        {link.title}
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-[#DAF966]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Divider */}
                <div className="my-4 h-px bg-[#DAF966]/15" />

                {/* Phone */}
                <motion.a
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: navbarData.links.length * 0.05 }}
                  href={`tel:${navbarData.phoneNumber}`}
                  className="flex items-center gap-3 py-3 font-['Anton'] text-base uppercase tracking-wide text-[#DAF966]/70 hover:text-[#DAF966] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-[#DAF966] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1B6543]" />
                  </div>
                  {navbarData.phoneNumber}
                </motion.a>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: (navbarData.links.length * 0.05) + 0.08 }}
                  className="mt-4"
                >
                  <Link
                    href={navbarData.ctaLink}
                    className="flex items-center justify-center w-full
                      bg-[#DAF966] text-[#1B6543]
                      font-['Anton'] text-lg uppercase tracking-wide
                      rounded-[99px] py-4
                      hover:bg-[#1B6543] hover:text-[#DAF966] hover:border-[1px] hover:border-[#DAF966]
                      transition-all duration-250"
                  >
                    {navbarData.ctaText}

                  </Link>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
