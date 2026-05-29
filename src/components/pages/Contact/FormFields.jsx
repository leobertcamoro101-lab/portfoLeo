import InputField from "./InputField";
import { useTranslation } from "react-i18next";

function FormFields({ form, fieldErrors, onChange }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label={t("contact.name")}
          name="from_name"
          value={form.from_name}
          onChange={onChange}
          placeholder={t("contact.namePlaceholder")}
          required
          error={fieldErrors.from_name}
        />
        <InputField
          label={t("contact.emailField")}
          type="email"
          name="from_email"
          value={form.from_email}
          onChange={onChange}
          placeholder={t("contact.emailPlaceholder")}
          required
          error={fieldErrors.from_email}
        />
      </div>

      {/* Subject */}
      <InputField
        label={t("contact.subject")}
        name="subject"
        value={form.subject}
        onChange={onChange}
        placeholder={t("contact.subjectPlaceholder")}
        required
        error={fieldErrors.subject}
      />
    </>
  );
}

export default FormFields;