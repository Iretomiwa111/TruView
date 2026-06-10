"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-28 text-white">

        <div className="absolute inset-0 overflow-hidden">
  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

  <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
</div>

      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-widest text-teal-400">
              About TruView
            </span>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Insight Backed By
              <span className="text-teal-400"> Experience</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              TruView delivers professional investigative,
              intelligence, and recovery services designed to
              help individuals and organizations make informed
              decisions with confidence.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Our approach combines discretion, accuracy,
              and proven methodologies to uncover critical
              information and provide meaningful solutions.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-xl font-semibold">
                Strategic Intelligence
              </h3>

              <p className="mt-4 text-slate-400">
                Turning complex information into actionable
                insights that support smarter decisions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-xl font-semibold">
                Recovery Solutions
              </h3>

              <p className="mt-4 text-slate-400">
                Helping clients regain control through
                advanced recovery and investigative processes.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="text-xl font-semibold">
                Trusted Partnership
              </h3>

              <p className="mt-4 text-slate-400">
                Every engagement is handled with
                professionalism, confidentiality,
                and attention to detail.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}