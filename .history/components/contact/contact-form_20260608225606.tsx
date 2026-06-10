"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center">

          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Let's Discuss
            <span className="text-teal-400">
              Your Situation
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Every inquiry is handled with professionalism,
            discretion, and attention to detail.
          </p>

          <div className="mt-8 space-y-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🔒 Confidential Communication
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              ⚡ Fast Response Times
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🌍 Global Support
            </div>

          </div>

        </div>

        {/* Form */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />

          <form className="relative space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

           <input
  type="tel"
  placeholder="Phone Number"
  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
/>

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

            <button
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-teal-500
              px-8
              py-4
              font-semibold
              text-slate-950
              transition
              hover:bg-teal-400
              "
            >
              Send Message
              <Send size={18} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}