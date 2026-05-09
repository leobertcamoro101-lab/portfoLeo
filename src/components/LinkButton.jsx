import { Link } from "react-router-dom";

function LinkButton({ to, variant = "default", children }) {
  const variantClasses = {
    default: "bg-[#F7F5F0] text-[#1A1814] border border-[#D9D4C9] hover:bg-[#EDEAE3]",
    primary: "bg-[#1A1814] text-[#F7F5F0] border border-transparent hover:opacity-85",
    white:   "bg-white text-[#1A1814] border border-transparent hover:bg-gray-100",
    ghost:   "bg-white/10 text-white border border-white/15 hover:bg-white/20",
  };

  return (
    <Link
      to={to}
      target={to?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`inline-flex items-center gap-1.5 font-sans text-sm font-medium px-[22px] py-[10px] rounded-lg no-underline cursor-pointer transition-all duration-150 ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
// px-[22px] py-[10px]
// px-5.5