import SectionEyebrow from "../../SectionEyebrow";
import Tag from "./Tag";
import { WORK_EXPERIENCE } from "./aboutMeData";

function WorkExperience() {
  return (
    <section className="max-w-[860px] mx-auto px-10 py-12">
      <SectionEyebrow>Work Experience</SectionEyebrow>
      <div className="grid grid-cols-1 gap-4">
        {WORK_EXPERIENCE.map((job) => (
          <div key={job.id} className="bg-white border border-[#D9D4C9] rounded-[14px] p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-[16px] font-medium text-[#1A1814]">{job.role}</h3>
                <p className="text-[14px] text-[#2D5BE3] font-medium">{job.company}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 shrink-0">
                <span className="text-[12px] text-[#7A7468]">{job.period}</span>
                <span className="text-[11px] font-medium px-2.5 py-[2px] rounded-full bg-[#EDEAE3] text-[#7A7468] border border-[#D9D4C9] w-fit">{job.type}</span>
              </div>
            </div>
            <p className="text-[13px] text-[#7A7468] leading-[1.7] mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {job.tags.map((tag) => <Tag key={tag} label={tag} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WorkExperience;