import { test, expect } from "../fixtures/fixtures";

test("Adds a product to the cart and updates the badge", async ({
  inventoryPage,
}) => {
  await inventoryPage.goto();
  await inventoryPage.addToCart("sauce-labs-backpack");
  await expect(inventoryPage.cartBadge).toHaveText("1");
});
