import SectionEyebrow from "../../SectionEyebrow";
import { EDUCATION } from "./aboutMeData";

function Education() {
  return (
    <section className="max-w-[860px] mx-auto px-10 py-12">
      <SectionEyebrow>Educational Background</SectionEyebrow>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="bg-white border border-[#D9D4C9] rounded-[14px] p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)] hover:-translate-y-[2px] transition-all duration-200">
            <div className="w-10 h-10 rounded-[10px] bg-[#FEF3C7] flex items-center justify-center text-lg mb-4">🎓</div>
            <h3 className="text-[15px] font-medium text-[#1A1814] mb-1">{edu.degree}</h3>
            <p className="text-[13px] text-[#2D5BE3] font-medium mb-1">{edu.school}</p>
            <p className="text-[12px] text-[#7A7468] mb-3">{edu.period}</p>
            <p className="text-[13px] text-[#7A7468] leading-[1.65]">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;