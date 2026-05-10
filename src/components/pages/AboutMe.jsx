import ProfileHero from "./AboutMe/ProfileHero"
import Divider from "../Divider";
import WorkExperience from "./AboutMe/WorkExperience";
import Education from "./AboutMe/Education";
import Certificates from "./AboutMe/Certificates";
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