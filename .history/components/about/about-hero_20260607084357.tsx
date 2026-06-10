"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
   <section className="relative overflow-hidden bg-slate-950 px-6 py-32 text-white">

      {/* Aurora Background */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[120px]" />

  <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
</div>

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