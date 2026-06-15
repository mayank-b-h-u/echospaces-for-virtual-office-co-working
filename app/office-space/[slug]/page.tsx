'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {
  MapPin,
  Building2,
  Users,
  Car,
  Wind,
  Wifi,
  Coffee,
  Zap,
  Monitor,
  Accessibility,
  Shield,
  Briefcase,
  DoorOpen,
  ParkingCircle,
  Clock,
  CalendarDays,
  CheckCircle2,
  Home,
  ChevronRight,
  Mail,
} from 'lucide-react'
import { getSpaceBySlug } from '@/lib/data/officeSpaces'
import type { FurnishingStatus } from '@/types/officeSpace'

/* ─── Helpers ─── */
function formatPrice(n: number): string {
  return n.toLocaleString('en-IN')
}

function formatCityLabel(city: string): string {
  return city
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function furnishingBadge(status: FurnishingStatus) {
  switch (status) {
    case 'raw':
      return { text: 'Raw', className: 'bg-gray-pale text-gray-dark' }
    case 'semi-furnished':
      return { text: 'Semi Furnished', className: 'bg-yellow-50 text-yellow-700' }
    case 'fully-furnished':
      return { text: 'Fully Furnished', className: 'bg-green-pale text-green-primary' }
  }
}

function timeAgo(dateStr: string): string {
  const now = new Date()
  const posted = new Date(dateStr)
  const diffMs = now.getTime() - posted.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return '1 day ago'
  if (diffDays < 30) return `${diffDays} days ago`
  const diffMonths = Math.floor(diffDays / 30)
  if (diffMonths === 1) return '1 month ago'
  return `${diffMonths} months ago`
}

/* ─── Amenities List ─── */
const amenitiesList = [
  { icon: Wifi, label: 'High-speed WiFi' },
  { icon: Coffee, label: 'Coffee Bar' },
  { icon: Accessibility, label: 'Meeting Rooms' },
  { icon: Users, label: 'Community Area' },
  { icon: Zap, label: 'Power Backup' },
  { icon: ParkingCircle, label: 'Parking' },
  { icon: Monitor, label: 'IT Infrastructure' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Accessibility, label: 'Wheelchair Access' },
  { icon: DoorOpen, label: '24/7 Access' },
  { icon: Shield, label: 'Security' },
  { icon: Briefcase, label: 'Professional Setup' },
]

/* ─── Office Timings ─── */
const officeTiming = [
  { day: 'Mon – Fri', time: '9 AM – 7 PM' },
  { day: 'Sat', time: '9 AM – 2 PM' },
  { day: 'Sun', time: 'Closed' },
]

/* ─── Page Component ─── */
export default function OfficeSpaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const space = getSpaceBySlug(slug)

  if (!space) {
    notFound()
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    spaceReq: '100 - 500 sqft',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  const fBadge = furnishingBadge(space.furnishing)

  const galleryImages =
    space.images.length >= 4
      ? space.images
      : [space.image, space.image, space.image, space.image]

  /* ─── Price Breakdown ─── */
  const priceBreakdown = [
    { label: 'Monthly Rent', value: `₹${formatPrice(space.price)}` },
    { label: 'Maintenance', value: 'Included' },
    { label: 'Parking', value: space.hasParking ? 'Included' : 'Not Available' },
    { label: 'Security Deposit', value: '2 Months' },
  ]

  /* ─── Specifications ─── */
  const specs = [
    {
      label: 'Space Type',
      value: space.type.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      icon: Building2,
    },
    {
      label: 'Furnishing',
      value: fBadge.text,
      icon: Building2,
      badge: fBadge.className,
    },
    {
      label: 'Area',
      value: `${space.area.toLocaleString('en-IN')} sq.ft`,
      icon: Building2,
    },
    {
      label: 'Seats',
      value: `${space.seats}`,
      icon: Users,
    },
    {
      label: 'Parking',
      value: space.hasParking ? 'Available' : 'Not Available',
      icon: Car,
      valueColor: space.hasParking ? 'text-green-primary' : 'text-gray-mid',
    },
    {
      label: 'Air Conditioning',
      value: space.hasAC ? 'Yes' : 'No',
      icon: Wind,
      valueColor: space.hasAC ? 'text-green-primary' : 'text-gray-mid',
    },
    {
      label: 'Posted',
      value: timeAgo(space.postedAt),
      icon: CalendarDays,
    },
    {
      label: 'Status',
      value: space.available ? 'Available' : 'Not Available',
      icon: CheckCircle2,
      badge: space.available
        ? 'bg-green-pale text-green-primary'
        : 'bg-red-50 text-red-600',
    },
  ]

  return (
    <section className="min-h-screen bg-off-white">
      <div className="container-dishora py-6">
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 py-3 text-sm text-gray-mid"
        >
          <Link
            href="/"
            className="flex items-center gap-1 transition-colors hover:text-green-primary"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/office-space"
            className="transition-colors hover:text-green-primary"
          >
            Office Space
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-gray-dark">{space.title}</span>
        </nav>

        {/* ── Header ── */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {space.featured && (
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </span>
              )}
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${fBadge.className}`}>
                {fBadge.text}
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-green-primary">
                ₹{Math.round(space.price / 1000)}K
              </span>
              <span className="ml-1 text-base text-gray-mid">/ Month</span>
            </div>
          </div>

          <h1 className="mt-3 font-heading text-4xl font-bold text-gray-dark">
            {space.title}
          </h1>
          <div className="mt-2 flex items-center gap-1.5 text-base text-gray-mid">
            <MapPin className="h-4 w-4 text-green-mid" />
            {space.location}
          </div>
        </div>

        {/* ── Image Gallery ── */}
        <div className="mb-10 flex gap-3 overflow-hidden rounded-2xl">
          <div className="relative h-96 w-full lg:w-2/3">
            <Image
              src={galleryImages[0]}
              alt={`${space.title} — main`}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="hidden w-1/3 flex-col gap-2 lg:flex">
            {galleryImages.slice(1, 4).map((img, idx) => (
              <div
                key={idx}
                className="relative h-28 w-full overflow-hidden rounded-xl"
              >
                <Image
                  src={img}
                  alt={`${space.title} — photo ${idx + 2}`}
                  fill
                  sizes="33vw"
                  className="object-cover opacity-90 transition-opacity hover:opacity-100"
                />
                {idx === 2 && (
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                  >
                    View All
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* ── Left Column (65%) ── */}
          <div className="w-full lg:w-[65%]">
            {/* Space Details */}
            <h2 className="mt-0 mb-4 font-heading text-2xl text-gray-dark">
              Space Details
            </h2>
            <div className="rounded-xl border border-gray-light bg-white p-6">
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                {specs.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between gap-4 px-2 py-3 ${
                      idx < specs.length - (specs.length % 2 === 0 ? 2 : 1)
                        ? 'border-b border-gray-light'
                        : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <spec.icon className="h-4 w-4 text-green-mid" />
                      <span className="text-sm text-gray-mid">{spec.label}</span>
                    </div>
                    {spec.badge ? (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${spec.badge}`}
                      >
                        {spec.value}
                      </span>
                    ) : (
                      <span
                        className={`text-base font-semibold ${spec.valueColor ?? 'text-gray-dark'}`}
                      >
                        {spec.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* About Office Space */}
            <h2 className="mt-8 mb-4 font-heading text-2xl text-gray-dark">
              About Office Space
            </h2>
            <p className="text-base leading-relaxed text-gray-mid">
              {space.description}
            </p>

            {/* Price Details */}
            <h2 className="mt-8 mb-4 font-heading text-xl text-gray-dark">
              Price Details
            </h2>
            <div className="rounded-lg bg-gray-pale p-4">
              {priceBreakdown.map((row, idx) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between py-3 ${
                    idx < priceBreakdown.length - 1 ? 'border-b border-gray-light' : ''
                  }`}
                >
                  <span className="text-sm text-gray-mid">{row.label}</span>
                  <span className="font-semibold text-gray-dark">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Office Timing */}
            <h2 className="mt-8 mb-4 font-heading text-xl text-gray-dark">
              Office Timing
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {officeTiming.map((slot) => (
                <div
                  key={slot.day}
                  className="flex flex-col items-center gap-2 rounded-lg bg-gray-pale p-4 text-center"
                >
                  <Clock className="h-4 w-4 text-green-mid" />
                  <span className="text-sm text-gray-mid">{slot.day}</span>
                  <span className="text-sm font-semibold text-gray-dark">
                    {slot.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <h2 className="mt-8 mb-4 font-heading text-2xl text-gray-dark">
              Amenities
            </h2>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
              {amenitiesList.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2"
                >
                  <Icon className="h-6 w-6 text-green-mid" />
                  <span className="text-center text-sm font-medium text-gray-dark">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Location */}
            <h2 className="mt-8 mb-4 font-heading text-2xl text-gray-dark">
              Location
            </h2>
            <div className="mb-4 flex items-start gap-2 rounded-xl bg-gray-pale p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green-mid" />
              <div>
                <span className="font-medium text-gray-dark">{space.location}</span>
                <p className="mt-0.5 text-sm text-gray-mid">
                  {formatCityLabel(space.city)}
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl">
              <iframe
                title={`Map — ${space.title}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(space.location)}&output=embed`}
                width="100%"
                height="400"
                className="rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://maps.google.com/maps?q=${encodeURIComponent(space.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-primary transition-colors hover:text-green-deep hover:underline"
            >
              <MapPin className="h-3.5 w-3.5" />
              Open in Google Maps
            </a>
          </div>

          {/* ── Right Sidebar (35%) ── */}
          <aside className="w-full lg:w-[35%]">
            <div className="sticky top-20 rounded-2xl border border-gray-light bg-white p-6">
              <h3 className="font-heading text-lg text-gray-dark">
                Interested in this Property?
              </h3>
              <p className="mt-1 text-sm text-gray-mid">
                Please leave us a message
              </p>

              <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark placeholder:text-gray-mid focus:border-green-primary focus:outline-none"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark placeholder:text-gray-mid focus:border-green-primary focus:outline-none"
                />

                {/* Phone */}
                <div className="flex gap-2">
                  <span className="flex items-center rounded-lg border border-gray-light bg-gray-pale px-3 py-2.5 text-sm text-gray-dark">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark placeholder:text-gray-mid focus:border-green-primary focus:outline-none"
                  />
                </div>

                {/* Company Name */}
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark placeholder:text-gray-mid focus:border-green-primary focus:outline-none"
                />

                {/* Space Requirement */}
                <select
                  name="spaceReq"
                  value={formData.spaceReq}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark focus:border-green-primary focus:outline-none"
                >
                  <option value="100 - 500 sqft">100 – 500 sqft</option>
                  <option value="500 - 1000 sqft">500 – 1,000 sqft</option>
                  <option value="1000 - 2000 sqft">1,000 – 2,000 sqft</option>
                  <option value="2000+ sqft">2,000+ sqft</option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark placeholder:text-gray-mid focus:border-green-primary focus:outline-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-4 cursor-pointer rounded-lg bg-green-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-green-deep"
                >
                  Enquiry Now
                </button>
              </form>

              {/* Footer note */}
              <div className="mt-4 flex items-start gap-2 text-xs text-gray-mid">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green-mid" />
                <div>
                  <p>Connect with our real estate experts</p>
                  <a
                    href="mailto:hello@echospaces.com"
                    className="font-medium text-green-primary transition-colors hover:text-green-deep"
                  >
                    hello@echospaces.com
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
