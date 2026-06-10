"use client";

import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <Target className="mb-6 text-teal-400" size={40} />

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