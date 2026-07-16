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
  await expect(cartPage.itemNames).toHaveText([
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
  ]);
  await cartPage.checkout();
  await checkoutPage.fillInfo(createCheckoutInfo());
  await checkoutPage.continueToOverview();
  await checkoutPage.finish();
  await expect(checkoutPage.thankyouHeader).toContainText("Thank you");
});

test("Shows an error when the postal code is missing", async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await inventoryPage.goto();
  await inventoryPage.addToCart("sauce-labs-backpack");
  await inventoryPage.openCart();
  await cartPage.checkout();
  await checkoutPage.fillInfo(createCheckoutInfo({ postalCode: "" }));
  await checkoutPage.continueToOverview();
  await expect(checkoutPage.errorMessage).toContainText(
    "Postal Code is required",
  );
});
