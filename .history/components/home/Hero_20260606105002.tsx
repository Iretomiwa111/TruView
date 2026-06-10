"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}

      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[120px]" />
        <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* Spotlight */}
      <div
        className="
    absolute
    left-1/2
    top-0
    h-[600px]
    w-[600px]
    -translate-x-1/2
    bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,transparent_70%)]
  "
      />

      <div
        className="
    absolute inset-0
    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
    linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
    bg-[size:60px_60px]
  "
      />

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
                <TypeAnimation
                  sequence={[
                    "Know The Truth.",
                    2000,
                    "Recover Assets.",
                    2000,
                    "Protect Identities.",
                    2000,
                    "Find Answers.",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
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
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="relative h-[520px] w-[520px]">
               
               

              <div className="relative h-[520px] w-[520px]">

                {/* Main Glow */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-transparent blur-3xl" />

                {/* Dashboard */}
                <div className="absolute inset-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        TruView Intelligence
                      </p>

                      <h3 className="text-2xl font-bold">
                        Operations Center
                      </h3>
                    </div>

                    <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">
                        Cases Reviewed
                      </p>

                      <h4 className="mt-2 text-3xl font-bold">
                        132K+
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">
                        Success Rate
                      </p>

                      <h4 className="mt-2 text-3xl font-bold text-teal-400">
                        99%
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">
                        Recovery Cases
                      </p>

                      <h4 className="mt-2 text-3xl font-bold">
                        8.7K
                      </h4>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">
                        Active Monitoring
                      </p>

                      <h4 className="mt-2 text-3xl font-bold">
                        24/7
                      </h4>
                    </div>

                  </div>

                  {/* Progress */}
                  <div className="mt-8">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-slate-400">
                        Risk Analysis
                      </span>

                      <span className="text-teal-400">
                        94%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[94%] rounded-full bg-teal-400" />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}