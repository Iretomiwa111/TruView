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

        
      </div>
    </section>
  );
}