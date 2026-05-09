import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

        .scroll-btn-wrapper {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          opacity: 0;
          transform: translateY(20px) scale(0.85);
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-family: 'DM Mono', monospace;
        }

        .scroll-btn-wrapper.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        .scroll-label {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #94a3b8;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.15);
          padding: 0.3rem 0.65rem;
          border-radius: 100px;
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateX(8px);
          transition: opacity 0.25s ease, transform 0.25s ease;
          white-space: nowrap;
        }

        .scroll-btn-wrapper:hover .scroll-label {
          opacity: 1;
          transform: translateX(0);
        }

        .scroll-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scroll-btn svg.progress-ring {
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(-90deg);
          pointer-events: none;
        }

        .btn-inner {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border: 1px solid rgba(148, 163, 184, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      box-shadow 0.3s ease,
                      border-color 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          position: relative;
          z-index: 1;
        }

        .scroll-btn:hover .btn-inner {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 8px 30px rgba(99, 102, 241, 0.35);
          border-color: rgba(99, 102, 241, 0.5);
        }

        .scroll-btn:active .btn-inner {
          transform: scale(0.95);
        }

        .arrow-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          transition: transform 0.3s ease;
        }

        .scroll-btn:hover .arrow-icon {
          transform: translateY(-2px);
        }

        .arrow-icon span {
          display: block;
          width: 1.5px;
          background: #e2e8f0;
          border-radius: 2px;
          transition: height 0.2s ease, background 0.2s ease;
        }

        .scroll-btn:hover .arrow-icon span {
          background: #a5b4fc;
        }

        .arrow-chevron {
          width: 10px;
          height: 10px;
          border-left: 1.5px solid #e2e8f0;
          border-top: 1.5px solid #e2e8f0;
          transform: rotate(45deg) translate(1px, 1px);
          transition: border-color 0.2s ease;
          border-radius: 1px;
        }

        .scroll-btn:hover .arrow-chevron {
          border-color: #a5b4fc;
        }
      `}</style>

      <div className={`scroll-btn-wrapper ${visible ? "visible" : ""}`}>
        <span className="scroll-label">Back to top</span>
        <button
          className="scroll-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg className="progress-ring" width="52" height="52">
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
              style={{ transition: "stroke-dashoffset 0.15s linear" }}
            />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="btn-inner">
            <div className="arrow-icon">
              <div className="arrow-chevron" />
              <span style={{ height: "8px" }} />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default ScrollToTopButton;
