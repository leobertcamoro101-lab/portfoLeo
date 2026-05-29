import { useEffect } from "react";

function Modal({ isOpen, onClose, title, children, footer }) {

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* ── Overlay ── */}
      <div
        className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* ── Modal box ── */}
      <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
        <div
          className="relative w-full max-w-[700px] bg-[#F7F5F0] dark:bg-[#1A1814] border border-[#D9D4C9] dark:border-[#2A2520] rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] animate-[popIn_0.3s_ease_both]"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >

          {/* ── Header ── */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9D4C9] dark:border-[#2A2520]">
            <h2 className="font-serif text-[18px] tracking-[-0.01em] text-[#1A1814] dark:text-[#F7F5F0]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#7A7468] hover:bg-[#EDEAE3] dark:hover:bg-[#2A2520] hover:text-[#1A1814] dark:hover:text-[#F7F5F0] transition-all duration-150"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* ── Body / children ── */}
          <div className="px-6 py-5 text-[14px] text-[#7A7468] dark:text-[#A09890] leading-[1.75] max-h-[60vh] overflow-y-auto">
            {children}
          </div>

          {/* ── Footer (optional) ── */}
          {footer && (
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#D9D4C9] dark:border-[#2A2520]">
              {footer}
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Modal;