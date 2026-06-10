"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
      icon: any;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 mx-auto w-full max-w-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          
      <li
  key={item.name}
  className="
  group
  relative
  w-[350px]
  md:w-[450px]
  shrink-0
  overflow-hidden
  rounded-3xl
  border
  border-white/10
  bg-white/[0.04]
  px-8
  py-8
  backdrop-blur-xl
  shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  transition-all
  duration-500
  hover:-translate-y-2
  hover:border-teal-500/40
  hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]
  "
>
  {/* Glow Orb */}
  <div
    className="
    absolute
    -right-20
    -top-20
    h-40
    w-40
    rounded-full
    bg-teal-500/10
    blur-3xl
    opacity-0
    transition-opacity
    duration-500
    group-hover:opacity-100
    "
  />
const Icon = item.icon;
  <blockquote className="relative z-10">

    <p className="leading-7 text-slate-300">
      {item.quote}
    </p>

    <div className="mt-8 h-px w-full bg-white/10" />

    <div className="mt-6">
      <h3 className="text-lg font-semibold text-white">
        {item.name}
      </h3>

      <p className="mt-1 text-sm text-teal-400">
        {item.title}
      </p>
    </div>

  </blockquote>
</li>
        ))}
      </ul>
    </div>
  );
};
