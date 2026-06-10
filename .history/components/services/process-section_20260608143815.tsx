"use client";

import { motion } from "framer-motion";

const process = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin by understanding your situation, objectives, and requirements.",
  },
  {
    step: "02",
    title: "Assessment",
    description:
      "Our specialists evaluate available information and identify the best approach.",
  },
  {
    step: "03",
    title: "Investigation",
    description:
      "Using proven methodologies and technology, we gather actionable insights.",
  },
  {
    step: "04",
    title: "Resolution",
    description:
      "Findings are delivered clearly, helping you move forward with confidence.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-32 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-24 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            How We Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            A structured process designed to deliver clarity,
            transparency, and reliable outcomes.
          </p>
        </div>

        <div className="relative">

          {/* Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-16">

            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
                  relative grid items-center gap-8 lg:grid-cols-2
                  ${index % 2 === 1 ? "lg:text-right" : ""}
                `}
              >
                {/* Content */}
                <div
                  className={
                    index % 2 === 1
                      ? "lg:order-2"
                      : ""
                  }
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-teal-500/40">

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

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Number */}
                <div
                  className={`
                    relative flex justify-center
                    ${index % 2 === 1 ? "lg:order-1" : ""}
                  `}
                >
                  <div
                    className="
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-teal-500/30
                    bg-slate-900
                    text-4xl
                    font-bold
                    text-teal-400
                    shadow-[0_0_40px_rgba(20,184,166,0.25)]
                    "
                  >
                    {item.step}
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}