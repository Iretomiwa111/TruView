"use client";
import { motion, AnimatePresence } from "framer-motion";
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

    const [openIndex, setOpenIndex] = useState<number | null>(0);
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

                    <h2 className="mt-5 text-4xl font-bold md:text-6xl">
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


                {/* Animated Glow */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
  absolute
  left-1/2
  top-[380px]
  h-[350px]
  w-[350px]
  -translate-x-1/2
  rounded-full
  bg-teal-500/10
  blur-[140px]
  pointer-events-none
  "
                />

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    className="space-y-5"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            layout
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 25,
                                },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            whileHover={{
                                y: -5,
                                scale: 1.01,
                            }}
                            transition={{
                                layout: {
                                    duration: 0.25,
                                },
                            }}
                            className={`
      relative
      overflow-hidden
      rounded-3xl
      border
      backdrop-blur-xl
      transition-all
      duration-300

      ${openIndex === index
                                    ? "border-teal-500/40 bg-white/[0.06] shadow-[0_0_50px_rgba(20,184,166,0.15)]"
                                    : "border-white/10 bg-white/[0.04]"
                                }
      `}
                        >
                            {/* Hover Glow */}
                            <div
                                className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.15),transparent_60%)]
        "
                            />

                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="
        relative
        z-10
        flex
        w-full
        items-center
        justify-between
        px-8
        py-7
        text-left
        text-lg
        font-semibold
        transition-colors
        hover:text-teal-400
        "
                            >
                                {faq.question}

                                <motion.span
                                    animate={{
                                        rotate: openIndex === index ? 45 : 0,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="
          text-3xl
          font-light
          text-teal-400
          "
                                >
                                    +
                                </motion.span>
                            </button>

                            <AnimatePresence initial={false}>
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
                                            duration: 0.22,
                                            ease: "easeOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-8 pb-8 text-slate-400 leading-8">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}