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
    mx-auto w-full max-w-none
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
    </section>
  );
}