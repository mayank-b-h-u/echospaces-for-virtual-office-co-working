// Types for landing page sections

export type HeroStat = {
  value: string;
  label: string;
};

export type CityCard = {
  name: string;
  image: string;
  href: string;
};

export type PropertyBadge = "FOR LEASE" | "FOR SALE" | string;
export type PropertyStatus = "RAW" | "FULLY FURNISHED" | "SEMI FURNISHED" | string;

export type Amenity = {
  icon: string;
  label: string;
};

export type PropertyCard = {
  id: string;
  title: string;
  location: string;
  area: string;
  sqft: number;
  price: string;
  badge: PropertyBadge;
  status: PropertyStatus;
  image: string[];
  amenities: Amenity[];
};

export type LocationCard = {
  name: string;
  city: string;
  spaces: number;
  startingFrom: string;
  image: string;
  colSpan?: number;
  rowSpan?: number;
};

export type CoworkingCard = {
  id: string;
  title: string;
  location: string;
  rating?: number;
  status?: string;
  pricePerSeat: string;
  image: string;
  amenities: string[];
};

export type WhyUsFeature = {
  icon: string;
  title: string;
  description: string;
  color: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type PromoFeature = {
  text: string;
};
