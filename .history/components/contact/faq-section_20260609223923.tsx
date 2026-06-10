"use client";
const [openIndex, setOpenIndex] = useState<number | null>(0);
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useState } from "react";

const faqs = [
  {
    question: "How quickly can I get a response?",
    answer: "Most inquiries receive a response within 24 hours.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. Every consultation and engagement is handled with discretion and privacy.",
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

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[150px]" />

                <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
            </div>

            <div className="mx-auto max-w-4xl">
                <div className="relative mb-20 text-center">

                    <span className="text-sm uppercase tracking-[0.35em] text-teal-400">
                        FAQ
                    </span>

                    <h2 className="mt-5 text-5xl font-bold md:text-7xl">
                        Frequently Asked
                        <span className="block text-teal-400">
                            Questions
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg text-slate-400">
                        Answers to common questions about our services,
                        consultations, confidentiality, and support process.
                    </p>

                </div>

                <div className="mb-8 flex justify-center">
                    <div
                        className="
    rounded-full
    border
    border-teal-500/20
    bg-teal-500/10
    px-5
    py-2
    text-sm
    text-teal-300
    backdrop-blur-xl
    "
                    >
                        💬 Still have questions? Contact our team anytime.
                    </div>
                </div>

              <div className="space-y-5">
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      layout
      transition={{
        layout: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className={`
      overflow-hidden
      rounded-3xl
      border
      backdrop-blur-xl
      transition-all
      duration-500

      ${
        openIndex === index
          ? "border-teal-500/40 bg-white/[0.06] shadow-[0_0_40px_rgba(20,184,166,0.15)]"
          : "border-white/10 bg-white/[0.04]"
      }
      `}
    >
      <button
        onClick={() =>
          setOpenIndex(
            openIndex === index ? null : index
          )
        }
        className="
        flex
        w-full
        items-center
        justify-between
        px-6
        py-6
        text-left
        text-lg
        font-semibold
        "
      >
        {faq.question}

        <motion.span
          animate={{
            rotate:
              openIndex === index ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="text-teal-400"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {openIndex === index && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-400 leading-8">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  ))}
</div>
            </div>
        </section>
    );
}