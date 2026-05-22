import InputField from "./InputField";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ERROR_CATEGORIES, categorizeError } from "../../CategorizedError";

function ContactForm() {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorInfo, setErrorInfo] = useState(null); // Stores error details

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user modifies the form
    if (errorInfo) {
      setErrorInfo(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorInfo(null);

    // Validate required fields
    if (
      !form.from_name.trim() ||
      !form.from_email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setStatus("idle");
      setErrorInfo({
        category: ERROR_CATEGORIES.VALIDATION,
        message: "Please fill in all fields.",
      });
      return;
    }

    try {
      // Check if EmailJS is configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service not configured");
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });

      // Auto-clear success after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      // Log error details for debugging
      console.error("Email Error:", {
        message: error.message,
        status: error.status,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
      });

      const errorData = categorizeError(error);
      setErrorInfo(errorData);
      setStatus("error");
    }
  };
  return (
    <div className="bg-white border border-[#D9D4C9] rounded-2xl px-5 sm:px-8 py-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-6">
        Send a message
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        {/* Error Alert */}
        {errorInfo && (
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
            <div className="flex gap-3">
              <span className="text-2xl">{errorInfo.category.icon}</span>
              <div className="flex-1">
                <p className="font-semibold text-red-900 mb-1">
                  {errorInfo.category.title}
                </p>
                <p className="text-red-700 text-sm mb-2">{errorInfo.message}</p>
                {errorInfo.category.recoverable && (
                  <p className="text-xs text-red-600 italic">
                    💡 Tip: Try checking your connection and submitting again.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            label="Name"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
          <InputField
            label="Email"
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
        </div>

        {/* Subject */}
        <InputField
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
        />

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#7A7468]">
            Message <span className="text-[#2D5BE3]">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
            rows={5}
            className="w-full px-4 py-2.5 text-sm text-[#1A1814] bg-[#F7F5F0] border border-[#D9D4C9] rounded-lg outline-none focus:border-[#2D5BE3] focus:ring-2 focus:ring-[#2D5BE3]/20 transition-all duration-150 placeholder:text-[#C4BFB6] resize-none"
          />
        </div>

        {/* Submit button */}
        <div className="flex items-center gap-4 mt-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className={`inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-150 ${
              status === "loading"
                ? "bg-[#EDEAE3] text-[#7A7468] cursor-not-allowed"
                : "bg-[#1A1814] text-[#F7F5F0] hover:opacity-85 cursor-pointer"
            }`}
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message ↗"
            )}
          </button>

          {/* Success message */}
          {status === "success" && (
            <div className="p-3 bg-green-50 border border-green-300 rounded-lg">
              <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                <span>✓</span> Message sent successfully! We'll get back to you
                soon.
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
