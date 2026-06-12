"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
     className="fixed bottom-6 right-6 z-50 rounded-full bg-teal-500 p-3 text-white shadow-lg hover:bg-teal-600 transition-all duration-300 cursor-pointer"
      aria-label="Back to top"
    >
       <ChevronUp size={20} />
    </button>
  );
}