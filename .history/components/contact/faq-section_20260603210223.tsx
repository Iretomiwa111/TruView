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

                <Accordion type="single" collapsible className="space-y-4">

                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            How quickly can I get a response?
                        </AccordionTrigger>
                        <AccordionContent>
                            Most inquiries receive a response within 24 hours.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Is my information kept confidential?
                        </AccordionTrigger>
                        <AccordionContent>
                            Absolutely. Every consultation and engagement is handled with discretion and privacy.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            How can I recover lost data?
                        </AccordionTrigger>
                        <AccordionContent>
                            We assist clients in recovering valuable digital information through proven recovery methodologies.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            What should I do if funds have been lost?
                        </AccordionTrigger>
                        <AccordionContent>
                            Contact our team as soon as possible so we can assess the situation and discuss available options.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Do you offer consultations?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. Initial consultations help us understand your needs and recommend the most appropriate path forward.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Can you assist with account access issues?
                        </AccordionTrigger>
                        <AccordionContent>
                            We provide guidance and support for various account recovery and access-related situations.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
}