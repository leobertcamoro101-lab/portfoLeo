import { Link } from "react-router-dom";
import ProfileImage from "../../../assets/profile.jpg";
import { useTranslation } from "react-i18next";
import Avatar from "../../UI/Avatar";

function ProfileHero() {
  const { t } = useTranslation();

  return (
    <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.05s] max-w-[860px] mx-auto px-10 pt-16 pb-12 ">
      <div className=" flex flex-col sm:flex-row items-center sm:items-start gap-8 p-12">
        {/* Avatar */}
        <Avatar
          image={ProfileImage}
          alt="Leobert Camoro"
          size="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]" // ← responsive!
          className="border-2 border-[#D9D4C9] shadow-md"
          // style={{ borderRadius: "12px" }} 
        />

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2A7A4B] bg-[#E4F2EB] border border-[#BBE3CE] rounded-full px-3 py-1 mb-3">
            <span className="w-[7px] h-[7px] bg-[#2A7A4B] rounded-full inline-block" />
            {t("aboutMe.badge")}
          </div>

          <h1 className="font-serif text-[36px] leading-[1.1] tracking-[-0.02em] text-[#1A1814] dark:text-[#F7F5F0] mb-2">
            Leobert Camoro
          </h1>

          <p className="text-[15px] text-[#2D5BE3] font-medium mb-3">
            {t("aboutMe.role")}
          </p>

          <p className="text-[15px] text-[#7A7468] leading-[1.75] max-w-[480px] mb-6">
            {/* {t("aboutMe.bio")} */}
            As a web developer, I started my journey HTML, CSS, JAVASCRIPT and Framework React back in College. After Graduated, I get my first Job as Software Engineer. I was introduced a Template Project to practice on a Frontend React and Backend Laravel(PHP Framework). I discovered the real world web developing that are many to choose from latest Framework Java Script and Libraries React among other Framework. 
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[#1A1814] dark:bg-[#F7F5F0] text-[#F7F5F0] dark:text-[#1A1814] hover:opacity-85 transition-all duration-150 no-underline"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t("aboutMe.downloadResume")}
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-[#F7F5F0] dark:bg-[#1A1814] dark:text-[#F7F5F0] text-[#1A1814] border border-[#D9D4C9] hover:bg-[#EDEAE3] dark:hover:bg-[#2C2A24] transition-all duration-150 no-underline"
            >
              {t("aboutMe.backPortfolio")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHero;