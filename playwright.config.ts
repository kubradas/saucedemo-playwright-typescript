import { defineConfig, devices } from "@playwright/test";

/**
 * SauceDemo test automation project — main Playwright configuration.
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",

  fullyParallel: true,

  // Fail the build if a stray test.only was committed.
  forbidOnly: !!process.env.CI,

  // Retry on CI to survive infrastructure flakiness; never retry locally,
  // where a flaky test should stay visible instead of being masked green.
  retries: process.env.CI ? 2 : 0,

  // Single worker on CI for stability, auto locally for speed.
  workers: process.env.CI ? 1 : undefined,

  reporter: "html",

  use: {
    // Lets tests navigate with page.goto('/') instead of repeating the full URL.
    baseURL: "https://www.saucedemo.com",

    trace: "on-first-retry",
  },

  projects: [
    { name: "setup", testMatch: /.*\.setup\.ts/ },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], storageState: ".auth/user.json" },
      dependencies: ["setup"],
    },
  ],
});
