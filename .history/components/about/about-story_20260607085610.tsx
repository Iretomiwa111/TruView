"use client";

import { motion } from "framer-motion";

export default function AboutStory() {
  return (
   <section className="relative overflow-hidden bg-slate-900 px-6 py-28 text-white">

    {/* Aurora Background */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

  <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
</div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80"
            alt="About TruView"
           className="
h-full
w-full
object-cover
transition-transform
duration-700
group-hover:scale-110
"


          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Delivering Clarity In Complex Situations
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Founded with a commitment to professionalism,
            discretion, and accuracy, TruView helps
            individuals and organizations navigate
            challenging situations through reliable
            investigative and intelligence services.
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            Our team combines experience, technology,
            and strategic analysis to provide actionable
            insights that empower clients to move forward
            with confidence.
          </p>
        </motion.div>

      </div>
    </section>
  );
}