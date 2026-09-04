import { describe, it, expect } from "vitest";
import { validateForm } from "../../components/pages/Contact/formValidation";

describe("validateForm", () => {

  it("fails when all fields are empty", () => {
    const result = validateForm({
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    });
    console.log("result:", JSON.stringify(result, null, 2)); // ← add this
    expect(result.valid).toBe(false);
    expect(result.errors.from_name).toBeDefined();
    expect(result.errors.from_email).toBeDefined();
    expect(result.errors.subject).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });

  it("fails with invalid email", () => {
    const result = validateForm({
      from_name: "Leobert",
      from_email: "not-an-email",
      subject: "Hello there",
      message: "This is a valid message that is long enough",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.from_email).toBeDefined();
  });

  it("fails when name is too short", () => {
    const result = validateForm({
      from_name: "L",
      from_email: "test@gmail.com",
      subject: "Hello there",
      message: "This is a valid message that is long enough",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.from_name).toBeDefined();
  });

  it("fails when subject is too short", () => {
    const result = validateForm({
      from_name: "Leobert",
      from_email: "test@gmail.com",
      subject: "Hi",
      message: "This is a valid message that is long enough",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.subject).toBeDefined();
  });

  it("fails when message is too short", () => {
    const result = validateForm({
      from_name: "Leobert",
      from_email: "test@gmail.com",
      subject: "Hello there",
      message: "Short",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it("passes with valid data", () => {
    const result = validateForm({
      from_name: "Leobert Camoro",
      from_email: "leobert@gmail.com",
      subject: "Hello there",
      message: "This is a valid message that is long enough to pass",
    });
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("returns false when formData is undefined", () => {
    const result = validateForm(undefined);
    expect(result.valid).toBe(false);
  });

});