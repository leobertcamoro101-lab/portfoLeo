import { motion } from "framer-motion";
import { popIn } from "../utils/animations";
import ProjectTypeBadge from "./ProjectTypeBadge";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
        transition: { duration: 0.2 },
      }}
      className=" bg-white dark:bg-[#232018] border-[#D9D4C9] dark:border-[#2A2520] border border-[#D9D4C9] rounded-[14px] p-6 cursor-default"
    >
      {/* Top row — icon + type badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-10 h-10 rounded-[10px] ${project.iconBg} flex items-center justify-center text-lg`}
        >
          {project.icon}
        </div>
        <ProjectTypeBadge type={project.type} />
      </div>
      {/* Title */}
      <h3 className="text-[15px] font-medium text-[#1A1814] dark:text-[#F7F5F0] mb-1.5">
        {project.title}
      </h3>
      {/* Description */}
      <p className="text-[13px] text-[#7A7468] dark:text-[#A09890] leading-[1.65] mb-4">
        {project.description}
      </p>
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium px-2.5 py-[3px] rounded-full bg-[#EDEAE3] dark:bg-[#2A2520] text-[#7A7468] dark:text-[#A09890] border-[#D9D4C9] dark:border-[#2A2520] text-[#7A7468] border border-[#D9D4C9]"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Buttons — Live Demo + Source Code */}
      <div className="flex gap-2 mt-2">
        {/* Live Demo */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-[12px] font-medium px-3 py-2 rounded-lg bg-[#1A1814] dark:bg-[#F7F5F0] text-[#F7F5F0] dark:text-[#1A1814] hover:opacity-85 transition-all duration-150 no-underline"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center text-[12px] font-medium px-3 py-2 rounded-lg bg-[#EDEAE3] dark:bg-[#2A2520] text-[#C4BFB6] cursor-not-allowed">
            No Demo
          </span>
        )}

        {/* Source Code */}
        {project.sourceUrl ? (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-[12px] font-medium px-3 py-2 rounded-lg bg-[#F7F5F0] dark:bg-[#2A2520] text-[#1A1814] dark:text-[#F7F5F0] border border-[#D9D4C9] dark:border-[#3A3530] hover:bg-[#EDEAE3] dark:hover:bg-[#3A3530] transition-all duration-150 no-underline"
          >
            {/* GitHub icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source Code
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
