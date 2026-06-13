import type {
  VOUseCase,
  VOCity,
  VODocument,
  VOStep,
  VOTestimonial,
  VOFaq,
  VOComparison,
  CityData,
  StateData,
  StateSlug
} from "../types/virtual-office"

export const USE_CASES: VOUseCase[] = [
  {
    icon: "ShoppingBag",
    title: "E-commerce Sellers",
    description: "Register Flipkart/Amazon store with a Delhi or Mumbai address. GST approved in 3 working days.",
    badge: "Most Common",
    color: "orange",
  },
  {
    icon: "Laptop",
    title: "Freelancers & Consultants",
    description: "Professional address on invoices, proposals & LinkedIn profile. Instant credibility boost.",
    badge: "Popular",
    color: "blue",
  },
  {
    icon: "Rocket",
    title: "Startups & New Businesses",
    description: "Get GST registration done in 3 working days. Company registration support included.",
    badge: "Fast Setup",
    color: "purple",
  },
  {
    icon: "Globe",
    title: "Remote Teams",
    description: "Team works from home, company keeps a premium pan-India address.",
    badge: "Post-COVID",
    color: "green",
  },
  {
    icon: "Building2",
    title: "Out-of-City Businesses",
    description: "Mumbai company needs Delhi GST? Multi-city registration done without visiting.",
    badge: "Multi-city",
    color: "indigo",
  },
  {
    icon: "Plane",
    title: "Import/Export Businesses",
    description: "Get IEC code with our address. Fully compliant with DGFT requirements.",
    badge: "Export Ready",
    color: "amber",
  },
]

export const HOW_IT_WORKS: VOStep[] = [
  {
    step: 1,
    title: "Choose Plan & City",
    description: "Pick a plan and select your preferred city address from 8 premium locations.",
    icon: "MousePointerClick",
    time: "2 minutes",
  },
  {
    step: 2,
    title: "Complete KYC Online",
    description: "Upload Aadhaar + PAN. Everything done online. No physical visit needed.",
    icon: "FileCheck",
    time: "5 minutes",
  },
  {
    step: 3,
    title: "Get Your Documents",
    description: "NOC, rent agreement & utility bill ready in 24 hours. Delivered to your email.",
    icon: "FileText",
    time: "24 hours",
  },
  {
    step: 4,
    title: "GST Registration Done",
    description: "Use documents for GST application. We assist till your GST is approved.",
    icon: "BadgeCheck",
    time: "3-5 days",
  },
]

export const DOCUMENTS_PROVIDED: VODocument[] = [
  {
    icon: "FileText",
    name: "NOC Letter",
    description: "No Objection Certificate from property owner",
    includedIn: ["vo-starter", "vo-business", "vo-professional", "vo-enterprise"],
  },
  {
    icon: "ScrollText",
    name: "Rent Agreement",
    description: "Notarized rental agreement on stamp paper",
    includedIn: ["vo-starter", "vo-business", "vo-professional", "vo-enterprise"],
  },
  {
    icon: "Zap",
    name: "Utility Bill",
    description: "Electricity/water bill copy as address proof",
    includedIn: ["vo-starter", "vo-business", "vo-professional", "vo-enterprise"],
  },
  {
    icon: "Building",
    name: "GST NOC",
    description: "Specifically formatted for GST registration process",
    includedIn: ["vo-starter", "vo-business", "vo-professional", "vo-enterprise"],
  },
  {
    icon: "CreditCard",
    name: "Authorization Letter",
    description: "For bank account opening and official purposes",
    includedIn: ["vo-business", "vo-professional", "vo-enterprise"],
  },
]

export const VO_CITIES: VOCity[] = [
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi",
    area: "Connaught Place",
    address: "A-1, Connaught Place",
    pincode: "110001",
    landmark: "Near Rajiv Chowk Metro",
    centers: 8,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    area: "Sector 62",
    address: "B-12, Sector 62",
    pincode: "201301",
    landmark: "Near Electronic City Metro",
    centers: 5,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "gurgaon",
    name: "Gurgaon",
    state: "Haryana",
    area: "Cyber City",
    address: "DLF Cyber City, Phase 2",
    pincode: "122002",
    landmark: "Near Cyber City Metro",
    centers: 6,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    area: "BKC",
    address: "G-Block, Bandra Kurla Complex",
    pincode: "400051",
    landmark: "Near BKC Metro Station",
    centers: 7,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    area: "Koramangala",
    address: "80 Feet Road, Koramangala",
    pincode: "560034",
    landmark: "Near Forum Mall",
    centers: 6,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    area: "Hitech City",
    address: "Cyber Towers, Hitech City",
    pincode: "500081",
    landmark: "Near Hitech City Metro",
    centers: 4,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    area: "Hinjewadi",
    address: "Phase 1, Hinjewadi IT Park",
    pincode: "411057",
    landmark: "Near Rajiv Gandhi IT Park",
    centers: 3,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    area: "Anna Salai",
    address: "450, Anna Salai",
    pincode: "600002",
    landmark: "Near LIC Building",
    centers: 3,
    gstReady: true,
    mapLink: "https://maps.google.com",
  },
]

export const TESTIMONIALS: VOTestimonial[] = [
  {
    id: "t1",
    name: "Amit Sharma",
    role: "E-commerce Seller",
    company: "ShopEasy India",
    city: "Delhi",
    review: "Got GST approved in just 2 days. The team handled everything — documents, follow-up, corrections. Highly recommend to every seller.",
    rating: 5,
    useCase: "GST Registration",
  },
  {
    id: "t2",
    name: "Priya Nair",
    role: "Freelance Designer",
    company: "Self Employed",
    city: "Remote",
    review: "Having a Delhi address on my invoices completely changed how clients perceive me. Worth every rupee of the ₹799 plan.",
    rating: 5,
    useCase: "Business Address",
  },
  {
    id: "t3",
    name: "Rahul Gupta",
    role: "Co-founder",
    company: "TechStart Solutions",
    city: "Bangalore",
    review: "Needed Mumbai GST for our Flipkart store. Done in 3 working days with zero hassle. Their document support is excellent.",
    rating: 5,
    useCase: "Multi-city GST",
  },
]

