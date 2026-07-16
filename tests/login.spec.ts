import { test, expect } from "../fixtures/fixtures";
import { users } from "../test-data/users";
test.use({ storageState: { cookies: [], origins: [] } });

test("Lands on the inventory page with valid credentials", async ({
  loginPage,
  page,
}) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await expect(page).toHaveURL(/inventory/);
});

test("Shows an error for a locked out user", async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(users.lockedOut.username, users.lockedOut.password);
  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText("locked out");
});
