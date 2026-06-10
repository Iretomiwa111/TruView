"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-slate-950 px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm uppercase tracking-[0.3em] text-teal-400"
        >
          Contact Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold md:text-7xl"
        >
          Let's Start The
          <br />
          Conversation
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
          Reach out to our team for guidance, support,
          and professional consultation.
        </p>
      </div>
    </section>
  );
}