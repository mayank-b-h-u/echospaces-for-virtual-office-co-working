import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { FiInstagram, FiLinkedin, FiTwitter, FiFacebook, FiYoutube } from "react-icons/fi";

export const CONTACT_METHODS = [
  { icon: Phone, title: "Call Us Directly", detail: "+91 92113 26157", sub: "Mon–Sat, 9AM–7PM", btn: "Call Now", href: "tel:+919211326157", color: "indigo", badge: null },
  { icon: MessageCircle, title: "WhatsApp Us", detail: "+91 92113 26157", sub: "Usually < 10 mins response", btn: "Chat on WhatsApp", href: "https://wa.me/919211326157", color: "green", badge: "Most Popular" },
  { icon: Mail, title: "Email Us", detail: "sales@echospaces.in", sub: "For queries & partnerships", btn: "Send Email", href: "mailto:[sales@echospaces.in]", color: "amber", badge: null },
];

export const OFFICE_LOCATIONS = [
  { name: "Delhi NCR", centers: 28, address: "Connaught Place, New Delhi 110001", phone: "+91 92113 26157" },
  { name: "Mumbai", centers: 22, address: "Bandra Kurla Complex, Mumbai 400051", phone: "+91 92113 26157" },
  { name: "Bangalore", centers: 35, address: "Koramangala 5th Block, Bengaluru 560095", phone: "+91 92113 26157" },
  { name: "Hyderabad", centers: 18, address: "HITEC City, Hyderabad 500081", phone: "+91 92113 26157" },
  { name: "Pune", centers: 14, address: "Hinjewadi Phase 1, Pune 411057", phone: "+91 92113 26157" },
  { name: "Chennai", centers: 12, address: "Anna Nagar, Chennai 600040", phone: "+91 92113 26157" },
];

export const CONTACT_FAQS = [
  { q: "How quickly will you respond?", a: "Our team responds within 30 minutes during business hours (Mon–Sat, 9AM–7PM). WhatsApp is the fastest channel." },
  { q: "Can I visit without booking?", a: "Yes! Walk-ins are always welcome. But booking a free tour ensures you get a dedicated host and a personalised experience." },
  { q: "Do you offer custom enterprise plans?", a: "Absolutely. We create custom pricing and SLA packages for teams of 20+. Call or email us to get started." },
  { q: "Is there a free trial available?", a: "Yes — every first-time visitor gets 1 free day pass. No credit card required. Just show up!" },
];

export const INFO_CARDS = [
  { icon: MapPin, title: "Registered Office", lines: ["EchoSpaces HQ, 4th Floor", "DLF Cyber City, Gurugram 122002", "Haryana, India"], link: { label: "View on Maps →", href: "https://maps.google.com" } },
  { icon: Clock, title: "Working Hours", lines: ["Mon–Fri: 9:00 AM – 8:00 PM", "Saturday: 10:00 AM – 6:00 PM", "Sunday: Closed"], link: null },
];

export const SOCIAL_LINKS = [
  { icon: FiInstagram, color: "#E1306C", label: "IG" },
  { icon: FiLinkedin, color: "#0077B5", label: "LI" },
  { icon: FiTwitter, color: "#1DA1F2", label: "TW" },
  { icon: FiFacebook, color: "#1877F2", label: "FB" },
  { icon: FiYoutube, color: "#FF0000", label: "YT" }
];
