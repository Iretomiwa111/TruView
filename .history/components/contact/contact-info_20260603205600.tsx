"use client";

import {
  Mail,
  Phone,
  MessageCircle,
  Send,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "contact@truview.com",
    href: "mailto:contact@truview.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+1 (000) 000-0000",
    href: "tel:+10000000000",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "Chat With Us",
    href: "#",
    icon: MessageCircle,
  },
  {
    title: "Telegram",
    value: "@truview",
    href: "#",
    icon: Send,
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-teal-500/50"
              >
                <Icon
                  size={40}
                  className="mb-6 text-teal-400"
                />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {item.value}
                </p>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}