"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";

const stats = [
  {
    value: 12,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 130,
    suffix: "K+",
    label: "Clients Assisted",
  },
  {
    value: 9,
    suffix: "K+",
    label: "Cases Resolved",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function StatsSection() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-teal-400">
            Proven Results
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Trusted By Clients
            <span className="text-teal-400"> Worldwide</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Our commitment to professionalism, accuracy,
            and client success is reflected in the results
            we consistently deliver.
          </p>
        </div>

        <div
          ref={ref}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md"
            >
              <h3 className="text-5xl font-bold text-teal-400">
                {isInView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </h3>

              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}