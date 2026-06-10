"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-slate-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-teal-400"
        >
          About TruView
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold md:text-7xl"
        >
          Intelligence Built
          <br />
          On Trust
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
          TruView provides professional intelligence,
          investigative support, digital recovery services,
          and strategic guidance designed to help clients
          make informed decisions with confidence.
        </p>
      </div>
    </section>
  );
}