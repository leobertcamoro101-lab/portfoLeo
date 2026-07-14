import { motion } from "framer-motion";
import { 
  fadeUp, 
  // popIn 
} from "../../utils/animations";
import { useState } from "react";
import Button from "../UI/Button";
import ContactForm from "./Contact/ContactForm";
import { useTranslation } from "react-i18next";
import Modal from "../UI/Modal";

function Contact() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const email = "leobertcamoro101" + "@" + "gmail.com";

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title= "Let's keep in touch."
        footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
      >
        <ContactForm />
      </Modal>
      <section
        id="contact"
        className="max-w-[860px] mx-auto px-5 sm:px-10 py-14"
      >
        {/* ── Top dark CTA box ── */}
        <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-[#1A1814] dark:bg-[#F7F5F0] text-[#F7F5F0] dark:text-[#1A1814] rounded-2xl px-5 sm:px-8 py-10 sm:py-12 text-center mb-4">
          <h2 className="font-serif text-[24px] sm:text-[30px] tracking-[-0.01em] mb-2">
            {t("contact.title")}
          </h2>
          <p className="text-[14px] sm:text-[15px] opacity-60 mb-7">
            {t("contact.subtitle")}
          </p>
          {/* ✅ Phone number — add this above the buttons */}
          <a
            href="tel:+639323020460"
            className="inline-flex items-center gap-2 text-[14px] text-[#F7F5F0] dark:text-[#1A1814] opacity-70 hover:opacity-100 transition-opacity duration-150 mb-5"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +63 932 302 0460
          </a>
          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3">
            {/* <Button href="mailto:leobertcamoro101@gmail.com" variant="white">Email</Button> */}
            <Button href={`mailto:${email}`} variant="white">
              {t("contact.email")}
            </Button>
            <Button
              href="https://github.com/leobertcamoro101-lab"
              variant="ghost"
            >
              GitHub
            </Button>
            <Button
              href="https://www.linkedin.com/in/leobert-camoro-1b811a231/"
              variant="ghost"
            >
              LinkedIn
            </Button>
            <Button onClick={() => setIsOpen(true)} variant="white">
              {t("contact.messageMe")}
            </Button>
          </div>
        </motion.div>

        {/* ── Contact form ── */}
        {/* <motion.div
        variants={popIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        >
        <ContactForm />
        </motion.div> */}
      </section>
    </>
  );
}

export default Contact;
