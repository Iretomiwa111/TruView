"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to send"
        );
      }

      toast.success(
        "Message sent successfully!"
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      toast.error(
        error.message || "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-900 px-6 py-28 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

        <div className="flex flex-col justify-center">

          <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Let's Discuss
            <span className="text-teal-400">
              {" "}Your Situation
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Every inquiry is handled with
            professionalism, discretion,
            and attention to detail.
          </p>
<div className="mt-8 space-y-5">

  <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]">
    🔒 Confidential Communication
  </div>

  <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]">
    ⚡ Fast Response Times
  </div>

  <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_0_30px_rgba(20,184,166,0.12)]">
    🌍 Global Support
  </div>

</div>
        </div>

        <div
          className="
  relative
  overflow-hidden
  rounded-[36px]
  border
  border-white/10
  bg-white/[0.03]
  p-10
  backdrop-blur-2xl
  shadow-[0_0_60px_rgba(20,184,166,0.08)]
  "
        >
          {/* Glow Effects */}
          <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-teal-500/10 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative mb-10">
            <span className="text-sm uppercase tracking-[0.3em] text-teal-400">
              Secure Contact Form
            </span>

            <h3 className="mt-3 text-3xl font-bold md:text-4xl">
              Request A Consultation
            </h3>

            <p className="mt-4 text-slate-400">
              Fill in your details and our team will
              get back to you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative space-y-8"
          >
            {/* Name */}
            <div>
              <label className="mb-3 block text-sm text-slate-400">
                Full Name
              </label>

              <input
                required
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="
        w-full
        border-b
        border-white/10
        bg-transparent
        pb-4
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-500
        focus:border-teal-400
        "
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-3 block text-sm text-slate-400">
                Email Address
              </label>

              <input
                required
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="
        w-full
        border-b
        border-white/10
        bg-transparent
        pb-4
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-500
        focus:border-teal-400
        "
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-3 block text-sm text-slate-400">
                Phone Number
              </label>

              <input
                required
                type="tel"
                placeholder="+1 234 567 890"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="
        w-full
        border-b
        border-white/10
        bg-transparent
        pb-4
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-500
        focus:border-teal-400
        "
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-3 block text-sm text-slate-400">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell us about your situation..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="
        w-full
        resize-none
        border-b
        border-white/10
        bg-transparent
        pb-4
        text-white
        outline-none
        transition-all
        duration-300
        placeholder:text-slate-500
        focus:border-teal-400
        "
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
      group
      relative
      inline-flex
      items-center
      gap-3
      overflow-hidden
      rounded-full
      bg-teal-500
      px-8
      py-4
      font-semibold
      text-slate-950
      transition-all
      duration-300
      hover:scale-[1.03]
      hover:bg-teal-400
      disabled:opacity-50
      "
            >
              {loading ? "Sending..." : "Send Message"}

              <Send
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}