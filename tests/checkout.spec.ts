import { test, expect } from "../fixtures/fixtures";
import { createCheckoutInfo } from "../test-data/checkout";

test("Completes checkout with two products", async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await inventoryPage.goto();
  await inventoryPage.addToCart("sauce-labs-backpack");
  await inventoryPage.addToCart("sauce-labs-bike-light");
  await expect(inventoryPage.cartBadge).toHaveText("2");
  await inventoryPage.openCart();
  await expect(cartPage.cartItems).toHaveCount(2);
  await cartPage.checkout();
  await checkoutPage.fillInfo(createCheckoutInfo());
  await checkoutPage.continueToOverview();
  await checkoutPage.finish();
  await expect(checkoutPage.thankyouHeader).toContainText("Thank you");
});
