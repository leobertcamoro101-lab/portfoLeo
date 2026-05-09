import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // let navStyle = "text-sm font-medium text-[#7A7468] no-underline hover:text-[#1A1814] transition-colors duration-150"

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-[#F7F5F0] border-b border-[#D9D4C9] transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      
      {/* <span className="font-serif text-lg text-[#1A1814]">Leobert Camoro</span>
      <ul className="flex gap-8 list-none">
        {["projects", "skills", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-sm font-medium text-[#7A7468] no-underline hover:text-[#1A1814] transition-colors duration-150"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul> */}

      {/* for react router dom v2 */}
      <NavLink to="/">
        <span className="font-serif text-lg text-[#1A1814]">Leobert Camoro</span>
      </NavLink>
      <ul className="flex gap-8 list-none">
        {["projects", "skills", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="text-sm font-medium text-[#7A7468] no-underline hover:text-[#1A1814] transition-colors duration-150"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* for react router dom v1 */}
      {/* <span className="font-serif text-lg text-[#1A1814]"><NavLink> Leobert Camoro</NavLink></span>
      <ul className="flex gap-8 list-none">
          <li className={navStyle}>
            <NavLink to="/projects">
              Projects
            </NavLink>
          </li>
          <li className={navStyle}>
            <NavLink to="/skills">
              Skills
            </NavLink>
          </li>
          <li className={navStyle}>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
        </ul> */}
    </nav>
  );
}

export default Navbar;