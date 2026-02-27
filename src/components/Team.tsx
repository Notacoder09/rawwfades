"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// PLACEHOLDER — swap booking link if it changes
const BOOKING_URL =
  "https://booksy.com/en-us/1575071_raww-fadez_barber-shop_38720_virginia-beach";

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Your Barber
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Meet Rah
          </h2>
        </motion.div>

        {/* Single barber — centered, prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Photo */}
          <div className="relative group mb-8">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-xl overflow-hidden">
              <Image
                src="/images/608311875_18100105672886694_2988304488248298115_n.jpg"
                alt="Rah the Barber"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Red overlay on hover */}
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/10 transition-all duration-300" />
            </div>
            {/* Decorative border */}
            <div className="absolute -inset-2 border border-brand-red/20 rounded-xl -z-10" />
          </div>

          {/* Info */}
          <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-white mb-1">
            Rah The Barber
          </h3>
          <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Owner / Head Barber
          </p>
          <p className="text-white/50 text-center max-w-md text-lg mb-6">
            5-star rated. Private suite. No rush, no shortcuts — just elite
            precision every time you sit in the chair.
          </p>

          {/* Trinidad flag accent */}
          <p className="text-white/40 text-sm mb-6 tracking-wide">
            🇹🇹 Trinidad-bred. VA Beach-based.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-red text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded"
            >
              Book with Rah
            </a>
            <a
              href="https://www.instagram.com/rawwfadez/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 text-white/70 px-6 py-4 text-sm font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-all duration-200 rounded"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @rawwfadez
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
