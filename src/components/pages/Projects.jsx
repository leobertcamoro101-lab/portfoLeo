import { motion } from "framer-motion";
import { fadeUp, popIn, staggerContainer } from "../../utils/animations";
import SectionEyebrow from "../SectionEyebrow";
import { PROJECTS } from "../data";
import ProjectCard from "../ProjectCard";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../AnimatedSection";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="max-w-[860px] mx-auto px-10 py-14 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp}>
          <SectionEyebrow>{t("projects.title")}</SectionEyebrow>
        </motion.div>
        <div 
        // className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4" // side by side
        className="flex flex-col gap-4" // stack
        >
          {PROJECTS.map((p, i) => (
            <AnimatedSection variants={popIn} delay={0.2} key={p.id}>
              <ProjectCard key={p.id} project={p} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;

// max-w-[860px]
// max-w-215
