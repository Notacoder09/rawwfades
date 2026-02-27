"use client";

import { motion } from "framer-motion";

// PLACEHOLDER — swap booking link if it changes
const BOOKING_URL =
  "https://booksy.com/en-us/1575071_raww-fadez_barber-shop_38720_virginia-beach";

const services = [
  {
    name: "Raw Taper Fade",
    price: "$30+",
    duration: "30 min",
    description: "Comes with beard and mustache shape up",
    popular: true,
  },
  {
    name: "All Around Fade",
    price: "$30+",
    duration: "35 min",
    description: "Clean all-around fade tailored to your head shape",
    popular: true,
  },
  {
    name: "Premium Cut",
    price: "$45+",
    duration: "45 min",
    description: "The full experience — precision cut, hot towel, detail work",
    popular: false,
  },
  {
    name: "Line Up",
    price: "$25+",
    duration: "20 min",
    description: "Crisp edges and a sharp hairline",
    popular: true,
  },
  {
    name: "Kid's Haircut",
    price: "$25+",
    duration: "30 min",
    description: "Same precision, sized down",
    popular: false,
  },
  {
    name: "Eyebrow Shaping",
    price: "$5+",
    duration: "10 min",
    description: "Clean brows to complete the look",
    popular: false,
  },
  {
    name: "Mobile Cut",
    price: "$60",
    duration: "45 min",
    description: "Elite cuts brought to your door",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 bg-brand-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Services
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            What We Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-brand-gray-light border border-white/5 rounded-lg p-6 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Popular
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                  {service.name}
                </h3>
                <p className="text-white/50 text-sm mt-1">
                  {service.description}
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <span className="text-3xl font-black text-brand-red">
                    {service.price}
                  </span>
                  <span className="text-white/40 text-sm ml-2">
                    {service.duration}
                  </span>
                </div>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white/60 hover:text-brand-red uppercase tracking-wider transition-colors"
                >
                  Book →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
