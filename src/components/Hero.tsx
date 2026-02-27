"use client";

import { motion } from "framer-motion";

// PLACEHOLDER — swap booking link if it changes
const BOOKING_URL =
  "https://booksy.com/en-us/1575071_raww-fadez_barber-shop_38720_virginia-beach";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background — place hero.mp4 in /public/videos/ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/gallery-3.jpg"
      >
        {/* PLACEHOLDER — swap with your video file */}
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Grain Texture */}
      <div className="grain-overlay absolute inset-0 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-red text-sm sm:text-base font-bold uppercase tracking-[0.3em] mb-4"
        >
          Virginia Beach&apos;s Finest
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight mb-6"
        >
          Elite Cuts
          <span className="block text-brand-red">Only</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto mb-8"
        >
          Walk in looking good. Walk out knowing you look better than everybody.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded w-full sm:w-auto text-center"
          >
            Book Your Cut
          </a>
          <a
            href="#gallery"
            className="border border-white/30 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-all duration-200 rounded w-full sm:w-auto text-center"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-white/50 text-sm tracking-wide"
        >
          ★★★★★ 5.0 on Booksy — 111 five-star reviews — Private suite
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-brand-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
