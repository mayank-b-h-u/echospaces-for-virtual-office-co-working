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
  logoText: string;
  phoneNumber: string;
  ctaText: string;
  links: NavbarItem[];
};
