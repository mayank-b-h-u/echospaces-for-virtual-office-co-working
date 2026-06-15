'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, Globe } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
}

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    display: 'sales@echospaces.in',
    href: 'mailto:sales@echospaces.in',
  },
  {
    icon: Globe,
    label: 'Website',
    display: 'www.echospaces.in',
    href: 'https://www.echospaces.in',
  },
]

export default function GetInTouch() {
  return (
    <section className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 240, damping: 24 }}
        className="mx-auto max-w-5xl"
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-[28px] border border-[#DAF966]/20 bg-[#092317] p-8 shadow-[0_32px_80px_rgba(218,249,102,0.08)] md:p-10">

          {/* Top accent bar */}
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#DAF966] via-[#1B6543] to-[#DAF966]/30" />

          {/* Corner glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#DAF966]/5 blur-3xl" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="mb-3 font-['Anton'] text-3xl uppercase tracking-wide text-[#FDFEFB] md:text-4xl"
            >
              Get in{' '}
              <span className="text-[#DAF966]">Touch</span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              variants={itemVariants}
              className="mb-8 max-w-3xl text-sm leading-relaxed text-[#B8CFC5]"
            >
              Join us at EchoSpaces and experience the future of work with our
              innovative virtual office services.
            </motion.p>

            {/* Contact Items */}
            <div className="grid gap-4 md:grid-cols-2">
              {contacts.map(({ icon: Icon, label, display, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 rounded-[16px] border border-[#1B6543]/40 bg-[#1B6543]/10 px-5 py-4 transition-colors hover:border-[#DAF966]/40 hover:bg-[#DAF966]/5"
                >
                  {/* Icon bubble */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-[#DAF966]/20 bg-[#DAF966]/10 transition-colors group-hover:bg-[#DAF966]/20">
                    <Icon className="h-5 w-5 text-[#DAF966]" />
                  </div>

                  <div>
                    <p className="font-['Anton'] text-xs uppercase tracking-widest text-[#B8CFC5]">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-[#FDFEFB] transition-colors group-hover:text-[#DAF966]">
                      {display}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}