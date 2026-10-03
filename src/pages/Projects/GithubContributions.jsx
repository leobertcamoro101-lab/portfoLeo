import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PRStatusBadge from "./PRStatusBadge";

function GitHubContributions({ role, pullRequests = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-dashed border-[#D9D4C9] dark:border-[#2A2520] rounded-xl overflow-hidden">

      {/* ── Role + toggle button ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#F7F5F0] dark:hover:bg-[#2A2520] transition-colors duration-150"
      >
        <div className="flex items-center gap-2">
          {/* GitHub icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#1A1814] dark:text-[#F7F5F0]">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <div className="text-left">
            <p className="text-[12px] font-medium text-[#1A1814] dark:text-[#F7F5F0]">
              {role}
            </p>
            <p className="text-[11px] text-[#7A7468] dark:text-[#A09890]">
              {pullRequests.length} contribution{pullRequests.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#7A7468] dark:text-[#A09890]"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </motion.span>
      </button>

      {/* ── Pull requests accordion ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-dashed border-[#D9D4C9] dark:border-[#2A2520] px-4 py-3 flex flex-col gap-2">
              {pullRequests.map((pr, i) => (
                <motion.a
                  key={pr.id}
                  href={pr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-lg hover:bg-[#F7F5F0] dark:hover:bg-[#2A2520] transition-colors duration-150 no-underline group"
                >
                  {/* PR title */}
                  <div className="flex items-center gap-2 min-w-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7A7468] shrink-0">
                      <circle cx="18" cy="18" r="3"/>
                      <circle cx="6" cy="6" r="3"/>
                      <path d="M13 6h3a2 2 0 0 1 2 2v7"/>
                      <line x1="6" y1="9" x2="6" y2="21"/>
                    </svg>
                    <span className="text-[12px] text-[#1A1814] dark:text-[#F7F5F0] truncate group-hover:text-[#2D5BE3] transition-colors duration-150">
                      {pr.title}
                    </span>
                  </div>

                  {/* Status + external link */}
                  <div className="flex items-center gap-2 shrink-0">
                    <PRStatusBadge status={pr.status} />
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7A7468]">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GitHubContributions;