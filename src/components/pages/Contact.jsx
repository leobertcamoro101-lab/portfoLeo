import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";

// ── Input component ───────────────────────────────────────────────────────────
function InputField({ label, type = "text", name, value, onChange, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#7A7468]">
        {label} {required && <span className="text-[#2D5BE3]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2.5 text-sm text-[#1A1814] bg-[#F7F5F0] border border-[#D9D4C9] rounded-lg outline-none focus:border-[#2D5BE3] focus:ring-2 focus:ring-[#2D5BE3]/20 transition-all duration-150 placeholder:text-[#C4BFB6]"
      />
    </div>
  );
}

// ── Contact component ─────────────────────────────────────────────────────────
function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-[860px] mx-auto px-5 sm:px-10 py-14">

      {/* ── Top dark CTA box ── */}
      <div className="bg-[#1A1814] text-[#F7F5F0] rounded-2xl px-5 sm:px-8 py-10 sm:py-12 text-center mb-4">
        <h2 className="font-serif text-[24px] sm:text-[30px] tracking-[-0.01em] mb-2">
          Let's work together
        </h2>
        <p className="text-[14px] sm:text-[15px] opacity-60 mb-7">
          Open to freelance projects, collaborations, and full-time roles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3">
          <Button href="mailto:leobertcamoro101@gmail.com" variant="white">Email</Button>
          <Button href="https://github.com/leobertcamoro101-lab" variant="ghost">GitHub</Button>
          <Button href="https://www.linkedin.com/in/leobert-camoro-1b811a231/" variant="ghost">LinkedIn</Button>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div className="bg-white border border-[#D9D4C9] rounded-2xl px-5 sm:px-8 py-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#7A7468] mb-6">
          Send a message
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">

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
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Sending...
                </>
              ) : "Send Message ↗"}
            </button>

            {/* Success message */}
            {status === "success" && (
              <p className="text-sm text-[#2A7A4B] font-medium flex items-center gap-1.5">
                <span>✓</span> Message sent successfully!
              </p>
            )}

            {/* Error message */}
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium flex items-center gap-1.5">
                <span>✕</span> Something went wrong. Try again.
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
}

export default Contact;

