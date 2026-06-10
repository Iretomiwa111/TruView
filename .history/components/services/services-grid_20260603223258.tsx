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
    title: "Digital Intelligence",
    description:
      "Strategic intelligence gathering and investigative research designed to uncover critical information and support informed decision-making.",
    icon: Search,
  },
  {
    title: "Data Recovery",
    description:
      "Recover valuable digital assets, important records, and sensitive information through reliable recovery solutions.",
    icon: Database,
  },
  {
    title: "Asset Recovery Support",
    description:
      "Professional assistance in identifying, tracing, and documenting digital assets to support recovery efforts.",
    icon: Wallet,
  },
  {
    title: "Financial Intelligence",
    description:
      "Insight-driven analysis and intelligence services that help clients evaluate risks and opportunities with confidence.",
    icon: Shield,
  },
  {
    title: "Background Verification",
    description:
      "Comprehensive verification and due diligence services for individuals, organizations, and business engagements.",
    icon: FileSearch,
  },
  {
    title: "Identity Protection",
    description:
      "Proactive solutions designed to strengthen privacy, protect personal information, and reduce digital exposure.",
    icon: Fingerprint,
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
         <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
  Professional Services
</span>

<h2 className="mt-4 text-4xl font-bold md:text-5xl">
  Solutions Built Around
  <span className="text-teal-400"> Trust & Clarity</span>
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
  TruView delivers specialized investigative,
  intelligence, recovery, and verification services
  tailored to the challenges faced by individuals,
  families, and organizations in today's digital world.
</p>
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