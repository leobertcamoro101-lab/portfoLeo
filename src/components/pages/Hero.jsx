// import { Link } from "react-router-dom";
import Button from "../UI/Button";
import LinkButton from "../UI/LinkButton";
import TypewriterText from "../TypewriterText";
import ProfileImage from "../../assets/profile.jpg";

function Hero() {
  return (
    <div className="max-w-[860px] mx-auto px-5 sm:px-10 pt-28 pb-16 flex flex-col-reverse sm:grid sm:grid-cols-[1fr_auto] gap-8 items-start">
      
      {/* Left content */}
      <div className="w-full sm:max-w-[540px]">
        {/* Badge */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.05s] inline-flex items-center gap-1.5 text-xs font-medium text-[#2A7A4B] bg-[#E4F2EB] border border-[#BBE3CE] rounded-full px-3 py-1 mb-6">
          <span className="w-[7px] h-[7px] bg-[#2A7A4B] rounded-full inline-block" />
          Open to work
        </div>

        {/* Heading */}
        <h1 className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.12s] font-serif text-[clamp(28px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-[#1A1814] mb-4">
          Hi, I'm <em className="text-[#7A7468] italic">Leobert Camoro</em> —
          <br />a React.js developer.
        </h1>

        {/* Bio */}
        <p className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.19s] text-base text-[#7A7468] leading-[1.75] mb-3">
          I'm an AI‑assisted, beginner developer who crafts, accessible, and
          visually refined web experiences. With a deep commitment to clean code
          and intuitive UI, I focus on building solutions that genuinely make
          people's lives easier.
        </p>

        {/* Location */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.24s] flex items-center gap-1.5 text-sm text-[#7A7468] mb-8">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Cebu City, Philippines
        </div>

        {/* Actions */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.30s] flex flex-wrap gap-3">
          <Button href="#contact" variant="primary">Get in touch ↗</Button>
          <Button href="#projects">View my work</Button>
          <LinkButton to="/aboutMe">AboutMe</LinkButton>
        </div>
      </div>

      {/* Right column — Avatar + Typewriter */}
      <div className="flex flex-col items-center gap-4 w-full sm:w-auto">
        {/* Avatar — centered on mobile, normal on desktop */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.1s] w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full bg-[#E8EDFB] border-2 border-[#D9D4C9] overflow-hidden shrink-0 mx-auto sm:mx-0">
          {/* <Link to="/aboutMe" className="w-full h-full rounded-full overflow-hidden block">
            <img
              src={ProfileImage}
              alt="Leobert Camoro"
              className="w-full h-full object-cover"
            />
          </Link> */}

          {/* No Link */}
            <img
              src={ProfileImage}
              alt="Leobert Camoro"
              className="w-full h-full object-cover"
            />
        </div>

        {/* Typewriter — wraps on mobile, no overflow */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.35s] text-sm text-[#7A7468] text-center max-w-[120px] sm:whitespace-nowrap sm:max-w-none break-words">
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
      </div>

    </div>
  );
}
export default Hero;
