import Hero from "./Hero";
import Projects from "./Projects";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Contact from "./Contact";
import Skills from "./Skills";
import Divider from "../components/UI/Divider";

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