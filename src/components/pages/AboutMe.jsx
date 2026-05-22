import ProfileHero from "./aboutMe/ProfileHero"
import Divider from "../UI/Divider";
import WorkExperience from "./aboutMe/WorkExperience";
import Education from "./aboutMe/Education";
import Certificates from "./aboutMe/Certificates";
import ScrollToTopButton from "../ScrollToTopButton";


function AboutMe(){
    return (
    <div className="font-sans bg-[#F7F5F0] text-[#1A1814] min-h-screen">
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