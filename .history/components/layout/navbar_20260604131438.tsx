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
                            className="
    w-full
    border-l border-white/10
    bg-slate-950/60
    backdrop-blur-3xl
    text-white
    p-0
  "
                        >
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
                                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                            </div>

                            <div className="relative z-10 flex h-full flex-col px-8">

                                {/* Logo */}
                                <div className="border-b border-white/10 py-8">
                                    <Logo />

                                    <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                                        Trusted intelligence, recovery, and investigative
                                        solutions.
                                    </p>
                                </div>

                                {/* Navigation */}
                                <div className="flex flex-1 flex-col justify-center gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="
            text-3xl
            font-semibold
            text-slate-200
            transition-all
            duration-300
            hover:translate-x-2
            hover:text-teal-400
          "
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Bottom */}
                                <div className="border-t border-white/10 py-8">

                                    <div className="mb-6 flex items-center gap-6 text-sm text-slate-400">
                                        <a href="tel:+1234567890">Call</a>
                                        <a href="mailto:support@truview.com">Email</a>
                                        <a href="https://wa.me/1234567890">WhatsApp</a>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="
          block
          rounded-2xl
          bg-teal-500
          py-4
          text-center
          font-semibold
          text-slate-950
          transition
          hover:bg-teal-400
        "
                                    >
                                        Get Started
                                    </Link>

                                    <p className="mt-4 text-center text-xs text-slate-500">
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