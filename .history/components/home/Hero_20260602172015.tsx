"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.15),transparent_50%)]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm text-teal-400"
        >
          Trusted Intelligence & Recovery Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
        >
          See Clearly.
          <br />
          Know The Truth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-slate-300 md:text-xl"
        >
          Professional investigative, intelligence, and
          recovery solutions designed to provide clarity,
          confidence, and actionable results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-xl bg-teal-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            Get Started
          </Link>

          <Link
            href="/services"
            className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-teal-500 hover:text-teal-400"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}