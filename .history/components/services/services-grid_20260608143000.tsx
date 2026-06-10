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

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 text-4xl font-bold md:text-5xl"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              className="inline-block"
            >
              Solutions Built Around
            </motion.span>

            {" "}

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                  },
                },
              }}
              className="inline-block text-teal-400"
            >
              Trust & Clarity
            </motion.span>
          </motion.h2>

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
               <motion.div
  whileHover={{
    scale: 1.08,
    rotate: 4,
  }}
>
  <Icon
    size={40}
    className="mb-6 text-teal-400"
  />
</motion.div>
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