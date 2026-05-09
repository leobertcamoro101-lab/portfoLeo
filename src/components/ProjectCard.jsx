function ProjectCard({ project, index }) {
  return (
    <div
      className="animate-[popIn_0.4s_ease_both] bg-white border border-[#D9D4C9] rounded-[14px] p-6 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:-translate-y-[3px] cursor-default"
      style={{ animationDelay: `${0.05 * index}s` }}
    >
      <div className={`w-10 h-10 rounded-[10px] ${project.iconBg} flex items-center justify-center text-lg mb-4`}>
        {project.icon}
      </div>
      <h3 className="text-[15px] font-medium text-[#1A1814] mb-1.5">{project.title}</h3>
      <p className="text-[13px] text-[#7A7468] leading-[1.65] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-[3px] rounded-full bg-[#EDEAE3] text-[#7A7468] border border-[#D9D4C9]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;