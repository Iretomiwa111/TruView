"use client";

import { motion } from "framer-motion";
import {
  Search,
  Database,
  Shield,
  Wallet,
  FileSearch,
  Fingerprint,
} from "lucide-react";

const services = [
  {
    title: "Digital Investigations",
    description:
      "Professional investigative solutions designed to uncover critical information.",
    icon: Search,
  },
  {
    title: "Data Recovery",
    description:
      "Recover valuable digital information and restore access to important records.",
    icon: Database,
  },
  {
    title: "Asset Recovery",
    description:
      "Strategic support for identifying and recovering lost or inaccessible assets.",
    icon: Wallet,
  },
  {
    title: "Financial Intelligence",
    description:
      "Detailed analysis and intelligence services to support informed decisions.",
    icon: Shield,
  },
  {
    title: "Background Research",
    description:
      "Comprehensive research services that provide reliable and actionable insights.",
    icon: FileSearch,
  },
  {
    title: "Identity Protection",
    description:
      "Solutions designed to help protect personal and professional identities.",
    icon: Fingerprint,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            What We Offer
          </h2>
        </div>

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
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <Icon
                  size={40}
                  className="mb-6 text-teal-400"
                />

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}