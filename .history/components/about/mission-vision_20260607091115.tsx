"use client";

import { Eye, Target } from "lucide-react";
imm

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        <div className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
p-10
backdrop-blur-md
transition-all
duration-500
hover:-translate-y-3
hover:border-teal-500/40
">
         <motion.div
  whileHover={{
    rotate: 10,
    scale: 1.1,
  }}
>
  <Target
    className="mb-6 text-teal-400"
    size={40}
  />
</motion.div>

          <h3 className="text-3xl font-bold">
            Our Mission
          </h3>

          <p className="mt-6 text-slate-400 leading-8">
            To provide trusted investigative,
            intelligence, and recovery solutions
            that help clients make informed decisions
            while maintaining the highest standards
            of confidentiality and professionalism.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <Eye className="mb-6 text-teal-400" size={40} />

          <h3 className="text-3xl font-bold">
            Our Vision
          </h3>

          <p className="mt-6 text-slate-400 leading-8">
            To become a globally recognized leader
            in intelligence and investigative services,
            known for innovation, trust, and measurable
            results.
          </p>
        </div>

      </div>
    </section>
  );
}