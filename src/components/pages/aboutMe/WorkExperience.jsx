import { motion } from "framer-motion";
import { popIn, fadeUp, staggerContainer } from "../../../utils/animations";
import SectionEyebrow from "../../SectionEyebrow";
import Tag from "./Tag";
import { WORK_EXPERIENCE } from "./aboutMeData";
import { useTranslation } from "react-i18next";

function WorkExperience() {
  const { t } = useTranslation();
  return (
    <section id="work-experience" className="max-w-[860px] mx-auto px-10 py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={fadeUp}>
          <SectionEyebrow>{t("aboutMe.workExperience")}</SectionEyebrow>
        </motion.div>
        <div className="grid grid-cols-1 gap-4">
          {WORK_EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.id}
              variants={popIn}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white border dark:bg-[#1A1814] border-[#D9D4C9] rounded-[14px] p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-[16px] font-medium text-[#1A1814] dark:text-[#F7F5F0]">
                    {job.role}
                  </h3>
                  <p className="text-[14px] text-[#2D5BE3] font-medium">
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 shrink-0">
                  <span className="text-[12px] text-[#7A7468] ">
                    {job.period}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-[2px] rounded-full bg-[#EDEAE3] text-[#7A7468] border border-[#D9D4C9] w-fit">
                    {job.type}
                  </span>
                </div>
              </div>
              <p className="text-[13px] text-[#7A7468] leading-[1.7] mb-4">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default WorkExperience;
