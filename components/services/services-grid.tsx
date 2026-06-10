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
  hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]
  "
              >
                {/* Glow Orb */}
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

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotate: 3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
    relative
    z-10
    mb-6
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    bg-teal-500/10
    text-teal-400
    "
                >
                  <Icon size={28} />
                </motion.div>

                {/* Title */}
                <h3
                  className="
    relative
    z-10
    text-2xl
    font-bold
    transition-colors
    duration-300
    group-hover:text-teal-300
    "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
    relative
    z-10
    mt-4
    leading-7
    text-slate-400
    transition-colors
    duration-300
    group-hover:text-slate-300
    "
                >
                  {service.description}
                </p>

                {/* Bottom Line */}
                <div
                  className="
    mt-6
    h-[2px]
    w-0
    bg-teal-400
    transition-all
    duration-500
    group-hover:w-24
    "
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}