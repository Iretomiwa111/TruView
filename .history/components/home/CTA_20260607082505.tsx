"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CommunityCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl md:p-20"
        >
          {/* Glow Effects */}
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />

          <div className="relative z-10">
            <span className="text-sm font-medium uppercase tracking-widest text-teal-400">
              Ready To Get Started?
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Take The Next Step
              <br />
              With Confidence
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you're seeking clarity, professional
              guidance, or expert support, TruView is here
              to help you move forward with confidence.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-400"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-8 py-4 font-semibold transition hover:border-teal-500 hover:text-teal-400"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}