"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="bg-slate-950 px-6 py-28 text-white">
      <div className="mx-auto max-w-4xl">

        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How quickly can I get a response?
            </AccordionTrigger>

            <AccordionContent>
              Most inquiries receive a response within
              24 hours.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is my information confidential?
            </AccordionTrigger>

            <AccordionContent>
              Yes. Privacy and discretion are central
              to our process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer consultations?
            </AccordionTrigger>

            <AccordionContent>
              Yes. Initial consultations help us
              understand your needs and determine
              the best course of action.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}