"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Tracks the vertical scroll position
      setScreenSize(window.screen.height);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleScrollToTop}
      className="fixed z-50 h-[67px] w-[67px] right-2 lg:right-20 bottom-10 rounded-full bg-white drop-shadow-lg flex justify-center items-center"
    >
      <svg
        className={cn(
          screenSize < scrollPosition
            ? "rotate-180 -translate-y-0.5"
            : "translate-y-0.5",
          "transition-all duration-300"
        )}
        width="30"
        height="18"
        viewBox="0 0 30 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.7667 0.29977C26.1334 0.29977 25.5 0.533104 25 1.0331L15 11.0331L5.00003 1.0331C4.03337 0.0664387 2.43337 0.0664387 1.4667 1.0331C0.500033 1.99977 0.500033 3.59977 1.4667 4.56644L13.2334 16.3331C14.2 17.2998 15.8 17.2998 16.7667 16.3331L28.5334 4.56644C29.5 3.59977 29.5 1.99977 28.5334 1.0331C28.0334 0.533104 27.4 0.29977 26.7667 0.29977Z"
          fill="black"
        />
      </svg>
    </button>
  );
}
