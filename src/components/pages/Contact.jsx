import Button from "../UI/Button";
import ContactForm from "./Contact/ContactForm";

function Contact() {

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

      {/* ── Contact form ── */}
      <ContactForm />
    </section>
  );
}

export default Contact;

