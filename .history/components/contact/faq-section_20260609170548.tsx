"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-5"
                >
                    <AccordionItem
                        value="faq-1"
                        className="
  group
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-teal-500/40
  hover:bg-white/[0.06]
  "
                    >
                        <AccordionTrigger className="
  py-6
  text-left
  text-lg
  font-semibold
  transition-colors
  hover:text-teal-400
  " >
                            How quickly can I get a response?
                        </AccordionTrigger>
                        <AccordionContent className="
  pb-6
  text-slate-400
  leading-8
  " >
                            Most inquiries receive a response within 24 hours.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-2" className="
  group
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-teal-500/40
  hover:bg-white/[0.06]
  " >
                        <AccordionTrigger className="
  py-6
  text-left
  text-lg
  font-semibold
  transition-colors
  hover:text-teal-400
  " >
                            Is my information kept confidential?
                        </AccordionTrigger>
                        <AccordionContent className="
  pb-6
  text-slate-400
  leading-8
  " >
                            Absolutely. Every consultation and engagement is handled with discretion and privacy.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-3" className="
  group
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-teal-500/40
  hover:bg-white/[0.06]
  ">
                        <AccordionTrigger className="
  py-6
  text-left
  text-lg
  font-semibold
  transition-colors
  hover:text-teal-400
  " >
                            How can I recover lost data?
                        </AccordionTrigger>
                        <AccordionContent className="
  pb-6
  text-slate-400
  leading-8
  " >
                            We assist clients in recovering valuable digital information through proven recovery methodologies.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-4" className="
  group
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-teal-500/40
  hover:bg-white/[0.06]
  ">
                        <AccordionTrigger className="
  py-6
  text-left
  text-lg
  font-semibold
  transition-colors
  hover:text-teal-400
  ">
                            What should I do if funds have been lost?
                        </AccordionTrigger>
                        <AccordionContent className="
  pb-6
  text-slate-400
  leading-8
  " >
                            Contact our team as soon as possible so we can assess the situation and discuss available options.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-5" className="
  group
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-teal-500/40
  hover:bg-white/[0.06]
  ">
                        <AccordionTrigger  className="
  py-6
  text-left
  text-lg
  font-semibold
  transition-colors
  hover:text-teal-400
  ">
                            Do you offer consultations?
                        </AccordionTrigger>
                        <AccordionContent className="
  pb-6
  text-slate-400
  leading-8
  " >
                            Yes. Initial consultations help us understand your needs and recommend the most appropriate path forward.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="faq-6" className="
  group
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-6
  backdrop-blur-xl
  transition-all
  duration-500
  hover:border-teal-500/40
  hover:bg-white/[0.06]
  ">
                        <AccordionTrigger>
                            Can you assist with account access issues?
                        </AccordionTrigger>
                        <AccordionContent className="
  pb-6
  text-slate-400
  leading-8
  ">
                            We provide guidance and support for various account recovery and access-related situations.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
}