export const VO_COMPARISON: VOComparison[] = [
  {
    feature: "Monthly Cost",
    virtualOffice: "From ₹799/mo",
    traditionalOffice: "₹25,000+/mo",
    highlight: true,
  },
  {
    feature: "Setup Time",
    virtualOffice: "24 hours",
    traditionalOffice: "2-4 weeks",
    highlight: true,
  },
  {
    feature: "Lock-in Period",
    virtualOffice: "None — cancel anytime",
    traditionalOffice: "11 months minimum",
  },
  {
    feature: "GST Valid Address",
    virtualOffice: true,
    traditionalOffice: true,
  },
  {
    feature: "Security Deposit",
    virtualOffice: "None",
    traditionalOffice: "3-6 months rent",
    highlight: true,
  },
  {
    feature: "Maintenance Cost",
    virtualOffice: "Zero",
    traditionalOffice: "₹5,000-15,000/mo",
  },
  {
    feature: "Staff Required",
    virtualOffice: false,
    traditionalOffice: true,
  },
  {
    feature: "Flexibility",
    virtualOffice: "Upgrade/downgrade anytime",
    traditionalOffice: "Fixed contract",
  },
  {
    feature: "Annual Savings",
    virtualOffice: "Save ₹2.9 Lakhs+/yr",
    traditionalOffice: "—",
    highlight: true,
  },
]

export const VO_FAQS: VOFaq[] = [
  {
    id: "f1",
    question: "Kya virtual office se GST registration ho sakta hai?",
    answer: "Haan — 100%. Hamara address GST department ke liye fully valid hai. Hum NOC, rent agreement aur utility bill provide karte hain — yahi 3 documents GST officer maangta hai. Zyaadatar clients ka GST 3-5 din mein approve ho jaata hai.",
    category: "gst-legal",
  },
  {
    id: "f2",
    question: "Kya yeh address legally valid hai?",
    answer: "100% legal. Virtual office addresses GST department, MCA, banks aur courts — sabke liye valid hain. Thousands of businesses India mein virtual office use karte hain.",
    category: "gst-legal",
  },
  {
    id: "f3",
    question: "Setup mein kitna time lagta hai?",
    answer: "Agreement aaj sign karo → Documents 24 hours mein ready → GST application 3 working days mein. Fastest setup in the industry.",
    category: "process",
  },
  {
    id: "f4",
    question: "Kya main yeh address website aur visiting card par use kar sakta hoon?",
    answer: "Haan — website, invoice, visiting card, Amazon/Flipkart seller account, LinkedIn — har jagah use kar sakte ho.",
    category: "general",
  },
  {
    id: "f5",
    question: "Kaunse documents milte hain?",
    answer: "NOC letter, rent agreement, utility bill, GST NOC, aur authorization letter — yeh sab milte hain. Sab digitally email par deliver hote hain.",
    category: "documents",
  },
  {
    id: "f6",
    question: "Plan upgrade ya downgrade ho sakta hai?",
    answer: "Haan — upgrade anytime instantly. Downgrade next billing cycle se effective hota hai. Koi penalty nahi.",
    category: "plans-pricing",
  },
  {
    id: "f7",
    question: "Kya mail physically handle hoti hai?",
    answer: "Haan — sab mail/couriers receive, log aur same day scan kiye jaate hain. Physical forwarding extra cost par available hai.",
    category: "general",
  },
  {
    id: "f8",
    question: "Security deposit kitna hai?",
    answer: "Koi security deposit nahi. Monthly ya yearly pay karo. 30 days notice mein cancel karo.",
    category: "plans-pricing",
  },
  {
    id: "f9",
    question: "Multiple cities mein address le sakte hain?",
    answer: "Enterprise plan mein multi-city included hai. Ya extra city address add karo ₹499/month per city.",
    category: "plans-pricing",
  },
  {
    id: "f10",
    question: "GST reject ho jaaye toh?",
    answer: "Hum free re-application aur document correction support dete hain jab tak aapka GST approve nahi ho jaata. Guaranteed approval support.",
    category: "gst-legal",
  },
]

