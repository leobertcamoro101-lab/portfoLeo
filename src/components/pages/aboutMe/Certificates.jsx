import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../../AnimatedSection";
import SectionEyebrow from "../../SectionEyebrow";
import CertCard from "./Certificates/CertCard";
import { CERTIFICATES } from "./aboutMeData";
import { useTranslation } from "react-i18next";

const VISIBLE_COUNT = 4;

function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const hasMore = CERTIFICATES.length > VISIBLE_COUNT;
  const hiddenCount = CERTIFICATES.length - VISIBLE_COUNT;
  return (
    <section id="certificates" className="max-w-[860px] mx-auto px-10 py-12">
     
        <AnimatedSection>
          <SectionEyebrow>{t("aboutMe.certificates")}</SectionEyebrow>
        </AnimatedSection>
        {/* ── First 4 certificates — always visible ── */}
      <div 
        // className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4" // side by side
        className="flex flex-col gap-4 mb-4" // stack
      >
        {CERTIFICATES.slice(0, VISIBLE_COUNT).map((cert, i) => (
          <CertCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
      {/* ── Remaining certificates — scrollable ── */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="max-h-[400px] overflow-y-auto pr-1 scrollbar-hide flex flex-col gap-4 mb-4">
              {CERTIFICATES.slice(VISIBLE_COUNT).map((cert, i) => (
                <CertCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* ── Show more / less button ── */}
      {hasMore && (
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
              : `Show ${hiddenCount} more certificate${hiddenCount > 1 ? "s" : ""}`
            }
          </button>
        </AnimatedSection>
      )}
    </section>
  );
}

export default Certificates;