import type {
  HeroStat,
  CityCard,
  PropertyCard,
  LocationCard,
  CoworkingCard,
  WhyUsFeature,
  Testimonial,
  BlogPost,
  FaqItem,
  PromoFeature,
} from "../types/landing";

export const HERO_STATS: HeroStat[] = [
  { value: "500+", label: "Premium Locations" },
  { value: "1000+", label: "Happy Clients" },
  { value: "50+", label: "Buildings" },
];

export const CITY_CARDS: CityCard[] = [
  {
    name: "Gurgaon",
    image: "https://echospaces.in/assets/media/echospaces/locations/gurgaon.jpeg",
    href: "/office-space/gurgaon",
  },
  {
    name: "Noida",
    image: "https://echospaces.in/assets/media/echospaces/locations/noida.jpeg",
    href: "/office-space/noida",
  },
  {
    name: "Delhi",
    image: "https://echospaces.in/assets/media/echospaces/locations/delhi.jpeg",
    href: "/office-space/delhi",
  },
];

export const PROPERTY_CARDS: PropertyCard[] = [
  {
    id: "ats-bouquet",
    title: "ATS Bouquet",
    location: "Sector 132, Noida",
    area: "Sector 132",
    sqft: 4808,
    price: "₹2L / month",
    badge: "FOR LEASE",
    status: "RAW",
    image: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
    ],
    amenities: [
      { icon: "AirVent", label: "Air-Conditioning" },
      { icon: "ParkingSquare", label: "Parking" },
      { icon: "Bike", label: "Bike Parking" },
      { icon: "Camera", label: "CCTV" },
      { icon: "ArrowUpDown", label: "Lift" },
    ],
  },
  {
    id: "vr-homes",
    title: "VR Homes",
    location: "Chattarpur, Delhi",
    area: "Chattarpur",
    sqft: 500,
    price: "₹22K / month",
    badge: "FOR LEASE",
    status: "RAW",
    image: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
    ],
    amenities: [
      { icon: "ParkingSquare", label: "Parking" },
      { icon: "Bike", label: "Bike Parking" },
      { icon: "Camera", label: "CCTV" },
      { icon: "Wifi", label: "Wi-Fi" },
      { icon: "AirVent", label: "Air-Conditioning" },
      { icon: "Zap", label: "Power Backup" },
    ],
  },
  {
    id: "f8-kailash",
    title: "F8 Kailash Colony",
    location: "New Delhi",
    area: "Kailash Colony",
    sqft: 600,
    price: "Contact for price",
    badge: "FOR LEASE",
    status: "FULLY FURNISHED",
    image: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80&w=800",
    ],
    amenities: [
      { icon: "ParkingSquare", label: "Parking" },
      { icon: "Bike", label: "Bike Parking" },
      { icon: "Zap", label: "Power Backup" },
      { icon: "AirVent", label: "Air-Conditioning" },
      { icon: "Shield", label: "Deposit" },
      { icon: "Sparkles", label: "Housekeeping" },
    ],
  },
];

export const LOCATION_CARDS: LocationCard[] = [
  { name: "Golf Course Road", city: "Gurgaon", spaces: 43, startingFrom: "₹6K", image: "https://picsum.photos/seed/golfcourse1/800/500", colSpan: 1, rowSpan: 2 },
  { name: "MG Road Gurugram", city: "Gurgaon", spaces: 20, startingFrom: "₹7K", image: "https://picsum.photos/seed/mgroad1/800/500" },
  { name: "Sector 62", city: "Noida", spaces: 24, startingFrom: "₹5K", image: "https://picsum.photos/seed/sector62-1/800/500" },
  { name: "Connaught Place", city: "Delhi", spaces: 17, startingFrom: "₹9K", image: "https://picsum.photos/seed/connaughtplace1/800/500", colSpan: 2 },
  { name: "Cyber City", city: "Gurgaon", spaces: 15, startingFrom: "₹10K", image: "https://picsum.photos/seed/cybercity1/800/500" },
  { name: "Sohna Road", city: "Gurgaon", spaces: 34, startingFrom: "₹4K", image: "https://picsum.photos/seed/sohnaroad1/800/500" },
  { name: "Saket", city: "Delhi", spaces: 6, startingFrom: "₹2L", image: "https://picsum.photos/seed/saket1/800/500" },
  { name: "Sector 18", city: "Noida", spaces: 3, startingFrom: "₹5K", image: "https://picsum.photos/seed/sector18-1/800/500" },
];

