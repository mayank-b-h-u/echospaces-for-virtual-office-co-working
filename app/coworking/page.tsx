'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Users,
  UtensilsCrossed,
  Wifi,
  Coffee,
  Repeat,
  Building2,
  Zap,
  ShieldCheck,
  Car,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { coworkingSpaces } from '@/lib/data/coworkingSpaces'
import type { CoworkingSpace, CoworkingType } from '@/types/coworkingSpace'

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
  { label: 'Golf Course Extension Road', value: 'golf-course-ext-road' },
  { label: 'Greater Noida', value: 'greater-noida' },
  { label: 'Sector 18', value: 'sector-18' },
  { label: 'Sector 63', value: 'sector-63' },
]

/* ─── Icon Resolver ─── */
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Users,
  UtensilsCrossed,
  Wifi,
  Coffee,
  Repeat,
  Building2,
  Zap,
  ShieldCheck,
  Car,
}

function AmenityIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} />
}

/* ─── Helpers ─── */
function formatTypeLabel(type: CoworkingType): string {
  return type
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function formatPriceShort(price: number): string {
  if (price >= 1000) return `₹${Math.round(price / 1000)}K`
  return `₹${price}`
}

/* ─── Listing Card ─── */
function ListingCard({ space }: { space: CoworkingSpace }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-light bg-white transition-shadow duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-pale">
        <Image
          src={space.image}
          alt={space.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute left-2 top-2 flex gap-1.5">
          {space.tag === 'featured' && (
            <span className="rounded-full bg-amber-400 px-2.5 py-1 text-xs font-semibold text-white shadow">
              FEATURED
            </span>
          )}
          {space.tag === 'popular' && (
            <span className="rounded-full bg-purple-500 px-2.5 py-1 text-xs font-semibold text-white shadow">
              POPULAR
            </span>
          )}
          <span className="rounded-full bg-green-primary px-2.5 py-1 text-xs font-semibold text-white shadow">
            COWORKING
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        {/* Type + Price row */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-green-primary">
            {formatTypeLabel(space.type)}
          </span>
          <span className="text-base font-bold text-gray-dark">
            {formatPriceShort(space.pricePerSeat)}{' '}
            <span className="text-xs font-normal text-gray-mid">/ Seat</span>
          </span>
        </div>

        {/* Title */}
        <h3
          className="mt-1 line-clamp-1 font-heading text-lg font-semibold leading-snug text-gray-dark"
          title={space.title}
        >
          {space.title}
        </h3>

        {/* Location */}
        <div className="mt-1 flex items-center gap-1 text-sm text-gray-mid">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-green-mid" />
          <span className="truncate">{space.location}</span>
        </div>

        {/* Divider */}
        <div className="my-3 border-t border-gray-light" />

        {/* Amenities */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <AmenityIcon name={space.amenity1.icon} className="h-4 w-4 text-green-mid" />
            <span className="text-xs text-gray-mid">{space.amenity1.label}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <AmenityIcon name={space.amenity2.icon} className="h-4 w-4 text-green-mid" />
            <span className="text-xs text-gray-mid">{space.amenity2.label}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded-lg bg-green-primary py-2 text-sm font-medium text-white transition-colors hover:bg-green-deep"
          >
            Enquiry
          </button>
          <Link
            href={`/coworking/${space.slug}`}
            className="flex-1 rounded-lg border border-green-primary py-2 text-center text-sm font-medium text-green-primary transition-colors hover:bg-green-pale"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─── Page Component ─── */
export default function CoworkingPage() {
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)

  /* Filtered data */
  const filtered = useMemo(() => {
    if (selectedCity === 'all') return coworkingSpaces
    return coworkingSpaces.filter((s) => s.city === selectedCity)
  }, [selectedCity])

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

  function handleCityChange(city: string) {
    setSelectedCity(city)
    setCurrentPage(1)
  }

  /* Build page numbers */
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
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-dark">Coworking</span>
        </nav>

        {/* ── Page Header ── */}
        <header className="mb-8 text-left">
          <h1 className="font-heading text-2xl font-bold text-gray-dark md:text-3xl">
            Coworking Spaces in India
          </h1>
          <p className="mt-2 text-gray-mid max-md:text-sm">
            Find the perfect coworking space in your city with premium amenities and flexible terms
          </p>
        </header>
        {/* ── City Filter Tabs ── */}
        <div
          className="mt-6 mb-8 flex gap-2 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {cityTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleCityChange(tab.value)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${selectedCity === tab.value
                ? 'bg-green-primary text-white shadow-md'
                : 'border border-gray-light bg-white text-gray-slate hover:border-green-primary hover:text-green-primary'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Result Count ── */}
        <p className="mb-4 text-sm text-gray-mid">
          {filtered.length} Co-working Spaces Found
        </p>

        {/* ── Listings Grid ── */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paginated.map((space) => (
              <ListingCard key={space.id} space={space} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-gray-light bg-white py-20">
            <Building2 className="h-12 w-12 text-gray-light" />
            <p className="text-lg font-medium text-gray-mid">No spaces found</p>
            <p className="text-sm text-gray-mid">Try selecting a different location.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCity('all')
                setCurrentPage(1)
              }}
              className="mt-2 rounded-lg bg-green-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-deep"
            >
              Show All Locations
            </button>
          </div>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="flex items-center gap-1 px-3 text-sm text-gray-mid transition-colors hover:text-gray-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {getPageNumbers().map((page, idx) =>
              page === '...' ? (
                <span key={`dots-${idx}`} className="px-1 text-sm text-gray-mid">
                  …
                </span>
              ) : (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition-colors ${currentPage === page
                    ? 'border border-green-primary bg-green-primary text-white shadow'
                    : 'border border-gray-light text-gray-slate hover:bg-gray-pale'
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
              className="flex items-center gap-1 px-3 text-sm text-gray-mid transition-colors hover:text-gray-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
