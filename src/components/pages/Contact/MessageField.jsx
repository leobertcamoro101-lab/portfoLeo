import { useTranslation } from "react-i18next";

function MessageField({ value, onChange, error }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#7A7468]">
        {t("contact.message")} <span className="text-[#2D5BE3]">*</span>
      </label>
      <textarea
        name="message"
        value={value}
        onChange={onChange}
        placeholder={t("contact.messagePlaceholder")}
        required
        rows={5}
        className={`w-full px-4 py-2.5 text-sm text-[#1A1814] bg-[#F7F5F0] border rounded-lg outline-none focus:ring-2 transition-all duration-150 placeholder:text-[#C4BFB6] resize-none ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-200"
            : "border-[#D9D4C9] dark:border-[#2A2520] focus:border-[#2D5BE3] focus:ring-[#2D5BE3]/20"
        }`}
      />
      {error && (
        <p data-testid="field-error" className="text-xs text-red-600 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default MessageField;
// dark:text-[#1A1814]
// dark:bg-[#1A1814]
// dark:text-[#F7F5F0]