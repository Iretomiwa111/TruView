"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How quickly can I get a response?",
    answer:
      "Most inquiries receive a response within 24 hours.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Every consultation and engagement is handled with discretion and privacy.",
  },
  {
    question: "How can I recover lost data?",
    answer:
      "We assist clients in recovering valuable digital information through proven recovery methodologies.",
  },
  {
    question: "What should I do if funds have been lost?",
    answer:
      "Contact our team as soon as possible so we can assess the situation and discuss available options.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes. Initial consultations help us understand your needs and recommend the most appropriate path forward.",
  },
  {
    question: "Can you assist with account access issues?",
    answer:
      "We provide guidance and support for various account recovery and access-related situations.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-32 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-teal-400">
            Questions & Answers
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Common Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-teal-500/40
                hover:shadow-[0_0_50px_rgba(20,184,166,0.15)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.15),transparent_70%)]
                "
              />

              {/* Huge Q */}
              <span
                className="
                  absolute
                  -right-4
                  -top-10
                  text-[120px]
                  font-black
                  text-white/[0.03]
                  select-none
                "
              >
                Q
              </span>

              <div className="relative z-10">
                <div
                  className="
                    mb-5
                    inline-flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-teal-500/10
                    text-lg
                    font-bold
                    text-teal-400
                  "
                >
                  ?
                </div>

                <h3 className="text-xl font-bold leading-snug">
                  {faq.question}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}