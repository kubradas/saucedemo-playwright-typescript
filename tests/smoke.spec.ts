import { test, expect } from "@playwright/test";
test.use({ storageState: { cookies: [], origins: [] } });

/**
 * Smoke test: the most basic "is it alive?" check.
 * It does not exercise a scenario: it verifies the setup itself (config,
 * baseURL, browsers) works end to end and the site is reachable.
 *
 * Deliberately imports from @playwright/test rather than our fixtures: it must
 * stay independent of the page objects, so when everything else goes red it can
 * still answer "is the site broken, or is our code?"
 */
test("Opens the SauceDemo login page", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#login-button")).toBeVisible();
  await expect(page).toHaveTitle("Swag Labs");
});
