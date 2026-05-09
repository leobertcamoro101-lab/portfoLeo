import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Only keeping CSS that Tailwind cannot do */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

        .scroll-btn-wrapper { font-family: 'DM Mono', monospace; }

        /* cubic-bezier spring — not possible in Tailwind */
        .scroll-visible {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
          pointer-events: all !important;
        }

        /* SVG ring transition — not possible in Tailwind */
        .progress-circle {
          transition: stroke-dashoffset 0.15s linear;
        }

        /* Hover label slide-in */
        .scroll-btn-wrapper:hover .scroll-label {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }

        /* Hover arrow color */
        .scroll-btn:hover .arrow-chevron {
          border-color: #a5b4fc !important;
        }
        .scroll-btn:hover .arrow-line {
          background: #a5b4fc !important;
        }

        /* Hover btn inner spring scale */
        .scroll-btn:hover .btn-inner {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.35);
          border-color: rgba(99, 102, 241, 0.5);
        }
        .scroll-btn:active .btn-inner {
          transform: scale(0.95);
        }
        .scroll-btn:hover .arrow-icon {
          transform: translateY(-2px);
        }
      `}</style>

      {/* Wrapper */}
      <div
        className={`scroll-btn-wrapper fixed bottom-8 right-8 z-[9999] flex items-center gap-2.5 pointer-events-none transition-all duration-400 ${
          visible
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto scroll-visible"
            : "opacity-0 translate-y-5 scale-[0.85]"
        }`}
        style={{
          transition:
            "opacity 0.4s cubic-bezier(0.34,1.56,0.64,1), transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {/* Label */}
        <span className="scroll-label text-[0.65rem] tracking-[0.12em] uppercase text-slate-400 bg-[rgba(15,23,42,0.75)] border border-[rgba(148,163,184,0.15)] px-[0.65rem] py-[0.3rem] rounded-full backdrop-blur-sm opacity-0 translate-x-2 transition-all duration-200 whitespace-nowrap">
          Back to top
        </span>

        {/* Button */}
        <button
          className="scroll-btn relative w-[52px] h-[52px] border-none bg-transparent cursor-pointer p-0 flex items-center justify-center"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          {/* SVG Progress Ring */}
          <svg
            className="absolute top-0 left-0 -rotate-90 pointer-events-none"
            width="52"
            height="52"
          >
            {/* Track */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              stroke="rgba(99,102,241,0.12)"
              strokeWidth="2"
            />
            {/* Progress */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              fill="none"
              stroke="url(#grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="progress-circle"
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner circle button */}
          <div
            className="btn-inner relative z-10 w-[42px] h-[42px] rounded-full flex items-center justify-center border border-[rgba(148,163,184,0.2)] shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            }}
          >
            {/* Arrow icon */}
            <div className="arrow-icon flex flex-col items-center gap-[2px] transition-transform duration-300">
              <div
                className="arrow-chevron w-[10px] h-[10px] border-l-[1.5px] border-t-[1.5px] border-slate-200 rounded-[1px] transition-colors duration-200"
                style={{ transform: "rotate(45deg) translate(1px, 1px)" }}
              />
              <span
                className="arrow-line block w-[1.5px] bg-slate-200 rounded-[2px] transition-all duration-200"
                style={{ height: "8px" }}
              />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;
