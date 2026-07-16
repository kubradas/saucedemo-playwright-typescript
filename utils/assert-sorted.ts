import { expect } from "@playwright/test";

export function assertSorted<T>(
  items: T[],
  compare: (a: T, b: T) => number,
): void {
  const sorted = [...items].sort(compare);
  expect(items).toEqual(sorted);
}
