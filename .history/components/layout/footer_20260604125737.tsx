import Link from "next/link";
import Logo from "@/components/shared/logo";

import {
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

import {
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Digital Investigations",
  "Data Recovery",
  "Asset Recovery",
  "Financial Intelligence",
  "Cyber Forensics",
  "Identity Protection",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">

      {/* CTA STRIP */}

      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center lg:flex-row lg:text-left">

          <div>
            <h2 className="text-3xl font-bold">
              Need Clear Answers?
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Connect with our team to discuss your situation
              and discover the most effective path forward.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>

      {/* MAIN FOOTER */}

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* BRAND */}

          <div>
            <Logo />

            <p className="mt-6 leading-7 text-slate-400">
              Providing professional investigative,
              recovery, and intelligence services
              designed to help individuals and
              organizations make informed decisions
              with confidence.
            </p>
          </div>

          {/* LINKS */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Core Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-slate-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4">

              <a
                href="mailto:support@truview.com"
                className="flex items-center gap-3 text-slate-400 transition hover:text-teal-400"
              >
                <Mail size={18} />
                Email Support
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-slate-400 transition hover:text-teal-400"
              >
                <Phone size={18} />
                Call Our Team
              </a>

              <div className="flex gap-4 pt-4">

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-3
                  text-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-teal-400
                  hover:text-teal-400
                  "
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://t.me/truview"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  p-3
                  text-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-teal-400
                  hover:text-teal-400
                  "
                >
                  <FaTelegramPlane />
                </a>

              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TruView. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}