export const COWORKING_CARDS: CoworkingCard[] = [
  {
    id: "worxspace",
    title: "Worxspace Coworking Welldone Tech Park",
    location: "Sohna Road, Gurgaon",
    rating: 4.7,
    status: "POPULAR",
    pricePerSeat: "₹8K / Seat",
    image: "https://picsum.photos/seed/worxspace1/800/500",
    amenities: ["WiFi", "Meeting Rooms", "Power Backup", "Cafeteria"],
  },
  {
    id: "regus-world-trade",
    title: "Regus World Trade Tower",
    location: "Sector 16, Noida",
    rating: 4.3,
    status: "PREMIUM",
    pricePerSeat: "₹12K / Seat",
    image: "https://picsum.photos/seed/regus-1/800/500",
    amenities: ["WiFi", "Meeting Rooms", "Power Backup", "Cafeteria"],
  },
  {
    id: "berry-coworks",
    title: "The Berry Coworks",
    location: "Connaught Place, Delhi",
    rating: 4.5,
    status: "POPULAR",
    pricePerSeat: "₹8K / Seat",
    image: "https://picsum.photos/seed/berrycoworks1/800/500",
    amenities: ["WiFi", "Meeting Rooms", "Lounge", "24/7 Access"],
  },
];

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    icon: "MapPin",
    title: "Premium Locations",
    description: "Access office space for lease in prime business locations across Delhi NCR.",
    color: "green",
  },
  {
    icon: "Zap",
    title: "Instant Setup",
    description: "Move-in ready coworking spaces with complete furnishing and amenities.",
    color: "blue",
  },
  {
    icon: "FileText",
    title: "Flexible Lease Terms",
    description: "Customizable office lease options that adapt to your growth needs.",
    color: "purple",
  },
  {
    icon: "Layout",
    title: "Customizable Spaces",
    description: "Fully furnished, semi-furnished, or bare shell spaces to match your style.",
    color: "orange",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Workspace",
    description: "Easily scale your office space as your team grows without hassle.",
    color: "teal",
  },
  {
    icon: "Shield",
    title: "Secure & Safe Offices",
    description: "24/7 security, surveillance, and access control for your peace of mind.",
    color: "red",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "kapil",
    name: "Kapil Sahni",
    role: "Manager",
    company: "Mutual Help Finance",
    content: "LeaseKey helped us find the perfect coworking space in Gurgaon. The process was seamless and the team was highly professional. Highly recommend!",
    rating: 5,
  },
  {
    id: "jeet",
    name: "Jeet Singh",
    role: "Manager",
    company: "Orange Publication",
    content: "The flexible leasing options at LeaseKey made it easy for us to scale our office space as our team grew. Excellent service and great locations.",
    rating: 5,
  },
  {
    id: "ravi",
    name: "Ravi Kumar",
    role: "Manager",
    company: "Firstads Digital",
    content: "Amazing workspaces that truly support business growth. LeaseKey understood our requirements and found us the ideal space within our budget.",
    rating: 4,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "gurgaon-coworking",
    title: "Best Coworking & Office Spaces in Gurgaon for Growing Businesses",
    date: "May 18, 2026",
    image: "https://picsum.photos/seed/gurgaon-1/800/500",
    href: "/blog/gurgaon-coworking",
  },
  {
    id: "choose-right-office",
    title: "How to Choose the Right Office Space for Your Team",
    date: "May 15, 2026",
    image: "https://picsum.photos/seed/chooserightoffice-1/800/500",
    href: "/blog/choose-right-office",
  },
  {
    id: "delhi-ncr-hub",
    title: "Why Delhi NCR is Becoming the Hub for Modern Workspaces",
    date: "May 12, 2026",
    image: "https://picsum.photos/seed/delhincr-1/800/500",
    href: "/blog/delhi-ncr-hub",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "pricing",
    question: "What is the pricing for office spaces in Delhi NCR?",
    answer: "Office space pricing varies by location and size. In Gurgaon, prices start from ₹4K/seat for coworking and ₹20K/month for private offices. In Noida, starting from ₹5K/seat and ₹15K/month respectively. Delhi's Connaught Place area starts from ₹9K/seat.",
  },
  {
    id: "top-locations",
    question: "What are the top office locations in Gurgaon?",
    answer: "The most sought-after locations in Gurgaon are Cyber City, Golf Course Road, MG Road, Sohna Road, and DLF Phase 3. These areas offer excellent connectivity, premium infrastructure, and proximity to major business hubs.",
  },
  {
    id: "furnished",
    question: "Are the office spaces fully furnished?",
    answer: "We offer a range of options — fully furnished, semi-furnished, and bare shell (raw) office spaces. Fully furnished spaces come ready to move in with workstations, meeting rooms, and all necessary amenities.",
  },
  {
    id: "lease-terms",
    question: "What are the typical lease terms offered?",
    answer: "We offer flexible lease terms ranging from short-term (monthly) to long-term agreements (1–5 years). Our team works with you to customize lease terms that align with your business requirements and growth plans.",
  },
];

export const PROMO_FEATURES: PromoFeature[] = [
  { text: "Fully Furnished Offices" },
  { text: "Meeting Rooms Included" },
  { text: "High-Speed Internet" },
  { text: "24/7 Access & Security" },
  { text: "Flexible Lease Terms" },
  { text: "Expert Leasing Support" },
];
