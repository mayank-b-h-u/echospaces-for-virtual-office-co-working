'use client'

import { motion } from 'framer-motion'
import { Mail, Globe } from 'lucide-react'

export default function GetInTouch() {
  return (
    <section className="w-full py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-5xl"
      >
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#EF9F27] bg-gradient-to-r from-[#041633] via-[#021A42] to-[#02122E] p-8 md:p-10">
          {/* Top Accent Line */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#EF9F27] to-[#49B5FF]" />

          <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
            Get in <span className="text-[#EF9F27]">Touch</span>
          </h2>

          <p className="mb-8 max-w-3xl text-gray-300">
            Join us at EchoSpaces and experience the future of work with our
            innovative virtual office services.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EF9F27]/30 bg-[#EF9F27]/10">
                <Mail className="h-6 w-6 text-[#EF9F27]" />
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>

                <a
                  href="mailto:sales@echospaces.in"
                  className="text-lg text-[#8AD8FF] transition hover:text-[#EF9F27]"
                >
                  sales@echospaces.in
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EF9F27]/30 bg-[#EF9F27]/10">
                <Globe className="h-6 w-6 text-[#EF9F27]" />
              </div>

              <div>
                <p className="font-semibold text-white">Website</p>

                <a
                  href="https://www.echospaces.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#8AD8FF] transition hover:text-[#EF9F27]"
                >
                  www.echospaces.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}