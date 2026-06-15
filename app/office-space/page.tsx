'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Building2,
  Users,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Snowflake,
} from 'lucide-react'
import { officeSpaces } from '@/lib/data/officeSpaces'
import type { OfficeSpace, CityType, FurnishingStatus } from '@/types/officeSpace'

/* ─── Constants ─── */
const ITEMS_PER_PAGE = 8

const cityTabs: { label: string; value: string }[] = [
  { label: 'All Locations', value: 'all' },
  { label: 'Gurgaon', value: 'gurgaon' },
  { label: 'Noida', value: 'noida' },
  { label: 'Delhi', value: 'delhi' },
  { label: 'Udyog Vihar', value: 'udyog-vihar' },
  { label: 'Cyber City', value: 'cyber-city' },
  { label: 'Golf Course Road', value: 'golf-course-road' },
  { label: 'Golf Course Ext Road', value: 'golf-course-ext-road' },
  { label: 'Greater Noida', value: 'greater-noida' },
  { label: 'Sector 15', value: 'sector-15' },
]

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹25,000', min: 0, max: 25000 },
  { label: '₹25,000 – ₹50,000', min: 25000, max: 50000 },
  { label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
  { label: 'Above ₹1,00,000', min: 100000, max: Infinity },
]

const locationOptions = [
  'Popular locations',
  'Gurgaon',
  'Noida',
  'Delhi',
  'Cyber City',
  'Udyog Vihar',
]

/* ─── Helpers ─── */
function formatPrice(n: number): string {
  return n.toLocaleString('en-IN')
}

function furnishingBadge(status: FurnishingStatus) {
  switch (status) {
    case 'raw':
      return { text: 'Raw', className: 'bg-gray-pale text-gray-slate' }
    case 'semi-furnished':
      return { text: 'Semi Furnished', className: 'bg-yellow-50 text-yellow-700' }
    case 'fully-furnished':
      return { text: 'Fully Furnished', className: 'bg-green-pale text-green-primary' }
  }
}