export const VO_CITY_DATA: Record<string, CityData> = {
  "dwarka": {
    id: "dwarka",
    stateSlug: "delhi",
    citySlug: "dwarka",
    displayName: "Dwarka",
    state: "Delhi",
    area: "Sector 12",
    fullAddress: "Plot No. 18, Sector 12, Dwarka, New Delhi",
    pincode: "110078",
    landmark: "Near Dwarka Sector 12 Metro Station",
    pricing: {
      businessPlan: 5299,
      gstPlan: 3199,
      mailingAddress: 2199,
      dedicatedDesk: 1099,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543224",
    whatsappNumber: "919876543224",
    image: [
      "https://picsum.photos/seed/dwarka-1/800/500",
      "https://picsum.photos/seed/dwarka-2/800/500",
      "https://picsum.photos/seed/dwarka-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=dwarka+sector+12+delhi",
    benefits: [
      "Premium Dwarka business location",
      "Excellent metro connectivity across Delhi NCR",
      "Perfect for consultants & service businesses",
      "Fast GST registration support",
    ],
    testimonials: [
      {
        name: "Vikas Arora",
        role: "Founder",
        company: "Skyline Consultants",
        review: "Dwarka location clients ke liye convenient hai aur address bhi kaafi professional lagta hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "dwarka",
        question: "Dwarka office metro se kitna paas hai?",
        answer: "Center Dwarka Sector 12 Metro Station se walking distance par hai.",
      },
      {
        id: "dwarka",
        question: "GST documents kitne time mein mil jaate hain?",
        answer: "Usually same day NOC, rent agreement aur utility bill provide kar diya jata hai.",
      },
    ],
    metaTitle: "Virtual Office Dwarka Delhi | GST Address ₹799",
    metaDescription: "Premium virtual office in Dwarka Delhi with GST registration support, mail handling and metro connectivity.",
  },

  "laxmi-nagar": {
    id: "laxmi-nagar",
    stateSlug: "delhi",
    citySlug: "laxmi-nagar",
    displayName: "Laxmi Nagar",
    state: "Delhi",
    area: "Laxmi Nagar",
    fullAddress: "A-24, Laxmi Nagar District Centre, Delhi",
    pincode: "110092",
    landmark: "Near Laxmi Nagar Metro Station",
    pricing: {
      businessPlan: 4799,
      gstPlan: 2899,
      mailingAddress: 1899,
      dedicatedDesk: 999,
    },
    centers: 5,
    gstReady: true,
    phoneNumber: "+919876543225",
    whatsappNumber: "919876543225",
    image: [
      "https://picsum.photos/seed/laxmi-nagar-1/800/500",
      "https://picsum.photos/seed/laxmi-nagar-2/800/500",
      "https://picsum.photos/seed/laxmi-nagar-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=laxmi+nagar+delhi",
    benefits: [
      "Affordable East Delhi business address",
      "High demand area for startups & agencies",
      "Excellent connectivity to Noida & Central Delhi",
      "Professional mail handling services",
    ],
    testimonials: [
      {
        name: "Pooja Sharma",
        role: "Digital Marketer",
        company: "BrandGrow Media",
        review: "Laxmi Nagar location budget-friendly hai aur business registration bhi easily ho gaya.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "laxmi-nagar",
        question: "Laxmi Nagar address kis type business ke liye best hai?",
        answer: "Freelancers, agencies, coaching institutes aur digital businesses ke liye kaafi suitable hai.",
      },
      {
        id: "laxmi-nagar",
        question: "Mail forwarding available hai?",
        answer: "Haan, courier receive karke WhatsApp notification aur forwarding dono available hai.",
      },
    ],
    metaTitle: "Virtual Office Laxmi Nagar Delhi | GST Address from ₹799",
    metaDescription: "Laxmi Nagar Delhi virtual office with GST support, mail handling and affordable business plans.",
  },

  "saket": {
    id: "saket",
    stateSlug: "delhi",
    citySlug: "saket",
    displayName: "Saket",
    state: "Delhi",
    area: "Saket District Centre",
    fullAddress: "E-30, Saket District Centre, New Delhi",
    pincode: "110017",
    landmark: "Near Select Citywalk Mall",
    pricing: {
      businessPlan: 6999,
      gstPlan: 4499,
      mailingAddress: 2799,
      dedicatedDesk: 1699,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543226",
    whatsappNumber: "919876543226",
    image: [
      "https://picsum.photos/seed/saket-1/800/500",
      "https://picsum.photos/seed/saket-2/800/500",
      "https://picsum.photos/seed/saket-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=saket+district+centre+delhi",
    benefits: [
      "South Delhi premium business address",
      "Ideal for premium brands & startups",
      "Near major malls and corporate offices",
      "Quick GST & documentation support",
    ],
    testimonials: [
      {
        name: "Ritika Malhotra",
        role: "Founder",
        company: "Urban Vogue Studio",
        review: "Saket address ki wajah se brand image kaafi premium feel deti hai clients ko.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "saket",
        question: "Saket location kisliye popular hai?",
        answer: "South Delhi ka premium commercial area hai jo startups aur brands ke liye kaafi preferred hai.",
      },
      {
        id: "saket",
        question: "Meeting rooms available hain?",
        answer: "Haan, pre-booking ke basis par meeting rooms aur workspace access available hai.",
      },
    ],
    metaTitle: "Virtual Office Saket Delhi | Premium GST Address ₹799",
    metaDescription: "Premium Saket Delhi virtual office. South Delhi business address with GST support and mail handling.",
  },

  "ghitorni": {
    id: "ghitorni",
    stateSlug: "delhi",
    citySlug: "ghitorni",
    displayName: "Ghitorni",
    state: "Delhi",
    area: "MG Road",
    fullAddress: "MG Road, Ghitorni, New Delhi",
    pincode: "110030",
    landmark: "Near Ghitorni Metro Station",
    pricing: {
      businessPlan: 5499,
      gstPlan: 3299,
      mailingAddress: 2099,
      dedicatedDesk: 1099,
    },
    centers: 3,
    gstReady: true,
    phoneNumber: "+919876543227",
    whatsappNumber: "919876543227",
    image: [
      "https://picsum.photos/seed/ghitorni-1/800/500",
      "https://picsum.photos/seed/ghitorni-2/800/500",
      "https://picsum.photos/seed/ghitorni-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=ghitorni+delhi",
    benefits: [
      "MG Road corporate connectivity",
      "Affordable South Delhi business address",
      "Ideal for startups & ecommerce sellers",
      "Easy Gurgaon and Delhi access",
    ],
    testimonials: [
      {
        name: "Manish Yadav",
        role: "E-commerce Seller",
        company: "QuickBuy Hub",
        review: "Ghitorni location Delhi aur Gurgaon dono side ke clients ke liye convenient hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "ghitorni",
        question: "Ghitorni address ka major benefit kya hai?",
        answer: "South Delhi aur Gurgaon connectivity kaafi strong hai, isliye logistics aur meetings easy ho jaati hain.",
      },
      {
        id: "ghitorni",
        question: "Kya ecommerce GST ke liye use kar sakte hain?",
        answer: "Haan bilkul, ecommerce sellers aur startups ke liye GST compliant address available hai.",
      },
    ],
    metaTitle: "Virtual Office Ghitorni Delhi | GST Ready Address ₹799",
    metaDescription: "Ghitorni Delhi virtual office with GST registration support, metro connectivity and professional business address.",
  },

  "gurgaon": {
    id: "gurgaon",
    stateSlug: "haryana",
    citySlug: "gurgaon",
    displayName: "Gurgaon",
    state: "Haryana",
    area: "Cyber City",
    fullAddress: "DLF Cyber City, Phase 2, Gurgaon",
    pincode: "122002",
    landmark: "Near Cyber City Metro Station",
    pricing: {
      businessPlan: 7599,
      gstPlan: 4999,
      mailingAddress: 2999,
      dedicatedDesk: 1799,
    },
    centers: 6,
    gstReady: true,
    phoneNumber: "+919876543211",
    whatsappNumber: "919876543211",
    image: [
      "https://picsum.photos/seed/gurgaon-1/800/500",
      "https://picsum.photos/seed/gurgaon-2/800/500",
      "https://picsum.photos/seed/gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=cyber+city+gurgaon",
    benefits: [
      "DLF Cyber City - Corporate hub address",
      "Perfect for startups targeting enterprise clients",
      "Haryana GST registration in 2-3 days",
      "Metro connectivity to entire NCR",
    ],
    testimonials: [
      {
        name: "Priya Malhotra",
        role: "Co-founder",
        company: "SaaS Startup Haryana",
        review: "Cyber City address instantly gives credibility when pitching to corporates. Client meetings bhi yahi karwa lete hain meeting room mein.",
        rating: 5,
      },
      {
        name: "Amit Verma",
        role: "Consultant",
        company: "Self Employed",
        review: "Gurgaon ka premium address visiting card par bohot achha lagta hai. Mail forwarding service bhi excellent hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "gurgaon",
        question: "Gurgaon mein exact location kahan hai?",
        answer: "DLF Cyber City Phase 2 mein hai - corporate hub ke beech mein. Metro station se 5 minute walk. Very accessible location.",
      },
      {
        id: "gurgaon",
        question: "Haryana GST vs Delhi GST - kaunsa better hai?",
        answer: "Dono same valid hain. Agar aapke clients NCR mein hain toh Gurgaon address corporate feel deta hai. E-commerce ke liye Delhi bhi achha hai. Depends on your business.",
      },
      {
        id: "gurgaon",
        question: "Weekend pe mail pickup kar sakte hain?",
        answer: "Haan - humara center 6 days open rehta hai. Saturday tak pickup kar sakte ho. Emergency mein Sunday coordination bhi kar sakte hain.",
      },
    ],
    metaTitle: "Virtual Office in Gurgaon Cyber City | Haryana GST Address",
    metaDescription: "Premium Cyber City Gurgaon virtual office. Corporate address from ₹799/month. 6 centers. Mail handling, GST support, meeting rooms.",
  },
  "sushant-lok-gurgaon": {
    id: "sushant-lok-gurgaon",
    stateSlug: "haryana",
    citySlug: "sushant-lok-gurgaon",
    displayName: "Sushant Lok",
    state: "Haryana",
    area: "Sushant Lok Phase 1",
    fullAddress: "Block C, Sushant Lok Phase 1, Gurugram",
    pincode: "122002",
    landmark: "Near HUDA City Centre Metro",
    pricing: {
      businessPlan: 6499,
      gstPlan: 3999,
      mailingAddress: 2499,
      dedicatedDesk: 1499,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543228",
    whatsappNumber: "919876543228",
    image: [
      "https://picsum.photos/seed/sushant-lok-gurgaon-1/800/500",
      "https://picsum.photos/seed/sushant-lok-gurgaon-2/800/500",
      "https://picsum.photos/seed/sushant-lok-gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=sushant+lok+gurgaon",
    benefits: [
      "Prime residential-commercial hub of Gurgaon",
      "Perfect for startups & consultants",
      "Metro connectivity across NCR",
      "Quick Haryana GST registration support",
    ],
    testimonials: [
      {
        name: "Rajat Mehra",
        role: "Startup Founder",
        company: "NextWave Digital",
        review: "Sushant Lok ka address kaafi premium lagta hai aur clients ko easily accessible bhi hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "sushant-lok-gurgaon",
        question: "Sushant Lok office metro ke paas hai?",
        answer: "Haan, HUDA City Centre Metro se kaafi close location hai.",
      },
    ],
    metaTitle: "Virtual Office Sushant Lok Gurgaon | Haryana GST Address",
    metaDescription: "Premium virtual office in Sushant Lok Gurgaon with GST support and professional business address.",
  },

  "palm-court-sector-16-gurgaon": {
    id: "palm-court-sector-16-gurgaon",
    stateSlug: "haryana",
    citySlug: "palm-court-sector-16-gurgaon",
    displayName: "Palm Court Sector 16",
    state: "Haryana",
    area: "Sector 16",
    fullAddress: "Palm Court Business Center, Sector 16, Gurugram",
    pincode: "122001",
    landmark: "Near IFFCO Chowk",
    pricing: {
      businessPlan: 5999,
      gstPlan: 3599,
      mailingAddress: 2299,
      dedicatedDesk: 1299,
    },
    centers: 3,
    gstReady: true,
    phoneNumber: "+919876543229",
    whatsappNumber: "919876543229",
    image: [
      "https://picsum.photos/seed/palm-court-sector-16-gurgaon-1/800/500",
      "https://picsum.photos/seed/palm-court-sector-16-gurgaon-2/800/500",
      "https://picsum.photos/seed/palm-court-sector-16-gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=sector+16+gurgaon",
    benefits: [
      "Corporate business environment",
      "Easy Delhi-Gurgaon connectivity",
      "Ideal for agencies & IT companies",
      "Professional mail handling services",
    ],
    testimonials: [
      {
        name: "Ankit Saini",
        role: "Director",
        company: "BrightEdge Solutions",
        review: "Palm Court address corporate clients ke liye kaafi impressive hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "palm-court-sector-16-gurgaon",
        question: "Sector 16 location business ke liye kaisi hai?",
        answer: "Sector 16 Gurgaon ka well-connected commercial area hai with fast metro & highway access.",
      },
    ],
    metaTitle: "Virtual Office Sector 16 Gurgaon | GST Ready Address",
    metaDescription: "Sector 16 Gurgaon virtual office with Haryana GST support and premium business location.",
  },

  "mg-road-gurgaon": {
    id: "mg-road-gurgaon",
    stateSlug: "haryana",
    citySlug: "mg-road-gurgaon",
    displayName: "MG Road Gurgaon",
    state: "Haryana",
    area: "MG Road",
    fullAddress: "MG Road Business Hub, Gurugram",
    pincode: "122002",
    landmark: "Near MG Road Metro Station",
    pricing: {
      businessPlan: 6799,
      gstPlan: 4199,
      mailingAddress: 2599,
      dedicatedDesk: 1599,
    },
    centers: 5,
    gstReady: true,
    phoneNumber: "+919876543230",
    whatsappNumber: "919876543230",
    image: [
      "https://picsum.photos/seed/mg-road-gurgaon-1/800/500",
      "https://picsum.photos/seed/mg-road-gurgaon-2/800/500",
      "https://picsum.photos/seed/mg-road-gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=mg+road+gurgaon",
    benefits: [
      "Prime MG Road corporate address",
      "Excellent metro connectivity",
      "Ideal for premium businesses",
      "Fast GST documentation support",
    ],
    testimonials: [
      {
        name: "Simran Kapoor",
        role: "Business Consultant",
        company: "Elite Advisors",
        review: "MG Road address ki wajah se brand credibility instantly improve hui.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "mg-road-gurgaon",
        question: "MG Road Gurgaon ka main advantage kya hai?",
        answer: "Corporate presence aur metro connectivity dono ka strong advantage milta hai.",
      },
    ],
    metaTitle: "Virtual Office MG Road Gurgaon | Corporate GST Address",
    metaDescription: "MG Road Gurgaon virtual office with GST registration support and premium business address.",
  },

  "golf-course-road-gurgaon": {
    id: "golf-course-road-gurgaon",
    stateSlug: "haryana",
    citySlug: "golf-course-road-gurgaon",
    displayName: "Golf Course Road",
    state: "Haryana",
    area: "Golf Course Road",
    fullAddress: "Tower B, Golf Course Road, Gurugram",
    pincode: "122011",
    landmark: "Near Sector 42-43 Metro Station",
    pricing: {
      businessPlan: 8499,
      gstPlan: 5499,
      mailingAddress: 3299,
      dedicatedDesk: 1999,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543231",
    whatsappNumber: "919876543231",
    image: [
      "https://picsum.photos/seed/golf-course-road-gurgaon-1/800/500",
      "https://picsum.photos/seed/golf-course-road-gurgaon-2/800/500",
      "https://picsum.photos/seed/golf-course-road-gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=golf+course+road+gurgaon",
    benefits: [
      "One of Gurgaon’s most premium addresses",
      "Perfect for enterprise & luxury brands",
      "High-end corporate ecosystem",
      "Excellent connectivity to Cyber City",
    ],
    testimonials: [
      {
        name: "Kunal Batra",
        role: "CEO",
        company: "Luxora Ventures",
        review: "Golf Course Road address investors aur enterprise clients dono ko impress karta hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "golf-course-road-gurgaon",
        question: "Golf Course Road address premium kyu maana jata hai?",
        answer: "Yeh Gurgaon ka high-end corporate aur luxury business corridor maana jata hai.",
      },
    ],
    metaTitle: "Virtual Office Golf Course Road Gurgaon | Premium Address",
    metaDescription: "Premium virtual office on Golf Course Road Gurgaon with GST support and luxury corporate presence.",
  },

  "jmd-regent-mg-road-gurgaon": {
    id: "jmd-regent-mg-road-gurgaon",
    stateSlug: "haryana",
    citySlug: "jmd-regent-mg-road-gurgaon",
    displayName: "JMD Regent MG Road",
    state: "Haryana",
    area: "MG Road",
    fullAddress: "JMD Regent Square, MG Road, Gurugram",
    pincode: "122002",
    landmark: "Near Sikanderpur Metro Station",
    pricing: {
      businessPlan: 6299,
      gstPlan: 3799,
      mailingAddress: 2399,
      dedicatedDesk: 1399,
    },
    centers: 3,
    gstReady: true,
    phoneNumber: "+919876543232",
    whatsappNumber: "919876543232",
    image: [
      "https://picsum.photos/seed/jmd-regent-mg-road-gurgaon-1/800/500",
      "https://picsum.photos/seed/jmd-regent-mg-road-gurgaon-2/800/500",
      "https://picsum.photos/seed/jmd-regent-mg-road-gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=jmd+regent+gurgaon",
    benefits: [
      "Premium JMD Regent corporate address",
      "Ideal for startups & agencies",
      "Close to metro & Cyber Hub",
      "Professional mail and courier handling",
    ],
    testimonials: [
      {
        name: "Neeraj Khanna",
        role: "Founder",
        company: "GrowthStack Media",
        review: "JMD Regent ka address kaafi professional lagta hai aur client meetings ke liye bhi convenient hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "jmd-regent-mg-road-gurgaon",
        question: "JMD Regent office kis area mein hai?",
        answer: "MG Road Gurgaon par premium commercial location mein situated hai.",
      },
    ],
    metaTitle: "Virtual Office JMD Regent MG Road Gurgaon",
    metaDescription: "JMD Regent Gurgaon virtual office with GST support and premium commercial address.",
  },

  "sector-48-gurgaon": {
    id: "sector-48-gurgaon",
    stateSlug: "haryana",
    citySlug: "sector-48-gurgaon",
    displayName: "Sector 48 Gurgaon",
    state: "Haryana",
    area: "Sector 48",
    fullAddress: "Sohna Road, Sector 48, Gurugram",
    pincode: "122018",
    landmark: "Near Subhash Chowk",
    pricing: {
      businessPlan: 5199,
      gstPlan: 2999,
      mailingAddress: 1899,
      dedicatedDesk: 999,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543233",
    whatsappNumber: "919876543233",
    image: [
      "https://picsum.photos/seed/sector-48-gurgaon-1/800/500",
      "https://picsum.photos/seed/sector-48-gurgaon-2/800/500",
      "https://picsum.photos/seed/sector-48-gurgaon-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=sector+48+gurgaon",
    benefits: [
      "Fast-growing commercial hub",
      "Affordable premium Gurgaon address",
      "Excellent Sohna Road connectivity",
      "Ideal for startups & ecommerce businesses",
    ],
    testimonials: [
      {
        name: "Harsh Jain",
        role: "E-commerce Seller",
        company: "UrbanKart",
        review: "Sector 48 Gurgaon location budget-friendly hone ke saath kaafi professional bhi lagti hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "sector-48-gurgaon",
        question: "Sector 48 Gurgaon kis type business ke liye suitable hai?",
        answer: "Startups, ecommerce, consultants aur service-based businesses ke liye ideal location hai.",
      },
    ],
    metaTitle: "Virtual Office Sector 48 Gurgaon | GST Address ₹799",
    metaDescription: "Sector 48 Gurgaon virtual office with GST registration support and professional business address.",
  },

  "noida": {
    id: "noida",
    stateSlug: "uttar-pradesh",
    citySlug: "noida",
    displayName: "Noida",
    state: "Uttar Pradesh",
    area: "Sector 62",
    fullAddress: "B-12, Sector 62, Noida",
    pincode: "201301",
    landmark: "Near Electronic City Metro",
    pricing: {
      businessPlan: 5699,
      gstPlan: 3499,
      mailingAddress: 2199,
      dedicatedDesk: 1199,
    },
    centers: 5,
    gstReady: true,
    phoneNumber: "+919876543212",
    whatsappNumber: "919876543212",
    image: [
      "https://picsum.photos/seed/noida-1/800/500",
      "https://picsum.photos/seed/noida-2/800/500",
      "https://picsum.photos/seed/noida-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=sector+62+noida",
    benefits: [
      "Tech hub Sector 62 address",
      "UP GST - lower registration fees than Delhi",
      "Close to major IT companies",
      "Excellent metro connectivity",
    ],
    testimonials: [
      {
        name: "Karan Singh",
        role: "Freelance Developer",
        company: "Self Employed",
        review: "Noida address leke bohot clients impress hue. Sector 62 tech companies ke paas hai toh credibility automatically badh jaati hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "noida",
        question: "UP GST kaise different hai Delhi se?",
        answer: "UP GST registration slightly cheaper hai. Process same hai - 2-3 din mein approve. Documents hum provide karte hain.",
      },
    ],
    metaTitle: "Virtual Office Noida Sector 62 | UP GST Address from ₹799",
    metaDescription: "Noida Sector 62 virtual office. Tech hub address. UP GST ready. Mail handling, 5 centers across Noida.",
  },

  "ghaziabad": {
    id: "ghaziabad",
    stateSlug: "uttar-pradesh",
    citySlug: "ghaziabad",
    displayName: "Ghaziabad",
    state: "Uttar Pradesh",
    area: "Indirapuram",
    fullAddress: "Plot No. 42, Indirapuram, Ghaziabad",
    pincode: "201014",
    landmark: "Near Shipra Mall",
    pricing: {
      businessPlan: 4999,
      gstPlan: 2999,
      mailingAddress: 1799,
      dedicatedDesk: 999,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543220",
    whatsappNumber: "+919876543220",
    image: [
      "https://picsum.photos/seed/ghaziabad-1/800/500",
      "https://picsum.photos/seed/ghaziabad-2/800/500",
      "https://picsum.photos/seed/ghaziabad-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=indirapuram+ghaziabad",
    benefits: [
      "Indirapuram - fastest growing business hub",
      "Delhi NCR connectivity without Delhi prices",
      "UP GST rates with NCR advantages",
      "Close to Delhi border for easy access",
    ],
    testimonials: [
      {
        name: "Sanjay Kumar",
        role: "Startup Founder",
        company: "LogiTech Solutions",
        review: "Ghaziabad address se UP GST liya but Delhi ka benefit bhi milta hai location ki wajah se. Best of both worlds.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "ghaziabad",
        question: "Ghaziabad vs Noida - kaunsa better hai?",
        answer: "Dono similar hain. Ghaziabad slightly cheaper hai. Noida tech companies ke liye better. Dono UP GST eligible.",
      },
      {
        id: "ghaziabad",
        question: "Delhi clients ke liye accessible hai?",
        answer: "Haan - Delhi border se 15-20 minute. Metro connectivity bhi hai. Client meetings easily arrange ho sakti hain.",
      },
    ],
    metaTitle: "Virtual Office Ghaziabad Indirapuram | NCR GST Address ₹799",
    metaDescription: "Indirapuram Ghaziabad virtual office. NCR advantage. UP GST rates. 4 centers. Starting ₹799/month.",
  },
  "varanasi": {
    id: "varanasi",
    stateSlug: "uttar-pradesh",
    citySlug: "varanasi",
    displayName: "Varanasi",
    state: "Uttar Pradesh",
    area: "Sigra",
    fullAddress: "D-58/12, Sigra, Varanasi",
    pincode: "221010",
    landmark: "Near IP Mall Sigra",
    pricing: {
      businessPlan: 4299,
      gstPlan: 2499,
      mailingAddress: 1599,
      dedicatedDesk: 799,
    },
    centers: 3,
    gstReady: true,
    phoneNumber: "+919876543221",
    whatsappNumber: "919876543221",
    image: [
      "https://picsum.photos/seed/varanasi-1/800/500",
      "https://picsum.photos/seed/varanasi-2/800/500",
      "https://picsum.photos/seed/varanasi-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=sigra+varanasi",
    benefits: [
      "Prime Sigra commercial location",
      "UP GST registration support within 2-3 days",
      "Ideal for traders, exporters & local businesses",
      "Professional mail & courier handling services",
    ],
    testimonials: [
      {
        name: "Rohit Mishra",
        role: "Business Owner",
        company: "Kashi Traders",
        review: "Varanasi address se GST registration bahut smooth hua. Mail handling bhi kaafi professional hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "varanasi",
        question: "Varanasi mein kaunsi location available hai?",
        answer: "Hamara center Sigra area mein located hai jo city ka major commercial hub maana jata hai.",
      },
      {
        id: "varanasi",
        question: "GST registration mein support milega?",
        answer: "Haan, hum NOC, rent agreement aur utility bill provide karte hain jisse GST process smooth ho jata hai.",
      },
    ],
    metaTitle: "Virtual Office in Varanasi Sigra | UP GST Address ₹799",
    metaDescription: "Premium virtual office in Sigra Varanasi. GST ready address with mail handling and business support services.",
  },

  "kanpur": {
    id: "kanpur",
    stateSlug: "uttar-pradesh",
    citySlug: "kanpur",
    displayName: "Kanpur",
    state: "Uttar Pradesh",
    area: "Civil Lines",
    fullAddress: "15/63, Civil Lines, Kanpur",
    pincode: "208001",
    landmark: "Near Green Park Stadium",
    pricing: {
      businessPlan: 4399,
      gstPlan: 2599,
      mailingAddress: 1699,
      dedicatedDesk: 899,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543222",
    whatsappNumber: "919876543222",
    image: [
      "https://picsum.photos/seed/kanpur-1/800/500",
      "https://picsum.photos/seed/kanpur-2/800/500",
      "https://picsum.photos/seed/kanpur-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=civil+lines+kanpur",
    benefits: [
      "Civil Lines premium business address",
      "Perfect for manufacturing & trading businesses",
      "UP GST support with quick documentation",
      "Affordable virtual office plans",
    ],
    testimonials: [
      {
        name: "Aditya Gupta",
        role: "Founder",
        company: "LeatherTech Industries",
        review: "Kanpur office address kaafi professional lagta hai aur clients par achha impression padta hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "kanpur",
        question: "Kanpur virtual office kis type business ke liye best hai?",
        answer: "Kanpur manufacturing, leather, textile aur trading businesses ke liye kaafi popular location hai.",
      },
      {
        id: "kanpur",
        question: "Mail handling service available hai?",
        answer: "Haan, hum courier receive karke WhatsApp alert aur forwarding service bhi provide karte hain.",
      },
    ],
    metaTitle: "Virtual Office Kanpur Civil Lines | GST Address from ₹799",
    metaDescription: "Kanpur Civil Lines virtual office with GST registration support, mail handling and premium business address.",
  },

  "lucknow": {
    id: "lucknow",
    stateSlug: "uttar-pradesh",
    citySlug: "lucknow",
    displayName: "Lucknow",
    state: "Uttar Pradesh",
    area: "Gomti Nagar",
    fullAddress: "TC-34, Gomti Nagar, Lucknow",
    pincode: "226010",
    landmark: "Near Wave Mall",
    pricing: {
      businessPlan: 4699,
      gstPlan: 2799,
      mailingAddress: 1799,
      dedicatedDesk: 999,
    },
    centers: 5,
    gstReady: true,
    phoneNumber: "+919876543223",
    whatsappNumber: "919876543223",
    image: [
      "https://picsum.photos/seed/lucknow-1/800/500",
      "https://picsum.photos/seed/lucknow-2/800/500",
      "https://picsum.photos/seed/lucknow-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=gomti+nagar+lucknow",
    benefits: [
      "Gomti Nagar corporate business address",
      "Ideal for startups & consultancy firms",
      "Fast UP GST approval assistance",
      "Professional business presence in Lucknow",
    ],
    testimonials: [
      {
        name: "Faizan Ali",
        role: "Consultant",
        company: "NextEdge Solutions",
        review: "Gomti Nagar address ki wajah se business credibility kaafi improve hui. Support team bhi responsive hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "lucknow",
        question: "Lucknow mein office ka exact area kya hai?",
        answer: "Hamara center Gomti Nagar mein hai jo Lucknow ka premium commercial aur startup hub hai.",
      },
      {
        id: "lucknow",
        question: "Kya startup businesses ke liye suitable hai?",
        answer: "Bilkul. Consultancy, IT services, agencies aur startups ke liye yeh location perfect hai.",
      },
    ],
    metaTitle: "Virtual Office Lucknow Gomti Nagar | UP GST Address ₹799",
    metaDescription: "Lucknow Gomti Nagar virtual office with GST support, mail handling and premium corporate address.",
  },


  "mumbai-bkc": {
    id: "mumbai-bkc",
    stateSlug: "maharashtra",
    citySlug: "mumbai-bkc",
    displayName: "Mumbai BKC",
    state: "Maharashtra",
    area: "Bandra Kurla Complex",
    fullAddress: "G-Block, Bandra Kurla Complex, Mumbai",
    pincode: "400051",
    landmark: "Near BKC Metro Station",
    pricing: {
      businessPlan: 9999,
      gstPlan: 6499,
      mailingAddress: 3999,
      dedicatedDesk: 2499,
    },
    centers: 7,
    gstReady: true,
    phoneNumber: "+919876543213",
    whatsappNumber: "919876543213",
    image: [
      "https://picsum.photos/seed/mumbai-bkc-1/800/500",
      "https://picsum.photos/seed/mumbai-bkc-2/800/500",
      "https://picsum.photos/seed/mumbai-bkc-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=bkc+mumbai",
    benefits: [
      "BKC - India's most premium business address",
      "Maharashtra GST registration support",
      "Perfect for financial services companies",
      "NSE, BSE, RBI nearby - financial credibility",
    ],
    testimonials: [
      {
        name: "Suresh Patel",
        role: "Director",
        company: "FinTech Startup",
        review: "BKC address is gold for fintech. Investors immediately take you seriously. GST bhi 3 din mein ho gaya.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "mumbai-bkc",
        question: "BKC address kyon expensive lagta hai?",
        answer: "BKC India ka sabse premium corporate address hai. But virtual office rates same hain - ₹799/month se start. You get BKC prestige at fraction of cost.",
      },
    ],
    metaTitle: "Virtual Office Mumbai BKC | Premium Business Address ₹799",
    metaDescription: "BKC Mumbai virtual office. India's most prestigious address. Maharashtra GST. 7 centers. Mail handling included.",
  },

  "bangalore": {
    id: "bangalore",
    stateSlug: "karnataka",
    citySlug: "bangalore",
    displayName: "Bangalore",
    state: "Karnataka",
    area: "Koramangala",
    fullAddress: "80 Feet Road, Koramangala, Bangalore",
    pincode: "560034",
    landmark: "Near Forum Mall",
    pricing: {
      businessPlan: 7499,
      gstPlan: 4699,
      mailingAddress: 2899,
      dedicatedDesk: 1699,
    },
    centers: 6,
    gstReady: true,
    phoneNumber: "+919876543214",
    whatsappNumber: "919876543214",
    image: [
      "https://picsum.photos/seed/bangalore-1/800/500",
      "https://picsum.photos/seed/bangalore-2/800/500",
      "https://picsum.photos/seed/bangalore-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=koramangala+bangalore",
    benefits: [
      "Koramangala - Startup capital of India",
      "Karnataka GST registration in 2 days",
      "Surrounded by VCs and accelerators",
      "Tech ecosystem address credibility",
    ],
    testimonials: [
      {
        name: "Anjali Nair",
        role: "Founder",
        company: "EdTech Startup",
        review: "Bangalore address is must for tech startups. VCs trust Koramangala location. Mail handling bhi top-notch.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "bangalore",
        question: "Bangalore mein kaunsa area best hai virtual office ke liye?",
        answer: "Koramangala startup ecosystem ke liye best hai. HSR, Indiranagar bhi available hain. Choose based on your target audience.",
      },
    ],
    metaTitle: "Virtual Office Bangalore Koramangala | Karnataka GST ₹799",
    metaDescription: "Koramangala virtual office. Startup hub address. Karnataka GST ready. 6 centers. Perfect for tech companies.",
  },

  "hyderabad": {
    id: "hyderabad",
    stateSlug: "telangana",
    citySlug: "hyderabad",
    displayName: "Hyderabad",
    state: "Telangana",
    area: "Hitech City",
    fullAddress: "Cyber Towers, Hitech City, Hyderabad",
    pincode: "500081",
    landmark: "Near Hitech City Metro",
    pricing: {
      businessPlan: 6399,
      gstPlan: 3899,
      mailingAddress: 2399,
      dedicatedDesk: 1299,
    },
    centers: 4,
    gstReady: true,
    phoneNumber: "+919876543215",
    whatsappNumber: "919876543215",
    image: [
      "https://picsum.photos/seed/hyderabad-1/800/500",
      "https://picsum.photos/seed/hyderabad-2/800/500",
      "https://picsum.photos/seed/hyderabad-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=hitech+city+hyderabad",
    benefits: [
      "Hitech City - Tech corridor address",
      "Telangana GST - startup-friendly state",
      "Lower costs than Bangalore/Mumbai",
      "Growing tech ecosystem",
    ],
    testimonials: [
      {
        name: "Vikram Reddy",
        role: "CEO",
        company: "AI Startup",
        review: "Hyderabad address economical hai but credibility bilkul top tier. Hitech City location clients ko impress karta hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "hyderabad",
        question: "Telangana GST process kaisa hai?",
        answer: "Telangana very startup-friendly hai. GST 2-3 din mein approve ho jaata hai. Government support bhi achhi hai.",
      },
    ],
    metaTitle: "Virtual Office Hyderabad Hitech City | Telangana GST ₹799",
    metaDescription: "Hitech City virtual office. Tech hub address. Telangana GST. 4 centers. Startup-friendly location.",
  },

  "pune": {
    id: "pune",
    stateSlug: "maharashtra",
    citySlug: "pune",
    displayName: "Pune",
    state: "Maharashtra",
    area: "Hinjewadi",
    fullAddress: "Phase 1, Hinjewadi IT Park, Pune",
    pincode: "411057",
    landmark: "Near Rajiv Gandhi IT Park",
    pricing: {
      businessPlan: 5499,
      gstPlan: 3199,
      mailingAddress: 1999,
      dedicatedDesk: 999,
    },
    centers: 3,
    gstReady: true,
    phoneNumber: "+919876543216",
    whatsappNumber: "919876543216",
    image: [
      "https://picsum.photos/seed/pune-1/800/500",
      "https://picsum.photos/seed/pune-2/800/500",
      "https://picsum.photos/seed/pune-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=hinjewadi+pune",
    benefits: [
      "Hinjewadi IT Park - Corporate address",
      "Maharashtra GST at lower cost than Mumbai",
      "Growing IT ecosystem",
      "Cost-effective premium address",
    ],
    testimonials: [
      {
        name: "Meera Joshi",
        role: "Consultant",
        company: "Self Employed",
        review: "Pune address affordable hai but quality Mumbai jaisa. Hinjewadi IT Park address professional lagta hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "pune",
        question: "Pune vs Mumbai - kaunsa better?",
        answer: "Pune more affordable hai. If budget constraint hai toh Pune perfect. Mumbai BKC prestige ke liye best but expensive.",
      },
    ],
    metaTitle: "Virtual Office Pune Hinjewadi | Maharashtra GST from ₹799",
    metaDescription: "Hinjewadi IT Park virtual office. Pune address. Maharashtra GST. 3 centers. Cost-effective corporate address.",
  },

  "chennai": {
    id: "chennai",
    stateSlug: "tamil-nadu",
    citySlug: "chennai",
    displayName: "Chennai",
    state: "Tamil Nadu",
    area: "Anna Salai",
    fullAddress: "450, Anna Salai, Chennai",
    pincode: "600002",
    landmark: "Near LIC Building",
    pricing: {
      businessPlan: 5299,
      gstPlan: 3099,
      mailingAddress: 1999,
      dedicatedDesk: 999,
    },
    centers: 3,
    gstReady: true,
    phoneNumber: "+919876543217",
    whatsappNumber: "919876543217",
    image: [
      "https://picsum.photos/seed/chennai-1/800/500",
      "https://picsum.photos/seed/chennai-2/800/500",
      "https://picsum.photos/seed/chennai-3/800/500",
    ],
    mapLink: "https://maps.google.com/?q=anna+salai+chennai",
    benefits: [
      "Anna Salai - Prime Chennai business district",
      "Tamil Nadu GST support",
      "Gateway to South India market",
      "Manufacturing & automotive hub address",
    ],
    testimonials: [
      {
        name: "Deepak Kumar",
        role: "Exporter",
        company: "Auto Parts Export",
        review: "Chennai address automotive industry mein trust create karta hai. IEC registration bhi smooth tha.",
        rating: 5,
      },
    ],
    faqs: [
      {
        id: "chennai",
        question: "Chennai address manufacturing business ke liye good hai?",
        answer: "Haan - Chennai manufacturing & automotive hub hai. Export businesses ke liye perfect location.",
      },
    ],
    metaTitle: "Virtual Office Chennai Anna Salai | Tamil Nadu GST ₹799",
    metaDescription: "Anna Salai virtual office. Chennai business address. Tamil Nadu GST. 3 centers. Perfect for South India.",
  },


}

export const getCityData = (citySlug: string): CityData | null => {
  return VO_CITY_DATA[citySlug] || null
}

export const getAllCitySlugs = (): string[] => {
  return Object.keys(VO_CITY_DATA)
}

export const getCitiesByState = (stateSlug: string): CityData[] => {
  return Object.values(VO_CITY_DATA).filter(city => city.stateSlug === stateSlug)
}

export const getAllCities = (): CityData[] => {
  return Object.values(VO_CITY_DATA)
}
// Our Premium Locations

export const STATES: Record<string, StateData & { bgimage?: string }> = {
  "delhi": {
    name: "Delhi",
    slug: "delhi",
    fullName: "National Capital Territory of Delhi",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/delhi.jpeg",
    cities: ["dwarka", "laxmi-nagar", "saket", "ghitorni"],
    famousPlaces: "Delhi",
  },
  "haryana": {
    name: "Haryana",
    slug: "haryana",
    fullName: "Haryana",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/gurgaon.jpeg",
    cities: ["gurgaon", "sushant-lok-gurgaon", "palm-court-sector-16-gurgaon", "mg-road-gurgaon", "golf-course-road-gurgaon", "jmd-regent-mg-road-gurgaon", "sector-48-gurgaon"],
    famousPlaces: "Gurgaon",
  },
  "uttar-pradesh": {
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    fullName: "Uttar Pradesh",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/noida.jpeg",
    cities: ["noida", "greater-noida", "kanpur", "lucknow", "ghaziabad", "varanasi"],
    famousPlaces: "Noida",
  },
  "karnataka": {
    name: "Karnataka",
    slug: "karnataka",
    fullName: "Karnataka",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/bangalore.jpeg",
    cities: ["bangalore"],
    famousPlaces: "Bangalore"
  },
  "telangana": {
    name: "Telangana",
    slug: "telangana",
    fullName: "Telangana",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/hyderabad.jpeg",
    cities: ["hyderabad"],
    famousPlaces: "Hyderabad",
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    fullName: "Tamil Nadu",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/chennai.jpeg",
    cities: ["chennai"],
    famousPlaces: "Chennai"
  },

  "west-bengal": {
    name: "West Bengal",
    slug: "west-bengal",
    fullName: "West Bengal",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/kolkata.jpeg",
    cities: ["kolkata"],
    famousPlaces: "Kolkata",
  },
  "Maharashtra": {
    name: "Maharashtra",
    slug: "maharashtra",
    fullName: "Maharashtra",
    bgimage: "https://echospaces.in/assets/media/echospaces/locations/pune.jpeg",
    cities: ["pune"],
    famousPlaces: "Pune",
  },
}

export const getStateData = (stateSlug: string): StateData | null => {
  return STATES[stateSlug] || null
}

export const getCitiesInState = (stateSlug: string): CityData[] => {
  const state = STATES[stateSlug]
  if (!state) return []

  return state.cities
    .map(citySlug => VO_CITY_DATA[citySlug])
    .filter(Boolean) as CityData[]
}

export const getAllStates = (): StateData[] => {
  return Object.values(STATES)
}

export const getStateSlugFromCity = (citySlug: string): string | null => {
  const city = VO_CITY_DATA[citySlug]
  return city?.stateSlug || null
}

export type { CityData }
