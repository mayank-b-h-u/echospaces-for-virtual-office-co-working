import { NavbarData } from "../types/navbar";

export const navbarData: NavbarData = {
  logo: "/logos/logo.png",
  logoText: "EchoSpaces",
  phoneNumber: "+91 92113 26157",
  ctaText: "Get Free Enquiry",

  links: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Virtual Offices",
      href: "/office-space",
      dropdown: [
        { title: "Gurugram", href: "/virtual-office/gurugram", image: "https://picsum.photos/seed/gurugram-1/800/500" },
        { title: "Noida", href: "/virtual-office/noida", image: "https://picsum.photos/seed/noida-1/800/500" },
        { title: "Delhi", href: "/virtual-office/delhi", image: "https://picsum.photos/seed/delhi-1/800/500" },
      ],
      viewAllLink: "/office-space",
    },
    {
      title: "coworking",
      href: "/co-working",
      dropdown: [
        { title: "Gurugram", href: "/co-working/gurugram", image: "https://picsum.photos/seed/gurugram-1/800/500" },
        { title: "Noida", href: "/co-working/noida", image: "https://picsum.photos/seed/noida-1/800/500" },
        { title: "Delhi", href: "/co-working/delhi", image: "https://picsum.photos/seed/delhi-1/800/500" },
      ],
      viewAllLink: "/coworking",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  ctaLink: ""
};
