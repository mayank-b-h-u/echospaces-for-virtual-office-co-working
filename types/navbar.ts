export type NavbarDropdownItem = {
  title: string;
  href: string;
  icon?: string;
  image?: string;
};

export type NavbarItem = {
  title: string;
  href: string;
  dropdown?: NavbarDropdownItem[];
  viewAllLink?: string;
};

export type NavbarData = {
  logo: string;
  logoText?: string;
  phoneNumber: string;
  ctaText: string;
  ctaLink: string;
  links: NavbarItem[];
};
