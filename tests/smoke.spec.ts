import { test, expect } from "@playwright/test";
test.use({ storageState: { cookies: [], origins: [] } });

/**
 * Smoke test: the most basic "is it alive?" check.
 * It does not exercise a scenario — it verifies the setup itself (config,
 * baseURL, browsers) works end to end and the site is reachable.
 */
test("Opens the SauceDemo login page", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#login-button")).toBeVisible();
  await expect(page).toHaveTitle("Swag Labs");
});
