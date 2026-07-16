import { type Page, type Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly itemNames: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator(".cart_item");
    this.itemNames = page.locator(".inventory_item_name");
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
