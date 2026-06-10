import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const expertise = [
  "Digital Investigations",
  "Data Recovery",
  "Asset Recovery",
  "Financial Intelligence",
  "Cyber Forensics",
  "Identity Protection",
  "Device Analysis",
];

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-3xl font-bold">
              TruView
            </h3>

            <p className="leading-7 text-slate-400">
              Delivering trusted investigative insights,
              digital recovery solutions, and professional
              intelligence services designed to help clients
              move forward with clarity and confidence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Explore
            </h4>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-all duration-300 hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Our Expertise
            </h4>

            <ul className="space-y-3">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="text-slate-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Get In Touch
            </h4>

            <div className="space-y-4">
              
              <a
                href="mailto:support@truview.com"
                className="flex items-center gap-3 text-slate-400 transition hover:text-teal-400"
              >
                <Mail size={18} />
                support@truview.com
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-slate-400 transition hover:text-teal-400"
              >
                <Phone size={18} />
                +1 (234) 567-890
              </a>

              <div className="flex items-center gap-4 pt-2">
                
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-900 p-3 text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://t.me/truview"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-900 p-3 text-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-teal-500"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} TruView. All rights reserved.
        </div>
      </div>
    </footer>
  );
}