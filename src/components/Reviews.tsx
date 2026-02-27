"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Took a chance and wasn't disappointed. A real barber with real passion, definitely will be back.",
    service: "Premium Cut",
    real: true,
  },
  {
    name: "Dre W.",
    rating: 5,
    text: "First time going and bro did exactly what I asked. No rush and great vibe too. I appreciate you Rah.",
    service: "Raw Taper Fade",
    real: true,
  },
  {
    name: "Chris B.",
    rating: 5,
    text: "Rah is an excellent and professional barber. I'm glad I booked and got my haircut today!",
    service: "All Around Fade",
    real: true,
  },
  {
    name: "Jay M.",
    rating: 5,
    text: "Clean cut, good customer service 💯",
    service: "Raw Taper Fade",
    real: true,
  },
  {
    name: "Devon R.",
    rating: 5,
    text: "10/10 Great Customer Service. This is my barber now, no question.",
    service: "Premium Cut",
    real: true,
  },
];
// Reviews above pulled from real Booksy reviews — names shortened for privacy

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(rating)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-brand-red"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Reviews
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Don&apos;t Take Our Word for It
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            5.0 ★ average from 111 reviews on Booksy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-brand-gray-light border border-white/5 rounded-lg p-6 hover:border-brand-red/20 transition-all duration-300 hover:-translate-y-1"
            >
              <StarRating rating={review.rating} />
              <p className="text-white/80 mt-4 mb-4 text-base leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">
                    {review.name}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-wider">
                    {review.service}
                  </p>
                </div>
                {/* Booksy verified badge */}
                <span className="text-brand-red text-xs font-bold uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://booksy.com/en-us/1575071_raww-fadez_barber-shop_38720_virginia-beach"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-brand-red transition-colors text-sm uppercase tracking-wider font-medium"
          >
            Leave us a review on Booksy →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
