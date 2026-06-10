"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Target,
} from "lucide-react";

const reasons = [
  {
    title: "Confidential Process",
    description:
      "Every engagement is handled with discretion, professionalism, and a strong commitment to client privacy.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Specialists",
    description:
      "Our team combines investigative expertise, analytical thinking, and modern technology to deliver reliable solutions.",
    icon: Users,
  },
  {
    title: "Actionable Results",
    description:
      "We focus on providing meaningful insights and practical outcomes that help clients move forward with confidence.",
    icon: Target,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Why Choose TruView
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Trusted By Individuals
            <span className="text-teal-400"> & Organizations</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            We combine expertise, discretion, and modern
            investigative methodologies to help clients
            gain clarity, reduce uncertainty, and make
            informed decisions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
             <motion.div
  key={reason.title}
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
    {reason.title}
  </h3>

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
    {reason.description}
  </p>

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