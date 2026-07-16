import { type Page, type Locator } from "@playwright/test";
import { type SortOption } from "../test-data/sort-options";

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly sortDropdown: Locator;
  readonly itemPrices: Locator;
  readonly itemNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.itemPrices = page.locator(".inventory_item_price");
    this.itemNames = page.locator(".inventory_item_name");
  }

  async goto() {
    await this.page.goto("/inventory.html");
  }

  async addToCart(itemId: string) {
    await this.page.locator(`[data-test="add-to-cart-${itemId}"]`).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortBy(option: SortOption) {
    await this.sortDropdown.selectOption(option);
  }

  async getPrices(): Promise<number[]> {
    const texts = await this.itemPrices.allTextContents();
    return texts.map((text) => {
      const price = Number(text.replace("$", ""));
      if (Number.isNaN(price)) {
        throw new Error(`Could not parse a price from "${text}"`);
      }
      return price;
    });
  }

  async getNames(): Promise<string[]> {
    return this.itemNames.allTextContents();
  }
}
