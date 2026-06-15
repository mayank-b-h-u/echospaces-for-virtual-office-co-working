'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
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
  Monitor,
  Accessibility,
  Clock,
  CheckCircle2,
  Mail,
  Home,
  ChevronRight,
  Calendar,
} from 'lucide-react'
import { getSpaceBySlug } from '@/lib/data/coworkingSpaces'
import type { CoworkingType } from '@/types/coworkingSpace'

/* ─── Icon Map ─── */
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
  Monitor,
  Accessibility,
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

/* ─── Amenities List ─── */
const amenitiesList = [
  { icon: UtensilsCrossed, label: 'Gourmet Pantry' },
  { icon: Wifi, label: 'High-speed WiFi' },
  { icon: Coffee, label: 'Coffee Bar' },
  { icon: Users, label: 'Community' },
  { icon: Zap, label: 'Power Backup' },
  { icon: Accessibility, label: 'Accessibility' },
  { icon: Monitor, label: 'High-speed Internet' },
  { icon: Car, label: 'Parking Available' },
  { icon: Building2, label: 'Professional Setup' },
]

/* ─── Why Choose Us Features ─── */
const whyChooseFeatures = [
  'Modern Fully Furnished Office',
  'Full Glass and Partial Partitions',
  'Dedicated Cabin and Shared Workspace',
  'Professional Meeting & Training Facilities',
]

/* ─── Office Timings ─── */
const officeTiming = [
  { day: 'Mon – Fri', time: '9 AM – 7 PM' },
  { day: 'Sat', time: '9 AM – 2 PM' },
  { day: 'Sun', time: 'Closed' },
]

/* ─── Page Component ─── */
export default function CoworkingDetailPage({
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
    propertyType: 'Coworking',
    seats: '1',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  const galleryImages = space.images.length >= 4 ? space.images : [
    space.image,
    space.image,
    space.image,
    space.image,
  ]

  return (
    <section className="min-h-screen bg-off-white">
      <div className="container-dishora py-6">
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 px-0 py-3 text-sm text-gray-mid"
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
            href="/coworking"
            className="transition-colors hover:text-green-primary"
          >
            Coworking
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
              {space.tag === 'popular' && (
                <span className="rounded-full bg-purple-500 px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              )}
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-green-primary">
                ₹{Math.round(space.pricePerSeat / 1000)}K
              </span>
              <span className="ml-1 text-base text-gray-mid">/ Seat</span>
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
          {/* Main image */}
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

          {/* Side images */}
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
            {/* Seating Plans */}
            <h2 className="mt-0 mb-4 font-heading text-2xl text-gray-dark">
              Seating Plans
            </h2>
            <div className="flex flex-col gap-4 rounded-xl border border-gray-light bg-white p-4 sm:flex-row sm:items-center">
              <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:w-32">
                <Image
                  src={space.image}
                  alt={`${space.title} seating`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-sm font-semibold uppercase text-green-primary">
                  {formatTypeLabel(space.type)}
                </span>
                <span className="text-sm text-gray-mid">
                  {space.seats} Seating available
                </span>
                <span className="text-lg font-bold text-green-primary">
                  ₹{Math.round(space.pricePerSeat / 1000)}K{' '}
                  <span className="text-sm font-normal text-gray-mid">/ Seat</span>
                </span>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-lg bg-green-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-green-deep"
              >
                Enquiry Now
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-mid">
              * Please download individual floor plan from site for exact details
            </p>

            {/* Why Choose Us */}
            <h2 className="mt-8 mb-6 font-heading text-2xl text-gray-dark">
              Why Book Workspace With EchoSpaces?
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChooseFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-mid" />
                  <span className="text-sm font-medium text-gray-dark">{feature}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-primary p-4 text-center text-sm font-semibold text-white transition-colors hover:bg-green-deep"
            >
              <Calendar className="h-4 w-4" />
              Schedule Tour
            </button>

            {/* About Workspace */}
            <h2 className="mt-8 mb-4 font-heading text-2xl text-gray-dark">
              About Workspace
            </h2>
            <p className="text-base leading-relaxed text-gray-mid">
              {space.description}
            </p>

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
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
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
            <div className="mb-4 flex items-center gap-2 rounded-xl bg-gray-pale p-4">
              <MapPin className="h-5 w-5 shrink-0 text-green-mid" />
              <span className="font-medium text-gray-dark">{space.location}</span>
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
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green-primary transition-colors hover:text-green-deep"
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
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark placeholder:text-gray-mid focus:border-green-primary focus:outline-none"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
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

                {/* Property Type */}
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark focus:border-green-primary focus:outline-none"
                >
                  <option value="Office">Office</option>
                  <option value="Coworking">Coworking</option>
                  <option value="Virtual Office">Virtual Office</option>
                </select>

                {/* Number of Seats */}
                <select
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="rounded-lg border border-gray-light px-4 py-2.5 text-sm text-gray-dark focus:border-green-primary focus:outline-none"
                >
                  <option value="1">1 Seat</option>
                  <option value="5">5 Seats</option>
                  <option value="10">10 Seats</option>
                  <option value="25">25 Seats</option>
                  <option value="50">50 Seats</option>
                  <option value="100+">100+ Seats</option>
                </select>

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
