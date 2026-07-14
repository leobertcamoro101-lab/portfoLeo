const TYPE_CONFIG = {
  personal: {
    label: "Personal",
    className: "bg-[#E8EDFB] text-[#2D5BE3] border-[#C5D4F5]",
    icon: "👤",
  },
  udemy: {
    label: "Udemy Course",
    className: "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]",
    icon: "🎓",
  },
  github: {
    label: "GitHub",
    className: "bg-[#EDEAE3] text-[#1A1814] border-[#D9D4C9]",
    icon: "🐙",
  },
};

function ProjectTypeBadge({ type }) {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.personal;

  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-[3px] rounded-full border ${config.className}`}
    >
      {config.icon} {config.label}
    </span>
  );
}

export default ProjectTypeBadge;