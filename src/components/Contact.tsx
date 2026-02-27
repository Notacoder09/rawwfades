"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  phone: string;
  email: string;
  message: string;
}

const businessHours = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 7:00 PM" },
  { day: "Friday", hours: "9:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];
// PLACEHOLDER — swap hours with actual business hours

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Pull Up
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info + Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Address */}
            <div className="mb-8">
              <h3 className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Location
              </h3>
              <p className="text-white text-lg font-medium">
                3500 Virginia Beach Blvd
              </p>
              <p className="text-white/60">5th Floor</p>
              <p className="text-white/60">Virginia Beach, VA 23452</p>
              <p className="text-white/40 text-sm mt-1">Private Suite</p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Phone
              </h3>
              {/* PLACEHOLDER — swap with real phone number */}
              <a
                href="tel:+17575551234"
                className="text-white text-lg hover:text-brand-red transition-colors"
              >
                (757) 555-1234
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-3">
                Hours
              </h3>
              <div className="space-y-2">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between text-sm border-b border-white/5 pb-2"
                  >
                    <span className="text-white/60">{item.day}</span>
                    <span
                      className={
                        item.hours === "Closed"
                          ? "text-brand-red font-medium"
                          : "text-white"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://booksy.com/en-us/1575071_raww-fadez_barber-shop_38720_virginia-beach"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded text-center"
              >
                Book Online
              </a>
              {/* PLACEHOLDER — swap with real phone number */}
              <a
                href="tel:+17575551234"
                className="border border-white/20 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:border-brand-red hover:text-brand-red transition-all duration-200 rounded text-center"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="bg-brand-gray-light border border-brand-red/20 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="text-brand-red text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-black uppercase text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-white/60">
                  We&apos;ll get back to you soon. In the meantime, book your
                  cut online.
                </p>
                <a
                  href="https://booksy.com/en-us/1575071_raww-fadez_barber-shop_38720_virginia-beach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-brand-red text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded"
                >
                  Book Now
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-brand-gray-light border border-white/5 rounded-lg p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label className="block text-white/60 text-sm uppercase tracking-wider mb-2 font-medium">
                    First Name *
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "Name is required",
                    })}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Your name"
                  />
                  {errors.firstName && (
                    <p className="text-brand-red text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-sm uppercase tracking-wider mb-2 font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="(757) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-brand-red text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-sm uppercase tracking-wider mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-brand-red text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-white/60 text-sm uppercase tracking-wider mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="What do you need?"
                  />
                </div>

                {error && (
                  <p className="text-brand-red text-sm">
                    Something went wrong. Try again or book directly on Booksy.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red text-white py-4 text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all duration-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-lg overflow-hidden border border-white/5 h-[300px] sm:h-[400px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5!2d-76.1!3d36.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3YwMCBWaXJnaW5pYSBCZWFjaCBCbHZk!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RAWWFADEZ Location"
          />
          {/* PLACEHOLDER — swap iframe src with actual Google Maps embed URL for 3500 Virginia Beach Blvd, 5th floor, Virginia Beach, VA 23452 */}
        </motion.div>
      </div>
    </section>
  );
}
