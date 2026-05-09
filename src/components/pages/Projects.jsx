import SectionEyebrow from "../SectionEyebrow";
import { PROJECTS } from "../data";
import ProjectCard from "../ProjectCard";

function Projects() {
  return (
    <section id="projects" className="max-w-[860px] mx-auto px-10 py-14">
      <SectionEyebrow>Projects</SectionEyebrow>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects

// max-w-[860px] 
// max-w-215