"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
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
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <Link
                    href="/"
                    className="font-heading text-2xl font-bold"
                >
                    TruView
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition hover:text-accent"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
                    >
                        Get Started
                    </Link>
                </nav>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent">
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>

                        <SheetContent side="right">
                            <div className="mt-10 flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <Link
                                    href="/contact"
                                    className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/80"
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