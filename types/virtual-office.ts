export type VOUseCase = {
  icon: string
  title: string
  description: string
  badge: string
  color: string
}

export type VOCity = {
  id: string
  name: string
  state: string
  area: string
  address: string
  pincode: string
  landmark: string
  centers: number
  gstReady: boolean
  mapLink: string
}

export type VODocument = {
  icon: string
  name: string
  description: string
  includedIn: string[]
}

export type VOStep = {
  step: number
  title: string
  description: string
  icon: string
  time: string
}

export type VOTestimonial = {
  id: string
  name: string
  role: string
  company: string
  city: string
  review: string
  rating: number
  useCase: string
}

export type VOFaq = {
  id: string
  question: string
  answer: string
  category: "gst-legal" | "plans-pricing" | "documents" | "process" | "general"
}

export type VOComparison = {
  feature: string
  virtualOffice: string | boolean
  traditionalOffice: string | boolean
  highlight?: boolean
}

export type CityTestimonial = {
  name: string
  role: string
  company: string
  review: string
  rating: number
}

export type CityFaq = {
  id: string
  question: string
  answer: string
}

export type CityData = {
  id: string
  // URL slugs
  stateSlug: string
  citySlug: string

  // Display info
  displayName: string
  state: string
  area: string
  fullAddress: string
  pincode: string
  landmark: string

  // pricing
  pricing: {
    businessPlan: number
    gstPlan: number
    mailingAddress: number
    dedicatedDesk: number
  }

  // Stats
  centers: number
  gstReady: boolean

  // Contact
  phoneNumber: string
  whatsappNumber: string

  // Media
  image: string[]
  mapLink: string

  // City-specific content
  benefits: string[]
  testimonials: CityTestimonial[]
  faqs: CityFaq[]

  // SEO
  metaTitle?: string
  metaDescription?: string
}

export type StateData = {
  name: string
  slug: string
  fullName: string
  bgimage: string
  cities: string[]
  famousPlaces: string
}

export type StateSlug = string

