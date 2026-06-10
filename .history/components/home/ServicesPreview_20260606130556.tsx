"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Database,
  Wallet,
  Fingerprint,
  ScanSearch,
  Shield,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Digital Investigations",
    description:
      "Professional investigative services designed to uncover facts and provide clarity.",
    icon: Search,
  },
  {
    title: "Data Recovery",
    description:
      "Recover valuable information from devices, storage systems, and digital platforms.",
    icon: Database,
  },
  {
    title: "Asset Recovery",
    description:
      "Assistance with tracing and recovering lost or inaccessible digital assets.",
    icon: Wallet,
  },
  {
    title: "Financial Intelligence",
    description:
      "Insight-driven analysis to help identify financial patterns and risks.",
    icon: Fingerprint,
  },
  {
    title: "Cyber Forensics",
    description:
      "Advanced examination of digital evidence to support informed decisions.",
    icon: ScanSearch,
  },
  {
    title: "Identity Protection",
    description:
      "Strategies and solutions focused on protecting personal and digital identities.",
    icon: Shield,
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">

      {/* Background Aurora */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-teal-400">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Solutions Built For
            <span className="text-teal-400"> Clarity & Results</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Discover professional intelligence, investigation,
            and recovery services tailored to help you make
            informed decisions with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
p-8
backdrop-blur-md
transition-all
duration-500
hover:-translate-y-3
hover:border-teal-500/40
"
              >

                <div
  className="
  absolute
  -right-20
  -top-20
  h-40
  w-40
  rounded-full
  bg-teal-500/10
  blur-3xl
  opacity-0
  transition-opacity
  duration-500
  group-hover:opacity-100
  "
/>

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-teal-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}