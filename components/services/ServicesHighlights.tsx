"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import {
  Search,
  Database,
  Wallet,
  Fingerprint,
  ScanSearch,
  Shield,
} from "lucide-react";

const items = [
  {
    quote:
      "Professional investigative services designed to uncover facts and provide clarity.",
    name: "Digital Investigations",
    title: "Intelligence Services",
    icon: Search,
  },
  {
    quote:
      "Recover valuable information from devices, storage systems, and digital platforms.",
    name: "Data Recovery",
    title: "Recovery Services",
    icon: Database,
  },
  {
    quote:
      "Assistance with tracing and recovering inaccessible digital assets.",
    name: "Asset Recovery",
    title: "Recovery Services",
    icon: Wallet,
  },
  {
    quote:
      "Insight-driven analysis to identify financial patterns and risks.",
    name: "Financial Intelligence",
    title: "Intelligence Services",
    icon: Fingerprint,
  },
  {
    quote:
      "Advanced examination of digital evidence to support informed decisions.",
    name: "Cyber Forensics",
    title: "Forensic Services",
    icon: ScanSearch,
  },
  {
    quote:
      "Protecting personal and digital identities against evolving threats.",
    name: "Identity Protection",
    title: "Protection Services",
    icon: Shield,
  },
];
export default function ServiceHighlights() {
  return (
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
     <div className="mb-16 text-center">
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

  {/* Divider */}
  <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-teal-400" />
{/* </div> */}
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
    </div>
    </section>
  );
}