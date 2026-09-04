import { z } from "zod";

export const contactFormSchema = z.object({
  from_name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),

  from_email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),

  subject: z
    .string()
    .min(1, "Subject is required")
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export const validateForm = (formData) => {
  // Guard — make sure formData exists
  if (!formData || typeof formData !== "object") {
    return {
      valid: false,
      errors: { general: "Form data is missing." },
    };
  }

  // ✅ Use safeParse instead of parse — no try/catch needed
  const result = contactFormSchema.safeParse(formData);

  if (result.success) {
    return { valid: true, errors: {} };
  }

  // ✅ Extract field errors from Zod's formatted errors
  const errors = {};
  result.error.issues.forEach((issue) => {
    const path = issue.path[0];
    if (path && !errors[path]) {
      errors[path] = issue.message;
    }
  });

  return { valid: false, errors };
};