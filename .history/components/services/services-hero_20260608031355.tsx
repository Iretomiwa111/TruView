"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
   <section className="relative overflow-hidden bg-slate-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-teal-400"
        >
          Our Services
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold md:text-7xl"
        >
          Professional Solutions
          <br />
          Built Around Trust
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
          TruView provides investigative, intelligence,
          recovery, and consulting services designed
          to deliver clarity, confidence, and results.
        </p>
      </div>
    </section>
  );
}