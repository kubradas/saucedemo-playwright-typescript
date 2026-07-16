import { test } from "../fixtures/fixtures";
import { SortOption } from "../test-data/sort-options";
import { assertSorted } from "../utils/assert-sorted";

test("Sorts products by price ascending", async ({ inventoryPage }) => {
  await inventoryPage.goto();
  await inventoryPage.sortBy(SortOption.PriceLowHigh);
  const prices = await inventoryPage.getPrices();
  assertSorted(prices, (a, b) => a - b);
});

test("Sorts products by price descending", async ({ inventoryPage }) => {
  await inventoryPage.goto();
  await inventoryPage.sortBy(SortOption.PriceHighLow);
  const prices = await inventoryPage.getPrices();
  assertSorted(prices, (a, b) => b - a);
});

test("Sorts products by name from A to Z", async ({ inventoryPage }) => {
  await inventoryPage.goto();
  await inventoryPage.sortBy(SortOption.NameAZ);
  const names = await inventoryPage.getNames();
  assertSorted(names, (a, b) => a.localeCompare(b));
});
