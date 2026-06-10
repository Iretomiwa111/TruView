"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const items = [
  {
    quote:
      "Professional investigative services designed to uncover facts and provide clarity.",
    name: "Digital Investigations",
    title: "Intelligence Services",
  },
  {
    quote:
      "Recover valuable information from devices, storage systems, and digital platforms.",
    name: "Data Recovery",
    title: "Recovery Services",
  },
  {
    quote:
      "Assistance with tracing and recovering inaccessible digital assets.",
    name: "Asset Recovery",
    title: "Recovery Services",
  },
  {
    quote:
      "Advanced examination of digital evidence and cyber activity.",
    name: "Cyber Forensics",
    title: "Forensic Services",
  },
  {
    quote:
      "Insight-driven analysis to identify financial patterns and risks.",
    name: "Financial Intelligence",
    title: "Intelligence Services",
  },
  {
    quote:
      "Protecting personal and digital identities against evolving threats.",
    name: "Identity Protection",
    title: "Protection Services",
  },
];

export default function ServiceHighlights() {
  return (
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Service Highlights
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Expertise Across Multiple
            <span className="text-teal-400"> Disciplines</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Explore the core services that help our clients
            uncover facts, recover assets, and move forward
            with confidence.
          </p>
        </div>
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
    </div>
    </section>
  );
}