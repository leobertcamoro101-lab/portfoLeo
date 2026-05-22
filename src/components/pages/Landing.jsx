import Hero from "./Hero";
import Projects from "./Projects";
import ScrollToTopButton from "../ScrollToTopButton";
import Contact from "./Contact";
import Skills from "./Skills";
import Divider from "../UI/Divider";

function Landing() {
  return (
    <>
      <Hero />
      <Divider/>
      <Projects />
      <Divider/>
      <Skills />
      <Divider/>
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default Landing;