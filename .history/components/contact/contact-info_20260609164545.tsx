"use client";

import {
  Mail,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

const contacts = [
  {
    title: "Email",
    value: "Fathercyberagents@gmail.com",
    href: "mailto:Fathercyberagents@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+1 (813) 338-3062",
    href: "tel:+18133383062",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "+1 812 910 9796",
    href: "https://wa.me/18129109796",
    icon: MessageCircle,
  },

];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-28 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Contact Channels
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Reach Us
            <span className="text-teal-400">
              {" "}Anytime
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Choose the communication method that works best
            for you. Our team is available to assist with
            inquiries, consultations, and support.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
  key={item.title}
  href={item.href}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: contacts.indexOf(item) * 0.15,
  }}
  className="
  group
  relative
  overflow-hidden
  rounded-[32px]
  border
  border-white/10
  bg-gradient-to-b
  from-white/[0.08]
  to-white/[0.03]
  p-8
  backdrop-blur-xl
  transition-all
  duration-500
  hover:-translate-y-4
  hover:border-teal-500/40
  hover:shadow-[0_0_60px_rgba(20,184,166,0.18)]
  "
>
  {/* Glow Orb */}
  <div
    className="
    absolute
    -right-24
    -top-24
    h-52
    w-52
    rounded-full
    bg-teal-500/15
    blur-3xl
    opacity-0
    transition-all
    duration-700
    group-hover:opacity-100
    group-hover:scale-125
    "
  />

  {/* Shine Effect */}
  <div
    className="
    absolute
    inset-0
    translate-x-[-120%]
    bg-gradient-to-r
    from-transparent
    via-white/10
    to-transparent
    transition-transform
    duration-1000
    group-hover:translate-x-[120%]
    "
  />

  {/* Top Accent Line */}
  <div
    className="
    absolute
    top-0
    left-0
    h-[2px]
    w-0
    bg-teal-400
    transition-all
    duration-500
    group-hover:w-full
    "
  />

  <div className="relative z-10">

    <motion.div
      whileHover={{
        rotate: 6,
        scale: 1.12,
      }}
      className="
      mb-6
      flex
      h-16
      w-16
      items-center
      justify-center
      rounded-2xl
      bg-teal-500/10
      text-teal-400
      "
    >
      <Icon size={30} />
    </motion.div>

    <h3
      className="
      text-2xl
      font-bold
      transition-colors
      duration-300
      group-hover:text-teal-300
      "
    >
      {item.title}
    </h3>

    <p className="mt-3 text-slate-400">
      {item.value}
    </p>

    <div
      className="
      mt-6
      flex
      items-center
      gap-2
      text-sm
      font-medium
      text-teal-400
      opacity-0
      transition-all
      duration-300
      translate-y-3
      group-hover:translate-y-0
      group-hover:opacity-100
      "
    >
      Contact Now
      <span>→</span>
    </div>

  </div>
</motion.a>


            );
          })}
        </div>
      </div>
    </section>
  );
}