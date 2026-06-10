"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Lo

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
              className="border-l border-white/10 bg-slate-950 text-white"
            >
              <div className="mt-14 flex flex-col gap-8">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-slate-300 transition hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-4 rounded-xl bg-teal-500 px-5 py-3 text-center font-semibold text-slate-950"
                >
                  Get Started
                </Link>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}