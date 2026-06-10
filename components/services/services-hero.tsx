"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
   <section className="relative overflow-hidden bg-slate-950 px-6 py-32 text-white">

      {/* Aurora Background */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[120px]" />

  <div className="absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
</div>

{/* Spotlight */}
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

{/* Background Word */}
<div
  className="
  absolute
  left-1/2
  top-1/2
  -translate-x-1/2
  -translate-y-1/2
  text-[140px]
  font-black
  tracking-widest
  text-white/[0.03]
  pointer-events-none
  select-none
  whitespace-nowrap
  hidden
  lg:block
  "
>
  SERVICES
</div>


      <div className="relative mx-auto max-w-5xl text-center">
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
    Professional Intelligence Solutions
  </span>
</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-5xl font-bold md:text-7xl"
        >
          Professional Solutions
          <br />
          Built Around Trust
        </motion.h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
          TruView provides investigative, intelligence,
          recovery, and consulting services designed
          to deliver clarity, confidence, and results.
        </p>
      </div>
    </section>
  );
}