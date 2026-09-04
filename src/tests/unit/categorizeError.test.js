import { describe, it, expect, vi } from "vitest";
import { categorizeError, ERROR_CATEGORIES } from "../../components/pages/contact/CategorizedError";

describe("categorizeError", () => {

  it("returns UNKNOWN for null error", () => {
    const result = categorizeError(null);
    expect(result.category).toBe(ERROR_CATEGORIES.UNKNOWN);
  });

  it("detects network error by message", () => {
    const result = categorizeError({ message: "Network Error" });
    expect(result.category).toBe(ERROR_CATEGORIES.NETWORK);
  });

  it("detects network error when offline", () => {
    // Mock navigator.onLine
    Object.defineProperty(navigator, "onLine", {
      value: false,
      writable: true,
    });
    const result = categorizeError({ message: "some error" });
    expect(result.category).toBe(ERROR_CATEGORIES.NETWORK);
    Object.defineProperty(navigator, "onLine", { value: true });
  });

  it("detects rate limit error (429)", () => {
    const result = categorizeError({ status: 429 });
    expect(result.category).toBe(ERROR_CATEGORIES.RATE_LIMIT);
  });

  it("detects config error (401)", () => {
    const result = categorizeError({ status: 401 });
    expect(result.category).toBe(ERROR_CATEGORIES.CONFIG);
  });

  it("detects config error (403)", () => {
    const result = categorizeError({ status: 403 });
    expect(result.category).toBe(ERROR_CATEGORIES.CONFIG);
  });

  it("detects service error (500+)", () => {
    const result = categorizeError({ status: 500 });
    expect(result.category).toBe(ERROR_CATEGORIES.SERVICE);
  });

  it("detects validation error (400+)", () => {
    const result = categorizeError({ status: 400 });
    expect(result.category).toBe(ERROR_CATEGORIES.VALIDATION);
  });

  it("returns UNKNOWN for unrecognized error", () => {
    const result = categorizeError({ message: "some weird error" });
    expect(result.category).toBe(ERROR_CATEGORIES.UNKNOWN);
  });

});