export type FurnishingStatus = 'raw' | 'semi-furnished' | 'fully-furnished'
export type SpaceType = 'office-space' | 'coworking' | 'virtual-office'
export type CityType =
  | 'gurgaon'
  | 'noida'
  | 'delhi'
  | 'udyog-vihar'
  | 'cyber-city'
  | 'golf-course-road'
  | 'golf-course-ext-road'
  | 'greater-noida'
  | 'sector-15'

export interface OfficeSpace {
  id: string
  title: string
  slug: string
  type: SpaceType
  furnishing: FurnishingStatus
  city: CityType
  location: string
  price: number
  priceUnit: 'month' | 'seat' | 'day'
  area: number
  seats: number
  hasParking: boolean
  hasAC: boolean
  image: string
  images: string[]
  description: string
  featured: boolean
  available: boolean
  postedAt: string
}
