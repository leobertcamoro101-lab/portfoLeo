import { Link } from "react-router-dom";
import Button from "../Button";
import LinkButton from "../LinkButton";
import TypewriterText from "../TypewriterText";
import ProfileImage from "../../assets/profile.jpg";

function Hero() {
  return (
    <div className="max-w-[860px] mx-auto px-10 pt-20 pb-16 grid grid-cols-[1fr_auto] gap-8 items-start">
      {/* Left content */}
      <div className="max-w-[540px]">
        {/* Badge */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.05s] inline-flex items-center gap-1.5 text-xs font-medium text-[#2A7A4B] bg-[#E4F2EB] border border-[#BBE3CE] rounded-full px-3 py-1 mb-6">
          <span className="w-[7px] h-[7px] bg-[#2A7A4B] rounded-full inline-block" />
          Open to work
        </div>

        {/* Heading */}
        <h1 className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.12s] font-serif text-[clamp(32px,5vw,48px)] leading-[1.1] tracking-[-0.02em] text-[#1A1814] mb-4">
          Hi, I'm <em className="text-[#7A7468] italic ">Leobert Camoro</em> —
          <br />a React.JS developer.
        </h1>

        {/* Bio */}
        <p className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.19s] text-base text-[#7A7468] leading-[1.75] mb-3">
          I’m an AI‑assisted, beginner developer who crafts, accessible, and
          visually refined web experiences. With a deep commitment to clean code
          and intuitive UI, I focus on building solutions that genuinely make
          people’s lives easier.
        </p>

        {/* Location */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.24s] flex items-center gap-1.5 text-sm text-[#7A7468] mb-8">
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
          Cebu City, Philippines
        </div>

        {/* Actions */}
        {/* <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.30s] flex flex-wrap gap-3">
          <Button href="#contact" variant="primary">Get in touch ↗</Button>
          <Button href="#projects">View my work</Button>
          <Button href="#aboutMe">AboutMe</Button>
        </div> */}

        {/* react router dom v2*/}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.30s] flex flex-wrap gap-3">
          <Button href="#contact" variant="primary">Get in touch ↗</Button>
          <Button href="#projects">View my work</Button>
          <LinkButton to="/aboutMe">AboutMe</LinkButton>
        </div>

        {/* react router dom v1*/}
        {/* <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.30s] flex flex-wrap gap-3">
          <LinkButton to="/contact" variant="primary">Get in touch ↗</LinkButton>
          <LinkButton to="/projects" >View my work</LinkButton>
          <LinkButton to="/aboutMe">AboutMe</LinkButton>
        </div> */}

      </div>

      {/* Right column — Avatar + Typewriter */}
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.1s] w-[100px] h-[100px] rounded-full bg-[#E8EDFB] border-2 border-[#D9D4C9] flex items-center justify-center font-serif text-[28px] text-[#2D5BE3] shrink-0">
          {/* <img
            src="/src/assets/anime-developer-circle.png"
            alt="Leobert Camoro"
            className="w-full h-full object-cover"
          /> */}

          {/* react router dom v2 and v1*/}
          <Link to="/aboutMe">
          <img
            src={ProfileImage}
            alt="Leobert Camoro"
            className="w-full h-full object-cover"
          />
          </Link>

        </div>
        {/* Typewriter text — directly under the image */}
        <div className="animate-[fadeUp_0.5s_ease_both] [animation-delay:0.35s] text-sm text-[#7A7468] text-center whitespace-nowrap">
          
          {" "}
          <TypewriterText
            words={[
              "Udemy React Course Experience",
              "React",
              "react-hook-form",
              "redux",
              "redux-toolkit",
              "react-router-dom",
              "react tanstrack/react-query",
              "framer-motion",
              "react-icons",
              "Tailwind CSS",
              "Next.js",
              "TypeScript",
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
// not-italic
