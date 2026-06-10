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
c