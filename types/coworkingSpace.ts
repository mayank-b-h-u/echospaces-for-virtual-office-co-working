export type CoworkingType =
  | 'private-office'
  | 'private-cabin'
  | 'dedicated-desk'
  | 'hot-desk'
  | 'coworking'

export type CoworkingTag = 'featured' | 'popular' | null

export type CityType =
  | 'gurgaon'
  | 'noida'
  | 'delhi'
  | 'udyog-vihar'
  | 'cyber-city'
  | 'golf-course-road'
  | 'golf-course-ext-road'
  | 'greater-noida'
  | 'sector-18'
  | 'sector-63'

export interface CoworkingAmenity {
  icon: string
  label: string
}

export interface CoworkingSpace {
  id: string
  title: string
  slug: string
  type: CoworkingType
  tag: CoworkingTag
  city: CityType
  location: string
  pricePerSeat: number
  seats: number
  amenity1: CoworkingAmenity
  amenity2: CoworkingAmenity
  image: string
  images: string[]
  description: string
  featured: boolean
  available: boolean
  postedAt: string
}
