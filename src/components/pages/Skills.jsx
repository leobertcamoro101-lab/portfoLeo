import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../../utils/animations.js";
import AnimatedSection from "../AnimatedSection.jsx";
import SectionEyebrow from "../SectionEyebrow";
import { SKILLS } from "../data";
import { useTranslation } from "react-i18next";

function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  return (
    <section id="skills" className=" max-w-[860px] mx-auto px-10 py-14 ">
      <AnimatedSection variants={fadeUp}>
        <SectionEyebrow>{t("skills.title")}</SectionEyebrow>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        {/* ── Tab buttons — horizontally scrollable ── */}
        <div className="relative mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 ">
            {SKILLS.map((group, i) => (
              <button
                key={group.category}
                onClick={() => setActiveTab(i)}
                // className={`relative shrink-0 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-150 ${
                //   activeTab === i
                //     ? "text-[#F7F5F0] dark:text-[#1A1814]"
                //     : "text-[#7A7468] dark:text-[#A09890] hover:text-[#1A1814] dark:hover:text-[#F7F5F0] hover:bg-[#EDEAE3] dark:hover:bg-[#2A2520]"
                // }`}
                className={`relative shrink-0 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150 ${
                  activeTab === i
                    ? "text-[#F7F5F0] dark:text-[#1A1814] bg-[#1A1814] dark:bg-[#F7F5F0]"
                    : "text-[#7A7468] dark:text-[#A09890] hover:text-[#1A1814] dark:hover:text-[#F7F5F0] hover:bg-[#EDEAE3] dark:hover:bg-[#2A2520]"
                }`}
              >
                {/* Active tab background */}
                {/* {activeTab === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#1A1814] dark:bg-[#F7F5F0] rounded-lg z-[-1]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )} */}
                {group.icon && <span className="mr-1.5">{group.icon}</span>}
                {group.category}
              </button>
            ))}
          </div>
          {/* Bottom border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D9D4C9] dark:bg-[#2A2520]" />
        </div>
        {/* ── Tab content — scrollable ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-[#232018] border border-[#D9D4C9] dark:border-[#2A2520] rounded-2xl p-6 max-h-[320px] overflow-y-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SKILLS[activeTab].items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[#F7F5F0] dark:hover:bg-[#2A2520] transition-colors duration-150"
                >
                  {/* <span className="w-2 h-2 rounded-full bg-[#2D5BE3] shrink-0" /> */}
                  <span className="text-sm text-[#1A1814] dark:text-[#F7F5F0] font-medium">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </AnimatedSection>
    </section>
  );
}

export default Skills;
// max-w-[860px]
// max-w-215
