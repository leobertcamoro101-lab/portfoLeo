import { useTranslation } from "react-i18next";

function SubmitButton({ status }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
      {/* Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full sm:w-auto inline-flex justify-center items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-150 ${
          status === "loading"
            ? "bg-[#EDEAE3] dark:bg-[#7A7468] text-[#7A7468] dark:text-[#EDEAE3] cursor-not-allowed"
            : "bg-[#1A1814] dark:bg-[#F7F5F0] text-[#F7F5F0] dark:text-[#1A1814] hover:opacity-85 cursor-pointer"
        }`}
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            {t("contact.sending")}
          </>
        ) : (
          t("contact.send")
        )}
      </button>

      {/* Success message */}
      {status === "success" && (
        <div className="w-full sm:w-auto p-3 bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-600 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-300 font-medium flex items-center justify-center sm:justify-start gap-2">
            <span>✓</span>
            {t("contact.success")}
          </p>
        </div>
      )}
    </div>
  );
}

export default SubmitButton;