import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en",  label: "English",  flag: "🇺🇸" },
  { code: "ja",  label: "日本語",   flag: "🇯🇵" },
  { code: "fil", label: "Filipino", flag: "🇵🇭" },
];

const THEMES = ["system", "light", "dark"];

function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
    } else {
      // system
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      prefersDark ? root.classList.add("dark") : root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function FloatingMenu() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();
  const menuRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

  const themeIcons = { light: "☀️", dark: "🌙", system: "💻" };

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div ref={menuRef} className="fixed bottom-6 left-6 z-[9999]">

      {/* Dropdown panel */}
      <div
        className={`absolute bottom-14 left-0 w-[220px] bg-[#F7F5F0] dark:bg-[#1A1814] border border-[#D9D4C9] dark:border-[#2A2520] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        {/* Theme section */}
        <div className="px-4 pt-4 pb-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-2.5 flex items-center gap-1.5">
            <span>{themeIcons[theme]}</span>
            {t("floatingMenu.theme")}
          </p>
          <div className="flex gap-1.5">
            {THEMES.map((t_) => (
              <button
                key={t_}
                onClick={() => setTheme(t_)}
                className={`flex-1 text-[11px] font-medium py-1.5 rounded-lg transition-all duration-150 ${
                  theme === t_
                    ? "bg-[#1A1814] dark:bg-[#F7F5F0] text-[#F7F5F0] dark:text-[#1A1814]"
                    : "bg-[#EDEAE3] dark:bg-[#2A2520] text-[#7A7468] hover:text-[#1A1814] dark:hover:text-[#F7F5F0]"
                }`}
              >
                {themeIcons[t_]} {t(`floatingMenu.${t_}`)}
              </button>
            ))}
          </div>
        </div>

        <hr className="border-[#D9D4C9] dark:border-[#2A2520]" />

        {/* Language section */}
        <div className="px-4 py-3">
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-2.5 flex items-center gap-1.5">
            <span>🌐</span>
            {t("floatingMenu.language")}
          </p>
          <div className="flex flex-col gap-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-2.5 w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-150 ${
                  i18n.language === lang.code
                    ? "bg-[#1A1814] dark:bg-[#F7F5F0] text-[#F7F5F0] dark:text-[#1A1814] font-medium"
                    : "text-[#7A7468] hover:bg-[#EDEAE3] dark:hover:bg-[#2A2520] hover:text-[#1A1814] dark:hover:text-[#F7F5F0]"
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                {lang.label}
                {i18n.language === lang.code && (
                  <span className="ml-auto text-[10px]">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F7F5F0] dark:bg-[#1A1814] border border-[#D9D4C9] dark:border-[#2A2520] shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.14)] transition-all duration-200 text-sm font-medium text-[#1A1814] dark:text-[#F7F5F0]"
      >
        <span>{themeIcons[theme]}</span>
        <span className="hidden sm:inline">{currentLang.flag} {currentLang.label}</span>
        <span className="sm:hidden">{currentLang.flag}</span>
        <svg
          width="12" height="12"
          viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}