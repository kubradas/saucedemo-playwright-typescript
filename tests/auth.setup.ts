import { test as setup } from "../fixtures/fixtures";
import { users } from "../test-data/users";

const authFile = ".auth/user.json";

setup("authenticate", async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
  await page.waitForURL(/inventory/);
  await page.context().storageState({ path: authFile });
});
