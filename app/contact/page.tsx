"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/contact/HeroSection";

const ContactOptions = dynamic(() => import("@/components/contact/ContactOptions"), {
  loading: () => <div className="h-96 animate-pulse bg-[#0F172A]" />
});

const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="h-96 animate-pulse bg-[#0F172A]" />
});

const OfficeAddress = dynamic(() => import("@/components/contact/OfficeAddress"), {
  loading: () => <div className="h-96 animate-pulse bg-[#0F172A]" />
});

const CityContacts = dynamic(() => import("@/components/contact/CityContacts"), {
  loading: () => <div className="h-96 animate-pulse bg-[#0F172A]" />
});

const FaqSection = dynamic(() => import("@/components/contact/FaqSection"), {
  loading: () => <div className="h-96 animate-pulse bg-[#0F172A]" />
});

const FinalCta = dynamic(() => import("@/components/contact/FinalCta"), {
  loading: () => <div className="h-96 animate-pulse bg-[#0F172A]" />
});

export default function ContactPage() {
  const formRef = useRef<HTMLElement>(null);
  
  const scrollToForm = () =>
    formRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  return (
    <main className="bg-[#0F172A] text-white overflow-x-hidden">
      <HeroSection onScrollToForm={scrollToForm} />
      <ContactOptions />
      <ContactForm ref={formRef} />
      <CityContacts />
      <OfficeAddress />
      <FaqSection />
      <FinalCta onScrollToForm={scrollToForm} />
    </main>
  );
}
