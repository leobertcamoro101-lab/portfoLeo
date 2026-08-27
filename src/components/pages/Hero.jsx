import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeUp,
  slideRight,
  popIn,
} from "../../utils/animations";
import Button from "../UI/Button";
import LinkButton from "../UI/LinkButton";
import TypewriterText from "../TypewriterText";
import ProfileImage from "../../assets/profile.jpg";
import { useTranslation } from "react-i18next";
import Avatar from "../UI/Avatar";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[860px] mx-auto px-5 sm:px-10 pt-28 pb-16 flex flex-col-reverse sm:grid sm:grid-cols-[1fr_auto] gap-8 items-start">
      {/* Left content */}
      <motion.div
        className="w-full sm:max-w-[540px]"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={popIn}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2A7A4B] bg-[#E4F2EB] border border-[#BBE3CE] rounded-full px-3 py-1 mb-6"
        >
          <span className="w-[7px] h-[7px] bg-[#2A7A4B] rounded-full inline-block" />
          {t("hero.badge")}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={popIn}
          className="font-serif text-[clamp(28px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-[#1A1814] dark:text-[#F7F5F0] mb-4"
        >
          {t("hero.title")}{" "}
          <em className="text-[#7A7468] dark:text-[#A09890] italic">
            Leobert Camoro
          </em>{" "}
          —
          <br />
          {t("hero.role")}
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className=" text-base text-[#7A7468] dark:text-[#A09890] leading-[1.75] mb-3"
        >
          {/* {t("hero.bio")} */}
          Learning and practicing through Udemy courses, AI assistance, and GitHub open‑source projects. I am honing my skills not just to become a ‘Vibe Coder,’ but to grow into a true developer.
        </motion.p>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-1.5 text-sm text-[#7A7468] dark:text-[#A09890] mb-8"
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
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {t("hero.location")}
        </motion.div>

        {/* Actions */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <Button href="#contact" variant="primary">
            {t("hero.getInTouch")}
          </Button>
          <Button href="#projects">{t("hero.viewWork")}</Button>
          <LinkButton to="/aboutMe">{t("nav.aboutMe")}</LinkButton>
        </motion.div>
      </motion.div>

      {/* Right column — Avatar + Typewriter */}
      <motion.div
        className="flex flex-col items-center gap-4 w-full sm:w-auto"
        variants={slideRight}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar — centered on mobile, normal on desktop */}

        <Avatar
          image={ProfileImage}
          alt="Leobert Camoro"
          size="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" // ← responsive!
          className="border-2 border-[#D9D4C9]"
        />

        {/* Typewriter — wraps on mobile, no overflow */}
        <div className="text-sm text-[#7A7468] dark:text-[#A09890] text-center max-w-[120px] sm:whitespace-nowrap sm:max-w-none break-words">
          <TypewriterText
            words={[
              "React",
              "Hook Form",
              "Redux",
              "Redux Toolkit",
              "React Router",
              "React Query",
              "Framer Motion",
              "React Icons",
              "Tailwind CSS",
              "Next.js",
              // "TypeScript",
            ]}
            speed={100}
            pause={1500}
          />
        </div>
      </motion.div>
    </div>
  );
}
export default Hero;
// #C4BFB6
