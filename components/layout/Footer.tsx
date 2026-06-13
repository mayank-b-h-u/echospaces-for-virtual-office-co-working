import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const footerData = {
  company: {
    tagline: "Your premium leasing expert for office spaces and coworking solutions across Delhi NCR.",
    address: "Unit No. 101–102, 1st Floor, Tower A, SpazeEdge, Sohna Road, Sector 47, Gurugram",
    phone: "+91 98-0000-1131",
    email: "info@echospaces.in",
  },
  columns: [
    {
      title: "Best Office Buildings",
      links: [
        { label: "WeWork Cyber City", href: "/" },
        { label: "Innov8 Golf Course", href: "/" },
        { label: "Awfis Paras Trinity", href: "/" },
        { label: "91Springboard Noida", href: "/" },
        { label: "Regus World Trade Tower", href: "/" },
      ],
    },
    {
      title: "Best Office Locations",
      links: [
        { label: "Sector 18, Noida", href: "/" },
        { label: "Cyber City, Gurgaon", href: "/" },
        { label: "Golf Course Road", href: "/" },
        { label: "Sector 44, Gurgaon", href: "/" },
        { label: "Connaught Place, Delhi", href: "/" },
      ],
    },
    {
      title: "Best Coworking Spaces",
      links: [
        { label: "91Springboard", href: "/" },
        { label: "WeWork", href: "/" },
        { label: "Innov8", href: "/" },
        { label: "Awfis", href: "/" },
        { label: "The Berry Coworks", href: "/" },
      ],
    },
  ],
  socials: [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ],
  legal: [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#092317] text-white">
      <div className="container-dishora section-footer">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <span className="font-['Anton'] text-2xl uppercase tracking-wide text-[#DAF966]">
              EchoSpaces
            </span>
            <p className="text-sm leading-relaxed text-white/60 font-[var(--font-body)]">
              {footerData.company.tagline}
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60 font-[var(--font-body)]">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#DAF966]" />
                <span>{footerData.company.address}</span>
              </div>
              <a
                href={`tel:${footerData.company.phone}`}
                className="flex items-center gap-2 hover:text-[#DAF966] transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#DAF966]" />
                {footerData.company.phone}
              </a>
              <a
                href={`mailto:${footerData.company.email}`}
                className="flex items-center gap-2 hover:text-[#DAF966] transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#DAF966]" />
                {footerData.company.email}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {footerData.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full
                    bg-white/10 text-white/60
                    hover:bg-[#DAF966] hover:text-[#1B6543]
                    transition-all duration-200 focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-[#DAF966]"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerData.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="font-['Anton'] text-base uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-[#DAF966] font-[var(--font-body)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#DAF966]/10">
        <div className="container-dishora flex flex-col items-center justify-between gap-4 py-5 text-xs text-white/40 sm:flex-row font-[var(--font-body)]">
          <span>© {new Date().getFullYear()} EchoSpaces. All rights reserved.</span>
          <div className="flex gap-4">
            {footerData.legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="hover:text-[#DAF966] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
