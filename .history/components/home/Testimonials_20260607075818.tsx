"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Business Consultant",
    quote:
      "TruView provided the clarity and professional guidance I needed during a difficult situation. Their communication and attention to detail were exceptional.",
  },
  {
    name: "Michael Carter",
    role: "Entrepreneur",
    quote:
      "The team was responsive, discreet, and highly professional throughout the process. I felt informed and supported every step of the way.",
  },
  {
    name: "Jennifer Adams",
    role: "Private Client",
    quote:
      "Working with TruView gave me confidence during a stressful period. Their expertise helped me make informed decisions with peace of mind.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-teal-400">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What Our
            <span className="text-teal-400"> Clients Say</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Trusted by individuals and organizations seeking
            professional intelligence, recovery, and investigative
            solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              <Quote
                size={32}
                className="mb-6 text-teal-400"
              />

              <p className="leading-8 text-slate-300">
                "{testimonial.quote}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}