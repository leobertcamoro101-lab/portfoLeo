import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-center px-8 py-8 text-[13px] text-[#7A7468] dark:text-[#A09890] border-t border-[#D9D4C9] dark:border-[#2A2520]">
      © {new Date().getFullYear()} {t("footer.text")}
    </footer>
  );
}

export default Footer;