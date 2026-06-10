"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4c"
            alt="Investigation Team"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Delivering Clarity In Complex Situations
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Founded with a commitment to professionalism,
            discretion, and accuracy, TruView helps
            individuals and organizations navigate
            challenging situations through reliable
            investigative and intelligence services.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Our team combines experience, technology,
            and strategic analysis to provide actionable
            insights that empower clients to move forward
            with confidence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}