/* ─── Listing Card ─── */
function ListingCard({ space }: { space: OfficeSpace }) {
  const badge = furnishingBadge(space.furnishing)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-light bg-white transition-shadow duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-pale">
        <Image
          src={space.image}
          alt={space.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Featured badge */}
        {space.featured && (
          <span className="absolute left-3 top-3 rounded-md bg-green-primary px-2 py-1 text-xs font-semibold text-white shadow">
            Featured
          </span>
        )}
        {/* Type badge */}
        <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-dark shadow backdrop-blur-sm">
          Office Space
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Furnishing + Price row */}
        <div className="flex items-center justify-between gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${badge.className}`}>
            {badge.text}
          </span>
          <span className="text-lg font-semibold text-green-primary">
            ₹{formatPrice(space.price)}
            <span className="text-xs font-normal text-gray-mid">/{space.priceUnit}</span>
          </span>
        </div>

        {/* Title */}
        <h3
          className="line-clamp-2 font-heading text-base leading-snug text-gray-dark"
          title={space.title}
        >
          {space.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-gray-mid">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{space.location}</span>
        </div>
      </div>

      {/* Stats divider */}
      <div className="border-t border-gray-light px-4 py-2.5">
        <div className="flex items-center gap-4 text-xs text-gray-mid">
          <span className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" />
            {space.area} sqft
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            {space.seats} seats
          </span>
          {space.hasParking && (
            <span className="flex items-center gap-1">
              <Car className="h-3.5 w-3.5" />
              Parking
            </span>
          )}
          {space.hasAC && (
            <span className="flex items-center gap-1">
              <Snowflake className="h-3.5 w-3.5" />
              AC
            </span>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 border-t border-gray-light p-3">
        <button
          type="button"
          className="flex-1 rounded-lg bg-green-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-deep"
        >
          Enquiry
        </button>
        <Link
          href={`/office-space/${space.slug}`}
          className="flex-1 rounded-lg border border-green-primary px-4 py-2 text-center text-sm font-medium text-green-primary transition-colors hover:bg-green-pale"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

/* ─── Page Component ─── */
export default function OfficeSpacePage() {
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState('Popular locations')
  const [currentPage, setCurrentPage] = useState(1)

  /* Dropdown open states */
  const [locationOpen, setLocationOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  /* Filtered data */
  const filtered = useMemo(() => {
    let result = officeSpaces

    // City tab filter
    if (selectedCity !== 'all') {
      result = result.filter((s) => s.city === selectedCity)
    }

    // Location dropdown filter (maps display name → CityType)
    if (selectedLocation !== 'Popular locations') {
      const mapped = selectedLocation.toLowerCase().replace(/ /g, '-') as CityType
      result = result.filter((s) => s.city === mapped)
    }

    // Price range filter
    const range = priceRanges[selectedPriceIdx]
    if (range.min !== 0 || range.max !== Infinity) {
      result = result.filter((s) => s.price >= range.min && s.price < range.max)
    }

    return result
  }, [selectedCity, selectedPriceIdx, selectedLocation])

  /* Pagination */
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  )

  function goToPage(page: number) {
    setCurrentPage(Math.min(Math.max(1, page), totalPages))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /* Reset page on filter change */
  function handleCityChange(city: string) {
    setSelectedCity(city)
    setCurrentPage(1)
  }
  function handlePriceChange(idx: number) {
    setSelectedPriceIdx(idx)
    setPriceOpen(false)
    setCurrentPage(1)
  }
  function handleLocationChange(loc: string) {
    setSelectedLocation(loc)
    setLocationOpen(false)
    setCurrentPage(1)
  }

  /* Build page numbers to render */
  function getPageNumbers(): (number | '...')[] {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | '...')[] = [1]
    if (currentPage > 3) pages.push('...')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) pages.push('...')
    pages.push(totalPages)
    return pages
  }

  return (
    <section className="min-h-screen bg-off-white">
      <div className="container-dishora py-8">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-gray-mid">
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-green-primary">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-dark">Office Space</span>
        </nav>

        {/* ── Page Header ── */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-heading text-3xl text-gray-dark">Office Space In All Cities</h1>
            <p className="mt-1 text-sm text-gray-mid">
              Showing {filtered.length} properties
            </p>
          </div>

          {/* Dropdowns */}
          <div className="flex flex-wrap gap-3">
            {/* Location dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => { setLocationOpen(!locationOpen); setPriceOpen(false) }}
                className="flex items-center gap-2 rounded-lg border border-gray-light bg-white px-4 py-2 text-sm text-gray-dark transition-colors hover:border-green-primary"
              >
                {selectedLocation}
                <ChevronDown className={`h-4 w-4 transition-transform ${locationOpen ? 'rotate-180' : ''}`} />
              </button>
              {locationOpen && (
                <ul className="absolute right-0 top-full z-30 mt-1 min-w-[180px] overflow-hidden rounded-lg border border-gray-light bg-white shadow-lg">
                  {locationOptions.map((loc) => (
                    <li key={loc}>
                      <button
                        type="button"
                        onClick={() => handleLocationChange(loc)}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-green-pale ${
                          selectedLocation === loc ? 'bg-green-pale font-medium text-green-primary' : 'text-gray-dark'
                        }`}
                      >
                        {loc}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => { setPriceOpen(!priceOpen); setLocationOpen(false) }}
                className="flex items-center gap-2 rounded-lg border border-gray-light bg-white px-4 py-2 text-sm text-gray-dark transition-colors hover:border-green-primary"
              >
                {priceRanges[selectedPriceIdx].label}
                <ChevronDown className={`h-4 w-4 transition-transform ${priceOpen ? 'rotate-180' : ''}`} />
              </button>
              {priceOpen && (
                <ul className="absolute right-0 top-full z-30 mt-1 min-w-[200px] overflow-hidden rounded-lg border border-gray-light bg-white shadow-lg">
                  {priceRanges.map((range, idx) => (
                    <li key={range.label}>
                      <button
                        type="button"
                        onClick={() => handlePriceChange(idx)}
                        className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-green-pale ${
                          selectedPriceIdx === idx ? 'bg-green-pale font-medium text-green-primary' : 'text-gray-dark'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* ── City Filter Tabs ── */}
        <div className="scrollbar-hide mb-8 flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {cityTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleCityChange(tab.value)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                selectedCity === tab.value
                  ? 'bg-green-primary text-white shadow-md'
                  : 'bg-gray-pale text-gray-slate hover:bg-gray-light'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Listings Grid ── */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginated.map((space) => (
              <ListingCard key={space.id} space={space} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gray-light bg-white py-20">
            <Building2 className="h-12 w-12 text-gray-light" />
            <p className="text-lg font-medium text-gray-mid">No properties found</p>
            <p className="text-sm text-gray-mid">Try adjusting your filters to see more results.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCity('all')
                setSelectedPriceIdx(0)
                setSelectedLocation('Popular locations')
                setCurrentPage(1)
              }}
              className="mt-2 rounded-lg bg-green-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-deep"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-1">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="flex items-center gap-1 rounded-lg border border-gray-light px-3 py-1.5 text-sm text-gray-dark transition-colors hover:bg-gray-pale disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {getPageNumbers().map((page, idx) =>
              page === '...' ? (
                <span key={`dots-${idx}`} className="px-2 text-sm text-gray-mid">
                  …
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`min-w-[36px] rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-green-primary text-white shadow'
                      : 'border border-gray-light text-gray-dark hover:bg-gray-pale'
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="flex items-center gap-1 rounded-lg border border-gray-light px-3 py-1.5 text-sm text-gray-dark transition-colors hover:bg-gray-pale disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </div>

      {/* Hide scrollbar utility */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
