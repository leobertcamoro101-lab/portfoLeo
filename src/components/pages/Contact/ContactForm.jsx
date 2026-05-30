import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { categorizeError, ERROR_CATEGORIES } from "./CategorizedError";
import { validateForm } from "./formValidation";
import FormErrorAlert from "./FormErrorAlert";
import FormFields from "./FormFields";
import MessageField from "./MessageField";
import SubmitButton from "./SubmitButton";

const INITIAL_FORM = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
  honeypot: "",
};

function ContactForm() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorInfo, setErrorInfo] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [lastSubmit, setLastSubmit] = useState(null);
  const COOLDOWN_MS = 60000; // 1 minute

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: null });
    }
    if (errorInfo) setErrorInfo(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Honeypot check
    if (form.honeypot) {
      setStatus("success"); // fake success — bot won't know
      return;
    }

    // ✅ Rate limit check
    if (lastSubmit && Date.now() - lastSubmit < COOLDOWN_MS) {
      const secondsLeft = Math.ceil(
        (COOLDOWN_MS - (Date.now() - lastSubmit)) / 1000,
      );
      setErrorInfo({
        category: ERROR_CATEGORIES.RATE_LIMIT,
        message: `Please wait ${secondsLeft} seconds before sending another message.`,
      });
      return;
    }
    setStatus("loading");
    setErrorInfo(null);
    setFieldErrors({});

    const validation = validateForm(form);
    if (!validation.valid) {
      setStatus("idle");
      setFieldErrors(validation.errors);
      setErrorInfo({
        category: ERROR_CATEGORIES.VALIDATION,
        message: "Please fix the errors below.",
      });
      return;
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Email Error:", {
        message: error.message,
        status: error.status,
        timestamp: new Date().toISOString(),
      });
      setErrorInfo(categorizeError(error));
      setStatus("error");
    }
    // Set last submit time after success
    setLastSubmit(Date.now());
  };

  return (
    <div className="bg-white dark:bg-[#1A1814] border border-[#D9D4C9] dark:border-[#2A2520] rounded-2xl px-5 sm:px-8 py-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-6">
        {t("contact.sendMessage")}
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        {/* Error alert */}
        <FormErrorAlert errorInfo={errorInfo} />

        {/* Name, Email, Subject fields */}
        <FormFields
          form={form}
          fieldErrors={fieldErrors}
          onChange={handleChange}
        />

        {/* Message textarea */}
        <MessageField
          value={form.message}
          onChange={handleChange}
          error={fieldErrors.message}
        />

        <input
          type="text"
          name="honeypot"
          value={form.honeypot || ""}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Submit + success */}
        <SubmitButton status={status} />
      </form>
    </div>
  );
}

export default ContactForm;
