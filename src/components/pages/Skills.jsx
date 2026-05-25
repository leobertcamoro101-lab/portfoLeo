import SectionEyebrow from '../SectionEyebrow';
import { SKILLS } from '../data'
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className=" max-w-[860px] mx-auto px-10 py-14 ">
      <SectionEyebrow>{t("skills.title")}</SectionEyebrow>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="bg-white dark:bg-[#232018] border border-[#D9D4C9] rounded-[10px] p-5"
          >
            <h4 className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#7A7468] mb-3">
              {group.category}
            </h4>
            <ul className="list-none">
              {group.items.map((item, i) => (
                <li
                  key={item}
                  className={`text-sm text-[#1A1814] dark:text-[#A09890] py-1 ${
                    i < group.items.length - 1 ? "border-b border-[#D9D4C9]" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
// max-w-[860px]
// max-w-215