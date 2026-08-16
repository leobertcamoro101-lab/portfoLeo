import { useState } from "react";
import { motion } from "framer-motion";

import SectionEyebrow from "../SectionEyebrow";
import { PROJECTS } from "../data";
import ProjectCard from "./Projects/ProjectCard";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../AnimatedSection";
import { AnimatePresence } from "framer-motion";

const VISIBLE_COUNT = 2; // show 2 latest projects first

function Projects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const hiddenCount = PROJECTS.length - VISIBLE_COUNT;

  return (
    <section id="projects" className="max-w-[860px] mx-auto px-10 py-14 ">
      <AnimatedSection>
        <SectionEyebrow>{t("projects.title")}</SectionEyebrow>
      </AnimatedSection>

      {/* ── First 2 projects — always visible ── */}
      <div
        // className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4" // side by side
        className="flex flex-col gap-4 mb-4" // stack
      >
        {PROJECTS.slice(0, VISIBLE_COUNT).map((p, i) => (
          <AnimatedSection key={p.id} delay={i * 0.1}>
            <ProjectCard project={p} index={i} />
          </AnimatedSection>
        ))}
      </div>
      {/* ── Remaining projects — scrollable ── */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="max-h-[600px] overflow-y-auto pr-1 flex flex-col gap-4 mb-4"
              style={{
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {PROJECTS.slice(VISIBLE_COUNT).map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ── Show more / less button ── */}
      {hiddenCount > 0 && (
        <AnimatedSection delay={0.2}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#7A7468] dark:text-[#A09890] border border-dashed border-[#D9D4C9] dark:border-[#2A2520] rounded-xl hover:border-[#1A1814] dark:hover:border-[#F7F5F0] hover:text-[#1A1814] dark:hover:text-[#F7F5F0] transition-all duration-150"
          >
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
            {showAll
              ? "Show less"
              : `Show ${hiddenCount} more project${hiddenCount > 1 ? "s" : ""}`}
          </button>
        </AnimatedSection>
      )}
    </section>
  );
}

export default Projects;

// max-w-[860px]
// max-w-215
