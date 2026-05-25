import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutMe = location.pathname === "/aboutMe";
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change with timeout to avoid cascading renders
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      setMenuOpen(false);
    }, 0);
    return () => clearTimeout(timeout);
  }, [location.pathname]);
  
  //   }, 100);
  //   return () => clearTimeout(timeout);
  // }, [location]);
  

  const homeLinks = [
    { id: "projects", label: t("nav.projects") },
    { id: "skills",   label: t("nav.skills") },
    { id: "contact",  label: t("nav.contact") },
  ];

  const aboutLinks = [
    { id: "work-experience",        label: t("nav.workExperience") },
    { id: "educational-background", label: t("nav.education") },
    { id: "certificates",           label: t("nav.certificates") },
  ];

  const navLinks = isAboutMe ? aboutLinks : homeLinks;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-[720px] rounded-2xl border border-[#D9D4C9] bg-[#F7F5F0]/80 dark:bg-[#1A1814]/80 border-[#D9D4C9] dark:border-[#2A2520] backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
        }`}
      >
        {/* ── Top row ── */}
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo or name only */} {/* No Navlink or Link */}
        <span className="font-serif text-lg text-[#1A1814] dark:text-[#F7F5F0]">Leobert Camoro</span> 

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
                  className="text-sm font-medium text-[#7A7468] dark:text-[#A09890] hover:text-[#1A1814] dark:hover:text-[#F7F5F0] hover:bg-[#EDEAE3] dark:hover:bg-[#2A2520] no-underline px-3 py-1.5 rounded-lg hover:bg-[#EDEAE3] hover:text-[#1A1814] transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <NavLink
                to={isAboutMe ? "/" : "/aboutMe"}
                className="text-sm font-medium no-underline px-3 py-1.5 rounded-lg bg-[#1A1814] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#1A1814] hover:opacity-85 transition-all duration-150 ml-2"
              >
                {isAboutMe ? t("nav.back") : t("nav.aboutMe")}
              </NavLink>
            </li>
          </ul>

          {/* Mobile — About Me button + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <NavLink
              to={isAboutMe ? "/" : "/aboutMe"}
              className="text-xs font-medium no-underline px-3 py-1.5 rounded-lg bg-[#1A1814] text-[#F7F5F0] dark:bg-[#F7F5F0] dark:text-[#1A1814] hover:opacity-85 transition-all duration-150"
            >
              {isAboutMe ? t("nav.back") : t("nav.aboutMe")}
            </NavLink>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-[#EDEAE3] transition-all duration-150"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-4 h-[1.5px] bg-[#1A1814] dark:bg-[#F7F5F0] rounded transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-[#1A1814] dark:bg-[#F7F5F0] rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-4 h-[1.5px] bg-[#1A1814] dark:bg-[#F7F5F0] rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
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



