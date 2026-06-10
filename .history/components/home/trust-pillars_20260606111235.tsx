"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Confidential Support",
    description:
      "Every case is handled with strict privacy, discretion, and professional care.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Receive timely assistance and efficient solutions when every moment matters.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Expertise",
    description:
      "Work with experienced specialists focused on delivering reliable results.",
  },
];

export default function TrustPillars() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[120px]" />
      </div>
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-teal-400">
            Why Choose TruView
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Built On Trust,
            <span className="text-teal-400"> Precision</span>,
            And Results
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            We combine investigative intelligence, recovery expertise,
            and client-focused support to help uncover facts and
            provide clarity when it matters most.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {pillar.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}