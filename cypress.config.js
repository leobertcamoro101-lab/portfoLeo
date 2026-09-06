import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4173",
    supportFile: false,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000, // ← increase timeout for CI
    pageLoadTimeout: 30000,       // ← increase page load timeout
  },
});