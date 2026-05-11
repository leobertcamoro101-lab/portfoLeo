import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutMe = location.pathname === "/aboutMe";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change, run but curly red underlined error 
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // inspired idea from typewriter add timeout to prevent error, and it works fine, no more red curly underlined error
  // useEffect(() => {
  //   let timeout;
  //   timeout = setTimeout(() => {
  //     setMenuOpen(false);
  //   }, 100);
  //   return () => clearTimeout(timeout);
  // }, [location]);
  

  const homeLinks = [
    { id: "projects", label: "Projects" },
    { id: "skills",   label: "Skills" },
    { id: "contact",  label: "Contact" },
  ];

  const aboutLinks = [
    { id: "work-experience",        label: "Work Experience" },
    { id: "educational-background", label: "Education" },
    { id: "certificates",           label: "Certificates" },
  ];

  const navLinks = isAboutMe ? aboutLinks : homeLinks;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-[720px] rounded-2xl border border-[#D9D4C9] bg-[#F7F5F0]/80 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
        }`}
      >
        {/* ── Top row ── */}
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo or name only */} {/* No Navlink or Link */}
        <span className="font-serif text-lg text-[#1A1814]">Leobert Camoro</span> 

          {/* v1, with NavLink */}
          {/* <NavLink
            to="/"
            className="font-serif text-[16px] text-[#1A1814] no-underline hover:opacity-70 transition-opacity duration-150 shrink-0"
          >
            Leobert Camoro
          </NavLink> */}

          {/* dynamic name */}
          {/* {isAboutMe ? (
            <NavLink
              to="/"
              className="font-serif text-[16px] text-[#2D5BE3] no-underline hover:opacity-70 transition-opacity duration-150 shrink-0"
            >
              Leobert Camoro
            </NavLink>
          ) : (
            <span className="font-serif text-[16px] text-[#1A1814] shrink-0 cursor-default">
              Leobert Camoro
            </span>
          )} */}

          

          {/* Desktop links — hidden on mobile */}
          
          <ul className="hidden sm:flex gap-1 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-medium text-[#7A7468] no-underline px-3 py-1.5 rounded-lg hover:bg-[#EDEAE3] hover:text-[#1A1814] transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <NavLink
                to={isAboutMe ? "/" : "/aboutMe"}
                className="text-sm font-medium no-underline px-3 py-1.5 rounded-lg bg-[#1A1814] text-[#F7F5F0] hover:opacity-85 transition-all duration-150 ml-2"
              >
                {isAboutMe ? "← Portfolio" : "About Me"}
              </NavLink>
            </li>
          </ul>

          {/* Mobile — About Me button + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <NavLink
              to={isAboutMe ? "/" : "/aboutMe"}
              className="text-xs font-medium no-underline px-3 py-1.5 rounded-lg bg-[#1A1814] text-[#F7F5F0] hover:opacity-85 transition-all duration-150"
            >
              {isAboutMe ? "← Back" : "About Me"}
            </NavLink>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-[#EDEAE3] transition-all duration-150"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-4 h-[1.5px] bg-[#1A1814] rounded transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-[#1A1814] rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-[#1A1814] rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* ── Mobile dropdown menu ── */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-60 pb-3" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col list-none px-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-[#7A7468] no-underline px-3 py-2 rounded-lg hover:bg-[#EDEAE3] hover:text-[#1A1814] transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;



