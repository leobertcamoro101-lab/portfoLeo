function Button({ onClick, href, variant = "default", size = "default", children }) {
  const variantClasses = {
    default: "bg-[#F7F5F0] text-[#1A1814] dark:bg-[#1A1814] dark:text-[#F7F5F0] border border-[#D9D4C9] hover:bg-[#EDEAE3] dark:hover:bg-[#2A2520]",
    primary: "bg-[#1A1814] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#1A1814] border border-transparent hover:opacity-85 dark:hover:opacity-85",
    white:   "bg-white text-[#1A1814] dark:bg-[#1A1814] dark:text-white border border-transparent hover:bg-gray-100 dark:hover:bg-gray-700",
    ghost:   "bg-white/10 text-white dark:bg-black/10 dark:text-black/90 border border-white/15 hover:bg-white/20 dark:hover:bg-black/30",
  };

  const sizeClasses = {
    default: "px-[22px] py-[10px]",
    icon: "p-[11px]",
  };

  return (
    <a
      onClick={onClick}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 font-sans text-sm font-medium rounded-lg no-underline cursor-pointer transition-all duration-150 ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;
