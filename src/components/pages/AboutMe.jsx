import ProfileHero from "./aboutMe/ProfileHero"
import Divider from "../UI/Divider";
import WorkExperience from "./aboutMe/WorkExperience";
import Education from "./aboutMe/Education";
import Certificates from "./aboutMe/Certificates";
import ScrollToTopButton from "../ScrollToTopButton";


function AboutMe(){
    return (
    <div className="font-sans bg-[#F7F5F0] dark:bg-[#1A1814] text-[#1A1814] dark:text-[#F7F5F0] min-h-screen">
      <ProfileHero />
      <Divider />
      <WorkExperience />
      <Divider />
      <Education />
      <Divider />
      <Certificates />
      <ScrollToTopButton/>
    </div>
  );
} 
export default AboutMe;