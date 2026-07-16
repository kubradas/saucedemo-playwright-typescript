import { expect } from "@playwright/test";

export function assertSorted<T>(
  items: T[],
  compare: (a: T, b: T) => number,
): void {
  expect(
    items.length,
    "assertSorted received an empty list — nothing was verified",
  ).toBeGreaterThan(0);
  const sorted = [...items].sort(compare);
  expect(items).toEqual(sorted);
}
