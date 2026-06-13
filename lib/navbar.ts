import { NavbarData } from "../types/navbar";

export const navbarData: NavbarData = {
  logoText: "EchoSpaces",
  phoneNumber: "+91 98-0000-1131",
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
      href: "/virtual-office",
      dropdown: [
        { title: "Gurugram", href: "/virtual-office/gurugram", image: "https://picsum.photos/seed/gurugram-1/800/500" },
        { title: "Noida", href: "/virtual-office/noida", image: "https://picsum.photos/seed/noida-1/800/500" },
        { title: "Delhi", href: "/virtual-office/delhi", image: "https://picsum.photos/seed/delhi-1/800/500" },
      ],
      viewAllLink: "/virtual-office/all-locations",
    },
    {
      title: "Co-working",
      href: "/co-working",
      dropdown: [
        { title: "Gurugram", href: "/co-working/gurugram", image: "https://picsum.photos/seed/gurugram-1/800/500" },
        { title: "Noida", href: "/co-working/noida", image: "https://picsum.photos/seed/noida-1/800/500" },
        { title: "Delhi", href: "/co-working/delhi", image: "https://picsum.photos/seed/delhi-1/800/500" },
      ],
      viewAllLink: "/co-working/all-locations",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
