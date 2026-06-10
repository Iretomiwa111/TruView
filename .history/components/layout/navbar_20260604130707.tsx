"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "@/components/shared/logo";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-teal-400"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-xl bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-teal-400"
          >
            Get Started
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </SheetTrigger>

<SheetContent
  side="right"
  className="w-[320px] border-l border-white/10 bg-slate-950 text-white"
>
  <div className="flex h-full flex-col">

    {/* Logo */}
    <div className="border-b border-white/10 pb-6 pt-8">
      <Logo />

      <p className="mt-4 text-sm leading-6 text-slate-400">
        Trusted intelligence, recovery,
        and investigative solutions.
      </p>
    </div>

    {/* Navigation */}
    <div className="flex flex-col gap-6 py-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-lg font-medium text-slate-300 transition hover:text-teal-400"
        >
          {link.name}
        </Link>
      ))}
    </div>

    {/* Quick Contact */}
    <div className="space-y-4 border-t border-white/10 py-8">

      <a
        href="tel:+1234567890"
        className="block text-slate-400 transition hover:text-teal-400"
      >
        📞 Call Us
      </a>

      <a
        href="mailto:support@truview.com"
        className="block text-slate-400 transition hover:text-teal-400"
      >
        ✉ Email Us
      </a>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        className="block text-slate-400 transition hover:text-teal-400"
      >
        💬 WhatsApp
      </a>

    </div>

    {/* CTA */}
    <div className="mt-auto">

      <Link
        href="/contact"
        className="block rounded-xl bg-teal-500 px-5 py-4 text-center font-semibold text-slate-950 transition hover:bg-teal-400"
      >
        Get Started
      </Link>

      <p className="mt-5 text-center text-xs text-slate-500">
        Available 24/7 • Secure • Confidential
      </p>

    </div>

  </div>
</SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}