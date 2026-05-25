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
  try {
    contactFormSchema.parse(formData);
    return { valid: true, errors: {} };
  } catch (error) {
    const errors = {};
    error.errors.forEach((err) => {
      const path = err.path[0];
      errors[path] = err.message;
    });
    return { valid: false, errors };
  }
};
