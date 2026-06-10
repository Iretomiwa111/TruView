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
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10">
                  <Icon
                    size={28}
                    className="text-teal-400"
                  />
                </div>

                <h3 className="text-2xl font-bold">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}