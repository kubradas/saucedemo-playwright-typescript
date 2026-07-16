export const SortOption = {
  NameAZ: "az",
  NameZA: "za",
  PriceLowHigh: "lohi",
  PriceHighLow: "hilo",
} as const;

export type SortOption = (typeof SortOption)[keyof typeof SortOption];
