"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.15),transparent_50%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex w-fit items-center gap-2 rounded-full border border-teal-500/30 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />

              <span className="text-sm font-medium text-teal-300">
                Verified Intelligence • Trusted Results
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-5xl font-bold leading-tight md:text-7xl"
            >
              See Clearly.
              <br />
              <span className="text-teal-400">
                Know The Truth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            >
              Professional investigative, intelligence,
              and recovery solutions designed to provide
              clarity, confidence, and actionable results.
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

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative h-[520px] w-[520px]">

              {/* Glow Layer */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent blur-3xl" />

              {/* Main Glass Panel */}
              <div className="absolute inset-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl" />

              {/* Floating Glow 1 */}
              <div className="absolute top-12 left-12 h-32 w-32 rounded-full bg-teal-500/20 blur-3xl" />

              {/* Floating Glow 2 */}
              <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />

              {/* Floating Card */}
              <div className="absolute top-20 right-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-sm text-slate-300">
                  Intelligence Analysis
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  99% Accuracy
                </h3>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-20 left-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-sm text-slate-300">
                  Cases Reviewed
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  132K+
                </h3>
              </div>

              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-3xl border border-white/10 bg-slate-900/50 px-10 py-8 backdrop-blur-xl">
                  <h3 className="text-center text-2xl font-bold">
                    TruView
                  </h3>
                  <p className="mt-2 text-center text-slate-400">
                    Intelligence • Recovery • Clarity
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}