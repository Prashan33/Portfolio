"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // visible from the start so the navbar shows in the hero section
  const [visible, setVisible] = useState(true);
  // portal target is only available on the client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current !== "number") return;
    const direction = current - (scrollYProgress.getPrevious() ?? 0);

    if (current < 0.05) {
      // at the top of the page -> always show
      setVisible(true);
    } else {
      // reveal on scroll up, hide on scroll down
      setVisible(direction < 0);
    }
  });

  const nav = (
    <div
      className={cn(
        // change rounded-full to rounded-lg
        // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
        // change  pr-2 pl-8 py-2 to px-10 py-5
        "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[9999] inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
        className
      )}
      style={{
        // The hero heading is animated by framer-motion, which promotes it to its
        // own GPU compositing layer. If the navbar is NOT also on a GPU layer, Chrome
        // paints the text layer over it even though z-index says otherwise (visible
        // bleed-through; hit-testing still reports the navbar on top). Forcing the
        // navbar onto its own layer makes z-index ordering hold between the two.
        // We animate `top` (layout), not a transform, so translateZ(0) stays put.
        transform: "translateZ(0)",
        willChange: "transform",
        isolation: "isolate",
        top: visible ? "2.5rem" : "-6rem",
        opacity: visible ? 1 : 0,
        transition: "top 0.2s ease, opacity 0.2s ease",
        backgroundColor: "rgb(11, 15, 25)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          onClick={(e) => {
            if (navItem.link.startsWith("#")) {
              e.preventDefault();
              const target = document.querySelector(navItem.link);
              if (target) {
                const top =
                  target.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }
          }}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="text-sm !cursor-pointer">{navItem.name}</span>
        </a>
      ))}
    </div>
  );

  if (!mounted) return null;
  return createPortal(nav, document.body);
};
