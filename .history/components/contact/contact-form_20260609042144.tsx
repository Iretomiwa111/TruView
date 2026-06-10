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

          <div className="mt-8 space-y-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🔒 Confidential Communication
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              ⚡ Fast Response Times
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🌍 Global Support
            </div>

          </div>

        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />

          <form
            onSubmit={handleSubmit}
            className="relative space-y-6"
          >

            <input
            required
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

            <input
            
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-teal-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-teal-500
              px-8
              py-4
              font-semibold
              text-slate-950
              transition
              hover:bg-teal-400
              disabled:opacity-50
              "
            >
              {loading
                ? "Sending..."
                : "Send Message"}

              <Send size={18} />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}