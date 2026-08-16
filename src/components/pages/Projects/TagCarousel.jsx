import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function TagCarousel({ tags = [] }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check scroll position
  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, [tags]);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -120 : 120,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex items-center gap-1">
      {/* ── Left arrow ── */}
      <motion.button
        onClick={() => scroll("left")}
        animate={{
          opacity: canScrollLeft ? 1 : 0,
          scale: canScrollLeft ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
        disabled={!canScrollLeft}
        className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#EDEAE3] dark:bg-[#2A2520] text-[#7A7468] dark:text-[#A09890] hover:bg-[#D9D4C9] dark:hover:bg-[#3A3530] transition-colors duration-150 disabled:pointer-events-none"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </motion.button>

      {/* ── Tag track ── */}
      <div className="relative flex-1 overflow-hidden">
        {/* Left fade */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white dark:from-[#232018] to-transparent z-10 pointer-events-none transition-opacity duration-200 ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
        />

        {/* Scrollable tags */}
        <div
          ref={trackRef}
          className="flex gap-1.5 overflow-x-auto scrollbar-hide"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 text-[11px] font-medium px-2.5 py-[3px] rounded-full bg-[#EDEAE3] dark:bg-[#2A2520] text-[#7A7468] dark:text-[#A09890] border border-[#D9D4C9] dark:border-[#2A2520]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Right fade */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white dark:from-[#232018] to-transparent z-10 pointer-events-none transition-opacity duration-200 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {/* ── Right arrow ── */}
      <motion.button
        onClick={() => scroll("right")}
        animate={{
          opacity: canScrollRight ? 1 : 0,
          scale: canScrollRight ? 1 : 0.8,
        }}
        transition={{ duration: 0.15 }}
        disabled={!canScrollRight}
        className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#EDEAE3] dark:bg-[#2A2520] text-[#7A7468] dark:text-[#A09890] hover:bg-[#D9D4C9] dark:hover:bg-[#3A3530] transition-colors duration-150 disabled:pointer-events-none"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </motion.button>
    </div>
  );
}

export default TagCarousel;
