"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-32 text-white">

      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[120px]" />

        <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      <div
        className="
  absolute
  left-1/2
  top-0
  h-[600px]
  w-[600px]
  -translate-x-1/2
  bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,transparent_70%)]
  "
      />


      <div className="mx-auto max-w-5xl text-center">
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="
  mx-auto
  mb-6
  flex
  w-fit
  items-center
  gap-2
  rounded-full
  border
  border-teal-500/30
  bg-white/5
  px-4
  py-2
  backdrop-blur-md
  "
>
  <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />

  <span className="text-sm font-medium text-teal-300">
    Confidential Consultation
  </span>
</motion.div>

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="mt-6 text-5xl font-bold md:text-7xl"
>
  Let's Start The
  <br />

  <span className="text-teal-400">
    Conversation
  </span>
</motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
          Reach out to our team for guidance, support,
          and professional consultation.
        </p>
      </div>
    </section>
  );
}